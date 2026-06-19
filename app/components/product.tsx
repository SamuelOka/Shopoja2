"use client";
import { url } from "inspector";
import { useFetch } from "../hooks/useFetch";
import FeedUp from "../annimation/framer";
import Link from "next/link";
import { useRef } from "react";
export interface ProT {
  id: number;
  category: { name: string };
  images: string;
  title: string;
  price: number;
}
function Products() {
  const {
    data: Products,
    pending,
    error,
  } = useFetch<ProT>({ url: "https://api.escuelajs.co/api/v1/products" });
  if (pending)
    return <p className="mt-80 h-[100vh] w-[100%] m-auto">loading .....</p>;
  if (error)
    return <p className=" m-auto w-fit p-4 ">Check your internet connection</p>;

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 ml-5 mt-5">
      {Products?.map((product) => {
        return (
          <Link href={`allProduct/${product.id}`} key={product.id}>
            <FeedUp>
              <div className="md:w-70 w-[90%] relative border border-gray-300 md:h-110 min-h-75 md:mb-12 mb-6 md:rounded-2xl rounded-[10px] hover:shadow-2xl duration-200 ease-in">
                <div className="absolute bg-blue-500 text-white text-[10px] left-1 top-1 px-3 py-1 rounded-2xl">
                  {product.category.name}
                </div>

                <div className="h-[60%] overflow-hidden">
                  <img
                    className="w-[100%] h-[100%] hover:h-[110%] overflow-hidden object-cover md:rounded-t-2xl rounded-t-[10px] duration-200 ease-in "
                    src={
                      product.images?.[0]?.replace(
                        "placeimg.com",
                        "picsum.photos",
                      ) || "https://picsum.photos/640/480"
                    }
                    alt=""
                  />
                </div>

                <p className="mx-4 mt-2 font-semibold text-gray-700">
                  {product.title}
                </p>

                <h1 className="font-bold ml-4 md:text-[18px] text-[16px]">
                  ${product.price}
                </h1>
              </div>
            </FeedUp>
          </Link>
        );
      })}
    </div>
  );
}

export default function FeaturedProduct() {
  return (
    <>
      <div>
        <div className="flex justify-between md:mx-12 mx-6 mt-20 items-center">
          <h1 className="md:text-4xl text-2xl text-left font-bold text-gray-800 ">
            Featured Products
          </h1>{" "}
          <p className="cursor-pointer hover:text-blue-800">View all</p>
        </div>

        <Products />
      </div>
    </>
  );
}
