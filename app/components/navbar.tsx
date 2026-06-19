"use client";

import search from "../../public/search.svg";
import user from "../../public/user.svg";
import cartImage from "../../public/cart.svg";
import menu from "../../public/menu.svg";
import close from "../../public/close.svg";

// import { useCart } from "../content/CartContent.jsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../content/content";

export default function NavBar() {
  return (
    <>
      <div className="md:block hidden">
        <BigNav />
      </div>
      <div className="md:hidden block">
        <SmallNav />
      </div>
    </>
  );
}

function BigNav() {
  return (
    <div className="relative">
      <div className="flex items-center justify-evenly bg-white   p-[16px] shadow-lg fixed top-0 right-0 left-0 z-10  ">
        <Link href={"/"}>
          <Logo />
        </Link>
        <Search />
        <div className="flex items-baseline gap-3">
          <Link href={"/"}>
            <p className="text-[18px]  mt-2">Home</p>
          </Link>

          <Shop />

          <Account />
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
function SmallNav() {
  const [open, setOPen] = useState(false);
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10 pb-4 w-[100Vw] bg-white shadow-md ">
        <div className="flex justify-between mx-6 mb-4 pt-4">
          <Image
            className="w-[40px] h-[40px] transition-[0.3s] ease-in"
            src={open ? close : menu}
            onClick={() => setOPen(!open)}
            alt=""
          />
          <Link href={"/"}>
            <Logo />
          </Link>

          <CartIcon />
        </div>

        <Search />

        <div className={open ? "flex flex-col gap-2 mx-7 my-5 " : "hidden "}>
          <hr className="text-gray-300" />
          <Shop />
          <Link href={"/"}>
            <p className="md:text-[18px] text-2xl   mt-2">Home</p>
          </Link>
          <Account />
        </div>
      </div>
    </>
  );
}
export function Account() {
  return (
    <div className=" flex mr-[20px] md:mr-0 cursor-pointer items-baseline">
      <img src={user} className="hidden md:block" alt="" />
      <h3 className="md:text-[18px] text-[24px] hover:text-blue-800">
        Account
      </h3>
    </div>
  );
}
function Search() {
  return (
    <>
      <div className="flex md:w-[35vw] w-[90%] border-2 border-solid border-blue-800 p-[15px] py-[8px] rounded-4xl mt-2 mx-auto md:mx-0 md:mt-0 ">
        <img src={search} alt="" className="mr-[8px]" />
        <input
          type="text"
          name=""
          id=""
          className="outline-0 text-[16px]"
          placeholder="Search product . . . ."
        />
      </div>
    </>
  );
}
export function Logo() {
  return (
    <h1 className="text-[32px] font-bold text-blue-800 cursor-pointer ">
      Shopoja
    </h1>
  );
}
export function Shop() {
  return (
    <Link href={"/allProduct"}>
      <h1 className="hover:text-blue-800 mr-5 md:text-[18px] text-[24px]">
        Shop
      </h1>
    </Link>
  );
}
export function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Link href={"/cart"}>
      <div className="flex text-[20px] cursor-pointer relative items-baseline">
        <div className="absolute bg-red-500 rounded-3xl text-[16px] px-[7px]  md:left-15 left-5 md:bottom-2 text-white">
          {totalItems}
        </div>
        <Image src={cartImage} className="md:w-[20px] w-[40px]" alt="" />
        <p className="hover:text-blue-800 md:block hidden">Cart</p>
      </div>
    </Link>
  );
}
