// eslint-disable-next-line no-unused-vars
import React from "react";
import picOne from "../../../images/pickone.png";
import picTwo from "../../../images/Group 107.png";
import picThree from "../../../images/unsplash_5MTf9XyVVgM.png";
import picFour from "../../../images/Ellipse 95.png";
import ethereum from "../../../images/ethereum 2 (1).png";
// eslint-disable-next-line react/prop-types
function SectionCard({ item }) {
  return (
    <>
      <div className="bg-white p-3 rounded-md">
        <div className="relative">
          <div className="w-48">
            <img src={picOne} alt="picOne" />
          </div>
          <div className="flex items-center absolute top-48 space-x-[-0.7rem]">
            <div className="w-6 h-6">
              <img src={picFour} alt="" />
            </div>
            <div className="w-6 h-6">
              <img src={picTwo} alt="" />
            </div>
            <div className="w-6 h-6">
              <img src={picThree} alt="" />
            </div>
            <div className="w-6 h-6">
              <img src={picFour} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <p className="font-inter font-black text-xl text-[#333]">
              {item?.value}
            </p>
          </div>
          <div className="flex justify-between border-b-2 py-2 mb-4">
            <div className="flex gap-2 items-center">
              <div className="">
                <img src={ethereum} alt="ethereum" />
              </div>
              <div className="">
                <p className="text-xs text-[#00AC4F]">0.25ETH</p>
              </div>
            </div>
            <div className="">
              <p className="">1 Of 321</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="border border-[#ddd] py-1 px-2 rounded-full text-[#3D00B7]">
              <p className="text-xs">3h 50m 2s left</p>
            </div>
            <div className="">
              <p className="text-xs text-[#3D00B7]">Place a bit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCard;
