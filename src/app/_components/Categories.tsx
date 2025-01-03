import Image from 'next/image'

const Categories = () => {
    return (
        <div>
            <div className='flex justify-center font-bold pt-8 text-[1.5rem]'>CATEGORIES</div>
            <div className='flex justify-center font-semibold pt-4  text-[1.2rem]'>These are our Categories</div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-rows-2 gap-3 px-6 md:px-12 pt-5 pb-14'>
                <div className=' col-span-1 row-span-2 relative h-[20rem] md:h-[15rem] lg:h-[25rem] w-100 hover:scale-95'>
                    <Image src='/image/men3.jpg' alt='men' fill className='object-cover rounded-lg '/>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.9rem] p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>GENTS</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-2 hover:scale-95 h-[20rem] md:h-[15rem] lg:h-[25rem]'>
                    <Image src='/image/women4.jpg' alt='women' fill className='object-cover rounded-lg'/>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.9rem] p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>LADIES</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-1 hover:scale-95 h-[20rem] md:h-[15rem] lg:h-auto'>
                    <Image src='/image/kids.jpg' alt='kids' fill className='object-cover rounded-lg'/>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.9rem] p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>KIDS</button>
                    </div>
                </div>  
                <div className='relative col-span-1 row-span-1 hover:scale-95  h-[20rem] md:h-[15rem] lg:h-auto'>
                    <Image src='/image/item.jpg' alt='accessories' fill className='object-cover rounded-lg'/>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.9rem] p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>ACCESSORIES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories