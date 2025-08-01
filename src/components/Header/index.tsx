'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from "react";

type HeaderProps = {
    font: string;
}

const Header = ({font}:HeaderProps) => {
    const [isOpen, setOpen] = useState(false)

    const links = [
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#contacts", label: "Contacts"}
    ];

    useEffect(() => {
        if (isOpen === true) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.backgroundColor = "#e0b0ff";
        } else {
            document.documentElement.style.overflow = "auto";
            document.body.style.backgroundColor = "#272928";
        }

    }, [isOpen]);

    return (
        <header className={`items-center border-b-[0.5px] flex flex-row justify-between uppercase my-3 ${isOpen ? 'bg-[#e0b0ff] text-[#272928] border-b-[#e0b0ff]' : 'bg-[#272928] text-[#b1b1b1] border-b-[#b1b1b1]'}`}>
            <div className="md:w-[30%] my-2">
                <h1>
                    <a 
                    href="/" 
                    className={`text-5xl tracking-tighter my-4 no-underline transition-all duration-500 ease-in hover:tracking-normal 
                        hover:transition-all hover:duration-500 hover:ease-in-out font-bold ${font}`}
                    >
                    Jasmine
                    </a>
                </h1>
            </div>
            <div className="relative z-99 md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                <div className={`absolute top-15 -right-8 w-screen h-screen bg-[#e0b0ff] text-[#272928] transform transition-all duration-400 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                    <ul className="flex flex-col justify-center h-[95%] items-center text-center">
                        {links.map((item, index) => (
                            <li key={index} className="list-none text-5xl my-[48px]" onClick={() => setOpen(false)}>
                                <a 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.querySelector(item.href);
                                        if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        setOpen(false);
                                    }} 
                                    className="inline-block font-semibold text-center no-underline"                                
                                >
                                {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav className="hidden md:block m-auto w-[70%]">
                <ul className="flex justify-evenly m-0 pl-6">
                    {links.map((item, index) => (
                        <li key={index} className="list-none">
                            <a 
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section = document.querySelector(item.href);
                                    if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    setOpen(false);
                                }} 
                                className="inline-block font-semibold relative min-h-[19px] w-[84px] text-center no-underline 
                                    hover:font-bold hover:transition-all hover:duration-500 ease-in-out cursor-pointer group"
                            >
                            {item.label}
                            <span className="absolute top-1/2 left-1/2 w-[50px] h-[50px] rounded-full opacity-0 scale-0 blur-[10px] 
                                transition-all duration-500 ease-out 
                                bg-[radial-gradient(circle,rgba(186,85,211,0.6)_10%,rgba(186,85,211,0.1)_80%)] 
                                translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 group-hover:translate-x-[-50%] 
                                group-hover:translate-y-[-50%] group-hover:scale-200">
                            </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;