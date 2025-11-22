import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";
import { GraduationCap } from "lucide-react";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const supabase = await createClient();

  // Comprueba si ya hay una sesión activa
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // Si el usuario ya está logueado, redirige a la página principal.
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        {/* Ícono de Graduación */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Colegio Cercano
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido de vuelta
          </h1>
          <p className="text-sm text-gray-600">
            Inicia sesión para continuar en la plataforma
          </p>
        </div>

        {/* Formulario */}
        <LoginForm />
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          © 2024 Colegio Cercano. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}