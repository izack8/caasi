import { FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function PageTracker({ section, currentPage }) {
  return !currentPage ? (
    <div className="flex flex-row text-sm">
        <span><a href="https://izack.dev">izack.dev</a></span>
    </div>
  ) : (
    <div className="flex flex-row text-xs md:text-sm items-center gap-x-2 w-full">
        <span><a href="https://izack.dev">izack.dev</a> </span>
        {/* <FaAngleRight  />
            <span>{section}</span><FaAngleRight  />
            <span>{currentPage}</span> */}
        <AnimatePresence>
          <motion.span
            key={section + currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-row gap-x-2 items-center"
          >
            <FaAngleRight  />
            <span>{section}</span><FaAngleRight  />
            <span>{currentPage}</span>
          </motion.span>
        </AnimatePresence>
    </div>
  );
}

export default PageTracker;