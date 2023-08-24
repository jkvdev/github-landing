import { RiCopilotFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Javascript = () => {
  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "tween" } },
  };

  return (
    <div className="flex-1 overflow-x-auto text-white rounded-b-md">
      <pre className="">
        <span className="code-editor-line-mktg d-inline-block">
          <span className="pl-k">const</span>{" "}
          <span className="pl-s1">seconds</span>{" "}
          <span className="pl-c1">=</span> <span className="pl-c1">3600</span>
        </span>
      </pre>
      <pre className="">
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="show"
          className="code-editor-line-mktg d-inline-block"
        >
          <motion.span variants={item} className="pl-k js-type-letters">
            const
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-s1 js-type-letters">
            minutes
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-c1 js-type-letters">
            =
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-s1 js-type-letters">
            seconds
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-c1 js-type-letters">
            /
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-c1 js-type-letters">
            60
          </motion.span>
        </motion.span>
      </pre>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "just" }}
      >
        <pre className=" bg-[#388bfd1a]">
          <span>
            <span className="pl-k">const</span>{" "}
            <span className="pl-s1">hours</span>{" "}
            <span className="pl-c1">=</span>{" "}
            <span className="pl-s1">minutes</span>{" "}
            <span className="pl-c1">/</span> <span className="pl-c1">60</span>
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            <span className="pl-k">const</span>{" "}
            <span className="pl-s1">days</span> <span className="pl-c1">=</span>{" "}
            <span className="pl-s1">hours</span>{" "}
            <span className="pl-c1">/</span> <span className="pl-c1">24</span>
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            <span className="pl-k">const</span>{" "}
            <span className="pl-s1">weeks</span>{" "}
            <span className="pl-c1">=</span> <span className="pl-s1">days</span>{" "}
            <span className="pl-c1">/</span> <span className="pl-c1">7</span>
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            <span className="pl-k">const</span>{" "}
            <span className="pl-s1">months</span>{" "}
            <span className="pl-c1">=</span> <span className="pl-s1">days</span>{" "}
            <span className="pl-c1">/</span> <span className="pl-c1">30</span>
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            <span className="pl-k">const</span>{" "}
            <span className="pl-s1">years</span>{" "}
            <span className="pl-c1">=</span>{" "}
            <span className="pl-s1">months</span>{" "}
            <span className="pl-c1">/</span> <span className="pl-c1">12</span>
          </span>
        </pre>
        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
          <RiCopilotFill fontSize={20} className="mr-1" />
          Copilot
        </div>
      </motion.div>
    </div>
  );
};

export default Javascript;
