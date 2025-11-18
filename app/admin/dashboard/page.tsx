// src/app/admin/dashboard/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../src/lib/supabase/client";

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error cerrando sesión:", error);
      return;
    }
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">¡Bienvenido, Administrador!</h1>
      <p>Has iniciado sesión correctamente.!</p>

      <button
        onClick={handleSignOut}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>
  );
}