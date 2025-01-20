'use client';
import React, { useState } from 'react'

const Filter = () => {
const [open, setOpen] = useState(false);
  return (
    <div className='relative'>
         <button onClick={() => setOpen(!open)} className="bg-slate-600 text-white px-5 py-3 rounded-2xl font-semibold">FILTER</button>
         {
            open && (
                <div className='absolute right-0 w-36 z-50 bg-slate-400 rounded-2xl text-white font-semibold text-center'>
                    <div onClick={() => setOpen(!open)} className=" p-3 ">Sort by Name</div>
                    <div onClick={() => setOpen(!open)} className=" p-3 ">Sort by Prize</div>
                </div>
         )}
    </div>
  )
}

export default Filter