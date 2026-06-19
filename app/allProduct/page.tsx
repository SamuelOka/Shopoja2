"use client";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

import { url } from "inspector";
import { CategoryT } from "../components/catergory";
import { ProT } from "../components/product";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  const { data, error, pending } = useFetch<CategoryT>({
    url: "https://api.escuelajs.co/api/v1/categories",
  });
  const [cate, setCate] = useState<string>("all");

  return (
    <>
      <CategoryFilter categories={data} cate={cate} setCate={setCate} />
      <ProductShop cate={cate} />
    </>
  );
}
function CategoryFilter({
  categories,
  cate,
  setCate,
}: {
  categories: CategoryT[];
  cate: string;
  setCate: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="w-full overflow-x-auto ">
        <div className="md:mt-24 mt-40 md:mb-5 mb-3 flex gap-5 w-full md:mx-10 mx-2">
          <p
            onClick={() => setCate("all")}
            className={
              cate === "all"
                ? "w-fit text-white text-[16px] h-fit py-2 px-4 bg-blue-500 rounded-3xl text-center cursor-pointer"
                : "w-fit text-gray-800 text-[16px] h-fit py-2 px-4 bg-gray-100 rounded-3xl text-center cursor-pointer"
            }
          >
            All
          </p>
          {categories?.map((category) => {
            return (
              <div
                key={category.id}
                className=" w-fit cursor-pointer"
                onClick={() => {
                  return setCate(category.name);
                }}
              >
                <p
                  className={
                    cate === category.name
                      ? "w-fit text-white text-[16px] h-fit py-2 px-4 bg-blue-500 rounded-3xl text-center"
                      : "w-fit text-gray-800 text-[16px] h-fit py-2 px-4 bg-gray-100 rounded-3xl text-center"
                  }
                >
                  {category.name}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
function ProductShop({ cate }: { cate: string }) {
  const { data, pending, error } = useFetch<ProT>({
    url: "https://api.escuelajs.co/api/v1/products",
  });
  let FilteredProducts = data?.filter(
    (productItem) => productItem.category.name === cate,
  );

  if (pending)
    return <p className="mt-80 h-[100vh] w-fit m-auto">Loading ......</p>;
  if (error) return <p>There was an error</p>;
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 ml-5 md:mt-5">
      {cate === "all"
        ? data?.map((product) => {
            return <ProductTemplate proDetails={product} key={product.id} />;
          })
        : FilteredProducts?.map((product) => {
            return <ProductTemplate proDetails={product} key={product.id} />;
          })}
      {}
    </div>
  );
}

export function ProductTemplate({ proDetails }: { proDetails: ProT }) {
  return (
    <Link href={`allProduct/${proDetails.id}`}>
      <div className="md:w-70 w-[90%] h-[10rem] relative border border-gray-300 md:h-110 min-h-75 md:mb-12 mb-6 md:rounded-2xl rounded-[10px] hover:shadow-2xl duration-200 ease-in">
        <div className="absolute bg-blue-500 text-white text-[10px] left-1 top-1 px-3 py-1 rounded-2xl">
          {proDetails.category.name}
        </div>

        <div className="h-[60%] overflow-hidden">
          <img
            className="w-[100%] h-[100%] hover:h-[110%] overflow-hidden object-cover md:rounded-t-2xl rounded-t-[10px] duration-200 ease-in "
            src={
              proDetails.images?.[0]?.replace(
                "placeimg.com",
                "picsum.photos",
              ) || "https://picsum.photos/640/480"
            }
            alt=""
          />
        </div>

        <p className="mx-4 mt-2 font-semibold text-gray-700">
          {proDetails.title}
        </p>

        <h1 className="font-bold ml-4 md:text-[18px] text-[16px]">
          ${proDetails.price}
        </h1>

        <button className="w-[80%] bg-blue-700 rounded-[10px] hover:bg-blue-900 text-white font-semibold px-2 py-2 my-2 mx-6 duration-200 ease-in hidden md:block">
          Add to cart
        </button>
      </div>
    </Link>
  );
}
