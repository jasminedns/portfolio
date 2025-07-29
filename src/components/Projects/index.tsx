'use client';

import { website } from "@/utils/types";
import Image from "next/image";
import { ArrowCircleRight , ArrowCircleLeft } from 'phosphor-react';
import "@/app/globals.css";
import { useState, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type ProjectProps = {
    purpleFont: string;
}

gsap.registerPlugin(ScrollTrigger);

const Projects = ({purpleFont}:ProjectProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + website.length) % website.length);
    }

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % website.length);
    }

    useEffect(() => {
        const projectNames = [
            "zooproject",
            "npmproject",
            "reactproject",
            "gameproject",
            "steamwrecked",
            "neila"
        ];

  projectNames.forEach((className) => {
    gsap.fromTo(
      `.${className}`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${className}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}, []);

    return (
        <div id='projects' className='my-10 min-h-screen flex flex-col justify-evenly'>
            <div className="text-center mb-[48px] md:mb-3">
                <h2 className='inline text-6xl text-center uppercase relative'>
                    Projects
                    <span id="project_decoration" className="h-[3px] w-full bg-[#e0b0ff] absolute top-21 left-0"></span>
                </h2>
            </div>
            <div className="md:hidden project-list flex flex-col items-center">
                {website.map((item, index) => (
                    <div key={index} className={`${item.name.toLowerCase().replace(/\s+/g, '')} bg-[#272928] my-6 text-center p-3`}>
                        <div className='w-full my-4'>
                            <h2 className={`text-2xl text-[#e0b0ff] ${purpleFont}`}>{item.name}</h2>
                            <div className={`my-6 text-[#e0b0ff] ${purpleFont}`}>Made with: 
                                <div className="mx-4 flex flex-wrap md:flex-row justify-center">
                                    {item.languages.map((lang, i) => (
                                        <span key={i} className={`mx-3 my-2 project__languages--${lang.toLowerCase()}`}>{lang}</span>
                                    ))}
                                </div>
                            </div>
                            <a 
                                href={item.link} 
                                target='_blank'
                                rel='noopener'
                                title={`Visit ${item.name}`}
                                className="block"
                            >
                                <Image 
                                src={item.image} 
                                alt={`thumbnail of the ${item.name}`} 
                                width={1000} 
                                height={300} 
                                className="h-auto w-full rounded-2xl"
                                />                            
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden md:block my-3 text-center'>
                <div className='w-full my-4'>
                    <h2 className="text-2xl text-[#e0b0ff]">{website[currentIndex].name}</h2>
                    <div className="my-6 text-[#e0b0ff]">Made with: 
                        <div className="mx-4 flex flex-wrap md:flex-row justify-center">
                            {website[currentIndex].languages.map((item, index) => (
                                <span key={index} className={`mx-3 my-2 project__languages--${item.toLowerCase()}`}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-6 my-3 items-center">
                        <ArrowCircleLeft size={48} color="#e0b0ff" onClick={prevProject} className="cursor-pointer p-0 transition-all duration-500 ease-in-out w-[10%] hover:p-[2px] hover:transition-all hover:duration-500 hover:ease-in-out"/>
                        <a 
                            href={website[currentIndex].link} 
                            target='_blank'
                            rel='noopener'
                            title={`Visit ${website[currentIndex].name}`}
                            className="block"
                        >
                            <Image src={website[currentIndex].image} alt={`thumbnail of the ${website[currentIndex].name}`} width={1000} height={300} className="h-auto w-full rounded-2xl"/>                            
                        </a>
                        <ArrowCircleRight size={48} color="#e0b0ff" onClick={nextProject} className="cursor-pointer p-0 transition-all duration-500 ease-in-out w-[10%] hover:p-[2px] hover:transition-all hover:duration-500 hover:ease-in-out"/>
                    </div>
                </div>
            </div>

      </div>
    )
}

export default Projects;