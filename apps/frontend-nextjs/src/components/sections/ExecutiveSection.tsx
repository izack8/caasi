'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

function ExecutiveSection() {
    const router = useRouter();

    return (
        <section className="journey-section text-base text-justify w-full flex flex-col gap-y-5">
                <p>
                I'm a software engineer + ai/ml student, who loves to explore the intersection of creativity and engineering. I also love leveraging technology to build fun, creative projects that can make a positive impact on people's lives.
                </p>
                
                <p>I recently built a <span className="font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-200" onClick={() => router.push('/work/projects/sign-a-photo-jpg')}>web-app</span> that uses computer vision to detect the American Sign Language (ASL) alphabets, <a className="font-semibold cursor-pointer italic hover:text-rose-500 transition-colors duration-200" href="https://vt.tiktok.com/ZSmNxAXJR/" target="_blank" rel="noopener noreferrer">which garnered 710k+ views, 150k+ likes on TikTok</a>, and 500+ weekly page visits (which is the <b>craziest</b> thing ever).
                 </p>

                
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