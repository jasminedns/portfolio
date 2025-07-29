'use client';

import { GithubLogo, LinkedinLogo } from "phosphor-react";

type FooterProps = {
    purpleFont: string;
}

const Footer = ({purpleFont}:FooterProps) => {
    return (
        <footer className={`border-t-[0.5px] border-t-[#e0b0ff] mt-4 text-[#b1b1b1]`} id='contacts'>
            <div className="items-center flex flex-col md:flex-row flex-wrap justify-evenly py-24">
                <div className='flex flex-col justify-center mx-0 my-4 text-center w-[50%] relative'>
                    <p className={`my-4 mx-0 `}>
                        Send me an{' '}
                        <a
                            href="mailto:jasminedanese@cloud.com"
                            className={`font-bold no-underline relative inline-block group ${purpleFont} text-[#e0b0ff]`}
                        >
                            E-Mail
                            <span className="absolute left-[0] bottom-[-4px] w-full h-[1px] bg-[#e0b0ff] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </a>
                    </p>
                    <p className="my-4 mx-0">
                        Send a message {' '}
                        <a 
                            href="tel:+460769366571" className={`font-bold no-underline relative inline-block group ${purpleFont} text-[#e0b0ff]`}
                        >
                            here
                            <span className="absolute left-[0] bottom-[-4px] w-full h-[1px] bg-[#e0b0ff] origin-left scale-x-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-x-100"></span>
                        </a>
                    </p>
                </div>
                <div className='flex flex-row justify-center text-right w-[50%] py-6'>
                    <a 
                        href='https://github.com/jasminedns' 
                        target="_blank"
                        rel="noopener"
                        title="Visit Jasmine Danese's GitHub profile"
                    >
                        <GithubLogo size={32} color='white' className="cursor-pointer m-4 p-0 transition-all duration-500 ease-in-out hover:p-0.5 hover:transition-all hover:duration-500 hover:ease-in-out"/>
                    </a>
                    
                    <a
                        href="https://www.linkedin.com/in/jasmine-danese-96039820a/"
                        target="_blank"
                        rel="noopener"
                        title="Visit Jasmine Danese's LinkedIn profile"
                    >
                        <LinkedinLogo size={32} color='white' className="cursor-pointer m-4 p-0 transition-all duration-500 ease-in-out hover:p-0.5 hover:transition-all hover:duration-500 hover:ease-in-out"/>
                    </a>
                </div>
            </div>
            <div className='text-xs mb-3 text-center'>
                <p>© 2023 Jasmine Danese</p>
            </div>
        </footer>
    )
}

export default Footer;