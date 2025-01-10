import Image from 'next/image'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex items-center justify-between  py-6 px-3 md:px-10 lg:px-16 xl:px-24  bg-white fixed z-[80] inset-x-0 shadow-xl'>
            <div className='font-bold text-[1rem] md:text-[1.3rem] lg:text-[2rem]  text-primary'>E-COMMERCE</div>
            <div className='flex items-center gap-8 md:gap-10 lg:text-[1.2rem]  text-primary font-semibold'>
                <div className='hidden  md:flex gap-12'>
                    <Link href='/'>Home</Link>
                    <Link href='/shop'>Shop</Link>
                    <Link href=''>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <Link href='/login' className='text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]'>Login</Link>
                <div className='relative h-6 w-[0.8rem] md:h-11 md:w-5'>
                    <Image src="/svg/addcart.svg" alt="addcart" fill />
                    <div className='absolute bg-blue-500 rounded-full size-[0.6rem] md:size-4 lg:size-5 flex justify-center items-center left-[0.54rem] md:left-3 text-white'><p className='text-[0.3rem] md:text-[0.5rem] lg:text-[0.7rem]'>0</p>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}


export default Header