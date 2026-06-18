import Image from "next/image";
import { FeedLeft, FeedRight } from "./annimation/framer";
import bannerPic from "./assets/bannerpic.jpg";
import explore from "./assets/bannerpic.jpg";

import { url } from "inspector";
import Category from "./components/catergory";
import FeaturedProduct from "./components/product";
export default function home() {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedProduct />
      <ExploreBanner />
    </div>
  );
}

function Banner() {
  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:p-20 px-5 py-15 mt-30  md:mt-20 md:grid md:grid-cols-2 ">
        <div>
          <FeedRight>
            <h1 className="md:text-6xl text-4xl text-white font-bold ">
              Summer Sale <br /> Up to 50% Off
            </h1>
            <p className="md:text-2xl text-[16px]  mt-8 text-white">
              Discover amazing deals on thousands of products. Limited time
              offer!
            </p>
            <div className="bg-white text-blue-700 py-3 px-7 w-fit rounded-4xl mt-9 hover:text-blue-900">
              Shop Now
            </div>
          </FeedRight>
        </div>
        <div>
          <FeedLeft>
            <Image
              className="rounded-3xl hidden md:block"
              src={bannerPic}
              alt=""
            />
          </FeedLeft>
        </div>
      </div>
    </>
  );
}

function ExploreBanner() {
  return (
    <div className="md:grid md:grid-cols-2 bg-gradient-to-t from-[#f13f56] to-[#ec6a1e] md:mx-12 mx-6 md:h-[120vh] md:p-0 p-6 items-center md:rounded-3xl rounded-[10px] overflow-hidden">
      <div>
        {" "}
        <h1 className="md:text-4xl text-2xl text-white  font-bold md:ml-10">
          New Arrivals
        </h1>
        <p className="text-[16px]  text-white font-semibold md:ml-10 mt-3">
          Check out our latest collection of trending products
        </p>
        <button className="md:py-3 md:px-5 py-2 px-3 bg-white rounded-3xl md:ml-10 mt-3 text-[#f13f56] hover:bg-gray-50 cursor-pointer">
          Explore Now
        </button>
      </div>

      <div className="">
        <Image
          className="h-[120vh] w-full object-cover hidden md:block"
          src={explore}
          alt=""
        />
      </div>
    </div>
  );
}
