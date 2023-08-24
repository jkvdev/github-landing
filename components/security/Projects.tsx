import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Projects = () => {
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

      <div className="flex items-center flex-row relative">
        {/* Line with gradient */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          className="w-[3px] h-full increase2"
        />

        {/* Alternative line */}
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
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-security.svg"
        />
      </div>

      {/* Text Section */}
      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          {/* Main Text */}
          <div className="py-4 mb-2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:pr-6"
            >
              <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
                <span className="font-semibold text-white">
                  GitHub Advanced Security
                </span>{" "}
                lets you gain visibility into your security posture, respond to
                threats proactively, and ship secure applications quickly.
              </h2>

              <Link
                href="/"
                className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
              >
                <span>
                  Get GitHub Advance Security
                  <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                </span>
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Overlay Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="py-4 px-6 w-full"
          >
            <div className="relative">
              <div className="relative">
                <div className="md:absolute z-[1] top-[-100px] lg:top-[-200px] right-0 shadow-2xl">
                  <Image
                    src="https://github.githubassets.com/images/modules/site/home-campaign/illu-ghas-list.png"
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

        {/* Main Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
          className="mb-10 md:mb-32 pb-4 "
        >
          <div className="py-4 text-left">
            {/* Pill Shape Text */}
            <div className="z-[1] inline-block rounded-full px-2 border-2 border-[#abb4ff] relative font-medium bg-gradient-to-r from-[#939aff] to-[#abb4ff] bg-clip-text text-transparent">
              <span className="font-semibold text-[12px]">Did you know?</span>
            </div>

            {/* Heading */}
            <h3 className="text-[#939aff] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
              56 million projects
            </h3>

            {/* Subheading */}
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              fixed vulnerabilities with GitHub<sup>2</sup>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
