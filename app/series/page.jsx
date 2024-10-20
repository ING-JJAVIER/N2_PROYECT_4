import React from 'react'
import CardTitle from '../../components/CardTitle'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function Series() {
  return (
    <main className='w-full h-full'>
      <NavBar />
      <section className='flex justify-center'>
        <article className='flex flex-wrap w-10/12 mt-5'>
          <CardTitle />
        </article>
      </section>


    </main>
  )
}
