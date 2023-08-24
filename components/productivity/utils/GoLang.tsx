import { RiCopilotFill } from "react-icons/ri";
import { motion } from "framer-motion";

const GoLang = () => {
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
          <span className="pl-k">package</span> main
        </span>
      </pre>
      <pre className="">
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="show"
          className="code-editor-line-mktg d-inline-block"
        >
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-k js-type-letters">
            func
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-en js-type-letters">
            Memoize
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            (
          </motion.span>
          <motion.span variants={item} className="pl-s1 js-type-letters">
            fn
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-k js-type-letters">
            func
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {"("}
          </motion.span>
          <motion.span variants={item} className="pl-smi js-type-letters">
            int
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            ){" "}
          </motion.span>
          <motion.span variants={item} className="pl-smi js-type-letters">
            int
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            ){" "}
          </motion.span>
          <motion.span variants={item} className="pl-k js-type-letters">
            func
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {"("}
          </motion.span>
          <motion.span variants={item} className="pl-smi js-type-letters">
            int
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {")"}{" "}
          </motion.span>
          <motion.span variants={item} className="pl-smi js-type-letters">
            int
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
            {"{"}{" "}
          </motion.span>
        </motion.span>
      </pre>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, type: "just" }}
      >
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">cache</span>{" "}
            <span className="pl-c1">:=</span>{" "}
            <span className="pl-en">make</span>(
            <span className="pl-k">map</span>[
            <span className="pl-smi">int</span>]
            <span className="pl-smi">int</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-k">return</span>{" "}
            <span className="pl-k">func</span>(<span className="pl-s1">n</span>{" "}
            <span className="pl-smi">int</span>){" "}
            <span className="pl-smi">int</span> {"{"}
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-k">if</span> <span className="pl-s1">v</span>,{" "}
            <span className="pl-s1">ok</span> <span className="pl-c1">:=</span>{" "}
            <span className="pl-s1">cache</span>[
            <span className="pl-s1">n</span>]; <span className="pl-s1">ok</span>{" "}
            {"{"}
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-k">return</span>{" "}
            <span className="pl-s1">v</span>
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span> {"}"}</span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">cache</span>[
            <span className="pl-s1">n</span>] <span className="pl-c1">=</span>{" "}
            <span className="pl-en">fn</span>(<span className="pl-s1">n</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-k">return</span>{" "}
            <span className="pl-s1">cache</span>[
            <span className="pl-s1">n</span>]
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span> {"}"}</span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span> {"}"}</span>
        </pre>
        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
          <RiCopilotFill fontSize={20} className="mr-1" />
          Copilot
        </div>
      </motion.div>
    </div>
  );
};

export default GoLang;
