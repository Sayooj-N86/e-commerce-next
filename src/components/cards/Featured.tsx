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
          <Image src={img} alt="p1" fill className="object-cover" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold">{title}</h1>
          <h3>{heading}</h3>
          <p className="italic font-serif">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
