"use client";

import { useRouter } from "next/navigation"
import BackButton from "@/components/ui/BackButton";
import MotionWrapper from "@/components/ui/MotionWrapper";


export default function NotFound() {

  return (
    <>
          <BackButton section="home"/>
          <MotionWrapper id="not-found">
            <div className="items-start">
                <h1 className="text-4xl font-bold">{`404. Not found :(`}</h1>
              </div>
            <div className="flex flex-col items-center justify-center p-8">
              
            <p>Oops, are you supposed to be here :o?</p>
            <p>(but if you are, please let me know how you got here lol)</p>
            <p>anyways, there are 3 secrets hidden on this site! find them all and tell me where :p</p>
            </div>
          </MotionWrapper>

    </>
  );
}