import Image from 'next/image'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-6 px-3 md:px-24   bg-gray-100 fixed z-[100] inset-x-0 shadow-xl'>
            <div className='font-bold text-[1.3rem] md:text-[2rem]  text-primary'>E-COMMERCE</div>
            <div className='flex items-center gap-8 md:gap-14 text-[1.2rem]  text-primary font-semibold'>
                <div className='hidden  md:flex gap-14'>
                    <Link href='/'>Home</Link>
                    <Link href=''>Shop</Link>
                    <Link href=''>Contact</Link>
                </div>
                <Link href=''>Login</Link>
                <div className='relative h-11 w-5'>
                    <Image src="/svg/addcart.svg" alt="addcart" fill />
                    <div className='absolute bg-blue-500 rounded-full size-5 flex justify-center items-center left-3 text-white'><p className='text-[0.7rem]'>0</p>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}


export default Header