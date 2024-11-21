import React from 'react';

export default function CardTitleM({ titleM, urlImageM }) {
 
  return (
    
      <main className='w-28 h-40'>
        <div className='grid place-content-center w-full h-full bg-slate-900'>
          <figure className='h-full w-full'>
            <img 
            className='h-full w-full object-cover'
            src={`${urlImageM}`} 
            width={100}
            height={100}
            alt={`${titleM}`} />
          </figure>
        </div>
        <h5 className='mt-1 text-xs'>{`${titleM}`}</h5>
      </main>
   
  );
}
