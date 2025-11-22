export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded mr-2"></div>
                            <h3 className="text-xl font-bold">Colegio Cercano</h3>
                        </div>
                        <p className="text-gray-400">
                            Simplificando la logística escolar para un futuro más brillante.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contáctanos</h4>
                        <p className="text-gray-400">contacto@colegiocercano.com</p>
                        <p className="text-gray-400">+1 (234) 567-890</p>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    Política de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    Términos de Servicio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Colegio Cercano. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
