// eslint-disable-next-line no-unused-vars
import React from "react";
import Elip from "../../../images/Ellipse 95.png";
import picOne from "../../../images/pickone.png";
import ethereum from "../../../images/ethereum 2.png";
import ethereumOne from "../../../images/ethereum 1.png";
import ethereumGreen from "../../../images/ethereumGreen (1).png";
import groupOne from "../../../images/Group 88.png";
import groupTwo from "../../../images/Group 88 (1).png";
import groupThree from "../../../images/Group 88 (2).png";
import unsplash from "../../../images/unsplash_k0rVudBoB4c.png";
import unsplashTwo from "../../../images/unsplash_fT49QnFucQ8.png";
import unsplashThree from "../../../images/unsplash_5MTf9XyVVgM.png";
import unsplashFour from "../../../images/unsplash_zkNT5mikUuo.png";
import unsplashFive from "../../../images/unsplash_WjIB-6UxA5Q.png";
import verify from "../../../images/verify 1.png";

function SectionTwo() {
  return (
    <div className="section">
      <div className="sm:flex space-x-5 space-y-10 sm:space-y-0 flex-row ">
        <div className="basis-1/2 space-y-5">
          <img src={picOne} alt="picOne" />
          <div className="">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="">
                  <img src={Elip} alt="Elip" />
                </div>
                <div className="">
                  <p className="font-inter font-bold">The Futr Abstr</p>
                  <p className="text-xs">10 in the stock</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="">
                  <p className="text-xs">Highest Bid</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3">
                    <img src={ethereum} alt="ethereum" />
                  </div>
                  <div className="text-xs">0.25ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 space-y-3">
          <div className="flex gap-4 ">
            <div className="">
              <img src={groupOne} alt="groupOne" />
            </div>
            <div className="space-y-2">
              <p className="font-inter font-bold">The Futr Abstr</p>
              <div className="flex  items-center space-x-2">
                <div className="w-6 h-6">
                  <img src={Elip} alt="{Elip}" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#00AC4F] p-1 rounded-md">
                    <img src={ethereumGreen} alt="ethereumGreen" />
                    <div className="ml-1">
                      <p className="text-[#00AC4F] text-xs">0.25ETH</p>
                    </div>
                  </div>

                  <div className="">1 of 8</div>
                </div>
              </div>
              <div className="">
                <button className="bg-[#3D00B7] py-2 px-4 rounded-full text-white font-inter text-xs border hover:border-[#ddd] hover:bg-transparent hover:text-[#3D00B7] transition-all drop-shadow-md">
                  Place a bid
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <img src={groupTwo} alt="groupOne" />
            </div>
            <div className="space-y-2">
              <p className="font-inter font-bold">The Futr Abstr</p>
              <div className="flex  items-center space-x-2">
                <div className="w-6 h-6">
                  <img src={Elip} alt="{Elip}" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#00AC4F] p-1 rounded-md">
                    <img src={ethereumGreen} alt="ethereumGreen" />
                    <div className="ml-1">
                      <p className="text-[#00AC4F] text-xs">0.25ETH</p>
                    </div>
                  </div>

                  <div className="">1 of 8</div>
                </div>
              </div>
              <div className="">
                <button className="bg-transparent border border-[#ddd] py-2 px-4 rounded-full text-[#3D00B7] font-inter text-xs drop-shadow-md hover:bg-[#3D00B7] hover:text-white transition-all">
                  Place a bid
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="">
              <img src={groupThree} alt="groupOne" />
            </div>
            <div className="space-y-2">
              <p className="font-inter font-bold">The Futr Abstr</p>
              <div className="flex  items-center space-x-2">
                <div className="w-6 h-6">
                  <img src={Elip} alt="{Elip}" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#00AC4F] p-1 rounded-md">
                    <img src={ethereumGreen} alt="ethereumGreen" />
                    <div className="ml-1">
                      <p className="text-[#00AC4F] text-xs">0.25ETH</p>
                    </div>
                  </div>

                  <div className="">1 of 8</div>
                </div>
              </div>
              <div className="">
                <button className="bg-transparent border border-[#ddd] py-2 px-4 rounded-full text-[#3D00B7] font-inter text-xs drop-shadow-md hover:bg-[#3D00B7] hover:text-white transition-all">
                  Place a bid
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 space-y-4">
          <div className="">
            <p className="font-inter font-black uppercase ">
              Top Collections over
            </p>
            <p className="text-xs text-[#3D00B7]">Last 7 days</p>
          </div>
          <div className="border-b-2">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <p className="font-inter font-black">1</p>
                </div>
                <div className="w-12 h-12 relative">
                  <img src={unsplash} alt="unsplash" />
                  <div className="absolute top-0 right-[-0.3rem] h-6 w-6">
                    <img src={verify} alt="verify" />
                  </div>
                </div>
                <div className="">
                  <p className="font-inter font-black text-xs">CryptoFunks</p>
                  <div className="flex items-center space-y-2 gap-1">
                    <div className="w-3 h-3">
                      <img src={ethereumOne} alt="ethereumOne" />
                    </div>
                    <div className="">
                      <p className="text-xs">19,769.39</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#40D2BF] font-black">+26.52%</div>
              </div>
            </div>
          </div>
          <div className="border-b-2">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <p className="font-inter font-black">2</p>
                </div>
                <div className="w-12 h-12 ">
                  <img src={unsplashTwo} alt="unsplash" />
                </div>
                <div className="">
                  <p className="font-inter font-black text-xs">CryptoFunks</p>
                  <div className="flex items-center space-y-2 gap-1">
                    <div className="w-3 h-3">
                      <img src={ethereumOne} alt="ethereumOne" />
                    </div>
                    <div className="">
                      <p className="text-xs">19,769.39</p>
                    </div>
                  </div>
                </div>
                <div className="text-red-600 font-black">+10.52%</div>
              </div>
            </div>
          </div>
          <div className="border-b-2">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <p className="font-inter font-black">3</p>
                </div>
                <div className="w-12 h-12 ">
                  <img src={unsplashThree} alt="unsplash" />
                </div>
                <div className="">
                  <p className="font-inter font-black text-xs">CryptoFunks</p>
                  <div className="flex items-center space-y-2 gap-1">
                    <div className="w-3 h-3">
                      <img src={ethereumOne} alt="ethereumOne" />
                    </div>
                    <div className="">
                      <p className="text-xs">19,769.39</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#40D2BF] font-black">+26.52%</div>
              </div>
            </div>
          </div>
          <div className="border-b-2">
            <div className="mb-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <p className="font-inter font-black">4</p>
                </div>
                <div className="w-12 h-12 relative">
                  <img src={unsplashFour} alt="unsplash" />
                  <div className="absolute top-0 right-[-0.3rem] h-6 w-6">
                    <img src={verify} alt="verify" />
                  </div>
                </div>
                <div className="">
                  <p className="font-inter font-black text-xs">CryptoFunks</p>
                  <div className="flex items-center space-y-2 gap-1">
                    <div className="w-3 h-3">
                      <img src={ethereumOne} alt="ethereumOne" />
                    </div>
                    <div className="">
                      <p className="text-xs">19,769.39</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#40D2BF] font-black">+26.52%</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="">
              <p className="font-inter font-black">5</p>
            </div>
            <div className="w-12 h-12 ">
              <img src={unsplashFive} alt="unsplash" />
            </div>
            <div className="">
              <p className="font-inter font-black text-xs">CryptoFunks</p>
              <div className="flex items-center space-y-2 gap-1">
                <div className="w-3 h-3">
                  <img src={ethereumOne} alt="ethereumOne" />
                </div>
                <div className="">
                  <p className="text-xs">19,769.39</p>
                </div>
              </div>
            </div>
            <div className="text-red-600 font-black">+2.52%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
