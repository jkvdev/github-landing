"use client";

import { Container } from "@/components/containers";
import ProductNav from "./ProductNav";
import SolutionNav from "./SolutionNav";
import OpenSourceNav from "./OpenSourceNav";
import { useState } from "react";
import Link from "next/link";

import { SiGithub } from "react-icons/si";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  // Menu and nav state
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      <div className="text-white bg-transparent py-5">
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
          <div className="flex justify-between items-center max-lg:w-full">
            {/* Show only on desktop */}
            <div className="lg:hidden">
              <Link
                href="/"
                className="px-2 py-[6px] border-[1px] rounded-md hover:text-neutral-400"
              >
                Sign up
              </Link>
            </div>

            {/* Github Logo */}
            <a href="https://github.com">
              <SiGithub fontSize="36" className=" text-white" />
            </a>

            {/* Burger Menu */}
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="lg:hidden cursor-pointer"
            >
              {/* Top Line */}
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
                  showNav
                    ? "rotate-45 mb-0  translate-y-[1px]"
                    : "rotate-0 mb-1"
                } `}
              ></div>

              {/* Middle Line */}
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                  showNav ? "hidden mb-0" : "mb-1"
                } `}
              ></div>

              {/* Bottom Line */}
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Navigation */}
          <div
            className={`flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : "max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
              <nav className="my-0 px-3 lg:px-6 text-[15.5px] max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto overflow-y-auto">
                  <ProductNav />
                  <SolutionNav />
                  <OpenSourceNav />
                  <li>
                    <Link
                      href="/"
                      className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Search Bar */}
              <div className="lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4">
                <div className="lg:flex mb-2 lg:mb-0 relative max-lg:mr-4 flex items-center">
                  <input
                    placeholder="Search GitHub"
                    className="glass max-lg:bg-neutral-50 max-lg:w-full  w-[240px] lg:px-2 h-[38px] max-lg:h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] max-lg:placeholder:text-[16px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-white focus:text-black border-[1px] lg:border-neutral-500 max-lg:border-neutral-300 rounded-md"
                    type="text"
                  />
                  <span className="mr-3 absolute right-0 my-auto max-lg:hidden">
                    <FiSearch fontSize={18} className="text-[#979A9C]"/>
                  </span>
                </div>

                {/* Sign In/Up Buttons */}
                <div className="max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800">
                  <Link
                    href="/"
                    className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold "
                  >
                    Sign in
                  </Link>
                </div>
                <Link
                  href="/"
                  className="max-lg:hidden px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 "
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
