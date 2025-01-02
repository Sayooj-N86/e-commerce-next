import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex justify-between py-6 px-24   bg-gray-100 fixed z-50 inset-x-0 shadow-xl'>
            <div className='font-bold text-[2rem] text-primary'>E-COMMERCE</div>
            <div className='flex items-center gap-12 text-[0.9rem]  text-primary font-semibold'>
                <div>HOME</div>
                <div>SHOP</div>
                <div>CONTACT</div>
                <div>LOGIN</div>
                <div>NEW</div>
                <div className='relative h-11 w-5'>
                    <Image src="/svg/addcart.svg" alt="addcart" fill />
                    <div className='absolute bg-blue-500 rounded-full size-5 flex justify-center items-center left-3 text-white'><p className='text-[0.7rem]'>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header