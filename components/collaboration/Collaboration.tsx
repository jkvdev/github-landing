import Discount from "./Discount";
import { HoverCard } from "../productivity";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { SponsorGrid } from "./utils";

const Collaboration = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-7 space-x-3 md:space-x-10">
        {/* Main section title and SVG Logo */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <LuHeartHandshake fontSize={24} className=" text-white" />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
          </motion.div>

          {/* Side Bar */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
          ></motion.div>
        </div>

        {/* Main Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          {/* Header */}
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Collaboration
          </h2>

          {/* Text */}
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#ffa28b]">Supercharge collaboration.</span>
            We provide unlimited repositories, best-in-class version control,
            and the world’s most powerful open source community - so your team
            can work more efficiently together.
          </h3>
        </motion.div>
      </div>

      {/* Big Table Image */}
      <Image
        className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]  "
        width="2500"
        height="1500"
        loading="lazy"
        decoding="async"
        alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
        src="https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png"
      />

      <Discount />

      <div className="flex justify-between items-center">
        <div className="flex justify-between md:space-x-10 max-md:flex-col">
          {/* Hover Card 1 */}
          <HoverCard backgroundColor="#ffa28b" direction="flex-col" left="0">
            <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
              {/* Text */}
              <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Actions</span>{" "}
                automates your build, test, and deployment workflow with simple
                and secure CI/CD.
              </p>

              {/* Link with animation */}
              <div>
                <Link
                  href="/"
                  className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
                >
                  <span>
                    Enable GitHub Discussion
                    <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                  </span>
                  <FiArrowRight
                    fontSize={20}
                    className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                  />
                </Link>
              </div>
            </div>

            {/* Main Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="overflow-hidden rounded-s-lg"
            >
              <Image
                className="w-full h-auto"
                width="1209"
                height="890"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="https://github.githubassets.com/images/modules/site/home-campaign/illu-discussions.png?width=1208&format=webpll"
              />
            </motion.div>
          </HoverCard>

          <HoverCard
            backgroundColor="#ffa28b"
            direction="flex-col"
            left="-400px"
          >
            <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
              {/* Main Text */}
              <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">GitHub Mobile</span>{" "}
                fits your projects in your pocket, so you never miss a beat
                while on the go.
              </p>

              {/* Link with animations */}
              <div>
                <Link
                  href="/"
                  className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
                >
                  <span>
                    Check out pull request
                    <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
                  </span>
                  <FiArrowRight
                    fontSize={20}
                    className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
                  />
                </Link>
              </div>
            </div>

            {/* Main Image */}
            <div className="overflow-hidden rounded-s-lg">
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="w-full h-auto "
                width="1208"
                height="764"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="https://github.githubassets.com/images/modules/site/home-campaign/illu-pull-requests.png?width=1208&format=webpll"
              />
            </div>
          </HoverCard>
        </div>
      </div>

      {/* Large Hover Card */}
      <HoverCard backgroundColor="#ffa28b" direction="" left="">
        <div className="md:flex flex-col md:space-y-20 flex-1 py-20 p-10  justify-between">
          {/* Main Text */}
          <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
            <span className="text-white font-medium">GitHub Sponsors</span> lets
            you support your favorite open source maintainers and projects.
          </p>

          {/* Link with animations */}
          <div>
            <Link
              href="/"
              className="group flex items-center justify-start py-1 text-xl text-white font-semibold"
            >
              <span>
                Check out pull request
                <div className="group-hover:w-full group-hover:scale-100 w-0 scale-0 origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full" />
              </span>
              <FiArrowRight
                fontSize={20}
                className="group-hover:translate-x-0 -translate-x-1 mb-[2px] text-white transition inline-block ml-3 ease-in duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Main Motion Div - Grid */}
        <div className="overflow-hidden rounded-s-lg z-[1] flex-1">
          <SponsorGrid />
        </div>
      </HoverCard>

      {/* Animated Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]"
      />
    </div>
  );
};

export default Collaboration;
