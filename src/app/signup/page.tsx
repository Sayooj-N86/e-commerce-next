import Image from 'next/image'
import React from 'react'
import Signup from './_components/Signup'

const page = () => {
  return (
    <div className="pt-[6.1rem]">
         <div className="relative h-[43rem]  flex justify-center items-center ">
        <Image
          src="/image/login.jpg"
          alt="login"
          fill
          className="object-cover"
        />
        <Signup />
      </div>
    </div>
  )
}

export default page