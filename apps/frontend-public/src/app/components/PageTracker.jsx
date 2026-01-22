import { FaAngleRight } from "react-icons/fa";

function PageTracker({ section, currentPage }) {
  return !currentPage ? (
    <div className="flex flex-row text-sm">
        <span><a href="https://izack.dev">izack.dev</a></span>
    </div>
  ) : (
    <div className="flex flex-row text-xs md:text-sm items-center gap-x-2">
        <span><a href="https://izack.dev">izack.dev</a> </span><FaAngleRight  />
        <span>{section}</span><FaAngleRight  />
        <span>{currentPage}</span>
    </div>
  );
}

export default PageTracker;