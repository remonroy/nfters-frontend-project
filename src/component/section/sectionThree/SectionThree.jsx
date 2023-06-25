// eslint-disable-next-line no-unused-vars
import React from "react";
import one from "../../../images/one.png";
import oneTwo from "../../../images/pickone.png";
import Ellipse from "../../../images/Ellipse 95.png";
import three from "../../../images/pickone.png";
function SectionThree() {
  return (
    <div className=" bg-[#F7F9FB] w-full mb-10 sm:mb-0 py-10 px-4 sm:px-24">
      <p className="font-inter font-black uppercase mb-10">
        Collection Featured NFTs
      </p>
      <div className="sm:flex gap-5">
        <div className="mb-10 sm:mb-0">
          <div className="flex gap-3">
            <div className="w-full">
              <img src={one} alt="one" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-inter font-bold">Amazing Collection</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 mt-3">
                <img src={Ellipse} alt="" />
                <p className="text-xs font-inter font-bold">by Arkhan</p>
              </div>
              <div className="">
                <button className="border border-[#04B5E9] text-xs rounded-full p-1 px-4 text-[#04B5E9]">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 sm:mb-0">
          <div className="flex gap-3">
            <div className="w-full h-full">
              <img className="w-[100%] h-[100%]" src={three} alt="one" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-inter font-bold">Amazing Collection</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 mt-3">
                <img src={Ellipse} alt="" />
                <p className="text-xs font-inter font-bold">by Arkhan</p>
              </div>
              <div className="">
                <button className="border border-[#04B5E9] text-xs rounded-full p-1 px-4 text-[#04B5E9]">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 sm:mb-0">
          <div className="flex gap-3">
            <div className="w-full h-full">
              <img src={one} alt="one" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
              <div className="h-20 w-20">
                {" "}
                <img src={oneTwo} alt="one" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="font-inter font-bold">Amazing Collection</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 mt-3">
                <img src={Ellipse} alt="" />
                <p className="text-xs font-inter font-bold">by Arkhan</p>
              </div>
              <div className="">
                <button className="border border-[#04B5E9] text-xs rounded-full p-1 px-4 text-[#04B5E9]">
                  Total 54 items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
