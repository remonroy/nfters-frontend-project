// eslint-disable-next-line no-unused-vars
import React from "react";
import imageOne from "../../images/one.png";
import imageTwo from "../../images/two.png";
import imageThree from "../../images/three.png";
import man from "../../images/Ellipse 95.png";
import vactor2 from "../../images/Vector2.png";
import vactor from "../../images/Vector.png";
import group from "../../images/Group 22.png";
function Home() {
  return (
    <div className="section">
      <div className="sm:flex flex-grow space-y-16 sm:space-y-0">
        <div className="basis-1/2 space-y-7">
          <div className="space-y-3">
            <p className="uppercase text-4xl font-inter font-black ">
              Discover, and collect Digital Art NFTs
            </p>
            <p className="sm:w-[60%] text-[#a2a1a1]">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
          </div>
          <button className="bg-[#3D00B7] border border-[#ddd] p-2 rounded-full text-white px-6 hover:bg-[#fff] hover:text-[#3D00B7] transition-all ">
            Explore Now
          </button>
          <div className="flex gap-3 ">
            <div>
              <p className="text-3xl font-inter font-black">98k +</p>
              <p className="text-[#8a8989]">Artwork</p>
            </div>
            <div>
              <p className="text-3xl font-inter font-black">98k +</p>
              <p className="text-[#8a8989]">Auction</p>
            </div>
            <div>
              <p className="text-3xl font-inter font-black">98k +</p>
              <p className="text-[#8a8989]">Artist</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex justify-center items-center h-full w-full ">
            {" "}
            <div className="relative right-[-6rem] ">
              <img src={imageThree} className="w-[69%] h-[58%]" alt="" />
              <div className="absolute h-[100%] w-[100%] top-[-1rem] right-[3.4rem]">
                <img src={imageTwo} className="w-[80%] h-[114%]" alt="" />
                <div className="absolute top-[-1rem] right-[5rem] w-[80%] h-[114%] ">
                  <img src={imageOne} className="w-[100%] h-[114%]" alt="" />
                  <div className="absolute top-0 p-3 flex flex-col space-y-44 w-full">
                    <div className="">
                      <div className="">
                        <p className="text-white font-DM_Sans">
                          Abstr Gradient NFT
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="">
                          <img className="h-7 w-7" src={man} alt="man" />
                        </div>
                        <div className="text-xs">Arkhan17</div>
                      </div>
                    </div>
                    <div className="bg-[#ffffff57] p-2 rounded-md flex justify-between text-white">
                      <div className="">
                        <p className="text-xs">Current Bid</p>
                        <div className="flex gap-2 items-center mt-2">
                          <div className="w-3 h-4">
                            <img
                              className="h-full w-full  "
                              src={vactor2}
                              alt="vactor"
                            />
                          </div>
                          <div className="">
                            <p className="text-xs">0.25ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-xs">Ends in</p>
                        <div className="mt-2">
                          <p className="text-xs">12h 43m 42s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-40 left-[-1rem] sm:left-[-2rem] bg-[#FFE0D4] h-16 w-16 rounded-full">
                    <div className="relative">
                      <img src={group} alt="group" />
                      <div className="absolute top-7 left-[1.6rem] w-3 h-3">
                        <img
                          className="h-full w-full"
                          src={vactor}
                          alt="vactor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
