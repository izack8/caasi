'use client'

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function SummarySection() {
    const summaryContent = [
        {year: "2026", title: "sign-a-photo.jpg", desc:"A web app that uses computer vision to detect ASL alphabets, built with the theme of a photobooth", type:"Project", link: "/work/projects/sign-a-photo-jpg"}, // ← fixed your link (was missing /)
        {year: "2025", title: "Portfolio Website", desc:"Developments of my personal website, inspired by other engineers, built by yours truly", type:"Project", link: "/work/projects/portfolio-website"},
        {year: "2025", title: "Implementing a CRUD UI", desc:"A short article about implementing a CRUD UI for my personal website", type:"Article", link: "/writings/posts/2025-10-17-implementing-a-ui-for-crud"},
    ]
    
    return (
        <div className="pt-4">
            <p>Featured works: (click me to explore more!)</p>
            <div className="flex md:flex-row gap-4 w-full mt-1 flex-col">
                {summaryContent.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <Button className="md:w-1/3 w-full flex outline-1 outline-white bg-transparent hover:bg-stone-100">
                            <div className="flex flex-col gap-y-1 text-left text-black py-2">
                                <h1 className="text-sm text-gray-500">{item.year}</h1>
                                <h2 className="text-lg">{item.title}</h2>
                                <h3 className="text-sm">{item.type}</h3>
                                <p className="font-normal text-sm">{item.desc}</p>
                            </div>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}