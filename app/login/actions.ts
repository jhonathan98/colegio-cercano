"use server"; // ¡Esto es una Server Action!

import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Correo y contraseña son requeridos." };
  }

  // 1. Intentar iniciar sesión con Supabase Auth
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Usamos el mensaje de error de Supabase (ej: "Invalid login credentials")
    return { error: error.message };
  }

  if (!user) {
    return { error: "Usuario no encontrado." };
  }

  // 2. Lógica de Redirección basada en Roles
  //    Buscamos el rol del usuario en nuestras tablas RLS-protegidas.
  let redirectTo = "/"; // Destino por defecto

  // 2.1 ¿Es Admin?
  // RLS: Solo un admin puede leer su propia fila en 'admins'.
  const { data: admin, error: adminError } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError) {
    console.error("Error verificando rol de admin:", adminError);
    return { error: adminError.message };
  }

  if (admin) {
    redirectTo = "/admin/dashboard"; // Ir al dashboard de Admin
  } else {
    // 2.2 ¿Es Colegio?
    // RLS: Solo un colegio puede leer su propia fila en 'Colegios'.
    const { data: colegio } = await supabase
      .from("Colegios")
      .select("usuario_id")
      .eq("usuario_id", user.id)
      .single();

    if (colegio) {
      redirectTo = "/colegio/dashboard"; // Ir al dashboard de Colegio
    } else {
      // 2.3 ¿Es Estudiante?
      // RLS: Solo un estudiante puede leer su propia fila.
      const { data: estudiante } = await supabase
        .from("Estudiantes_Perfil")
        .select("usuario_id")
        .eq("usuario_id", user.id)
        .single();

      if (estudiante) {
        redirectTo = "/estudiante/dashboard"; // Ir al dashboard de Estudiante
      } else {
        // Caso raro: Usuario autenticado pero sin perfil.
        // Podríamos redirigir a una página de "completar registro".
        redirectTo = "/completar-perfil";
      }
    }
  }

  // 3. Revalidar y Redirigir
  // Limpia el caché de la ruta y redirige al usuario a su dashboard.
  revalidatePath("/", "layout");
  redirect(redirectTo);

  // Nota: El 'return' de error es para el formulario,
  // el 'redirect' es para un login exitoso.
}