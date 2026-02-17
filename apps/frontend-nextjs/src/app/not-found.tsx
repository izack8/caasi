"use client";

import { useRouter } from "next/navigation"
import { FaAngleLeft } from "react-icons/fa";
import BackButton from "@/components/ui/BackButton";
import MotionWrapper from "@/components/ui/MotionWrapper";


export default function NotFound() {

    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    };

  return (
    <>

        <div className="mb-3">
                <BackButton />
            </div>
        
          <MotionWrapper id="not-found">
            <div className="p-8 text-center">
            404. Oops, are you supposed to be here :o? 
            </div>
          </MotionWrapper>

    </>
  );
}