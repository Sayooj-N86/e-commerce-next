import React from 'react'
import Category from '../../components/cards/Category'
import image1 from '@public/image/shoe.jpg'
import image2 from '@public/image/shoe.jpg'
import image3 from '@public/image/shoe.jpg'

const product = [
    {
        image : image1,
        name : 'Product 1',
    },
    {
        image : image2,
        name : 'Product 2',
    },
    {
        image : image3,
        name : 'Product 3',
    },
    {
        image : image1,
        name : 'Product 4',
    },
    {
        image : image2,
        name : 'Product 5',
    },
    {
        image : image3,
        name : 'Product 6',
    },
    {
        image : image1,
        name : 'Product 7',
    },
    {
        image : image2,
        name : 'Product 8',
    },
    {
        image : image3,
        name : 'Product 9',
    },
]
const page = () => {
  return (
    <div className="pt-[6.1rem]">
        <div className='text-center font-bold text-[1rem]  md:text-[1.5rem]'>Categories</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-3 pb-10 px-6 md:px-10'>
            {product.map((item,index) => <Category key={index} image={item.image} name={item.name} />)}
        </div>
    </div>
  )
}

export default page