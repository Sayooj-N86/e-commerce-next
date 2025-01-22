import React from 'react'
import Category from '../../components/cards/Category'
import image1 from '@public/image/earbuds.jpg'
import image2 from '@public/image/earbuds.jpg'
import image3 from '@public/image/earbuds.jpg'

const product = [
    {
        id: '0',
        image : image1,
        name : 'MEN',
    },
    {
        id: '1',
        image : image2,
        name : 'WOMEN',
    },
    {
        id: '2',
        image : image3,
        name : 'KIDS',
    },
    {
        id: '3',
        image : image1,
        name : 'SHOES',
    },
    {
        id: '4',
        image : image2,
        name : 'HEAD PHONES',
    },
    {   
        id: '5',
        image : image3,
        name : 'WATCHES',
    },
    {
        id: '6',
        image : image1,
        name : 'PERFUMES',
    },
    {
        id: '7',
        image : image2,
        name : 'SMART PHONES',
    },
    {
        id: '8',
        image : image3,
        name : 'SPORT WEARS',
    },
]
const page = async() => {
    const res = await fetch('https://dummyjson.com/products/category-list');
    const categoryDynamic = await res.json()
    console.log("res::",categoryDynamic)
    
  return (
    <div className="pt-[6.1rem]">
        <div className='text-center font-bold text-[1rem]  md:text-[1.5rem] pt-3 pb-2'>Categories</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-20  pt-3 pb-10 px-12 md:px-24'>
            {categoryDynamic.map((item : any,index :any) => <Category key={index} id={item.id} image={item.image} name={item} />)}
        </div>
    </div>
  )
}

export default page