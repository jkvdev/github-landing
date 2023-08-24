import Earth from "./Earth";
import Earth2 from "./Earth2";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Globe = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        {/* Main Message */}
        <div className="flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col">
          <div className="py-3 mb-2 flex flex-col justify-center items-center">
            {/* Heading */}
            <h2 className="px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white">
              The place for anyone from anywhere to build anything
            </h2>

            {/* Subheading */}
            <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">
              Whether you’re scaling your startup or just learning how to code,
              GitHub is your home. Join the world’s largest developer platform
              to build the innovations that empower humanity. Let’s&nbsp;build
              from&nbsp;here.
            </p>

            {/* Buttons */}
            <div className="lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
              {/* First Button */}
              <Link
                href="/"
                className="group flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]"
              >
                Sign up for GitHub
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-2 -translate-x-0 ml-2 transition ease-in duration-150"
                />
              </Link>

              {/* Second Button */}
              <Link
                href="/"
                className="group flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md"
              >
                Start a free enterprise trail
                <FiArrowRight
                  fontSize={20}
                  className="group-hover:translate-x-2 -translate-x-0 ml-2 transition ease-in duration-150"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Earth Canvas */}
      <div className={`relative z-[2] max-sm:hidden`}>
        <Earth />
      </div>
      <div className={`relative z-[2] sm:hidden`}>
        <Earth2 />
      </div>

      {/* BG Image */}
      <Image
        className="absolute bottom-0 left-0 w-full h-full object-cover d-block pointer-events-none"
        width="801"
        height="807"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
        src="https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg"
      />

      {/* Github Mascot */}
      <div className="flex items-center justify-center relative z-[2] mt-[-200px]">
        <Image
          alt="Mona looking at the galaxy"
          width="801"
          height="807"
          className="pointer-events-none  w-[400px] object-cover h-[403px]"
          src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png"
        />
      </div>
    </div>
  );
};

export default Globe;
