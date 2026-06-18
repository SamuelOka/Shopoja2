"use client";

import cartPic from "../assets/whiteCart.svg";
import shipping from "../assets/shipping.svg";
import secure from "../assets/secure.svg";
import returns from "../assets/return.svg";
import { useFetchS } from "../hooks/useFetch";

import { useEffect, useState } from "react";
interface proDE {
  id: number;
  images: string[];
  title: string;
  price: number;
  description: string;
}

export function Details({ proid }: { proid: number }) {
  // const { dispatch } = useCart();
  const [bigImg, setBigImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const {
    data: product,
    pending,
    error,
  } = useFetchS<proDE>({
    url: `https://api.escuelajs.co/api/v1/products/${proid}`,
  });

  useEffect(() => {
    if (product) {
      setBigImg(product?.images[0]);
    }
  }, [product]);
  // function handleAddtoCart() {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: {
  //       id: product.id,
  //       price: product.price,
  //       image: bigImg,
  //       name: product.title,
  //       quantity,
  //     },
  //   });
  // }
  if (!product)
    return <p className="mt-80 h-[100vh] w-fit m-auto">loading ......</p>;
  return (
    <div>
      <div className="hidden md:block">
        <BigDetails
          product={product}
          bigImg={bigImg}
          setBigImg={setBigImg}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="block md:hidden">
        <SmallDetails
          product={product}
          bigImg={bigImg}
          setBigImg={setBigImg}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
}

export function BigDetails({
  product,
  bigImg,
  setBigImg,
  quantity,
  setQuantity,
}: {
  product: proDE;
  bigImg: string;
  setBigImg: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="grid grid-cols-2 mt-28 mx-12 h-fit">
        <div className="col-span-1 ">
          <img
            className="w-[95%] rounded-2xl h-[600px] object-cover"
            src={bigImg ? bigImg : product.images[0]}
            alt=""
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((image) => {
              return (
                <img
                  key={image}
                  onClick={() => setBigImg(image)}
                  className={
                    bigImg === image
                      ? "w-35 h-35 object-cover rounded-2xl border border-2 border-blue-800"
                      : "w-35 h-35 object-cover rounded-2xl"
                  }
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <div className="ml-3">
          <h1 className="font-bold text-3xl text-gray-900 mb-5">
            {product?.title}
          </h1>

          <div className="flex gap-4  items-center mb-5">
            <h1 className="font-bold text-4xl text-gray-900">
              {" "}
              ${product.price}
            </h1>
          </div>

          <div className="mb-8">
            <h1 className="font-semibold text-[20px] mb-2">Quantity</h1>
            <div className="flex gap-10">
              <div
                className="px-4 pt-1 rounded-[7px] text-[16px] h-[35px] border border-gray-400 cursor-pointer  hover:bg-gray-100"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </div>
              <p className="w-fit font-bold text-[20px] text-gray-800">
                {quantity}
              </p>

              <div
                className="px-4 pt-1 rounded-[7px] text-[16px] h-[35px] border border-gray-400 cursor-pointer  hover:bg-gray-100"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[100%] cursor-pointer">
            <div
              onClick={() => console.log("something")}
              className=" flex gap-2 bg-blue-700 w-[50%] justify-center text-white text-[16px] rounded-[10px]  hover:bg-blue-900  font-semibold px-2 py-4 duration-200 ease-in mb-4"
            >
              <img src={cartPic} alt="" /> Add to Cart
            </div>
            <div className=" bg-orange-500 w-[50%] justify-center text-center text-white text-[16px] rounded-[10px]  hover:bg-amber-700  font-semibold px-2 py-4 duration-200 ease-in mb-4">
              Buy now
            </div>
          </div>
          <hr className="my-10 text-gray-300" />

          <div>
            <div className="flex gap-2 mb-3 ">
              <img src={shipping} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">Free Delivery</h1>
                <p className="text-gray-700 text-[15px]">For orders over $50</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <img src={returns} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">30-Day Returns</h1>
                <p className="text-gray-700 text-[15px]">Easy return policy</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <img src={secure} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">Secure Payment</h1>
                <p className="text-gray-700 text-[15px]">
                  100% secure transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-12 border border-gray-200 p-5 rounded-2xl mt-8">
        <h1 className="text-2xl font-bold mb-4">Product Description</h1>
        <p className="text-gray-800 text-[18px] mb-4">{product.description}</p>
      </div>
    </>
  );
}
export function SmallDetails({
  product,
  bigImg,
  setBigImg,
  quantity,
  setQuantity,
}: {
  product: proDE;
  bigImg: string;
  setBigImg: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="mt-28 relative ">
        <div className="w-fit">
          <div className="flex mt-4 mb-4 w-fit overflow-x-scroll">
            {product.images.map((image) => {
              return (
                <img
                  key={image}
                  src={image}
                  className=" w-[100%] h-[50vh] object-cover  "
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <div className=" ">
          <h1 className="font-bold text-3xl text-gray-900 mb-5 ml-4">
            {product?.title}
          </h1>

          <div className="flex gap-4  items-center mb-5 ml-4">
            <h1 className="font-bold text-4xl text-gray-900">
              {" "}
              ${product.price}
            </h1>
          </div>

          <div className="mb-8 ml-4">
            <h1 className="font-semibold text-[20px] mb-2">Quantity</h1>
            <div className="flex gap-10">
              <div
                className="px-4 pt-1 rounded-[7px] text-[16px] h-[35px] border border-gray-400 cursor-pointer  hover:bg-gray-100"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </div>
              <p className="w-fit font-bold text-[20px] text-gray-800">
                {quantity}
              </p>

              <div
                className="px-4 pt-1 rounded-[7px] text-[16px] h-[35px] border border-gray-400 cursor-pointer  hover:bg-gray-100"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-[100%] cursor-pointer justify-center bg-white p-3 fixed top-203 ">
            <div
              onClick={() => console.log("handleAddtoCart")}
              className=" flex items-center gap-2 bg-blue-700 w-[40%] justify-center text-white text-[16px] rounded-[10px]  hover:bg-blue-900  font-semibold px-1 py-2 duration-200 ease-in mb-4"
            >
              <img src={cartPic} alt="" className="w-6" /> Add to Cart
            </div>
            <div className=" bg-orange-500 w-[40%] justify-center text-center text-white text-[16px] rounded-[10px]  hover:bg-amber-700  font-semibold px-2 py-4 duration-200 ease-in mb-4">
              Buy now
            </div>
          </div>
          <hr className="my-10 text-gray-300" />

          <div className="mx-6">
            <div className="flex gap-2 mb-3 ">
              <img src={shipping} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">Free Delivery</h1>
                <p className="text-gray-700 text-[15px]">For orders over $50</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <img src={returns} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">30-Day Returns</h1>
                <p className="text-gray-700 text-[15px]">Easy return policy</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <img src={secure} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">Secure Payment</h1>
                <p className="text-gray-700 text-[15px]">
                  100% secure transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 border border-gray-200 p-5 rounded-2xl mt-8">
        <h1 className="text-2xl font-bold mb-4">Product Description</h1>
        <p className="text-gray-800 text-[18px] mb-4">{product.description}</p>
      </div>
    </>
  );
}
