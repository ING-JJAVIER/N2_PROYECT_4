'use client'
import { useState } from 'react';
import SubModal from '@/components/SubModal';

export default function Help() {
  const [formData, setFormData] = useState({
    nombre: '',
    numeroSuscriptor: '',
    descripcion: '',
    medioContacto: '',
  });
  const [subModal, setSubModal] = useState(false);
  const openSubModal = (e) => {
          e.preventDefault();
          setSubModal(true);
      };
      const closeSubModal = () => {
          setSubModal(false);
      };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario de ayuda enviado',formData);
  };

  return (
    <div className="min-h-screen bg-sky-100 flex justify-center items-center py-12 px-6 sm:px-12 ">
      <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg w-full sm:w-96 bg-opacity-75">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6 ">¿Como podemos ayudarte?</h1>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 ">Nombre Completo</label>
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
          <label htmlFor="numeroSuscriptor" className="block text-sm font-medium text-gray-700">Número de Suscriptor</label>
          <input
            type="text"
            id="numeroSuscriptor"
            name="numeroSuscriptor"
            value={formData.numeroSuscriptor}
            onChange={handleChange}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción del Problema</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows="4"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder='Describe tu problema con todos los detalles posibles.'
          />
        </div>

        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700">¿Cómo prefieres ser contactado?</span>
          <div className="flex items-center space-x-4 mt-2">
            <label htmlFor="contactoCorreo" className="flex items-center">
              <input
                type="radio"
                id="contactoCorreo"
                name="medioContacto"
                value="correo"
                onChange={handleChange}
                checked={formData.medioContacto === 'correo'}
                className="text-slate-800"
              />
              <span className="ml-2 text-sm text-gray-700">Correo</span>
            </label>

            <label htmlFor="contactoLlamada" className="flex items-center">
              <input
                type="radio"
                id="contactoLlamada"
                name="medioContacto"
                value="llamada"
                onChange={handleChange}
                checked={formData.medioContacto === 'llamada'}
                className="text-slate-800"
              />
              <span className="ml-2 text-sm text-gray-700">Llamada</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={openSubModal}
          >
            Enviar
          </button>
        </div>
      </form>
      {
                subModal && (
                    <SubModal closeSubModal={closeSubModal} />

                )
            }
    </div>
  );
}
