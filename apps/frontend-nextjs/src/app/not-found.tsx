"use client";

import { useRouter } from "next/navigation"
import BackButton from "@/components/ui/BackButton";
import MotionWrapper from "@/components/ui/MotionWrapper";


export default function NotFound() {

  return (
    <>
          <BackButton section="home"/>
          <MotionWrapper id="not-found">
            <div className="p-8 text-center">
            404. Oops, are you supposed to be here :o? 
            </div>
          </MotionWrapper>

    </>
  );
}