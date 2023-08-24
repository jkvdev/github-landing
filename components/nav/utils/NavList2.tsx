"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  main: string;
  path?: string;
  svg?: React.ReactNode;
};

const NavList2 = ({ main, path, svg }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Link
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      href="/"
      className={`flex  items-center ${
        focus ? "text-blue-600" : "text-neutral-500"
      }`}
    >
      {/* Text */}
      {main}

      {/* SVG */}
      <span
        className={`text-[18px] octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle !text-neutral-500 ml-2 transition ease-in duration-150 ${
          focus
            ? " translate-x-0 text-blue-500 opacity-100"
            : " -translate-x-3 opacity-0"
        }`}
      >
        {svg}
      </span>
    </Link>
  );
};

export default NavList2;
