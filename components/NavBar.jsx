import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='w-full'>
      
      <section className='bg-[#0081ff] w-full h-[10%] flex justify-center items-center'>
        <div className='flex justify-between items-center w-10/12 h-full'>

          <h1 className='flex items-center text-white font-semibold text-2xl w-full h-full'>DEMO Streaming</h1>

          <div className='flex justify-end items-center w-8/12 gap-4'>
            <Link href={'/login'}>
              <h4 className='text-white text-xs'>Log in</h4>
            </Link>

            <Link href={'/login'}>
              <button className=' bg-slate-800 text-white h-full w-full text-xs font-semibold p-1 my-1 active:text-[.6rem]' type="button">Start your free trial</button>
            </Link>
          </div>

        </div>

      </section>
      
      <header className='w-full h-10 bg-slate-700 flex justify-center'>
        <h2 className=' text-white w-10/12 h-full flex items-center'>Popular Titles</h2>
      </header>

    </nav>
  )
}

