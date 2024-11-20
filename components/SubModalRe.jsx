import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function SubModalRe({ closeSubModal }) {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-indigo-100">
            <div className="bg-[#1f2937] rounded-lg shadow-lg p-6 w-11/12 text-center relative">
                <h3 className="text-lg font-semibold text-indigo-400">
                    Registro exitoso
                </h3>
                <p className="my-4 text-gray-400">
                Te enviaremos tus credenciales por correo electrónico. A partir de este momento, podrás disfrutar de todo el contenido durante un periodo de 7 días. Te notificaremos por correo electrónico cuando tu prueba gratuita esté por finalizar e incluiremos un enlace para que registres tu método de pago y continúes del mejor contenido.
                </p>
                <span className='text-2xl text-green-400 '><strong>¡Bienvenido a la sala VIP!</strong></span>
                <figure className="mt-4 flex justify-center items-center">
                    <Image className='text-green-500' src="/icons/check.svg" alt="check icon" width={40} height={40} as='image' />
                </figure>

                <Link href={'/'}>
                    <button
                        type="button"
                        className="mt-4 text-gray-400 bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg text-lg w-8 h-8 inline-flex justify-center items-center absolute right-4 top-0 active:text-[1.5rem]"
                        onClick={closeSubModal}>
                        &times;
                    </button>
                </Link>
            </div>
        </div>
    )
}
