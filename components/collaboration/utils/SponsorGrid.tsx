import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const SponsorGrid = () => {
  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex flex-wrap w-full relative -top-[120px] -rotate-12 -right-6 -mt-6  p-6 max-h-[480px]"
    >
      {/* Sponsor 1 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className="d-block rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/homebrew.png"
          />
          <div className="text-[#7d8590] my-2">Homebrew</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 2 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className=" rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/directus.png"
          />
          <div className="text-[#7d8590] my-2">Directus</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 3 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className=" rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/dayhaysoos.jpeg"
          />
          <div className="text-[#7d8590] my-2">Nick DeJesus</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 4 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className=" rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/imolorhe.jpeg"
          />
          <div className="text-[#7d8590] my-2">Samuel</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className=" rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/commandpost.png"
          />
          <div className="text-[#7d8590] my-2">CommandPost</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 5 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className="rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/kazupon.jpeg"
          />
          <div className="text-[#7d8590] my-2">kazuya kawaguchi</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 6 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className="rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/prophen.jpeg"
          />
          <div className="text-[#7d8590] my-2">Nikema</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 7 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className="rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/sindresorhus.jpeg"
          />
          <div className="text-[#7d8590] my-2">sindresorhus</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>

      {/* Sponsor 8 */}
      <motion.div
        variants={item}
        transition={{ type: "tween" }}
        className="w-1/3 "
      >
        <Link
          href="/"
          target="_blank"
          className="rounded-md  bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6"
        >
          <Image
            alt="Homebrew avatar"
            width="96"
            height="96"
            className="rounded-md"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/sponsors/eslint.png"
          />
          <div className="text-[#7d8590] my-2">ESLint</div>
          <button type="button" className=" bg-[#21262d] rounded-md ">
            <span className="flex items-center justify-between px-2 py-1 space-x-2">
              <AiOutlineHeart
                fontSize={20}
                className="octicon octicon-heart text-[#c9d1d9]"
              />
              <span className="Button-label text-[#c9d1d9]">Sponsor</span>
            </span>
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SponsorGrid;
