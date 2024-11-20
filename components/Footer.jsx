import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='w-full h-full mt-auto bg-slate-950 text-white pb-8'>
            <section className='flex flex-wrap justify-center w-full'>

                <ul className='flex flex-wrap w-10/12 text-xs pt-8 pb-3 gap-2'>
                    <Link href={'/'}>
                        <li className='hover:text-[#0081ff]'>Home</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/terms'}>
                        <li className='hover:text-[#0081ff]'>Terms and Conditions</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/privacy'}>
                        <li className='hover:text-[#0081ff]'>Privacy Policy</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/help'}>
                        <li className='hover:text-[#0081ff]'>Help</li>
                    </Link>

                    <span>|</span>

                    <Link href={'/faq'}>
                        <li className='hover:text-[#0081ff]'>FAQs</li>
                    </Link>
                </ul>

                <div className='flex w-10/12'>
                    <h6 className=' text-xs'>Copyrigth &copy; 2016 DEMO Streaming All Rights Reserved.</h6>
                </div>


                <div className='flex justify-between w-10/12 h-6 mt-8'>

                    <div className='w-24 flex h-full'>
                        <Link href={'https://www.facebook.com/?locale=es_LA'}>
                            <Image className='h-full w-9' src='/home/facebook-white.svg' width={100} height={100} alt='facebook icon' />
                        </Link>

                        <Link href={'https://x.com/?lang=es'}>
                            <Image className='h-full w-9' src='/home/twitter-white.svg' width={100} height={100} alt='X icon icon' />
                        </Link>

                        <Link href={'https://www.instagram.com'}>
                            <Image className='h-full w-9' src='/home/instagram-white.svg' width={100} height={100} alt='instagram icon icon' />
                        </Link>
                    </div>

                    <div className='flex gap-3 h-full mx-3'>
                        <Link href={'https://www.apple.com/mx/app-store/'}>
                            <Image className='h-full' src='/home/app-store.svg' width={135} height={40} alt='app store' />
                        </Link>

                        <Link href={'/#'}>
                            <Image className='h-full' src='/home/play-store.svg' width={135} height={40} alt='play store' />
                        </Link>

                        <Link href={'https://apps.microsoft.com/home?hl=es-es&gl=ES'}>
                            <Image className='h-full' src='/home/windows-store.svg' width={100} height={100} alt='windows store' />
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}
