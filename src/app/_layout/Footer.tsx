import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <div className='flex justify-between px-20 py-16  border-t-2 bg-gray-200'>
                <div className='text-[1.5rem] font-bold'>E-COMMERCE</div>
                <div>
                    <div className='text-center font-semibold'>Links</div>
                    <div className='flex gap-8'>
                        <div>Login</div>
                        <div>Contact</div>
                        <div>Shop</div>
                    </div>
                </div>
                <div>
                    <div className='text-center font-semibold'>Get In Touch</div>
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
            <div className='text-center py-5'>
            <h1>Crafted By URBANHUB</h1>
        </div>   
        </div>
    )
}

export default Footer