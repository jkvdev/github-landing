import Image from "next/image";
import CodeBlock from "./CodeBlock";
import { motion } from "framer-motion";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdNotificationsOutline,
  IoLogoGithub,
} from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const CodeEditor = () => {
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
    hidden: { opacity: 0, y: 3 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
  };

  return (
    <div className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b-[0.5px] border-[#30363d] p-4">
        {/* Back and forth buttons */}
        <div className="pre-next max-md:hidden flex text-[#7d8590] font-medium">
          <IoIosArrowBack
            fontSize={24}
            className="octicon octicon-chevron-left color-fg-muted"
          />
          <IoIosArrowForward
            fontSize={24}
            className="octicon octicon-chevron-right color-fg-muted"
          />
        </div>

        {/* URL Bar */}
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-full md:w-auto">
          <BiLockAlt
            fontSize={16}
            className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]"
          />

          <div className="md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            mona-github-github-g59jpq2w5w7.github.dev
          </div>

          <LuRefreshCcw
            fontSize={16}
            className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]"
          />
        </div>

        {/* Plus icon */}
        <div className="pre-next max-md:hidden flex text-[#7d8590] font-medium">
          <AiOutlinePlus
            fontSize={24}
            className="octicon octicon-plus color-fg-muted"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex items-stretch">
        {/* Side Bar */}
        <div className="hidden md:block p-6 border-r-[0.5px] border-[#30363d] ">
          <FiMenu
            fontSize={24}
            className="octicon octicon-three-bars color-fg-muted text-[#7d8590]"
          />
        </div>

        {/* Code */}
        <div className="min-w-0 w-full">
          <div className="border-b-[0.5px] border-[#30363d] text-[#7d8590]">
            {/* Tabs */}
            <ul className="flex px-3 pt-4">
              <li className="px-3 py-2 rounded-t-md bg-[#0d1117] text-gray-300">
                index.html
              </li>
              <li className="px-3 py-2">script.js</li>
              <li className="px-3 py-2 ">package.json</li>
            </ul>

            {/* Main Block of Code */}
            <div className="bg-[#0d1117] p-4 ">
              <div className="flex">
                <div className="">
                  {Array.from({ length: 12 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>

                <CodeBlock />
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="p-4 text-[#7d8590]">
            {/* Tabs */}
            <ul className="flex mb-3">
              <li className="pr-3 text-gray-200">Terminal</li>
              <li className="pr-3">Output</li>
              <li className="pr-3">Problems</li>
              <li className="pr-3">Debug Console</li>
            </ul>

            {/* All the messages in the terminal animated */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="overflow-hidden whitespace-nowrap font-mono text-[14px] text-[#7d8590]"
              data-type-row-delay="50"
            >
              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:36</span>]
                <span> Starting </span>
                &apos;
                <span className="color-fg-accent">
                  watch-extension:vscode-api-tests
                </span>
                &apos; ...
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:36</span>]
                <span> Finished </span>
                &apos;
                <span className="color-fg-accent">
                  clean-extension:typescript-language-features
                </span>
                &apos; after {' '}
                <span className="color-fg-done">248 ms</span>
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:36</span>]
                <span> Starting </span>
                &apos;
                <span className="color-fg-accent">
                  watch-extension:typescript-language-features
                </span>
                &apos; ...
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:36</span>]
                <span> Finished </span>
                &apos;
                <span className="color-fg-accent">
                  clean-extension:php-language-features
                </span>
                &apos; after {' '}
                <span className="color-fg-done">384 ms</span>
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:36</span>]
                <span> Starting </span>
                &apos;
                <span className="color-fg-accent">
                  watch-extension:php-language-features
                </span>
                &apos; ...
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:40</span>]
                <span> Finished </span>
                &apos;
                <span className="color-fg-accent">
                  clean-extension:html-language-features-server
                </span>
                &apos; after {' '}
                <span className="color-fg-done">4.66 s</span>
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:40</span>]
                <span> Starting </span>
                &apos;
                <span className="color-fg-accent">
                  watch-extension:html-language-features-server
                </span>
                &apos; ...
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:43</span>]
                <span> Finished </span>
                &apos;<span className="color-fg-accent">clean-client</span>
                &apos; after {' '}
                <span className="color-fg-done">7.33 s</span>
              </motion.div>

              <motion.div
                variants={item}
                className="no-wrap js-type-row row-is-visible"
              >
                [<span className="color-fg-subtle">09:43:43</span>]
                <span> Starting </span>
                &apos;<span className="color-fg-accent">watch-client</span>
                &apos; ...
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Planet */}
        <div className="md:block hidden border-l-[0.5px] border-[#30363d] w-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-[16px] pt-[22px] pb-2 text-gray-100">
            <FiMenu fontSize={20} />

            <IoLogoGithub fontSize={28} />

            <IoMdNotificationsOutline fontSize={24} />
          </div>

          {/* Planet Image */}
          <div className="px-6 flex items-center justify-between h-full bg-[#040d21]">
            <Image
              className="w-full h-auto md:block"
              width="1238"
              height="1404"
              loading="lazy"
              decoding="async"
              alt="Planet earth with visualization of GitHub activity crossing the globe"
              src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
