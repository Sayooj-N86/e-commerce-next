import Image from "next/image";
import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ product: string }>
}) => {
  const singlePrdct = (await params).product;
  // console.log(':::',singlePrdct)
  const productDynamic = await fetch(`https://dummyjson.com/product/${singlePrdct}`) 
  const prdct = await productDynamic.json()
  console.log("::",prdct)
  return (
    <div className="pt-[7.1rem] flex flex-col items-center lg:items-auto lg:flex-row px-10 py-10 ">
          <div className="relative h-[20rem] w-[100%] md:h-[25rem] md:w-[60%] lg:h-[25rem] lg:w-[80%] xl:h-[35rem]  xl:w-[50%] shadow-2xl">
            <Image
              src={prdct.images.at(0)}
              alt="mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className=" flex flex-col justify-center items-center gap-4 lg:px-7 xl:px-10 py-10">
            <div className="font-bold text-[1.5rem]">{prdct.title}</div>
            <div className="font-bold text-[2rem]">$ {prdct.price}</div>
            <div className="font-semibold text-[1.2rem]">{prdct.category}</div>
            <div className="font-semibold text-[1.2rem]">{prdct.rating}</div>
            <div>
              <p className="xl:pr-16 text-black/55 ">
               {prdct.description}
              </p>
            </div>
            <div>
              <button className="bg-blue-500 text-white rounded-2xl p-3">Buy Now</button>
              </div>
          </div>
        
    </div>
  );
};

export default page;
