import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type Props = {
  id?:string;
  img: string;
  title?: string;
  heading?: string;
  price?: number;
  par?:string
};
const Featured = ({id, img, title, heading, price }: Props) => {
  return (
    <div>
      <Link href={`/shop/product/${id}`}>
        <div className="bg-white p-3 rounded-md shadow-2xl">
          <div className="relative h-[15rem] md:h-[18rem] ">
            <Image src={img} alt="p1" fill className="object-cover hover:scale-105 transition-all duration-300" />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-[0.9rem] lg:text-[1rem]">{title}</h1>
            <h3 className="text-[0.8rem] md:text-[1rem] lg:text-[0.9rem] xl:text-[1rem]">{heading}</h3>
            <p className="italic font-serif ">$ {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
