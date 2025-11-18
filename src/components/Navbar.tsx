"use client"; // Este componente interactúa con el estado de la sesión, así que es de cliente.

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/src/lib/supabase/client"; // Cliente para el navegador
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname(); // Detecta cambios de ruta
    const supabase = createClient(); // Inicializa el cliente de Supabase
    const [user, setUser] = useState<any>(null); // Estado para el usuario logueado
    const [loading, setLoading] = useState(true); // Estado de carga
    const [mounted, setMounted] = useState(false); // Estado para evitar hydration mismatch

    // Efecto para verificar la sesión del usuario al cargar el componente
    useEffect(() => {
        // ✅ Marcar como montado INMEDIATAMENTE al inicio del useEffect
        setMounted(true);

        const getUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (data?.session) {
                setUser(data.session.user);
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        getUser();

        // Escuchar cambios en la autenticación en tiempo real
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user || null);
                setLoading(false);
            }
        );

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []); // Solo se ejecuta al montar

    // ✅ Detectar cambios de ruta y recargar la sesión
    useEffect(() => {
        if (mounted) {
            const checkSession = async () => {
                const { data } = await supabase.auth.getSession();
                if (data?.session) {
                    setUser(data.session.user);
                } else {
                    setUser(null);
                }
            };
            checkSession();
        }
    }, [pathname, mounted]); // Se ejecuta cada vez que cambia la ruta

    const handleLogout = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setUser(null);
        setLoading(false);
        router.push("/login"); // Redirige al login después de cerrar sesión
    };

    return (
        <nav className="bg-blue-700 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo o Nombre de la App */}
                <Link href="/" className="text-2xl font-bold hover:text-blue-200">
                    Colegio Cercano
                </Link>

                {/* Navegación Derecha */}
                <div className="flex items-center space-x-4">
                    {!mounted || loading ? (
                        <span className="text-gray-300">Cargando...</span>
                    ) : user ? (
                        // Si hay usuario logueado, muestra el email y el botón de cerrar sesión
                        <>
                            <span className="text-sm hidden md:block">
                                Bienvenido, {user.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                disabled={loading}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:opacity-50"
                            >
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        // Si no hay usuario, muestra el botón de iniciar sesión
                        <Link href="/login">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                                Iniciar Sesión
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}