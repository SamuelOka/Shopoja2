"use client";

import { useState } from "react";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import linkedin from "../../public/linkedin.png";
import add from "../../public/add.svg";
import subtract from "../../public/subtract.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="md:block hidden">
        <BigFooter />
      </div>
      <div className="md:hidden block">
        <SmallFooter />
      </div>
    </>
  );
}
function BigFooter() {
  return (
    <div className="bg-gray-800 text-white mt-16 p-12">
      <div className="md:grid md:grid-cols-4">
        <div>
          <h1 className="font-bold mb-2">About ShopOja</h1>
          <hr className="md:hidden block mb-3" />
          <div className=" block">
            <p>About us</p>
            <p>Careers</p>
            <p>Blogs</p>
            <p>Press</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold md:mb-0 mb-2">Customer Service</h1>
          <hr className="md:hidden block mb-3" />
          <div className="hidden md:block">
            <p>Help Center</p>
            <p>Track Order</p>
            <p>Returns</p>
            <p>Shipping Info</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold md:mb-0 mb-2">Policies</h1>
          <hr className="md:hidden block mb-3" />
          <div className="hidden md:block">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
            <p>Accessibility</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold mb-2">Newsletter</h1>
          <p>Subscribe to get updates on new products and exclusive offers.</p>
          <input type="email" name="" id="" /> <button></button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex gap-3 items-center justify-center my-10">
        {" "}
        <Image className="w-7" src={facebook} alt="" />
        <Image className="w-7" src={instagram} alt="" />
        <Image className="w-7" src={linkedin} alt="" />
      </div>

      <p className=" flex justify-center my-5">
        © 2026 ShopOja. All rights reserved.
      </p>
    </div>
  );
}
function SmallFooter() {
  const [about, setAbout] = useState(false);
  const [customerService, setCustomerService] = useState(false);
  const [policy, setPolicy] = useState(false);
  return (
    <div className="bg-gray-800 text-white mt-16 p-12">
      <div className="">
        <div>
          <div className="flex justify-between  mb-1 p-2">
            <h1 className="font-bold" onClick={() => setAbout(!about)}>
              About ShopOja
            </h1>
            <img src={about ? subtract : add} alt="" />
          </div>

          {about ? (
            <div className="ml-2">
              <p>About us</p>
              <p>Careers</p>
              <p>Blogs</p>
              <p>Press</p>
            </div>
          ) : (
            ""
          )}
          <hr className=" mb-3 mt-2" />
        </div>

        <div>
          <div
            className="flex justify-between mb-2"
            onClick={() => setCustomerService(!customerService)}
          >
            <h1 className="font-bold">Customer Service</h1>
            <img
              src={customerService ? subtract : add}
              className="mr-1"
              alt=""
            />
          </div>

          {customerService ? (
            <div className="ml-2">
              <p>Help Center</p>
              <p>Track Order</p>
              <p>Returns</p>
              <p>Shipping Info</p>
            </div>
          ) : (
            ""
          )}
          <hr className="mb-3 mt-2" />
        </div>

        <div>
          <div
            className="flex justify-between mb-2"
            onClick={() => setPolicy(!policy)}
          >
            <h1 className="font-bold">Policies</h1>
            <img src={policy ? subtract : add} className="mr-1" alt="" />
          </div>

          {policy ? (
            <div className="">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
              <p>Accessibility</p>
            </div>
          ) : (
            ""
          )}
          <hr className="mb-3 mt-2" />
        </div>

        <div>
          <h1 className="font-bold mb-2">Newsletter</h1>
          <p>Subscribe to get updates on new products and exclusive offers.</p>
          <input type="email" name="" id="" /> <button></button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex gap-3 items-center justify-center my-10">
        {" "}
        <Image className="w-7" src={facebook} alt="" />
        <Image className="w-7" src={instagram} alt="" />
        <Image className="w-7" src={linkedin} alt="" />
      </div>

      <p className=" flex justify-center my-5 pb-32">
        © 2026 ShopOja. All rights reserved.
      </p>
    </div>
  );
}
