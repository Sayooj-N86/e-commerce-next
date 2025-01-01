import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <div>
            <div className='flex justify-center font-bold pt-5 text-[1.5rem]'>CATEGORIES</div>
            <div className='flex justify-center font-semibold pt-5  text-[1.2rem]'>These are our Categories</div>
            <div className='grid grid-cols-3 gap-4 px-24 pt-5 pb-14 '>
                <div className='relative h-82 w-100 '>
                    <Image src='/image/men3.jpg' alt='men' fill />
                    <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>GENTS</button>
                    </div>
                </div>
                <div className='relative h-82 w-100'>
                    <Image src='/image/women4.jpg' alt='women' fill/>
                    <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>LADIES</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4' >
                    <div  className='relative h-40 w-100'>
                        <Image src='/image/kids.jpg' alt='kids' fill />
                        <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>KIDS</button>
                    </div>
                    </div>
                    <div className='relative h-40 w-100'>
                        <Image src='/image/item.jpg' alt='accessories' fill/>
                        <div className='absolute bg-white text-black font-bold p-3 bottom-4 start-4'>
                        <button>ACCESSORIES</button>
                    </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories