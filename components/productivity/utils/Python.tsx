import { RiCopilotFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Python = () => {
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
    <div className="flex-1 overflow-x-auto text-white rounded-b-md ">
      <pre className="">
        <span className="code-editor-line-mktg">
          <span className="pl-k">import</span>{" "}
          <span className="pl-s1">matplotlib</span>.
          <span className="pl-s1">pyplot</span> <span className="pl-k">as</span>{" "}
          <span className="pl-s1">plt</span>
        </span>
      </pre>
      <pre className="">
        <span className="code-editor-line-mktg"></span>
      </pre>
      <pre className="">
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="show"
          className="code-editor-line-mktg"
        >
          <motion.span variants={item} className="pl-k js-type-letters">
            def
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            {" "}
          </motion.span>
          <motion.span variants={item} className="pl-en js-type-letters">
            draw_scatterplot
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            (
          </motion.span>
          <motion.span variants={item} className="pl-s1 js-type-letters">
            x_values
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            ,{" "}
          </motion.span>
          <motion.span variants={item} className="pl-s1 js-type-letters">
            y_values
          </motion.span>
          <motion.span variants={item} className="js-type-letters">
            ):
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
            {" "}
            <span className="pl-s1">plt</span>.
            <span className="pl-en">scatter</span>(
            <span className="pl-s1">x_values</span>,{" "}
            <span className="pl-s1">y_values</span>,{" "}
            <span className="pl-s1">s</span>
            <span className="pl-c1">=</span>
            <span className="pl-c1">20</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">plt</span>.
            <span className="pl-en">title</span>(
            <span className="pl-s">&ldquo;Scatter Plot&ldquo;</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">plt</span>.
            <span className="pl-en">xlabel</span>(
            <span className="pl-s">&ldquo;x values&ldquo;</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">plt</span>.
            <span className="pl-en">ylabel</span>(
            <span className="pl-s">&ldquo;y values&ldquo;</span>)
          </span>
        </pre>
        <pre className=" bg-[#388bfd1a]">
          <span>
            {" "}
            <span className="pl-s1">plt</span>.
            <span className="pl-en">show</span>()
          </span>
        </pre>
        <div className="rounded-tl-none  bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
          <RiCopilotFill fontSize={20} className="mr-1" />
          Copilot
        </div>
      </motion.div>
    </div>
  );
};

export default Python;
