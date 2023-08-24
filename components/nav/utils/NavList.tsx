"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  main: string;
  submain: string;
  svg?: React.ReactNode;
};

const NavList = ({ main, submain, svg }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Link
      href="/"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="py-3 flex items-center space-x-3 cursor-pointer"
    >
      <span
        className={`text-[26px] mr-3 transition ease-in duration-100  ${
          focus ? "text-blue-600" : "text-neutral-500"
        }`}
      >
        {svg}
      </span>

      {/* Text */}
      <div
        className={`${
          focus ? "text-blue-600" : "text-neutral-500"
        } transition ease-in duration-100   text-[14px]`}
      >
        <div
          className={`font-semibold transition ease-in duration-100  ${
            focus ? "text-blue-600" : "text-neutral-800"
          } text-base leading-5`}
        >
          {main}
        </div>

        {/* Subtext */}
        {submain}
      </div>
    </Link>
  );
};

export default NavList;
