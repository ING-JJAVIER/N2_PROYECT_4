import React from 'react'
import CardTitleM from '../../components/CardTitleM'

export default function Movie() {
  return (
    <main className='w-full h-full'>
      <section className='flex justify-center'>
        <article className='flex flex-wrap w-10/12 mt-5'>
          <CardTitleM />
        </article>
      </section>
    </main>
  )
}
