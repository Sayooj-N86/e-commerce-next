import React from "react";
import Image from "next/image";
import img1 from "@public/image/men3.jpg";
import Featured from "@/components/cards/Featured";
import Filter from "./_components/Filter";

const products = [
  {
    id: "0",
    img: img1,
    title: "shirts",
    heading: "",
    price: 20.0,
  },
  {
    id: "1",
    img: img1,
    title: "pants",
    heading: "",
    price: 20.0,
  },
  {
    id: "2",
    img: img1,
    title: "jeans",
    heading: "",
    price: 20.0,
  },
  {
    id: "3",
    img: img1,
    title: "tshirts",
    heading: "",
    price: 20.0,
  },
  {
    id: "4",
    img: img1,
    title: "sssss",
    heading: "",
    price: 20.0,
  },
  {
    id: "5",
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.0,
  },
  {
    id: "6",
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20,
  },
  {
    id: "7",
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20,
  },
  {
    id: "8",
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20,
  },
];

const page = async ({
  params,
}: {
  params: Promise<{ products: string }>
}) => {
  const par = (await params).products;
  console.log(":::p",par)
  const dyn = await fetch(`https://dummyjson.com/products/category/${par}`);
  const catdyn = await dyn.json();
  // console.log("resp::", catdyn.products.at(0).images);

  return (
    <div className="pt-[6.1rem] ">
      <div className="text-center text-[1rem] md:text-[2rem] font-semibold md:font-bold pt-4">
        Products
      </div>
      <div className="flex justify-between items-center pt-4 px-16">
        <h1 className="text-black/55">products</h1>
       <Filter/>
        </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 md:p-14">
        {catdyn.products.map((item: any, i: any) => (
          <Featured
            key={i}
            id={item.id}
            img={item.images.at(0)}
            title={item.title}
            // heading={item.heading}
            price={item.price}
           
          />
        ))}
      </div>
    </div>
  );
};

export default page;
