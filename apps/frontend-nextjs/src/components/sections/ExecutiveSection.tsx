'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroTitle from "../HeroTitle";

function ExecutiveSection() {
    const router = useRouter();

    return (
        <section className="journey-section text-base text-justify w-full flex flex-col gap-y-5">
            
            <div className="flex flex-col items-center gap-y-4">
                <p>
                Hello! My name is Isaac, or affectionately known as <b>izack/iz</b> by my friends. I'm a software engineer + ai/ml enthusiast, who loves exploring the intersection of technology and creativity, to build fun and creative projects.
                </p>

                <p>I am currently working as a software engineer at <span className="font-semibold"><a href="https://nets.com.sg" className="underline hover:text-rose-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">NETS</a></span>, Singapore's national digital payment system and infrastructure, where I build in-house workflow solutions for reporting and analytics, while further enhancing communication channels between <span className="font-semibold"><a href="https://en.wikipedia.org/wiki/List_of_banks_in_Singapore" className="underline hover:text-rose-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">local banks</a></span> :D.</p>
                
                <p>I also recently built a <span className="font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-200" onClick={() => router.push('/work/projects/sign-a-photo-jpg')}>web-app</span> that uses computer vision to detect the American Sign Language (ASL) alphabets, <a className="font-semibold cursor-pointer italic hover:text-rose-500 transition-colors duration-200" href="https://vt.tiktok.com/ZSmNxAXJR/" target="_blank" rel="noopener noreferrer">which garnered 710k+ views, 150k+ likes on TikTok</a>, and 500+ weekly page visits (which is the <b>craziest</b> thing ever).
                 </p>

                 <Image className="md:w-1/2 rounded-md" src="/images/intersection.png" alt="image of intersection of technology and creativity" width={500} height={500} />
            
             </div>

                
            <div className="flex w-full">
                <CallToAction />
            </div>
        </section>
    );
}
export default ExecutiveSection;

function CallToAction() {

    const ctaContent = [
        {label: "🎮 about me", link: "/about"},
        {label: "🌻", link: "/favorites"},
    ]

    return (
        <div className="flex flex-row gap-x-3">
            {ctaContent.map((item, index) => (
                <Link key={index} href={item.link} className="font-semibold cursor-pointer transition-colors duration-200 text-slate-300 hover:bg-slate-700 hover:text-white bg-slate-800 rounded-md p-2 cursor-pointer">
                    {item.label}
                </Link>
            ))}
        </div>
    );
}