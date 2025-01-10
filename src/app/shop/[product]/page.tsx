import React from "react";
import Image from "next/image";
import img1 from "@public/image/earbuds.jpg";
import Featured from "@/components/cards/Featured";

const products = [
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
  },
  {
    img: img1,
    title: "Earbuds",
    heading: "",
    price: 20.00,
    },
    {
        img: img1,
        title: "Earbuds",
        heading: "",
        price: 20.00,
    }
]

const page = () => {
  return (
    <div className="pt-[6.1rem]">
      <div className="text-center text-[1rem] md:text-[2rem] font-semibold md:font-bold pt-4">Mens Products</div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-14 ">
        {products.map((item,i) => <Featured key={i} img={item.img} title={item.title} heading={item.heading} price={item.price} />) }
      </div>
    </div>
  );
};

export default page;
