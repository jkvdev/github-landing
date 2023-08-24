import CodeEditor from "./CodeEditor";
import CodeSpace from "./CodeSpace";
import HoverCard from "./HoverCard";
import CopilotFeature from "./CopilotFeature";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoBriefcase } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Productivity = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        {/* SVG */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <GoBriefcase
              fontSize={24}
              className="octicon octicon-briefcase text-white"
            />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
          />
        </div>

        {/* Main Text Area */}
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Productivity
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#7ee787]">
              Accelerate high-quality software development.
            </span>
            Our AI-powered platform drives innovation with tools that boost
            developer velocity.
          </motion.h3>
        </div>
      </div>

      <CodeEditor />

      <CodeSpace />

      <div className="relative z-[1] ">
        <CopilotFeature />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between md:space-x-10 max-md:flex-col">
          {/* 1st Hover Card */}
          <HoverCard backgroundColor="#7ee787" direction="flex-col" left="0">
            {/* Main Text */}
            <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Actions</span>{" "}
                automates your build, test, and deployment workflow with simple
                and secure CI/CD.
              </p>

              {/* Link with animation */}
              <div>
                <Link
                  href="/"
                  className="group flex items-center justify-start md:text-xl text-white font-semibold"
                >
                  <span>
                    Discover GitHub Actions
                    <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                  </span>

                  <FiArrowRight
                    fontSize={20}
                    className="group-hover:translate-x-0 -translate-x-1 text-white transition inline-block ml-3 ease-in duration-300 mb-[3px]"
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
                src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png"
              />
            </div>
          </HoverCard>

          {/* Hover Card 2 */}
          <HoverCard
            backgroundColor="#7ee787"
            direction="flex-col"
            left="-400px"
          >
            {/* Main text */}
            <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Mobile</span>{" "}
                fits your projects in your pocket, so you never miss a beat
                while on the go.
              </p>

              <div>
                <Link
                  href="/"
                  className="group flex items-center justify-start md:text-xl text-white font-semibold"
                >
                  <span>
                    Get GitHub Mobile
                    <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                  </span>
                  <FiArrowRight
                    fontSize={20}
                    className="group-hover:translate-x-0 -translate-x-1 text-white transition inline-block ml-3 ease-in duration-300 mb-[3px]"
                  />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-s-lg">
              <Image
                className="w-full  h-auto"
                width="1208"
                height="764"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png"
              />
            </div>
          </HoverCard>
        </div>
      </div>

      {/* Line Animation */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
        className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
      ></motion.div>
    </div>
  );
};

export default Productivity;
