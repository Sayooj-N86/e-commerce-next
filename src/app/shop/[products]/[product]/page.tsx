import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-[6.1rem] flex flex-row px-8">
          <div className="relative h-[30rem] w-[40%]">
            <Image
              src="/image/mobile.jpg"
              alt="mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className="">
            <div>Product Name</div>
            <div>Price</div>
            <div>Brand Nmae</div>
            <div>
              <p>
                Experience unparalleled visual brilliance with the realme P2 Pro’s
                120Hz Curved AMOLED Display. This screen boasts a bright and
                eye-friendly technology, ensuring vibrant colours and deep
                contrasts for an immersive viewing experience.
              </p>
            </div>
          </div>
        
    </div>
  );
};

export default page;
