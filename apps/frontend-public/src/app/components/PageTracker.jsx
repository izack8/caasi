import { FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PageTracker({ tabs, section, currentPage, onSectionClick }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row text-sm gap-x-1 w-full h-full items-center">
      
      <a href="https://izack.dev">izack.dev</a>
      
          {tabs && (
            <>
              <FaAngleRight />
              <span>{tabs}</span>
            </>
          )}
          {section && (
            <>
              <FaAngleRight />
              <span>{section}</span>
            </>
          )}
          {currentPage && (
            <>
              <FaAngleRight />
              <span className="flex-1 min-w-0 break-words">{currentPage}</span>
            </>
          )}
    </div>
  );
}

export default PageTracker;