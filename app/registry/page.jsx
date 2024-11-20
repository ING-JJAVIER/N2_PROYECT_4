'use client';

import Link from 'next/link';
import { useState } from 'react';
import SubModalRe from '@/components/SubModalRe';

export default function Registry() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
    });
    const [subModal, setSubModal] = useState(false);
    const openSubModal = (e) => {
        e.preventDefault();
        setSubModal(true);
    };
    const closeSubModal = () => {
        setSubModal(false);
    };

    const isFormValid =
        formData.nombre.trim() !== '' &&
        formData.correo.trim() !== '' &&
        formData.telefono.trim() !== '';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario de registro enviado:', formData);
    };

    return (
        <div className="min-h-screen bg-blue-400 flex justify-center items-center py-12 px-6 sm:px-12">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 bg-opacity-75"
            >
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Regístrate Ahora
                </h1>

                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                        Correo Electrónico
                    </label>
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
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                        Número Telefónico
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <Link href={'/'}>
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            onClick={openSubModal}
                            className={`w-full py-3 font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormValid
                                ? 'bg-gradient-to-r from-indigo-400 to-teal-500 text-white hover:from-green-500 hover:to-green-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            ¡Inicia tu Prueba Gratis!
                        </button>
                    </Link>
                </div>
            </form>
            {
                subModal &&
<SubModalRe closeSubModal={closeSubModal}/>
            }
        </div>
    );
}
