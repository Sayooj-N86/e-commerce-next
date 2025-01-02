import Image from 'next/image'

const Categories = () => {
    return (
        <div>
            <div className='flex justify-center font-bold pt-5 text-[1.5rem]'>CATEGORIES</div>
            <div className='flex justify-center font-semibold pt-5  text-[1.2rem]'>These are our Categories</div>
            <div className='grid grid-cols-3 grid-rows-2 gap-3 px-12 pt-5 pb-14 '>
                <div className=' col-span-1 row-span-2 relative h-[25rem] w-100 '>
                    <Image src='/image/men3.jpg' alt='men' fill className='object-cover'/>
                    <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>GENTS</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-2 '>
                    <Image src='/image/women4.jpg' alt='women' fill className='object-cover'/>
                    <div className='absolute bg-gradient-to-l from-black text-white hover:to-black font-bold p-3 bottom-4 start-4'>
                        <button>LADIES</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-1  '>
                    <Image src='/image/kids.jpg' alt='kids' fill className='object-cover'/>
                    <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>KIDS</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-1  '>
                    <Image src='/image/item.jpg' alt='accessories' fill className='object-cover'/>
                    <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>ACCESSORIES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories