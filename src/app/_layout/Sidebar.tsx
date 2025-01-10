"use client";
import Navsvg from "@/components/svg/Navsvg";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <Navsvg onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className="flex fixed inset-0 w-full">
          <div onClick={() => setOpen(!open)} className="bg-transparent w-[55%]">
          </div>
          <div className="bg-blue-400 w-[45%]">
          <div className='flex flex-col gap-4 py-10 px-4 text-white font-semibold text-[0.8rem]'>
                    <Link onClick={() => setOpen(!open)} href='/'>Home</Link>
                    <Link onClick={() => setOpen(!open)} href='/shop'>Shop</Link>
                    <Link onClick={() => setOpen(!open)} href=''>About</Link>
                    <Link onClick={() => setOpen(!open)} href='/contact'>Contact</Link>
                </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
