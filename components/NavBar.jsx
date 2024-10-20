import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='w-full'>
      
      <section className='bg-[#0081ff] w-full h-10 flex justify-center items-center'>
        <div className='flex justify-between items-center w-10/12'>

          <h1 className='text-white font-semibold text-2xl'>DEMO Streaming</h1>

          <div className='flex items-center gap-4'>
            <Link href={'/#'}>
              <h4 className='text-white text-xs'>Log in</h4>
            </Link>

            <Link href={'/#'}>
              <button className='bg-slate-800 text-white h-6 w-32 text-xs font-semibold' type="button">Start your free trial</button>
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

