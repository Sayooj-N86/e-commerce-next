import Image from 'next/image'
import React from 'react'
import img1 from '@public/image/products.jpg'
import img2 from '@public/image/products.jpg'
import img3 from '@public/image/products.jpg'
import img4 from '@public/image/products.jpg'
import img5 from '@public/image/products.jpg'
import img6 from '@public/image/products.jpg'
import Featured from '@/components/cards/Featured'

const products = [
    {
        img : img1,
        title: "Product 1",
        heading: "Graphic Design",
        price: 300        
    },
    {
        img : img2,
        title: "Product 2",
        heading: "Web Development",
        price:599
    },
    {
        img : img3,
        title: "Product 3",
        heading: "Digital Marketing",
        price: 900
    },
    {
        img : img4,
        title: "Product 4",
        heading: "UI/UX Design",
        price: 200     
    },
    {
        img : img5,
        title: "Product 5",
        heading: "Data Science",
        price: 333            
    },
    {
        img : img6,
        title: "Product 6",
        heading: "Cyber Security",
        price:600      
    },
    {
        img : img6,
        title: "Product 6",
        heading: "Cyber Security",
        price:600      
    }
 
]

const Featureproducts = () => {
    return (
        <div>
            <div className='text-center'>Featured Products</div>
            <div className='text-center'>product deatails and prices</div>
            <div className='grid grid-cols-4  gap-3 pb-4 px-10'>
                {products.map((item,index) => <Featured  key={index} img={item.img} title={item.title} heading={item.heading} price={item.price} />)}
            </div>
        </div>
    )
}t

export default Featureproducts