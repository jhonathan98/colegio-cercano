"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, School, Users, ClipboardList, Settings } from "lucide-react";

const menuItems = [
    { name: "Panel", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Colegios", icon: School, path: "/admin/schools" },
    { name: "Estudiantes", icon: Users, path: "/admin/students" },
    { name: "Asignaciones", icon: ClipboardList, path: "/admin/assignments" },
    { name: "Configuración", icon: Settings, path: "/admin/settings" },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
            {/* Logo y Título */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center">
                        <School className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">Colegio Cercano</h1>
                        <p className="text-xs text-gray-600">Admin Panel</p>
                    </div>
                </div>
            </div>

            {/* Menú de Navegación */}
            <nav className="flex-1 p-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
