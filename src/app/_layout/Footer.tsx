import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-5  justify-between px-6 py-4 md:px-6 md:py-9 lg:px-16 lg:py-12 xl:px-20 xl:py-14 
             border-t-2 bg-gray-400'>
                <div className='text-[1.5rem] font-bold pt-3 text-white'>E-COMMERCE</div>
                <div>
                    <div className='text-center font-bold pt-2 text-[1.15rem] text-white'>Links</div>
                    <div className='flex gap-8 md:gap-12 lg:gap-16 text-gray-600 font-semibold '>
                        <div>Login</div>
                        <div>Contact</div>
                        <div>Shop</div>
                    </div> 
                </div>
                <div>
                    <div className='text-center font-bold text-[1.12rem] text-white'>Get In Touch</div>
                    <div>
                        <div>
                            <p className=''>Address of the building</p>
                        </div>
                        <div className='flex gap-10'>
                            <div className='relative h-11 w-[1.8rem]'>
                                <Link href='https://www.facebook.com'><Image src="/svg/facebook.svg" alt='facebook' fill /></Link>
                            </div>
                            <div className='relative h-11 w-[2.2rem]'>
                               <Link href='https://www.instagram.com'> <Image src="/svg/instagram.svg" alt='Instagram' fill /></Link>
                            </div>
                            <div className='relative h-11 w-7'>
                                <Link href='https://www.twitter.com'><Image src='/svg/twitter.svg' alt='twitter' fill/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center p-6 font-serif font-semibold'>
            <h1>Crafted By SAYOOJ</h1>
        </div>   
        </div>
    )
}

export default Footer