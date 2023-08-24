"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

const StickyNav = () => {
  // States
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [product, setproduct] = useState(false);
  const [collab, setcollab] = useState(false);
  const [security, setSecurity] = useState(false);
  const [product1, setproduct1] = useState(false);
  const [collab1, setcollab1] = useState(false);
  const [security1, setSecurity1] = useState(false);
  const [smallNav, setSmallNav] = useState(false);

  // Scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // console.log('Hello World');
      }
      const element = document.getElementById("nav");
      const topCoordinate = element?.getBoundingClientRect().top;
      const Product = document.getElementById("productivity");
      const topProduct = Product?.getBoundingClientRect().top;
      const Collab = document.getElementById("collaboration");
      const topCollab = Collab?.getBoundingClientRect().top;
      const Security = document.getElementById("security");
      const topSecurity = Security?.getBoundingClientRect().top;
      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true);
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true);
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false);
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false);
      }
      if (topProduct && topProduct < 10) {
        setproduct(true);
        setcollab(false);
        setSecurity(false);
      }
      if (topCollab && topCollab < 10) {
        setproduct(false);
        setcollab(true);
        setSecurity(false);
      }
      if (topSecurity && topSecurity < 10) {
        setproduct(false);
        setcollab(false);
        setSecurity(true);
      }
      // console.log(topCoordinate);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Sticky Nav
    <div
      id="nav"
      className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${
        isSticky ? "visible" : "invisible"
      }`}
    >
      {/* Main Menu */}
      <div
        className={`w-screen ${
          isFixed ? "fixed" : "sticky"
        }  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}
      >
        <div className="max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative">
          {/* Toggle buttons */}
          <button
            onClick={() => setSmallNav(!smallNav)}
            className="lg:hidden absolute right-12 top-4"
          >
            <IoIosArrowDown
              fontSize={20}
              className={` text-white ${smallNav ? "hidden" : ""}`}
            />

            <IoIosClose
              fontSize={36}
              className={` text-white ${smallNav ? "" : "hidden"}`}
            />
          </button>

          {/* Button list */}
          <div className="flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  text-white">
            {/* Productivity */}
            <Link
              href="#productivity"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setproduct1(true)}
              onMouseLeave={() => setproduct1(false)}
              className={` max-lg:pt-2  ${
                product1 ? "lg:text-blue-500" : ""
              }  ${
                product || smallNav
                  ? "lg:text-blue-500 max-lg:pb-6"
                  : "max-lg:hidden"
              } `}
            >
              Productivity{" "}
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-200 ${
                  product1 ? "scale-100 bg-blue-500" : ""
                } ${product ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </Link>

            {/* Collaboration */}
            <Link
              href="#collaboration"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setcollab1(true)}
              onMouseLeave={() => setcollab1(false)}
              className={` max-lg:pt-2 ${collab1 ? "lg:text-blue-500" : ""} ${
                collab || smallNav
                  ? "lg:text-blue-500 max-lg:pb-6"
                  : "max-lg:hidden"
              } `}
            >
              Collaboration
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${
                  collab1 ? "scale-100 bg-blue-500" : ""
                } ${collab ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </Link>

            {/* Security */}
            <Link
              href="#security"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setSecurity1(true)}
              onMouseLeave={() => setSecurity1(false)}
              className={` max-lg:pt-2 ${security1 ? "lg:text-blue-500" : ""} ${
                security || smallNav ? "lg:text-blue-500 " : "max-lg:hidden"
              } `}
            >
              Security
              <div
                className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${
                  security1 ? "scale-100 bg-blue-500" : ""
                } ${security ? "scale-100 bg-blue-500" : ""}`}
              ></div>
            </Link>
          </div>

          {/* Button Links */}
          <div
            className={`lg:ml-5 flex items-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 ${
              smallNav ? "" : "max-lg:hidden"
            }`}
          >
            {/* Free Trail */}
            <Link
              href="/"
              className="group flex items-center max-lg:w-full text-white font-semibold justify-center space-x-2 text-base  border-[1px] border-neutral-500 px-3 py-3 rounded-md"
            >
              Start a free enterprise trail
              <FiArrowRight
                fontSize={16}
                className="group-hover:translate-x-0 -translate-x-1 ml-2 transition ease-in duration-150"
              />
            </Link>

            {/* Sign Up */}
            <Link
              href="/"
              className="group flex items-center max-lg:w-full bg-white font-semibold px-3 py-3 justify-center rounded-md text-base"
            >
              Sign up for GitHub
              <FiArrowRight
                fontSize={16}
                className="group-hover:translate-x-0 -translate-x-1 ml-2 transition ease-in duration-150"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
