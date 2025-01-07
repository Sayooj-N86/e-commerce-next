import Image from "next/image";

const Page = () => {
  return (
    <div className="pt-[6.1rem]">
      <div className="relative h-[43rem] flex items-center ">
        <Image
          src="/image/women2.jpg"
          alt="contact" 
          fill
          className="object-cover"
        />
        <div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center  pt-7 lg:pt-0 lg:pb-28  xl:pb-5">
            <div className="text-[2.5rem] -mt-24 font-bold text-black">CONTACT US</div>
            <div className="text-[1rem] lg:text-[1.5rem] text-black md:w-[75%] xl:w-[50%]">The term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act</div>
          </div>
          <div className="absolute flex flex-col justify-center items-center  lg:inset-56  xl:inset-72  lg:flex-row  mt-24 start-6 md:start-52  md:px-2 md:py-5 lg:py-14  text-center  gap-8  xl:gap-14  text-black bg-white/70 rounded-xl ">
              <div className="flex items-center md:gap-3">
                <div className="relative  h-6 w-6"> <Image src='/svg/location.svg' alt="address" fill/></div>
                <div className="text-[0.8rem] md:text-[1rem]">
                    <div>ADDRESS</div>
                    <div>1908, 19TH Floor, Prism Tower,Business Bay</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-6 w-6"><Image src='/svg/call.svg' alt='call' fill /></div>
                <div className="text-[0.8rem] md:text-[1rem]">
                  <div>CALL</div>
                  <div>+971 5373890</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-6 w-6"><Image src='/svg/mail.svg' alt='email' fill /></div>
                <div className="text-[0.8rem] md:text-[1rem]">
                  <div>EMAIL</div>
                  <div>Thaniya@gmail.com</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
