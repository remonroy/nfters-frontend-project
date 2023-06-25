// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SectionCard from "../card/SectionCard";
import filter from "../../../images/filter-results-button 1.png";
function SectionFive() {
  const data2 = [
    {
      label: "All categories",
      value: "All categories",
    },
    {
      label: "Art",
      value: "Art",
    },
    {
      label: "Celebrites",
      value: "Celebrites",
    },
    {
      label: "Gaming",
      value: "Gaming",
    },
    {
      label: "Sport",
      value: "Sport",
    },
    {
      label: "Music",
      name: "ArtCryptoSix",
    },
    {
      label: "Crypto",
      value: "Crypto",
    },
  ];
  const data = [
    {
      label: "All categories",
      value: "All categories",
      name: "ArtCrypto",
    },
    {
      label: "Art",
      name: "ArtCryptoTwo",
      value: "Art",
      desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Celebrites",
      value: "Celebrites",
      name: "ArtCryptoThree",
      desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Gaming",
      value: "Gaming",
      name: "ArtCryptoFour",
      desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Sport",
      value: "Sport",
      name: "ArtCryptoFive",
      desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Music",
      name: "ArtCryptoSix",
      value: "Music",
    },
    {
      label: "Crypto",
      value: "Crypto",
      name: "ArtCryptoSeven",
    },
  ];
  return (
    <div className=" bg-[#F7F9FB] w-full mb-10 sm:mb-0 py-10 px-4 sm:px-24">
      <p className="font-inter font-black uppercase mb-10 text-2xl ">
        Discover more NFTs
      </p>
      <div className="">
        <div className="">
          <Tabs value="html">
            <div className="flex justify-between items-center">
              <div className="w-[70%]">
                <TabsHeader>
                  {data2?.map(({ label, value }) => (
                    <Tab key={value} value={value} color="black">
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
              </div>
              <div className=" sm:flex gap-2 border border-[#ddd]  py-1 px-3 rounded-full items-center hidden sm:inline-block">
                <div className="">
                  <img src={filter} alt="filter" />
                </div>
                <div className="">
                  <p className="">All filters</p>
                </div>
              </div>
            </div>

            <div className="w-[100%]">
              {/* <div className="flex flex-wrap gap-4 justify-center">
                {data?.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <SectionCard item={item} />
                ))}
              </div> */}
              <TabsBody>
                {data.map((item) => (
                  <TabPanel
                    className="flex-1"
                    key={item?.value}
                    value={item?.value}
                  >
                    {
                      <div className="flex gap-4">
                        {item?.label === "All categories" ? (
                          <div className="flex flex-wrap gap-4 justify-center">
                            {data
                              ?.filter((data) => data.label !== item.label)
                              .map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <SectionCard item={item} />
                              ))}
                          </div>
                        ) : (
                          //  console.log("item", item)
                          <SectionCard item={item} />
                        )}
                      </div>
                    }
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
