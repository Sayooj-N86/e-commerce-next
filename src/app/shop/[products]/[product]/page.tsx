import Image from "next/image";
import React from "react";
import Buynow from "../../_components/Buynow";
import { frontendApi } from "@/api/api";
import { storageUrl } from "@/app/utils/Baseurl";

const singleproduct = async (id:string) => {
  const response = await frontendApi.singleproductApi(id);
  return response.data;
}

const page = async ({ params }: { params: Promise<{ product: string }> }) => {
  const id= (await params).product;

  const res = await singleproduct(id);
  console.log(";;;;khjbjhb",res)
const product = res.data
  

  return (
    <div className="pt-[7.1rem] flex flex-col items-center lg:items-auto lg:flex-row px-10 py-10 ">
      <div className="relative h-[15rem] w-[100%] md:h-[25rem] md:w-[60%] lg:h-[25rem] lg:w-[90%] xl:h-[35rem]  xl:w-[70%] shadow-2xl">
        <Image
          src={storageUrl+ product.image}
          alt="mobile"
          fill
          className="object-cover"
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-4 lg:px-7 xl:px-10 py-10">
        <div className="font-bold text-center text-[1.5rem]">{product.name}</div>
        <div className="font-bold text-[2rem]">$ {product.price}</div>
        <div className="font-semibold text-[1.2rem]">{product.category}</div>
        <div className="font-semibold text-[1.2rem]">{product.brand}</div>
        <div>
          <p className="xl:pr-16 text-center text-black/55 ">{product.description}</p>
        </div>
        <Buynow productdy={product}/>
      </div>
    </div>
  );
};

export default page;
