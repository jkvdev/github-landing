"use client";

import { useState } from "react";
import HoverCard from "./HoverCard";
import Link from "next/link";
import { FiArrowRight, FiRefreshCcw } from "react-icons/fi";
import { IoLogoPython } from "react-icons/io";
import { BiLogoJavascript, BiLogoGoLang } from "react-icons/bi";
import { GoLang, Javascript, Python } from "./utils";

const CopilotFeature = () => {
  // States
  const [showPy, setShowPy] = useState<boolean>(true);
  const [showJs, setShowJs] = useState<boolean>(false);
  const [showGo, setShowGo] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  return (
    <HoverCard backgroundColor="#7ee787" left="0">
      <div className="md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between ">
        {/* Main text */}
        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
          <span className="text-white font-medium">GitHub Copilot</span> is your
          AI pair programmer that empowers you to complete tasks 55% faster by
          turning natural language prompts into coding suggestions.
        </p>

        {/* Button link animated */}
        <div>
          <Link
            href="/"
            className="group flex items-center justify-start md:text-xl text-white font-semibold"
          >
            <span>
              Meet GitHub Copilot
              <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
            </span>
            <FiArrowRight
              fontSize={20}
              className="group-hover:translate-x-0 -translate-x-1 text-white transition inline-block ml-3 ease-in duration-300 mb-[3px]"
            />
          </Link>
        </div>
      </div>

      {/* Code tabs */}
      <div className="overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl">
        <div className="text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 ">
          <div className="">
            <div className="overflow-x-auto pt-2 px-2 mb-0 border-b-[0.5px] border-[#30363d] ">
              {/* Button list of tabs */}
              <div className="flex items-center bg-[#161b22] text-[#7d8590] tab-nav">
                {/* Python */}
                <button
                  onClick={() => {
                    setShowPy(true);
                    setShowGo(false);
                    setShowJs(false);
                  }}
                  type="button"
                  className={`flex items-center  py-2 px-4 ${
                    showPy
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  }  `}
                >
                  <IoLogoPython fontSize={20} className="octicon mr-2" />
                  <span>draw_scatterplot.py</span>
                </button>

                {/* Java Script */}
                <button
                  onClick={() => {
                    setShowPy(false);
                    setShowGo(false);
                    setShowJs(true);
                  }}
                  type="button"
                  className={`flex items-center py-2 px-4 ${
                    showJs
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  }`}
                >
                  <BiLogoJavascript fontSize={20} className="octicon mr-2" />
                  <span>time.js</span>
                </button>

                {/* GO Lang */}
                <button
                  onClick={() => {
                    setShowPy(false);
                    setShowGo(true);
                    setShowJs(false);
                  }}
                  type="button"
                  className={`flex items-center py-2 px-4 ${
                    showGo
                      ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]"
                      : ""
                  } `}
                >
                  <BiLogoGoLang fontSize={20} className="octicon mr-2" />
                  <span>memoize.go</span>
                </button>
                <button></button>
              </div>
            </div>

            {/* Code block 1 */}
            <div
              className={`p-4 relative bg-[#0d1117] ${showPy ? "" : "hidden"}`}
            >
              <div className="flex">
                {/* Numbers */}
                <div className="text-[#6e7681] text-right">
                  {Array.from({ length: 8 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>

                {/* Python Code */}
                <Python key={`python-${count}`} />
              </div>

              {/* Refresh button */}
              <div className="absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5">
                <button
                  onClick={() => setCount(count + 1)}
                  type="button"
                  className="flex items-center text-white justify-between"
                >
                  <FiRefreshCcw
                    fontSize={16}
                    className="octicon octicon-sync mr-2"
                  />
                  Replay
                </button>
              </div>
            </div>

            {/* Code Block 2 */}
            <div
              className={`p-4 relative bg-[#0d1117] ${showJs ? "" : "hidden"}`}
            >
              <div className="flex">
                {/* Numbers */}
                <div className="text-[#6e7681] text-right">
                  {Array.from({ length: 7 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>

                {/* Javascript Code */}
                <Javascript key={`javascript-${count}`} />
              </div>

              {/* Refresh Button */}
              <div className="absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5">
                <button
                  onClick={() => setCount(count + 1)}
                  type="button"
                  className="flex items-center text-white justify-between"
                >
                  <FiRefreshCcw
                    fontSize={16}
                    className="octicon octicon-sync mr-2"
                  />
                  Replay
                </button>
              </div>
            </div>

            {/* Code Block 3 */}
            <div
              className={`p-4 relative bg-[#0d1117] ${showGo ? "" : "hidden"}`}
            >
              <div className="flex">
                {/* Numbers */}
                <div className="text-[#6e7681] text-right">
                  {Array.from({ length: 11 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>

                {/* GO Lang Code */}
                <GoLang key={`golang-${count}`} />
              </div>

              {/* Refresh Button */}
              <div
                onClick={() => setCount(count + 1)}
                className="absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5"
              >
                <button
                  type="button"
                  className="flex items-center text-white justify-between"
                >
                  <FiRefreshCcw
                    fontSize={16}
                    className="octicon octicon-sync mr-2"
                  />
                  Replay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default CopilotFeature;
