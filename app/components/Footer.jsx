import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='w-full h-full mt-auto bg-slate-950 text-white pb-8'>
            <section className='flex flex-wrap justify-center w-full'>

                <ul className='flex w-10/12 text-xs pt-8 pb-3 gap-2'>
                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Home</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Terms and Conditions</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Privacy Policy</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Collection Statement</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Help</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/#'}>
                        <li className='hover:text-[#0081ff]'>Manage Account</li>
                    </Link>
                </ul>

                <div className='flex w-10/12'>
                    <h6 className=' text-xs'>Copyrigth &copy; 2016 DEMO Streaming All Rights Reserved.</h6>
                </div>


                <div className='flex justify-between w-10/12 h-6 mt-8'>

                    <div className='w-24 flex h-full'>
                        <Link href={'/#'}>
                            <Image className='h-full w-9' src='/home/facebook-white.svg' width={100} height={100} alt='facebook icon' />
                        </Link>

                        <Link href={'/#'}>
                            <Image className='h-full w-9' src='/home/twitter-white.svg' width={100} height={100} alt='facebook icon' />
                        </Link>

                        <Link href={'/#'}>
                            <Image className='h-full w-9' src='/home/instagram-white.svg' width={100} height={100} alt='facebook icon' />
                        </Link>
                    </div>

                    <div className='flex gap-3 h-full'>
                        <Link href={'/#'}>
                            <Image className='h-full' src='/home/app-store.svg' width={100} height={100} alt='facebook icon' />
                        </Link>

                        <Link href={'/#'}>
                            <Image className='h-full' src='/home/play-store.svg' width={100} height={100} alt='facebook icon' />
                        </Link>

                        <Link href={'/#'}>
                            <Image className='h-full' src='/home/windows-store.svg' width={100} height={100} alt='facebook icon' />
                        </Link>
                    </div>

                </div>

            </section>

        </footer>
    )
}
