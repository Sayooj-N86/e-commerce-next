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
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div className="text-[2.5rem] -mt-24 font-bold text-black">CONATCT US</div>
            <div className="text-[1.5rem] text-black">The term was coined and first employed by Robert Jacobson, Principal Consultant to the California State Assembly's Utilities & Commerce Committee, in the title and text of California's Electronic Commerce Act</div>
          </div>
          <div className="absolute inset-72 mt-24 px-5 py-14 flex flex-row justify-center items-center text-center tex gap-5  text-black bg-white/70 rounded-xl ">
              <div className="relative h-5 w-5"> <Image src='/svg/location.svg' alt="address" fill/></div>
              <div>
                  <div>ADDRESS</div>
                  <div>1908, 19TH Floor, Prism Tower,Business Bay</div>
              </div>
              <div className="relative h-5 w-5"><Image src='/svg/call.svg' alt='call' fill /></div>
              <div>
                <div>CALL</div>
                <div>+971 5373890</div>
              </div>
              <div className="relative h-5 w-5"><Image src='/svg/mail.svg' alt='email' fill /></div>
              <div>
                <div>EMAIL</div>
                <div>Thaniya@gmail.com</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
