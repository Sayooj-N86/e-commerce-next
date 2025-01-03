"use client";
import Navsvg from "@/components/svg/Navsvg";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <Navsvg onClick={() => 
            setOpen(!open)
         } />
      </div>
      {open && (
        <div className="flex fixed inset-0 w-full">
          <div onClick={()=>
            setOpen(!open)
          } className="bg-transparent w-[50%]"></div>
          <div className="bg-blue-300 w-[50%]">

          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
