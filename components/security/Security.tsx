import { HoverCard } from "../productivity";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Security = () => {
  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          {/* Main Line and SVG */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <BiLockAlt
              fontSize={28}
              className="octicon octicon-lock text-white"
            />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
          </motion.div>

          {/* Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          />
        </div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          {/* Heading */}
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Security
          </h2>

          {/* About */}
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#939aff]">
              Embed security into the developer workflow.
            </span>
            With GitHub, developers can secure their code in minutes and
            organizations can automatically comply with regulations.
          </h3>
        </motion.div>
      </motion.div>

      {/* Hover Card */}
      <HoverCard backgroundColor="#939aff" direction="" left="0">
        <div className="flex w-10/12 flex-col mx-auto">
          {/* Titles */}
          <div className="text-[#7d8590] p-6">
            <div className="font-medium">cmake.yml</div>
            <span className="text-[12px] f6">on: push</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10"
          >
            {/* First Card */}
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div
                className="p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <BsFillCheckCircleFill
                        fontSize={24}
                        className="octicon octicon-check-circle-fill color-fg-success mr-2 text-green-500"
                      />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Connect Line */}
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="absolute md:top-12   lg:left-[47%] md:left-[46%] max-md:top-[88px] z-[1] flex items-center max-md:rotate-90"
            >
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
              <div
                style={{ width: "37px", height: "2px", background: "#D1D5DA" }}
              ></div>
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div
                className="pt-2 pb-1 px-6 text-[15px] rounded-t-md inline-block font-medium text-white"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                Steps
              </div>
              <div
                className="p-6 mb-10 box-shadow-mktg-xl rounded-tl-none rounded-md"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                {/* Listing the steps */}
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <BsFillCheckCircleFill
                        fontSize={24}
                        className="octicon octicon-check-circle-fill color-fg-success mr-2 text-green-500"
                      />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>

                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <BsFillCheckCircleFill
                        fontSize={24}
                        className="octicon octicon-check-circle-fill color-fg-success mr-2 text-green-500"
                      />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>

                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <BsFillCheckCircleFill
                        fontSize={24}
                        className="octicon octicon-check-circle-fill color-fg-success mr-2 text-green-500"
                      />
                      <span className="font-medium text-white">Build</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HoverCard>

      <Projects />

      {/* Large Hover Card */}
      <div className="relative z-[1]">
        <HoverCard backgroundColor="#939aff" direction="" left="0">
          <div className="overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6    justify-between md:min-w-[400px]">
            {/* Main text */}
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-medium">GitHub Sponsors</span>{" "}
              lets you support your favorite open source maintainers and
              projects.
            </p>

            <div>
              <Link
                href="/"
                className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
              >
                <span>
                  Invest With GitHub Sponsers
                  <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                </span>
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween" }}
            className="rounded-r-md overflow-hidden flex items-center"
          >
            <Image
              className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right"
              width="1288"
              height="992"
              loading="lazy"
              decoding="async"
              alt=""
              aria-hidden="true"
              src="/3.png"
            />
          </motion.div>
        </HoverCard>
      </div>

      {/* First Card */}
      <div className="flex flex-col md:flex-row gap-10 ">
        <HoverCard backgroundColor="#939aff" direction="flex-col" left="0">
          {/* Main Text */}
          <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32">
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-semibold">Dependabot</span> makes
              it easy to find and fix vulnerable dependencies in your supply
              chain.
            </p>

            <div>
              <Link
                href="/"
                className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
              >
                <span>
                  Explore Dependabot
                  <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                </span>
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-s-lg">
            <Image
              className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate"
              width="1209"
              height="890"
              loading="lazy"
              decoding="async"
              alt=""
              aria-hidden="true"
              src="https://github.githubassets.com/images/modules/site/home-campaign/illu-dependabot.png"
            />
          </div>
        </HoverCard>

        {/* Second Hover Card */}
        <HoverCard backgroundColor="#939aff" direction="flex-col" left="-400px">
          {/* Main */}
          <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-semibold">Code scanning</span>is
              GitHub’s static code analysis tool that helps you remediate issues
              in your code.
            </p>

            <div>
              <Link
                href="/"
                className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
              >
                <span>
                  Download the latest SAST ebook
                  <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                </span>
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-s-lg">
            <Image
              className="w-full h-auto "
              width="1208"
              height="764"
              loading="lazy"
              decoding="async"
              alt=""
              aria-hidden="true"
              src="https://github.githubassets.com/images/modules/site/home-campaign/illu-code-scanning.png"
            />
          </div>
        </HoverCard>
      </div>
    </div>
  );
};

export default Security;
