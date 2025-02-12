import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type props = {
  id:string;
  image:string;
  name:string;
 
}

const Category = ({id,image,name}:props) => {
  return (
    <div>
        <Link className='' href={`/shop/${id}`}>
          <div className='bg-slate-600 rounded-3xl hover:scale-95 transition-all duration-300'>
              <div className='relative flex justify-center items-center h-[12rem]  md:h-[14rem] xl:h-[16rem] '>
                  <Image src={image} alt='' fill className='object-cover hover:scale-95 rounded-3xl' />
                  <div className='relative font-bold text-[1.2rem] md:text-[1.5rem] text-white'>
                      {name}
                  </div>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default Category