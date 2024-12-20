import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardSeries() {
    return (
        <Link href={'/series'}>
            <main className='w-28 h-40 relative mt-4'>

                <div className='grid place-content-center w-full h-full bg-slate-900'>
                    <Image className='h-36' src='/home/placeholder.png' width={600} height={600} alt='image' priority as='image'/>
                </div>

                <h2 className='absolute left-4 top-16 text-white font-semibold text-3xl'>Series</h2>

                <h5 className=' mt-1 text-xs'>Popular Series</h5>
                
            </main>
        </Link>
    )
}
