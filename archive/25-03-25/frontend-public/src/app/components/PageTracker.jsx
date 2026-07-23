import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PageTracker({ pathname }) {
  const navigate = useNavigate();
  
  // Parse pathname to get hierarchical breadcrumbs
  const segments = pathname
    .split('/')
    .filter(segment => segment.length > 0);


  return (
    <div className="flex flex-row text-sm lg:text-xs xl:text-sm gap-x-1 w-full h-full items-center">
      
      <span className="cursor-pointer" onClick={() => navigate('/')}>
        izack.dev
      </span>
      
      {segments.map((segment, index) => (
        <span key={index} className="flex items-center gap-x-1">
          <FaAngleRight />
          <span className={index === segments.length - 1 ? 'flex-1 min-w-0 break-words' : ''}>
            {segment}
          </span>
        </span>
      ))}
    </div>
  );
}

export default PageTracker;