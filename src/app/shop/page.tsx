import React from "react";
import Category from "../../components/cards/Category";

import { frontendApi } from "@/api/api";
import { storageUrl } from "../utils/Baseurl";

// const product = [
//     {
//         id: '0',
//         image : image1,
//         name : 'MEN',
//     },
//     {
//         id: '1',
//         image : image2,
//         name : 'WOMEN',
//     },
//     {
//         id: '2',
//         image : image3,
//         name : 'KIDS',
//     },
//     {
//         id: '3',
//         image : image1,
//         name : 'SHOES',
//     },
//     {
//         id: '4',
//         image : image2,
//         name : 'HEAD PHONES',
//     },
//     {
//         id: '5',
//         image : image3,
//         name : 'WATCHES',
//     },
//     {
//         id: '6',
//         image : image1,
//         name : 'PERFUMES',
//     },
//     {
//         id: '7',
//         image : image2,
//         name : 'SMART PHONES',
//     },
//     {
//         id: '8',
//         image : image3,
//         name : 'SPORT WEARS',
//     },
// ]
const categorypage = async () => {
  const response = await frontendApi.categorypageApi();
  return response.data;
};

const page = async () => {
  const res = await categorypage();
  const categoryDynamic = res.data;
  console.log("dddddd", res);

  return (
    <div className="pt-[6.1rem]">
      <div className="text-center font-bold text-[1rem]  md:text-[1.5rem] pt-3 pb-2">
        Categories
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-20  pt-3 pb-10 px-12 md:px-24">
        {categoryDynamic.map(
          (
            item: { _id: string; name: string; image: string },
            index: number
          ) => (
            <Category
              key={index}
              id={item._id}
              image={storageUrl + item.image}
              name={item.name}
            />
          )
        )}
      </div>
    </div>
  );
};

export default page;
