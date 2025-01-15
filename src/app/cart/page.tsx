import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.9rem] py-10">
      <div className="grid grid-cols-6 px-10 gap-5">
        <div className="col-span-4">
          <table className="w-full border-separate border-spacing-y-4 ">
            <thead className="bg-slate-100">
              <tr className="text-center">
                <td></td>
                <td className="py-4">Product</td>
                <td>Price</td>
                <td>Quantity</td>   
                <td>Subtotal</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="relative w-32 h-36 ">
                  <Image src="/image/women4.jpg" alt="" fill className="object-cover"/>
                </td>
                <td>shirt</td>
                <td>$100</td>
                <td><button>+</button> 2 <button>-</button></td>
                <td>$200</td>
                <td><button className="text-blue-400">remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-2 bg-gray-100 rounded-2xl p-5 px-10 ">
          <div className="text-center text-[1.8rem] font-bold pb-8">Cart total</div>
          <div className="pb-5 ">Shopping</div>
          <div className="pb-3">Total</div>
          <div className="text-center pb-3"><Link href='/checkout'><button className="border-2 px-8 py-4 rounded-xl">Check out</button></Link></div>
        </div>
      </div>
    </div>
  );
};

export default page;
