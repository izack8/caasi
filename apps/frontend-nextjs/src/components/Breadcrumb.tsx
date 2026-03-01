'use client'

import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

function Breadcrumb({ pathname }: { pathname: string }) {
  
    const segments = pathname
      .split('/')
      .filter(segment => segment.length > 0);

    if (segments.length >= 4) {
      segments[2] = '...';
    }


    return (
      <div className="flex flex-row text-sm lg:text-xs xl:text-sm gap-x-1 w-full h-full items-center">
        
        <Link href="/" className="cursor-pointer">
          izack.dev
        </Link>
        
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

  export default Breadcrumb;