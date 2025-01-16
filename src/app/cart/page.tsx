import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.9rem] py-10">
      <div className="flex flex-col lg:grid lg:grid-cols-6 px-8 lg:px-5 xl:px-10 gap-5 lg:gap-3 xl:gap-5 pt-5">
        <div className="lg:col-span-4">
          <div className="w-full flex overflow-x-auto ">
            <table className=" border-separate border-spacing-y-4 shrink-0 w-full">
              <thead className="bg-slate-100 shrink-0 w-full">
                <tr className="text-center font-semibold ">
                  <td className="w-32"></td>
                  <td className="py-4">Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center shrink-0">
                  <td className="relative w-32 h-16 md:h-36 ">
                    <Image
                      src="/image/women4.jpg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </td>
                  <td>shirt</td>
                  <td>$100</td>
                  <td>
                    <button>+</button> 2 <button>-</button>
                  </td>
                  <td>$200</td>
                  <td>
                    <button className="text-blue-400">remove</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-5 md:px-10 h-[12rem] md:h-[17rem]">
          <div className="text-center text-[1rem] md:text-[1.8rem] font-bold pb-5 md:pb-8">
            Cart Total
          </div>
          <div className="text-[0.8rem] md:text-[1rem] pb-3 md:pb-5">
            Shopping
          </div>
          <div className="text-[0.8rem] md:text-[1rem] md:pb-3">Total</div>
          <div className="text-center pt-3 md:pt-0 lg:pt-3 xl:pt-0 md:pb-3">
            <Link href="/checkout">
              <button className="text-[0.7rem] md:text-[1rem] border-2 px-3 py-2 md:px-8 md:py-3 lg:px-5 xl:px-8 lg:py-2  xl:py-4 rounded-xl">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
