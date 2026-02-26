'use client'

import { ProjectCard } from './ProjectsSection';
import { PostCard } from './PostsClient';
import SectionLabel from '../ui/SectionLabel';

export default function FeaturedWorksSection() {
    const projContent = [
        {
  "_id": {
    "$oid": "6898c5a207c0917fb57ddb09"
  },
  "title": "Portfolio Website",
  "description": "Building my own website, using HTML, CSS, JS, Python, and FastAPI (and gradually more frameworks as I learn more). I'm trying to constantly update this website with stuff I learnt, so checkback to see if you can spot any changes!",
  "url": {
    "github": "https://github.com/izack8/caasi",
    "live": "https://izack.dev"
  },
  "year": "2025 - Present",
  "technologies": [
    {
      "name": "JavaScript",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      "name": "TypeScript",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      "name": "Python",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      "name": "FastAPI",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
    },
    {
      "name": "React",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      "name": "Tailwind CSS",
      "icon": "/icons/Tailwind_CSS_Logo.png"
    },
    {
      "name": "MongoDB",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      "name": "NextJS",
      "icon": "https://cdn.simpleicons.org/nextdotjs"
    }
  ],
  "slug": "portfolio-website",
},
{
    "title": "sign-a-photo.jpg",
  "description": "A webapp for users to learn SgSL/ASL alphabets through Computer Vision. Powered by mediapipe.",
  "url": {
    "github": "https://github.com/izack8/sign-a-photo",
    "live": "https://sign-a-photo.izack.dev"
  },
  "year": 2026,
  "technologies": [
    {
      "name": "TypeScript",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      "name": "Mediapipe",
      "icon": ""
    },
    {
      "name": "Python",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      "name": "React",
      "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      "name": "Tailwind CSS",
      "icon": "/icons/Tailwind_CSS_Logo.png"
    }
  ],
  "slug": "sign-a-photo-jpg",
}

    ]
    const postsContent = [
        {  "id": "2026-02-21-optimizing-my-apis",
  "date": "2026-02-21",
  "title": "Optimizing my APIs",
  "description": "the most brain i've ever used",},
  {  "id": "2025-08-11-finally-using-a-db",
  "date": "2025-08-11",
  "title": "Finally Using a Database (yay!)",
  "description": "Journey in integrating a simple database solution into my website.",}
    ]
    
    return (
        <div className="flex flex-col gap-y-6">
            <section className="projects-section w-full flex flex-col">
                <SectionLabel label="Featured Projects" />
                <div className="flex flex-col gap-y-7">
                {projContent.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                </div>

            </section>

            <section className="writings-section w-full flex flex-col">
                <SectionLabel label="Featured Writings" />
                <div className="flex flex-col gap-y-4">
                {postsContent.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
                </div>
            </section>
        </div>
    );
}