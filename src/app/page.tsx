'use client';

import Image from 'next/image';
import { Overpass_Mono } from 'next/font/google';
import About from '@/components/About';
import Projects from '../components/Projects';
import "./globals.css";
import { CaretDoubleDown } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const overpassMono = Overpass_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-overpass-mono',
});

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [fullWelcome, setFullWelcome] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = intro ? "hidden" : "auto";
  }, [intro]);

  useEffect(() => {
    const duration = 2000;
    const target = 100;
    const intervalTime = duration / target;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);

      if (current >= target) {
        clearInterval(interval);
        setAnimateOut(true); 
        setTimeout(() => setIntro(false), 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    gsap.fromTo(
      "#about_decoration",
      { width: 0 },
      {
        width: "100%",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      "#project_decoration",
      { width: 0 },
      {
        width: "100%",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

  }, []);

  return (
    <div className='relative page'>
      {intro && 
        <div className={`grid grid-cols-3 text-2xl text-black absolute z-99 bg-[#e0b0ff] min-h-screen min-w-screen -right-8 -top-22 transition-all duration-500 ease-in-out ${overpassMono.className} ${animateOut ? '-translate-y-[150%]' : 'translate-y-0'}`}>
          <div className='flex flex-col justify-between items-start p-4 '>
            <div className='counter-up-left rotate-270 mt-10 ml-20'>
              {count}
            </div>
            <div className='counter-down-left rotate-270 mb-20 ml-20'>
              {count}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='counter-left'>
              {count}
            </div>
            <div className='counter-right'>
              {count}
            </div>
          </div>
          <div className='flex flex-col justify-between items-end p-4'>
            <div className='counter-up-right rotate-90 mt-10'>
              {count}
            </div>
            <div className='counter-down-right rotate-90 mb-20'>
              {count}
            </div>
          </div>
        </div>
      }
      <div className='relative min-h-[90vh] md:flex md:flex-col md:justify-center md:items-center'>
        <Image src='/home-bg.jpg' alt='purple background image' width={1000} height={700} className='hidden lg:block mt-5 w-full h-[90vh]'/>
        <div className='text-center md:border-0 md:absolute md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-full md:p-[25px]'>
          <div className="mx-0 md:py-10 grid grid-rows-[1fr_1fr_1fr] md:grid-cols-2 min-h-[90vh]">
            <div className={`text-8xl tracking-tighter uppercase text-[#e0b0ff] lg:text-[ivory] lg:pl-10 md:row-start-1 ${overpassMono.className} my-auto`}>
              <h2 className='md:py-0 text-left'>Front-</h2>
              <h2 className='md:py-0 text-left'>end</h2>
            </div>
            <div className={`text-8xl tracking-tighter uppercase text-[#e0b0ff] lg:text-[ivory] lg:pr-10 md:row-start-3 md:col-start-2 ${overpassMono.className} my-auto`}>
              <h2 className='text-right'>Dev</h2>
              <h2 className='text-right'>eloper</h2>
            </div>
            <div className='my-auto flex flex-col items-center text-lg leading-7 font-bold md:text-[ivory] row-start-2 md:col-start-1 md:col-end-3 md:px-30'>
              { fullWelcome 
                ? 
                  <p>
                    On this website, you'll get a glimpse
                    into who I am, my journey as a developer, and the projects I've been working on.
                    I don't know why you're here, maybe just for curiosity, either way,
                    I hope you find something that sparks your interest. If you have any questions 
                    or want to connect, don't hesitate to reach out. Enjoy your visit!
                  </p> 
                : 
                  <p>
                    Welcome! I'm thrilled to have you here!
                  </p>
              }
              <div className={`${fullWelcome ? "hidden" : "block"} mt-5`}>
                <CaretDoubleDown className='text-[#e0b0ff] animate-bounce cursor-pointer' size={32} onClick={() => setFullWelcome(true)}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Projects purpleFont={overpassMono.className}/>
    </div>
  );
}
