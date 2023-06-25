import { useState, useEffect } from "react";
import nfters from "../../images/NFters.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { BiSearch } from "react-icons/bi";
function Navbars() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-DM_Sans"
      >
        <a href="#" className="flex items-center font-DM_Sans">
          Marketplace
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-DM_Sans"
      >
        <a href="#" className="flex items-center font-DM_Sans">
          Resource
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-DM_Sans"
      >
        <a href="#" className="flex items-center font-DM_Sans">
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto min-w-full py-2 px-4 sm:px-24 md:px-24 lg:px-20 lg:py-4 shadow-none border-b-[#ddd] rounded-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="sm:ml-7 mr-2 sm:mr-0 cursor-pointer py-1.5 font-medium"
        >
          <img src={nfters} alt="NFTERS" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="border border-[#ddd] mr-2 sm:mr-0 flex px-3 items-center py-1 rounded-full">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="outline-none pr-4"
            />
          </div>
          <BiSearch size={20} className="text-[#ddd]" />
        </div>

        <div className="space-x-3">
          <Button className="hidden lg:inline-block rounded-full bg-[#3D00B7] border border-[#3D00B7] shadow-none hover:shadow-none hover:bg-[#fff] hover:text-[#3D00B7] transition-all px-10">
            <span>Upload</span>
          </Button>
          <Button className="hidden lg:inline-block rounded-full bg-white text-[#3D00B7] shadow-none hover:shadow-none border border-[#3D00B7] hover:bg-[#3D00B7] hover:text-[#fff] transition-all">
            <span>Contact Wallet</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button fullWidth className="mb-4 bg-[#3D00B7] rounded-full">
            <span>Upload</span>
          </Button>
          <Button
            fullWidth
            className="mb-2 bg-white text-[#3D00B7] border border-[#ddd] rounded-full"
          >
            <span>Contact Wallet</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Navbars;
