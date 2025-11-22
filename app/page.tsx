import { MapPin, Users, FileText, MapPinned } from "lucide-react";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sage-400 to-sage-500 py-20">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="map-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Map Pin Icons */}
            <div className="absolute top-10 right-20 animate-bounce">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                PIUS
              </div>
            </div>
            <div className="absolute top-32 right-40 animate-bounce delay-100">
              <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                FREE
              </div>
            </div>
            <div className="absolute top-24 left-96 animate-bounce delay-200">
              <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                ITSA
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Conectando Estudiantes con su Colegio Cercano Ideal
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Simplificando la asignación escolar con tecnología geoespacial inteligente para encontrar la mejor opción para tu hijo, sin esfuerzo.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Encuentra tu Colegio
            </button>
          </div>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pasos Simples hacia tu Colegio Perfecto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma optimiza el proceso de asignación escolar en tres sencillos pasos, garantizando una experiencia justa y transparente para cada familia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                1. Registra tu Perfil
              </h3>
              <p className="text-gray-600">
                Crea una cuenta y proporciona la información necesaria del estudiante, incluyendo dirección y grado.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                2. Localizar y Emparejar
              </h3>
              <p className="text-gray-600">
                Nuestro algoritmo inteligente utiliza datos geoespaciales para encontrar las mejores opciones de colegios más cercanos disponibles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                3. Recibe tu Asignación
              </h3>
              <p className="text-gray-600">
                Recibe notificación del colegio asignado, con todos los detalles de verificación e inscripción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por qué escoger Colegio Cercano?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Emparejamiento Geográfico
              </h3>
              <p className="text-gray-600">
                Nuestros algoritmos avanzados analizan la ubicación de tu hijo con el colegio más adecuado basándose en proximidad y otros factores clave.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Asignaciones Automatizadas
              </h3>
              <p className="text-gray-600">
                Eliminamos los procesos manuales, proporcionando un sistema de asignación justo, eficiente y transparente para todas las familias.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Verificación Visual
              </h3>
              <p className="text-gray-600">
                Nuestra plataforma incluye herramientas visuales para ayudarte a verificar ubicaciones y garantizar resultados de información clara con confianza asegurada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Amado por Padres y Administradores
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-md">
            <p className="text-xl text-gray-700 italic text-center mb-6">
              "Colegio Cercano eliminó todo el estrés de encontrar un colegio para nuestra hija. El proceso fue tan simple y transparente. ¡Estamos increíblemente agradecidos!"
            </p>
            <div className="text-center">
              <p className="font-bold text-gray-800">María F. - Madre de Familia</p>
              <p className="text-gray-600">San José, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}