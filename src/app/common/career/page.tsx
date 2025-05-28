"use client";
import { useRef } from "react"; 
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import cursorImage from '../../../assets/images/cursor.png';
import messageImage from '../../../assets/images/message.png';
import acmeLogo from "../../../assets/images/acme.png";
import quantumLogo from "../../../assets/images/quantum.png";
import echoLogo from "../../../assets/images/echo.png";
import celestialLogo from "../../../assets/images/celestial.png";
import pulseLogo from "../../../assets/images/pulse.png";
import apexLogo from "../../../assets/images/apex.png";
import { Feature } from "../../../components/ui/features";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRightIcon } from "lucide-react";

export default function CareerPage() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <Landingexport />
            <Logoscrollexport />
            <BlogSlider/>
            <Featuresexport />
        </>
    );
}
                                                                                                                                                                                         
 const Landingexport = () => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <section  className="relative py-[72px] md:py-24 text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] overflow-clip" style={{ display: "flex", justifyContent: "center" }}>
                <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>
                <div className="container relative">
                    <div className="w-fit mx-auto">
                        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                            <span
                                className={cn(
                                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                                )}
                                style={{
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                }}
                            />
                            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                            <AnimatedGradientText className="text-sm font-medium">
                                Introducing Magic UI
                            </AnimatedGradientText>
                            <ChevronRightIcon
                                className="ml-1 size-4 stroke-neutral-500 transition-transformduration-300 ease-in-out group-hover:translate-x-0.5"
                            />
                        </div>
                        </div>
                    <div className="flex justify-center mt-8">
                        <div className="inline-flex relative">
                            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex">
                                One Task
                                <br /> at a Time
                            </h1>
                            <motion.div
                                drag
                                dragConstraints={sectionRef}
                                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                                whileTap={{ cursor: "grabbing" }}
                                className="size-[200px] absolute right-[476px] top-[108px] hidden md:inline cursor-grab"
                            >
                                <Image src={cursorImage} alt="Cursor image" draggable="false" />
                            </motion.div>
                            <motion.div
                                drag
                                dragConstraints={sectionRef}
                                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                                whileTap={{ cursor: "grabbing" }}
                                className="size-[200px] absolute left-[498px] top-[56px] hidden md:inline cursor-grab"
                            >
                                <Image src={messageImage} alt="Message image" draggable="false" />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center text-xl mt-8 max-w-md">Celebrate the joy of accomplishment    </p>
                    </div>
                    <div className="text-center mt-12
                    ">
                        <a className="Button_button__JJiqJ Button_light__KdYEB" aria-disabled="false" href="/settings/organizations/new?open=true">Get started today</a><a href="#learn-more" className="TeamsHeader_learnMore__Tce6T">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="icon TeamsHeader_arrowDown__rKHtB"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"></path></svg></a>
                    </div>
                 
                </div>
            </section>
        </>
    );
}

 const Logoscrollexport = () => {
    const images = [
        { src: acmeLogo, alt: "Acme Logo" },
        { src: quantumLogo, alt: "Quantum Logo" },
        { src: echoLogo, alt: "Echo Logo" },
        { src: celestialLogo, alt: "Celestial Logo" },
        { src: pulseLogo, alt: "Pulse Logo" },
        { src: apexLogo, alt: "Apex Logo" },
    ];
    return (
        <>
            <section className="dark:bg-black w-[1300px] mx-auto text-black dark:text-white py-[72px] md:py-24">
                <div className="container">
                    <h2 className="text-xl text-center text-gray-600 dark:text-gray-300">
                        Trusted by the world&apos;s most innovative teams
                    </h2>
                    <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <motion.div
                            initial={{ translateX: "0" }}
                            animate={{ translateX: "-50%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex flex-none gap-16 pr-16"
                        >
                            {[...images, ...images].map(({ src, alt }, index) => (
                                <Image key={`${alt}-${index}`} src={src} alt={alt} className="flex-none h-8 w-auto" />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

 const Featuresexport = () => {
    const features = [
        {
            title: "Integration Ecosystem",
            description:
                "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
        },
        {
            title: "Goal Setting and Tracking",
            description:
                "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
        },
        {
            title: "Secure Data Encryption",
            description:
                "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
        },
    ];
    return (
        <>
            <section className="bg-black text-white py-[72px] md:py-24">
                
                <div className="container w-[1300px] mx-auto">
                    <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">Everything you need</h2>
                    <div className="max-w-xl mx-auto">
                        <p className="text-center mt-5 text-xl text-white/70">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
                    </div>
                    <div className="mt-16 flex flex-col md:flex-row gap-4">
                        {features.map(({ title, description }) => (
                            <Feature key={title} title={title} description={description} />
                        ))}
                        
                    </div>
                </div>
            </section>
        </>
    );
}

 function BlogSlider() {


    return (
        <>
            
            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">

                        <div className="w-full flex justify-between flex-col lg:w-2/5">
                            <div className="block lg:text-left text-center">
                                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-indigo-600">blogs</span></h2>
                                <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.</p>
                                <a href="javascript:;" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">View All</a>
                            </div>
                            {/* <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                                <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-prev>
                                    <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                                <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600" data-carousel-next>
                                    <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </div> */}
                        </div>

                        
                        <div className="w-full overflow-x-auto">
                            <div className="flex gap-6 w-max px-4 py-6">
                      
                                <div className="w-80 shrink-0 group">
                                    <div className="flex items-center mb-4">
                                        <img src="https://pagedone.io/asset/uploads/1696244059.png" alt="blog" className="rounded-2xl w-full object-cover" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-3 group-hover:text-indigo-600">
                                        Clever ways to invest in product to organize your portfolio
                                    </h3>
                                    <p className="text-gray-500 leading-6 mb-6">
                                        Discover smart investment strategies to streamline and organize your portfolio...
                                    </p>
                                    <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                                        Read more
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="w-80 shrink-0 group">
                                    <div className="flex items-center mb-4">
                                        <img src="https://pagedone.io/asset/uploads/1696244074.png" alt="blog" className="rounded-2xl w-full object-cover" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-3 group-hover:text-indigo-600">
                                        How to grow your profit through systematic investment
                                    </h3>
                                    <p className="text-gray-500 leading-6 mb-6">
                                        Unlock the power of systematic investment with us and watch your profits soar...
                                    </p>
                                    <a href="#" className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                                        Read more
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
