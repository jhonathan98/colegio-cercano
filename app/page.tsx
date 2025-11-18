// src/app/page.tsx
import { createClient } from "../src/lib/supabase/server"; // ¡Importamos el cliente de SERVIDOR!

export default async function Home() {
  
  // Como este es un Componente de Servidor, podemos hacer esto:
  const supabase = await createClient();
  
  // Vamos a leer la tabla 'Capacidad_Grados_Sede'
  // (Esta es la única tabla que hicimos 100% pública para lectura)
  const { data: capacidad, error } = await supabase
    .from("capacidad_grados_sede")
    .select("*")
    .limit(10); // Traemos solo 10 para probar

  if (error) {
    console.error(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-4">¡Conectado a Supabase!</h1>
      <p className="mb-4">
        Prueba de lectura de la tabla 'Capacidad_Grados_Sede':
      </p>
      
      {/* Mostramos los datos en crudo */}
      <pre className="p-4 bg-gray-100 rounded border border-gray-300 w-full max-w-lg">
        {JSON.stringify(capacidad, null, 2)}
      </pre>

      {error && (
        <pre className="mt-4 p-4 bg-red-100 text-red-700 rounded border border-red-300 w-full max-w-lg">
          Error: {error.message}
        </pre>
      )}
    </main>
  );
}