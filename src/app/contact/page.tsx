import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="pt-[6.1rem]">
      <div className="relative h-[43rem]">
        <Image src="/image/women2.jpg" alt="contact" fill className="object-cover"/>
        <div className="absolute start ">
            <div className='flex flex-col text-center text-[1.5rem] pt-[1.5rem]'>
            <h1>contact us</h1>
            <h3>tttttttttttttttttttttttttttt</h3>
            <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            </div>
            <div className="flex flex-row gap-10 justify-center text-center bg-white/25 text-white rounded-xl">
                <div>ADDRESS
                    <p>1234, 1234, 1234</p>
                </div>
                <div>PHONE
                    <p>1234, 1234, 1234</p>
                </div>
                <div>EMAIL
                    <p>1234, 1234, 1234</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
