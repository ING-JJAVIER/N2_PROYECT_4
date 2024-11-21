'use client';
import React from 'react';
import Link from 'next/link';

export default function Terms() {
    return (
        <div className="bg-gradient-to-b from-azure-100 via-white to-azure-50 text-slate-900 min-h-screen py-10 px-4 lg:px-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Términos y Condiciones de Uso</h2>
            <p className="text-gray-700 mb-6 text-right">Última actualización: <span className="font-semibold">10 de Junio de 2023</span></p>
            <section className="space-y-6">
                <p>
                    Bienvenido a <strong>DEMO Streaming</strong>. Al utilizar nuestra plataforma, aceptas los siguientes términos y condiciones de uso.
                    Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar nuestros servicios.
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg">1. Definiciones</h3>
                        <p>
                            <strong>&ldquo;Servicio&ldquo;:</strong> Plataforma de streaming de video proporcionada por DEMO Streaming.<br />
                            <strong>&ldquo;Usuario&ldquo;:</strong> Persona que accede, navega o utiliza el Servicio.<br />
                            <strong>&ldquo;Contenido&ldquo;:</strong> Todo material audiovisual disponible en la plataforma, incluidos películas y series.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">2. Acceso y Uso del Servicio</h3>
                        <p>
                            El acceso al Servicio está limitado a usuarios mayores de 18 años o aquellos que cuenten con el consentimiento de sus padres o tutores legales.<br />
                            El contenido ofrecido es únicamente para uso personal y no comercial.<br />
                            Está prohibido reproducir, distribuir, modificar, extraer, o usar el contenido sin autorización previa por escrito de DEMO Streaming.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">3. Registro de Cuenta</h3>
                        <p>
                            Para acceder al contenido, el usuario deberá crear una cuenta proporcionando información veraz y actualizada.<br />
                            Es responsabilidad del usuario mantener la confidencialidad de su contraseña y credenciales de acceso.<br />
                            DEMO Streaming no se responsabiliza por el uso no autorizado de tu cuenta.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">4. Planes y Pagos</h3>
                        <p>
                            El servicio se ofrece bajo un modelo de suscripción con planes detallados en la página de precios.<br />
                            Los pagos son recurrentes y se realizarán automáticamente según la frecuencia elegida (mensual, anual, etc.).<br />
                            No se realizan reembolsos por períodos de suscripción ya pagados, salvo en los casos exigidos por la ley.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">5. Licencia de Uso</h3>
                        <p>
                            DEMO Streaming otorga al usuario una licencia limitada, no exclusiva e intransferible para acceder y consumir el contenido disponible en la plataforma.<br />
                            Esta licencia no implica la transferencia de derechos sobre el contenido ni de la tecnología asociada.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">6. Restricciones de Uso</h3>
                        <ul className="list-disc pl-5">
                            <li>Usar el servicio para fines ilícitos.</li>
                            <li>Compartir sus credenciales de acceso con terceros.</li>
                            <li>Usar herramientas automatizadas para extraer o descargar contenido.</li>
                            <li>Modificar, copiar, distribuir, o realizar ingeniería inversa de cualquier aspecto del Servicio.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">7. Disponibilidad del Servicio</h3>
                        <p>
                            DEMO Streaming no garantiza la disponibilidad ininterrumpida de la plataforma. Pueden ocurrir interrupciones por mantenimiento, actualizaciones o causas fuera de nuestro control.<br />
                            El contenido disponible puede variar según la región y estar sujeto a cambios sin previo aviso.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">8. Propiedad Intelectual</h3>
                        <p>
                            Todo el contenido y los elementos visuales, textuales y tecnológicos del Servicio son propiedad de DEMO Streaming o de sus licenciantes.<br />
                            Está prohibido cualquier uso del contenido que infrinja los derechos de propiedad intelectual.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">9. Política de Privacidad</h3>
                        <p>
                            El uso de nuestro Servicio también está regulado por nuestra <strong><Link className='hover:underline hover:text-blue-700' href={'/Privacy'}> Política de Privacidad</Link></strong>, donde se detalla cómo recolectamos, usamos y protegemos la información del usuario.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">10. Terminación del Servicio</h3>
                        <p>
                            DEMO Streaming se reserva el derecho de suspender o cancelar la cuenta de un usuario en caso de violación de estos términos, sin previo aviso y sin derecho a reembolso.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">11. Limitación de Responsabilidad</h3>
                        <ul className="list-disc pl-5">
                            <li>Daños derivados del uso o la imposibilidad de usar el Servicio.</li>
                            <li>Errores en la transmisión o interrupciones de la plataforma.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">12. Modificaciones</h3>
                        <p>
                            DEMO Streaming puede actualizar estos términos en cualquier momento. Cualquier cambio será notificado a los usuarios mediante la plataforma o correo electrónico.<br />
                            El uso continuado del Servicio tras dichos cambios constituye aceptación de los mismos.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">13. Legislación Aplicable y Jurisdicción</h3>
                        <p>
                            Estos términos se rigen por las leyes de <strong>México</strong>. Cualquier disputa será resuelta en los tribunales de <strong>Ciudad de México, México</strong>.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">14. Contacto</h3>
                        <p>
                            Si tienes preguntas o inquietudes sobre estos términos, puedes comunicarte con nosotros a través de <strong>contacto@demostreaming.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
