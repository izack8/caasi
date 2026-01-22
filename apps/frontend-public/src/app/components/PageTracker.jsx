import { FaAngleRight } from "react-icons/fa";

function PageTracker({ currentPage }) {
  return !currentPage ? (
    <div className="flex flex-row text-md">
        <span><a href="https://izack.dev" target="_blank" rel="noopener noreferrer">izack.dev</a></span>
    </div>
  ) : (
    <div className="flex flex-row text-md items-center gap-x-1">
        <span><a href="https://izack.dev" target="_blank" rel="noopener noreferrer">izack.dev</a> </span><FaAngleRight  />
        <span className="ml-1">{currentPage}</span>
    </div>
  );
}

export default PageTracker;