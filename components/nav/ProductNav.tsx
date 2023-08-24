"use client";

import { useState } from "react";
import { Navlist, Navlist2 } from "./utils";
import { MdKeyboardArrowDown, MdSecurity } from "react-icons/md";
import {
  GoGitCompare,
  GoPackage,
  GoCodeReview,
  GoDiscussionClosed,
} from "react-icons/go";
import { BiCodeBlock } from "react-icons/bi";
import { RiCopilotFill } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

// Navlist can be mapped through because of constants
const ProductNav = () => {
  const [show, setShow] = useState(false);

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
        onClick={() => setShow(!show)}
        type="button"
        className={`flex items-center p-1 max-lg:font-semibold  transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300 " : ""
        }`}
      >
        {/* Title */}
        Product
        <MdKeyboardArrowDown
          fontSize={20}
          className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show ? "lg:mt-2 opacity-40 max-lg:0" : "mt-0 max-lg:-rotate-90"
          }`}
        />
      </button>

      {/* Main menu */}
      <div
        className={`relative lg:absolute lg:flex -ml-5 bg-white rounded-md lg:py-4 py-2 transition ease-in duration-150 ${
          show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"
        }`}
      >
        {/* First Column */}
        <div className="lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10  ">
          <ul className="max-lg:pl-6">
            <li className="">
              <Navlist
                main="Action"
                submain="Automate any workflow"
                svg={<GoGitCompare />}
              />
            </li>
            <li className="">
              <Navlist
                main="Packages"
                submain="Host and manage packages"
                svg={<GoPackage />}
              />
            </li>
            <li className="">
              <Navlist
                main="Security"
                submain="Find and fix vulnerability"
                svg={<MdSecurity />}
              />
            </li>
            <li className="">
              <Navlist
                main="CodeSpace"
                submain="Instant dev environments"
                svg={<BiCodeBlock />}
              />
            </li>
            <li className="">
              <Navlist
                main="Copilot"
                submain="Write better code with AI"
                svg={<RiCopilotFill />}
              />
            </li>
            <li>
              <Navlist
                main="Code review"
                submain="Manage code changes"
                svg={<GoCodeReview />}
              />
            </li>
            <li>
              <Navlist
                main="Issues"
                submain="Plan and track issues"
                svg={<FiAlertCircle />}
              />
            </li>
            <li>
              <Navlist
                main="Discussions"
                submain="Collaborate outside of code"
                svg={<GoDiscussionClosed />}
              />
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="lg:px-8 lg:pr-20 py-2 max-lg:pl-6">
          <span className="my-1 text-neutral-800 font-semibold">Explore</span>
          <ul className="text-sm">
            <li className="text-neutral-500 hover:text-blue-500 py-2">
              <Link href="/">All Features</Link>
            </li>
            <li className="py-2">
              <Navlist2 main="Documentaion" svg={<GrFormNextLink />} />
            </li>
            <li className="py-2">
              <Navlist2 main="GitHub skills" svg={<GrFormNextLink />} />
            </li>
            <li className="py-2">
              <Navlist2 main="Blog" svg={<GrFormNextLink />} />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ProductNav;
