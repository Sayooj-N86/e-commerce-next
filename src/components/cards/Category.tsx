import Image,{ StaticImageData } from 'next/image'
import React from 'react'
type props = {
  image:StaticImageData;
  name:string;
}

const Category = ({image,name}:props) => {
  return (
    <div>
        <div className=''>
            <div className='relative flex justify-center items-center h-[20rem] '>
                <Image src={image} alt='' fill className='object-cover hover:scale-95' />
                <div className='relative'>
                    {name}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category