"use client";
import Image from "next/image";
import { useFetch } from "../hooks/useFetch";
export interface CategoryT {
  id: number;
  name: string;
  image: string;
}
export default function Category() {
  const { data, pending, error } = useFetch<CategoryT>({
    url: "https://api.escuelajs.co/api/v1/categories",
  });
  {
    data?.map((category) => {
      console.log(category.image); // ← check what hostname is actually returned
      return;
    });
  }
  // console.log(categories);
  return (
    <>
      <h1 className="md:text-4xl text-2xl font-bold my-8 md:ml-12 ml-6 text-gray-800">
        Shop by Category
      </h1>
      <div className="md:grid md:grid-cols-8 flex overflow-x-scroll gap-8 md:w-fit w-[90vw] my-6 md:mx-12 mx-6">
        {data?.map((category) => {
          return (
            <div
              key={category.id}
              className="items-center border md:w-30 w-20 border-solid border-gray-400 hover:border-blue-800 hover:shadow-lg ease-in py-4 px-4 md:rounded-2xl rounded-[10px] "
            >
              {/* <Image
                className="w-15 mx-auto rounded-s-sm"
                src={category.image}
                alt={category.name}
                width={20}
                height={20}
              /> */}
              <p className="text-center text-[14px]">{category.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
