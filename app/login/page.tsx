import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm"; 

export default async function LoginPage() {
  const supabase = await createClient();

  // Comprueba si ya hay una sesión activa
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // Si el usuario ya está logueado, redirige a la página principal.
    // Otro componente (layout o la página de inicio) se encargará
    // de enviarlo a su dashboard específico.
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Iniciar Sesión en Colegio Cercano
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}