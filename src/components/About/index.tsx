'use client';

import Image from "next/image"
import { CaretDoubleDown } from 'phosphor-react';
import { useState } from "react";

const About = () => {
    const [fullDescription, setFullDescription] = useState(false);

    return (
        <div id='about' className='my-10 min-h-screen flex flex-col justify-evenly items-center'>
            <div>
                <h2 className='text-6xl text-center uppercase my-3 relative'>
                    About
                    <span id="about_decoration" className="h-[3px] w-full bg-[#e0b0ff] absolute top-19 left-0"></span>
                </h2>
            </div>
            <div className='flex flex-col mt-8 lg:flex-row md:justify-evenly'>
                <div className='w-full h-auto md:w-[60%] lg:w-[30%] md:min-h-[500px] md:mx-auto md:mb-15'>
                    <Image src={'/personal-thumbnail.jpg'} alt='picture of Jasmine' height={500} width={300} className='h-auto w-full'/>
                </div>
                <div className='md:h-[500px] md:border-y-[0.5px] my-5 md:my-auto  text-center md:w-[80%] md:mx-auto lg:w-[40%] flex flex-col justify-center items-center'>
                    { fullDescription 
                        ?
                            <p className='text-lg leading-7 p-3'>
                                Hey there! I'm Jasmine Danese, a 27-year-old Italian front-end developer with a passion
                                for creating web experiences.<br/> For years, I worked as a waitress and in factories, but I
                                never truly felt fulfilled. My curiosity about the digital world led me to take a small
                                HTML and CSS course and that single step changed everything. I quickly fell in love with
                                coding, and just a few months later, I made a bold decision: I left my job to fully
                                embrace this new path.<br/> Now, I'm dedicated to growing as a developer and constantly
                                learning. In my free time, I enjoy reading, gaming and try new things to implement in my
                                coding. I also love to travel, it's a passion in my whole family. With them I moved to Sweden
                                in 2019 and before then I've lived in Italy and Brazil.<br/> Welcome to my space, I hope you enjoy exploring my journey and projects!
                            </p>
                        : 
                            <p className='text-lg leading-7 p-3'>
                                Hey there! I'm Jasmine Danese, a 27-year-old Italian front-end developer with a passion
                                for creating web experiences.
                            </p>
                    }
                    <div className={`mt-5 ${fullDescription ? "hidden" : "block"}`}>
                        <CaretDoubleDown size={32} className='text-[#e0b0ff] animate-bounce cursor-pointer' onClick={() => setFullDescription(true)}/>
                    </div>
                </div>
            </div> 
        </div>

    )
}

export default About;