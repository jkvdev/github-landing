import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Discount = () => {
  return (
    <div className="flex relative md:pl-10">
      {/* BG Image */}
      <Image
        alt=""
        aria-hidden="true"
        width="2712"
        height="2712"
        className="absolute top-0 right-0 h-auto pointer-events-none"
        loading="lazy"
        decoding="async"
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
      />

      {/* Line Animated */}
      <div className="flex items-center flex-row relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          className="w-[3px] h-full increase1"
        />

        <Image
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: "calc(50% - 2px)",
            height: "auto",
            maxWidth: "9vw",
            transitionDelay: "100ms",
          }}
          className="hidden md:block absolute bottom-4 left-0"
          loading="lazy"
          decoding="async"
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
        />
      </div>

      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:pr-6"
            >
              {/* Text Area */}
              <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
                <span className="font-semibold text-white">
                  GitHub Issues and GitHub Projects
                </span>{" "}
                supply flexible project management tools that adapt to your team
                alongside your code.
              </h2>

              {/* Animated Link */}
              <Link
                href="/"
                className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
              >
                <span>
                  Explore GitHube Issue
                  <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                </span>
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Image Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="py-4 px-6 w-full"
          >
            <div className="relative">
              <div className="relative">
                <div className="md:absolute z-[1] top-[-200px] lg:top-[-300px] right-0 shadow-2xl">
                  <Image
                    src="https://github.githubassets.com/images/modules/site/home-campaign/illu-projects.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="1190"
                    height="1004"
                    className="w-full h-auto d-block rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mb-10 md:mb-32 pb-4 "
        >
          {/* Benefit Text */}
          <div className="py-4 text-left">
            {/* Pill Shaped Text */}
            <div className="z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent">
              <span className="font-semibold text-[12px]">Did you know?</span>
            </div>

            {/* Main Heading */}
            <h3 className="text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
              80% reduction
            </h3>

            {/* Subheading */}
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              in onboarding time with GitHub<sup>1</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Discount;
