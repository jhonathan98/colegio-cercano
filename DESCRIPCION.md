Colegio Cercano es una plataforma web de gestión logística y social diseñada para automatizar la asignación de cupos escolares. El sistema conecta a estudiantes con las instituciones educativas más cercanas a su residencia que cuenten con disponibilidad, utilizando algoritmos geoespaciales (PostGIS) y verificación visual mediante Google Maps.

Roles y Funcionalidades
El sistema maneja 3 roles con permisos estrictos (RLS):

1. Administrador (Admin)
Configuración Global: Gestión de usuarios administrativos.

Gestión de Colegios: Registro de nuevas instituciones (Rector, DANE, Email).

Supervisión: Acceso total a listas de estudiantes y sedes para soporte.

2. Colegio
Gestión de Sedes: Agregar/Editar campus físicos (Sedes) y ubicarlos en el mapa.

Gestión de Capacidad: Definir grados disponibles y cupos máximos por sede.

Visualización: Ver lista de estudiantes asignados a sus sedes.

3. Estudiante
Registro: Datos personales, acudiente y carga de documentos (PDF).

Geolocalización (Core): Verificación visual de su vivienda en el mapa (Arrastrar pin).

Asignación Automática: El sistema le asigna la sede más cercana con cupo disponible.

Resultado: Visualización de la ruta hacia el colegio asignado.

Mapa de Rutas e Interfaces
Ruta,Descripción UI
/,"Landing Page: Descripción del proyecto, Navbar con Login."
/login,Login Unificado: Formulario (Email/Pass). Redirige según rol.

Ruta,Descripción UI
/admin/dashboard,"Bienvenida y métricas rápidas (Total colegios, estudiantes)."
/admin/colegios,"Tabla (CRUD): Listado de colegios. Botón ""Crear Colegio""."
/admin/colegios/crear,"Formulario: Datos del colegio (Nombre, DANE, Rector, Email)."

Ruta,Descripción UI
/colegio/dashboard,Resumen de sedes y cupos totales disponibles.
/colegio/sedes,"Tabla: Listado de sedes. Botón ""Nueva Sede""."
/colegio/sedes/[id],Gestión de Sede: 1. Formulario de datos básicos.2. Mapa interactivo para ajustar ubicación.3. Tabla de Grados/Cupos.
/colegio/estudiantes,Tabla: Lista de alumnos asignados (filtrable por grado/sede).

Ruta,Descripción UI
/estudiante/dashboard,"Panel principal. Si no está asignado, muestra pasos pendientes."
/estudiante/perfil,"Formulario Largo: Datos personales, acudiente, subida de archivos."
/estudiante/ubicacion,"Mapa Interactivo (Crítico):1. Pin inicial en dirección registrada.2. Usuario arrastra pin.3. Botón ""Confirmar Ubicación""."
/estudiante/resultado,Tarjeta de Éxito: Nombre del colegio asignado y Mapa con Ruta (Directions API).