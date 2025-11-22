"use server";

import { createClient } from "@/src/lib/supabase/server";

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export interface DashboardStats {
    totalSchools: number;
    totalStudents: number;
    pendingApplications: number;
    assignedStudents: number;
    schoolsChange: string;
    studentsChange: string;
    applicationsChange: string;
    assignedChange: string;
}

export interface SchoolLocation {
    lat: number;
    lng: number;
    title: string;
}

export interface SearchResult {
    schools: any[];
    students: any[];
}

// ============================================================================
// FUNCIONES DE DATOS
// ============================================================================

/**
 * Obtiene las estadísticas del dashboard desde Supabase
 * TODO: Implementar queries reales a las tablas de Supabase
 */
export async function fetchDashboardStats(): Promise<DashboardStats> {
    const supabase = await createClient();

    // TODO: Implementar queries reales
    // Ejemplo de implementación futura:
    /*
    const { count: schoolsCount } = await supabase
      .from('Colegios')
      .select('*', { count: 'exact', head: true });
    
    const { count: studentsCount } = await supabase
      .from('Estudiantes_Perfil')
      .select('*', { count: 'exact', head: true });
    
    const { count: pendingCount } = await supabase
      .from('Solicitudes')
      .select('*', { count: 'exact', head: true })
      .eq('estado', 'pendiente');
    */

    // Por ahora retornamos datos estáticos
    return {
        totalSchools: 1204,
        totalStudents: 15789,
        pendingApplications: 86,
        assignedStudents: 4312,
        schoolsChange: "+5.2%",
        studentsChange: "+8.1%",
        applicationsChange: "+12 esta semana",
        assignedChange: "+15.7%",
    };
}

/**
 * Busca colegios y estudiantes por término de búsqueda
 * TODO: Implementar búsqueda real en Supabase
 */
export async function searchSchoolsAndStudents(
    query: string
): Promise<SearchResult> {
    const supabase = await createClient();

    // TODO: Implementar búsqueda real
    /*
    const { data: schools } = await supabase
      .from('Colegios')
      .select('*')
      .ilike('nombre', `%${query}%`);
    
    const { data: students } = await supabase
      .from('Estudiantes_Perfil')
      .select('*')
      .or(`nombre.ilike.%${query}%,email.ilike.%${query}%`);
    
    return { schools: schools || [], students: students || [] };
    */

    return { schools: [], students: [] };
}

/**
 * Obtiene las ubicaciones de los colegios para mostrar en el mapa
 * TODO: Implementar query real a Supabase
 */
export async function fetchSchoolLocations(): Promise<SchoolLocation[]> {
    const supabase = await createClient();

    // TODO: Implementar query real
    /*
    const { data: schools } = await supabase
      .from('Colegios')
      .select('nombre, latitud, longitud');
    
    return schools?.map(school => ({
      lat: school.latitud,
      lng: school.longitud,
      title: school.nombre,
    })) || [];
    */

    // Por ahora retornamos ubicaciones de ejemplo en Antioquia
    return [
        { lat: 6.2442, lng: -75.5812, title: "Colegio Central" },
        { lat: 6.2518, lng: -75.5636, title: "Colegio Norte" },
        { lat: 6.2308, lng: -75.5906, title: "Colegio Sur" },
    ];
}

/**
 * Obtiene las notificaciones del administrador
 * TODO: Implementar query real a tabla de notificaciones
 */
export async function fetchNotifications() {
    const supabase = await createClient();

    // TODO: Implementar
    /*
    const { data: notifications } = await supabase
      .from('Notificaciones')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    
    return notifications || [];
    */

    return [];
}

/**
 * Ejecuta un nuevo proceso de asignación de estudiantes
 * TODO: Implementar lógica de asignación
 */
export async function runNewAssignment() {
    const supabase = await createClient();

    // TODO: Implementar lógica de asignación
    /*
    1. Obtener estudiantes sin asignar
    2. Obtener colegios con cupos disponibles
    3. Ejecutar algoritmo de asignación basado en proximidad
    4. Guardar asignaciones en la base de datos
    5. Enviar notificaciones
    */

    return { success: false, message: "No implementado aún" };
}
