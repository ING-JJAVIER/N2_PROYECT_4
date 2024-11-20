'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: '',
    });
    const [formFill, setFormFill] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const { correo, contrasena } = formData;
        setFormFill(correo && contrasena);
      }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log('Formulario de login enviado: ',formData);
    };

    return (
        <div className="min-h-screen bg-sky-100 flex justify-center items-center py-12 px-6 sm:px-12 ">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg w-full sm:w-96 bg-opacity-75">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6 ">Inicia sesión</h1>

                <div className="mb-4">
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={formData.contrasena}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <Link href={'/'}>
                        <button
                            type="submit"
                            disabled={!formFill}
                            className={`w-full py-3 ${formFill ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all transform hover:scale-105 active:scale-95`}
                            >
                            Iniciar sesión
                        </button>
                    </Link>
                </div>

                <div className="text-center text-sm text-gray-700 mt-4">
                    <span>¿No tienes cuenta?</span>
                    <Link href={'/registry'} className="text-blue-500 font-semibold m-4 hover:underline hover:font-bold hover:text-md">Registrarse</Link>
                </div>
            </form>
        </div>
    );
}
