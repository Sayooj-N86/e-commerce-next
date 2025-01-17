import React from "react";
import Checkout from "./_components/Checkout";
import Billing from "./_components/Billing";

const page = () => {
  return (
    <div className="pt-[6.1rem] lg:px-5 xl:px-16 ">
      <div className="grid lg:grid-cols-2 gap-5 pt-5 px-4 md:px-24 lg:px-0">
        <div className="xl:px-16 py-5">
      <div className="text-[1.5rem] md:text-[2rem] font-semibold">Billing details</div>
      <Checkout/>
        </div>
        <div className="pb-10 md:pt-10 px-3">
         <Billing/>
        </div>
      </div>
    </div>
  );
};

export default page;
