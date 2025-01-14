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
    <div className="pt-[6.1rem] flex flex-row px-10 py-10 ">
          <div className="relative h-[30rem] w-[40%]">
            <Image
              src={prdct.images.at(0)}
              alt="mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className="">
            <div>{prdct.title}</div>
            <div>{prdct.Price}</div>
            <div>{prdct.category}</div>
            <div>{prdct.rating}</div>
            <div>
              <p>
               {prdct.description}
              </p>
            </div>
            <div>
              <button className="bg-blue-500 text-white">Buy Now</button>
              </div>
          </div>
        
    </div>
  );
};

export default page;
