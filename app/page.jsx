import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContTitles from '../components/ContTitles'


export default function Home() {
  return (
    <>
 

      <main className='w-full h-screen overflow-hidden'>
        <NavBar />
        <section className='w-full h-3/4'>

          <article className='w-full h-full gap-2'>

           <ContTitles/>

          </article>
          <Footer />
        </section >

       

      </main>
    </>
  )
}
