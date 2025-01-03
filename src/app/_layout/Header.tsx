import Image from 'next/image'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-6 px-3 md:px-10 lg:px-24   bg-white fixed z-[80] inset-x-0 shadow-xl'>
            <div className='font-bold text-[0.9rem] md:text-[2rem]  text-primary'>E-COMMERCE</div>
            <div className='flex items-center gap-8 md:gap-12 text-[1.2rem]  text-primary font-semibold'>
                <div className='hidden  md:flex gap-14'>
                    <Link href='/'>Home</Link>
                    <Link href=''>Shop</Link>
                    <Link href=''>Contact</Link>
                </div>
                <Link href='' className='text-[0.8rem] md:text-[1.2rem]'>Login</Link>
                <div className='relative h-6 w-3 md:h-11 md:w-5'>
                    <Image src="/svg/addcart.svg" alt="addcart" fill />
                    <div className='absolute bg-blue-500 rounded-full size-[0.6rem] md:size-5 flex justify-center items-center left-[0.46rem] md:left-3 text-white'><p className='text-[0.3rem] md:text-[0.7rem]'>0</p>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}


export default Header