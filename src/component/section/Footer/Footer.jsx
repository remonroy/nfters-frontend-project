// eslint-disable-next-line no-unused-vars
import React from "react";
import footer from "../../../images/footer.png";
import faceBook from "../../../images/social1.png";
import twitter from "../../../images/social2.png";
import linkedin from "../../../images/social3.png";
function Footer() {
  return (
    <div className=" w-full mb-10 sm:mb-0 pt-10 px-4 sm:px-24">
      <div className="border-b-2">
        <div className="sm:flex sm:space-x-8 space-y-5 sm:space-y-0 mb-10">
          <div className="sm:w-[30%] space-y-4">
            <div className="">
              <img src={footer} alt="footer" />
            </div>
            <div className="">
              <p className="">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
            <div className="flex gap-3 ">
              <div className="">
                <img src={faceBook} alt="faceBook" />
              </div>
              <div className="">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="">
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="sm:w-[70%]">
            <div className="sm:flex justify-evenly">
              <div className="">
                <div className="mb-4">
                  <p className="font-inter font-black ">Market Place</p>
                </div>
                <p className="">All NFTS</p>
                <p className="">New</p>
                <p className="">Art</p>
                <p className="">Sports</p>
                <p className="">Music</p>
                <p className="">Domain Name</p>
              </div>
              <div className="">
                <div className="mb-4">
                  <p className="font-inter font-black ">MY account</p>
                </div>
                <p className="">Profile</p>
                <p className="">Favorite</p>
                <p className="">My Collections</p>
                <p className="">Settings</p>
              </div>
              <div className="">
                <div className="mb-4">
                  <p className="font-inter font-black ">Stay In The Loop</p>
                </div>
                <div className="w-96">
                  <p>
                    Join our mailing list to stay in the loop with our newest
                    feature releases, NFT drops, and tips and tricks for
                    navigating NFTs.
                  </p>
                </div>
                <div className="flex justify-between border border-[#ddd] mt-7 p-2 sm:p-3 rounded-full items-center">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="outline-none"
                    />
                  </div>
                  <button className="bg-[#3d00b7] text-white py-1 sm:py-3 px-3 rounded-full">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center leading-10">
        <p className="">&#64; remonroy34@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
