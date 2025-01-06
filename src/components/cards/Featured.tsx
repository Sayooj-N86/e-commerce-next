import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  img: StaticImageData;
  title: string;
  heading: string;
  price: number;
};
const Featured = ({ img, title, heading, price }: Props) => {
  return (
    <div>
      <div className="bg-white p-3 rounded-md shadow-xl">
        <div className="relative h-[18rem] ">
          <Image src={img} alt="p1" fill className="object-cover hover:scale-105" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-[0.9rem] lg:text-[1rem]">{title}</h1>
          <h3 className="text-[0.8rem] lg:text-[1rem]">{heading}</h3>
          <p className="italic font-serif ">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
