"use client";

import { useState } from "react";
import { Navlist2 } from "./utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

const SolutionNav = () => {
  const [show, setShow] = useState(false);
  const handleOnclick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setShow(false);
    }
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleOnclick}
        type="button"
        className={`flex max-lg:font-semibold items-center p-1 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300" : ""
        }`}
      >
        {/* Title */}
        Solutions
        <MdKeyboardArrowDown
          fontSize={20}
          className={` ml-1 transition-all ease-in duration-200 max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        />
      </button>
      <div
        className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[300px] transition ease-in duration-300 ${
          show ? "opacity-100 " : "opacity-0 hidden top-[2000px]"
        }`}
      >
        <div className="lg:border-b-[1px] mb-4 pb-4 pt-4 w-full">
          <span className="text-neutral-800 font-semibold text-base">For</span>
          <ul className="text-sm text-neutral-500 mt-1 w-full">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Teams
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Startups
              </Link>
            </li>
            <li className="py-2">
              <Navlist2 main="Education" svg={<GrFormNextLink />} />
            </li>
          </ul>
        </div>
        <div className="lg:border-b-[1px] mb-4 pb-4 pt-2 w-full">
          <span className="text-neutral-800 font-semibold text-base">
            By Solution
          </span>
          <ul className="text-sm text-neutral-500 mt-1 w-full">
            <li>
              <a href="/" className="block py-2 hover:text-blue-600">
                CI/CD & Automation
              </a>
            </li>
            <li className="py-2">
              <Navlist2 main="DevOps" svg={<GrFormNextLink />} />
            </li>
            <li className="py-2">
              <Navlist2 main="DevSecOps" svg={<GrFormNextLink />} />
            </li>
          </ul>
        </div>
        <div className="mb-4 pb-0 pt-2 w-full">
          <span className="text-neutral-800 font-semibold text-base">
            Case Studies
          </span>
          <ul className="text-sm text-neutral-500 mt-1 w-full">
            <li>
              <a href="/" className="block py-2 hover:text-blue-600">
                Customer stories
              </a>
            </li>
            <li className="py-2">
              <Navlist2 main="Resources" svg={<GrFormNextLink />} />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SolutionNav;
