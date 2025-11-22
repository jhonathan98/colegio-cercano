"use client";

import { useEffect, useState } from "react";
import { Search, Bell } from "lucide-react";
import { createClient } from "@/src/lib/supabase/client";
import AdminSidebar from "@/src/components/admin/AdminSidebar";
import StatsCard from "@/src/components/admin/StatsCard";
import GeospatialMap from "@/src/components/admin/GeospatialMap";
import RecentActivity from "@/src/components/admin/RecentActivity";
import { DashboardStats } from "./actions";

export default function AdminDashboard() {
  const supabase = createClient();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Estados para datos (actualmente con valores estáticos, preparados para Supabase)
  const [stats, setStats] = useState<DashboardStats>({
    totalSchools: 1204,
    totalStudents: 15789,
    pendingApplications: 86,
    assignedStudents: 4312,
    schoolsChange: "+5.2%",
    studentsChange: "+8.1%",
    applicationsChange: "+12 esta semana",
    assignedChange: "+15.7%",
  });

  // Obtener usuario logueado
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserEmail(session.user.email || null);
      }
    };
    getUser();
  }, [supabase]);

  // TODO: Descomentar cuando se implementen las funciones en actions.ts
  // useEffect(() => {
  //   const loadStats = async () => {
  //     const data = await fetchDashboardStats();
  //     setStats(data);
  //   };
  //   loadStats();
  // }, []);

  // Función para manejar búsqueda
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar con searchSchoolsAndStudents de actions.ts
    console.log("Buscando:", searchQuery);
  };

  // Función para manejar notificaciones
  const handleNotifications = () => {
    // TODO: Implementar con fetchNotifications de actions.ts
    console.log("Abriendo notificaciones");
  };

  // Función para ejecutar nueva asignación  
  const handleRunAssignment = () => {
    // TODO: Implementar con runNewAssignment de actions.ts
    console.log("Ejecutando nueva asignación");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar colegios, estudiantes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            {/* Right Side - Notifications & Avatar */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNotifications}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Notificaciones"
              >
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {userEmail ? userEmail[0].toUpperCase() : "A"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              ¡Bienvenido de nuevo{userEmail ? `, ${userEmail}` : ", Admin"}!
            </h1>
            <p className="text-gray-600">Aquí tienes un resumen rápido de la actividad de la plataforma.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total de Colegios Registrados"
              value={stats.totalSchools}
              change={stats.schoolsChange}
              changeType="positive"
            />
            <StatsCard
              title="Total de Perfiles de Estudiantes"
              value={stats.totalStudents}
              change={stats.studentsChange}
              changeType="positive"
            />
            <StatsCard
              title="Solicitudes Pendientes"
              value={stats.pendingApplications}
              change={stats.applicationsChange}
              changeType="negative"
            />
            <StatsCard
              title="Estudiantes Asignados"
              value={stats.assignedStudents}
              change={stats.assignedChange}
              changeType="positive"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Geospatial Distribution */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Distribución Geoespacial</h3>
              <GeospatialMap />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <RecentActivity />
            </div>
          </div>
        </main>

        {/* Floating Action Button */}
        <button
          onClick={handleRunAssignment}
          className="fixed bottom-8 left-72 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Ejecutar Nueva Asignación
        </button>
      </div>
    </div>
  );
}