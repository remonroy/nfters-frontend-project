// eslint-disable-next-line no-unused-vars
import React from "react";
import one from "../../../images/one.png";
import three from "../../../images/three.png";
import Ellipse from "../../../images/Ellipse 95.png";
import Female from "../../../images/Group 107.png";
import two from "../../../images/two.png";

function SectionFour() {
  return (
    <div className="section">
      <div className="sm:flex flex-row py-4">
        <div className="basis-1/5 ">
          <div className="flex flex-col sm:space-y-14 space-y-72">
            <div className="">
              <div className="relative h-44 sm:w-44 w-full">
                <img src={one} alt="" />
                <div className="absolute sm:top-44 right-[-0.7rem] top-[-1rem]">
                  <img src={Ellipse} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="relative h-32 sm:w-32 sm:left-12 w-full">
                <img src={three} alt="three" />
                <div className="absolute sm:top-28 right-9 h-11 w-11 top-0 sm:right-[-0.9rem]">
                  <img src={Female} alt="Female" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/5 flex-1 p-4">
          <div className="sm:flex justify-center items-center h-full gap-10  mt-72 sm:mt-0">
            <div className="mb-52 sm:mb-0">
              <div className="relative h-52 sm:w-52 ">
                <img src={two} alt="three" />
                <div className="absolute sm:top-52 right-[-1rem] h-12 w-12 top-0">
                  <img src={Female} alt="Female" />
                </div>
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="w-56">
                <p className="font-inter font-black text-3xl">
                  Create and sell your NFTs
                </p>
              </div>
              <div className="">
                <p className="sm:text-sm text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi ac phasellus placerat a pellentesque tellus sed
                  egestas. Et tristique dictum sit tristique sed non. Lacinia
                  lorem id consectetur pretium diam ut. Pellentesque eu sit
                  blandit fringilla risus faucibus.
                </p>
              </div>
              <div className="">
                <button className="bg-[#3D00B7] py-1 px-4 font-inter rounded-full text-white drop-shadow-md border hover:border-[#ddd] hover:text-[#3D00B7] hover:bg-transparent transition-all">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
