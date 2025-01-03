"use client"
import image1 from '@public/image/home.jpg'
import image3 from '@public/image/men2.jpg'
import image2 from '@public/image/women3.jpg'
import Image from 'next/image'
import { useState } from 'react'
import cn from '../utils/tailwind'


const gallery = [
    {
        image: image1,
        text: {
            subheading: "Let's Shop NOW",
            heading: "Get the best deals on your favorite products",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
        }
    },
    {
        image: image2,
        text: {
            subheading: "SUMMER 2025",
            heading: "50% Off On Women's wear's",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
        }
    },
    {
        image: image3,
        text: {
            subheading: "SUMMER 2025",
            heading: "50% Off On Men's wear's",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
        }
    }
]
const Kerosal = () => {
    const [index, setIndex] = useState(0)

    const totalindex = gallery.length

    const handlePrevious = () => {
        if (index == 0) {
            setIndex(totalindex - 1)
        }
        else {
            setIndex(index - 1)
        }
    }
    const handleNext = () => {
        if (index == totalindex - 1)
            setIndex(0)

        else
            setIndex(index + 1)

    }
    return (
        <div className={cn('relative h-[12rem] md:h-[43rem] flex  items-center w-full',{'justify-center':index==1})}>
            <Image className='object-cover' src={gallery.at(index)!.image} alt="fb" fill />
            <div className='flex justify-between w-full p-5  cursor-pointer absolute z-50 text-[1.8rem]'>
                <button className={cn('bg-gradient-to-r from-white ',{'bg-gradient-to-r from-black':index==2} ,
                    'rounded-s-full pb-2')} onClick={handlePrevious}>{"<"}</button>
                <button className={cn('bg-gradient-to-l from-white hover:scale-100 ',{'bg-gradient-to-l from-black':index==2} ,
                    'rounded-r-full pb-2')} onClick={handleNext}>{">"}</button>
            </div>
            <div className={cn('relative px-14 md:px-24 ',{'text-center':index==1})}>
                <h3 className='text-black text-[0.5rem] md:text-[1.5rem]'>{gallery.at(index)!.text.subheading}</h3>
                <h1 className='text-white text-[0.9rem] md:text-[3rem] font-bold'>{gallery.at(index)!.text.heading}</h1>
                <h1 className='text-white text-[0.5rem] md:text-[1.5rem] font-semibold pb-[0.01rem] md:pb-4'>{gallery.at(index)!.text.description}</h1>
                <button className='bg-black text-yellow-50 p-[0.25rem] md:p-[1.2rem]  rounded-3xl font-semibold text-[0.25rem] md:text-[0.9rem] hover:border'>Shop Now</button>
            </div>
        </div>
    )
}

export default Kerosal