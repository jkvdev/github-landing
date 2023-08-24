import Image from "next/image";
import Link from "next/link";
import { BsCode } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
      {/* Hero Section */}
      <Image
        className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
        width="500"
        height="326"
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt=""
      />
      <div className="flex">
        {/* Line */}
        <div className="relative">
          <Image
            aria-hidden="true"
            className=""
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            width="437"
            height="637"
            alt=""
          />
          <div className="mx-auto my-3 ">
            <span className="relative z-[11]">
              <BsCode fontSize={26} className=" text-white" />
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>

          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          ></div>
        </div>

        {/* Copilot */}
        <div className=" absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="relative md:top-20 mb-[24px]">
            <Link
              href="/"
              className="group border-[1px] border-neutral-600 copilot rounded-full inline-block"
            >
              <div className="flex items-center p-3 px-5">
                <Image
                  className=" d-block w-auto flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110"
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  alt=""
                  aria-hidden="true"
                  src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg"
                />
                <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                  <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                    Introducing GitHub Copilot X
                  </div>
                  <div className="text-neutral-500 max-md:text-[14px] text-[16px]">
                    Your Ai pair programmer is leveling Up
                  </div>
                </div>

                <div className="ml-auto">
                  <FiArrowRight
                    fontSize={20}
                    className="group-hover:translate-x-0 -translate-x-1 text-white transition ease-in duration-150"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Main */}
          <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
            {" "}
            Let&apos;s build from&nbsp;here
          </h1>
          <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
            Harnessed for productivity. Designed for collaboration. Celebrated
            for built-in security. Welcome to the platform developers&nbsp;love.
          </p>
          <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
            <form action="">
              <div className=" grid max-md:grid-rows-2 md:grid-cols-2">
                <dl>
                  <dd>
                    <input
                      className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                      id="user_email"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </dd>
                </dl>
                <button
                  type="button"
                  className="mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold"
                >
                  Sign up for GitHub
                </button>
              </div>
            </form>
            <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
            <Link
              href="/"
              className="group flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white"
            >
              Start a free enterprise trial
              <FiArrowRight
                fontSize={20}
                className="group-hover:translate-x-1 translate-x-0 arrow-symbol-mktg text-white ml-3 transition-all ease-in duration-150"
              />
            </Link>
          </div>

          {/* Organizations */}
          <div className="md:my-32 my-24">
            <p className="text-[16px] leading-[24px] text-[#7d8590]">
              Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                alt="Stripe logo"
                height="44"
                width="93"
                className="my-3 scale-90 object-contain"
              />
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                alt="Pinterest logo"
                height="44"
                width="140"
                className="my-3 scale-90 object-contain"
              />
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                alt="KPMG logo"
                height="44"
                width="103"
                className="my-3 scale-90 object-contain"
              />
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                alt="Mercedes-Benz logo"
                height="44"
                width="200"
                className="my-3 w-[200px] object-contain"
              />
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                alt="P&amp;G logo"
                height="32"
                width="75"
                className="my-3 scale-90 object-contain"
              />
              <Image
                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                alt="Telus logo"
                height="32"
                width="170"
                className="my-3 scale-90 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
