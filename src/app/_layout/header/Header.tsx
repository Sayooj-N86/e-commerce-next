import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'
import Headercart from './Headercart'

const Header = () => {
    return (
        <div className='flex items-center justify-between  py-6 px-3 md:px-10 lg:px-16 xl:px-24  bg-purple-700 fixed z-[80] inset-x-0 shadow-2xl'>
            <Link href='/'><div className='font-bold text-[1rem] md:text-[1.3rem] lg:text-[2rem]  text-white'>E-COMMERCE</div></Link>
            <div className='flex items-center gap-8 md:gap-10 lg:text-[1.2rem]  text-white font-semibold'>
                <div className='hidden  md:flex gap-12'>
                    <Link href='/'>Home</Link>
                    <Link href='/shop'>Shop</Link>
                    <Link href=''>About</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <Link href='/login' className='text-[0.8rem] md:text-[1rem] lg:text-[1.2rem]'>Login</Link>
                <Headercart />
            </div>
            <Sidebar/>
        </div>
    )
}


export default Header