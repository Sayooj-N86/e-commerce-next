
import Image from "next/image";
import Form from "./_components/Form";

const page = () => {
  
  return (
    <div className="pt-[6.1rem]">
      <div className="relative h-[43rem]  flex justify-center items-center ">
        <Image
          src="/image/login.jpg"
          alt="login"
          fill
          className="object-cover"
        />
        <Form />
      </div>
    </div>
  );
};

export default page;
