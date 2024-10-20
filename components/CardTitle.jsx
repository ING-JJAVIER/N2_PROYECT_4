import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CardTitle({ titles, imageUrl }) {
 

  return (
    <Link href={'/#'}>
      <main className='w-28 h-40'>
        <div className='grid place-content-center w-full h-full bg-slate-900'>
          <Image 
            className='h-36' 
            src={imageUrl} 
            width={600} 
            height={600} 
            alt={titles.title} 
            priority 
          />
        </div>
        <h5 className='mt-1 text-xs'>{titles.title}</h5>
      </main>
    </Link>
  );
}
