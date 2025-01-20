"use client";
import useClient from "@/hook/useClient";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Headercart = () => {
  const { totalUniqueItems } = useCart();
  const client = useClient();
  if (!client) {
    return;
  }
  return (
    <div>
      <div className="relative h-6 w-[0.9rem] md:h-11 md:w-5">
        <Link href="/cart">
          <Image src="/svg/addcart.svg" alt="addcart" fill className="" />
        </Link>
        <div className="absolute bg-violet-600-500 rounded-full size-[0.6rem] md:size-4 lg:size-5 flex justify-center items-center left-[0.54rem] md:left-3 text-white">
          <p className="text-[0.3rem] md:text-[0.5rem] lg:text-[0.7rem]">
            {totalUniqueItems}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headercart;
