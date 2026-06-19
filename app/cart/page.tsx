"use client";
import shoppingBay from "../../public/shoppingBag.svg";

import cancel from "../../public/delete.svg";
import { useCart } from "../content/content";
import Link from "next/link";
import Image from "next/image";

export default function ShoppingCart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const Tax = totalPrice * 0.1;
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="md:mt-28 mt-40">
          <h1 className="md:ml-12 ml-4 text-3xl font-bold mb-8">
            Shopping Cart
          </h1>
          <div className="md:grid md:grid-cols-3">
            <div className="col-span-2 ">
              {cart?.map((item) => (
                <div
                  key={`${item.id}-${item.image}`}
                  className="border border-gray-300 md:grid md:grid-cols-3  md:ml-12 ml-4 mr-4 mb-6 p-2 md:rounded-2xl rounded-[10px] md:h-fit "
                >
                  <div className="flex gap-4 md:col-span-2">
                    <img
                      className="w-25 h-25 rounded-2xl"
                      src={item.image}
                      alt=""
                    />
                    <div className="flex w-[100%] items-start justify-between ">
                      <div>
                        <h1 className="font-bold mb-2 text-[16px] text-gray-800">
                          {item.name}
                        </h1>

                        <h1 className="font-bold text-[16px] text-gray-800">
                          ${item.price}
                        </h1>
                      </div>

                      <Image
                        onClick={() =>
                          dispatch({
                            type: "DELETE_FROM_CART",
                            payload: item.id,
                          })
                        }
                        className="w-8 h-8 cursor-pointer block md:hidden"
                        src={cancel}
                        alt="cancel"
                      />
                    </div>
                  </div>
                  <hr className="md:hidden block my-5 mx-5 text-gray-300" />
                  <div className=" flex relative w-full items-center md:justify-end-safe justify-between gap-3 md:col-span-1">
                    <div className="flex gap-4 md:items-center ml-2 md:ml-0">
                      <div
                        onClick={() =>
                          dispatch({ type: "REDUCE_QTY", payload: item.id })
                        }
                        className="px-2 pt-0 rounded-[5px] text-[16px] h-fit border border-gray-400 cursor-pointer hover:bg-gray-200 "
                      >
                        -
                      </div>
                      <p className="w-fit font-bold text-[20px] text-gray-800">
                        {item.quantity}
                      </p>
                      <div
                        onClick={() =>
                          dispatch({ type: "ADD_QTY", payload: item.id })
                        }
                        className="px-2 pt-0 rounded-[5px] text-[16px] h-fit border border-gray-400 cursor-pointer  hover:bg-gray-200"
                      >
                        +
                      </div>
                    </div>
                    <div>
                      {" "}
                      <p className="font-semibold text-[16px] md:hidden block">
                        Total:
                      </p>
                      <h1 className="w-fit font-bold text-[18px] text-gray-800 ">
                        ${item.price * item.quantity}
                      </h1>
                    </div>

                    <Image
                      onClick={() =>
                        dispatch({
                          type: "DELETE_FROM_CART",
                          payload: item.id,
                        })
                      }
                      className="w-8 cursor-pointer absolute top-0 hidden md:block"
                      src={cancel}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
            <hr className="md:hidden block my-10 mx-8 text-gray-300" />
            <div className="md:border border-gray-300 md:ml-8  md:mr-10 p-10 rounded-3xl">
              <h1 className="md:mx-auto text-2xl font-bold mb-8 text-left">
                Order Summary
              </h1>
              <div className="flex justify-between my-2">
                <p className="font-semibold">Subtotal </p>
                <p className="font-semibold">${totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex justify-between my-2">
                <p className="font-semibold">Shipping </p>
                <p className="font-semibold">FREE</p>
              </div>

              <div className="flex justify-between my-2">
                <p className="font-semibold">Tax {"(10%)"}</p>
                <p className="font-semibold">{Tax.toFixed(2)}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between my-4">
                <p className="font-semibold">Total</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${(Tax + totalPrice).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-2 md:block">
                <div className=" bg-blue-700 md:w-[100%] w-[50%]  text-white rounded-[10px]  hover:bg-blue-900  text-center md:mx-auto font-semibold px-2 py-3 duration-200 ease-in mb-4">
                  CheckOut
                </div>

                <Link href={"/"}>
                  <div className=" bg-white md:w-[100%]  w-fit text-black rounded-[10px] border border-gray-400 hover:bg-gray-300  text-center md:mx-auto font-semibold px-2 py-3 duration-200 ease-in">
                    Continue Shopping
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center  md:mt-[10%] mt-[40%]">
      <img src={shoppingBay} className="w-50" alt="" />
      <h1 className="text-3xl font-bold text-gray-700 mb-3">
        Your cart is empty
      </h1>
      <p className="mb-4 text-gray-800">Add some products to get started!</p>
      <Link href={"/"}>
        <button className="w-[100%] bg-blue-700 rounded-[10px] hover:bg-blue-900 text-white font-semibold px-6 py-2 my-2  duration-200 ease-in">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
