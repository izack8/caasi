"use client";

import { useRouter } from "next/navigation"
import BackButton from "@/components/ui/BackButton";
import MotionWrapper from "@/components/ui/MotionWrapper";


export default function NotFound() {

  return (
    <>
          <BackButton section="home"/>
          <MotionWrapper id="not-found">
            <div className="flex flex-col items-center justify-center p-8">
            <p>404. Oops, are you supposed to be here :o?</p>
            <p>(if you are, please let me know how you got here lol)</p>
            <p>anyways, there are 3 secrets hidden on this site! can you find them all? :p</p>
            </div>
          </MotionWrapper>

    </>
  );
}