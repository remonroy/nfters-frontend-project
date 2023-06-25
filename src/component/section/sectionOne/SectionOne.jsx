// eslint-disable-next-line no-unused-vars
import React from "react";
import card from "../../../images/card-tick-1 1.png";
import card2 from "../../../images/chart-square 2.png";
function SectionOne() {
  return (
    <div className="section">
      <div className="sm:flex gap-9 space-y-10 sm:space-y-0 justify-center items-center bg-[#F7F9FB] p-7">
        <div className="">
          <p className="font-inter font-black text-1xl sm:text-1xl uppercase">
            The amazing NFT art of the world here
          </p>
        </div>
        <div className="flex gap-3">
          <div className="sm:w-12 sm:h-12 w-20 h-20">
            <img className="" src={card} alt="card" />
          </div>
          <div className="">
            <p className="font-inter font-black mb-2">Fast Transaction</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="sm:w-12 sm:h-12 w-20 h-20">
            <img src={card2} alt="card2" />
          </div>
          <div className="">
            <p className="font-inter font-black mb-2">Growth Transaction</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
