import { frontendApi } from "@/api/api";
import Featured from "@/components/cards/Featured";
import Filter from "./_components/Filter";
import { storageUrl } from "@/app/utils/Baseurl";

const productpage= async(id:string) =>{
  const response = await frontendApi.productpageApi(id);
  return response.data;
}

const page = async ({
  params,
}: {
  params: Promise<{ products: string }>
}) => {
  const id = (await params).products;
  const res=await productpage(id)
  const products = res.data;
  console.log(":::p",res)
  

  return (
    <div className="pt-[6.1rem] ">
      <div className="text-center text-[1rem] md:text-[2rem] font-semibold md:font-bold pt-4">
        Products
      </div>
      <div className="flex justify-between items-center pt-4 px-16">
        <h1 className="text-black/55">products</h1>
       <Filter/>
        </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 md:p-14">
        {products?.map((item: {_id:string,name:string,price:number,description:string,image:string}, i: number) => (
          <Featured
            key={i}
            id={item._id}
            img={storageUrl+ item.image}
            title={item.name}
            heading={item.description}
            price={item.price}
           
          />
        ))}
      </div>
    </div>
  );
};

export default page;
