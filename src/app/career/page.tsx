"use client";
import { useRef } from "react";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import cursorImage from '../../../assets/images/cursor.png';
import messageImage from '../../../assets/images/message.png';
import acmeLogo from "../../assets/images/acme.png";
import quantumLogo from "../../assets/images/quantum.png";
import echoLogo from "../../assets/images/echo.png";
import celestialLogo from "../../assets/images/celestial.png";
import pulseLogo from "../../assets/images/pulse.png";
import apexLogo from "../../assets/images/apex.png";
import { Feature } from "../../components/ui/features";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRightIcon } from "lucide-react";

export default function CareerPage() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <Landingexport />
            <Logoscrollexport />
            <BlogSlider />
        </>
    );
}

const Landingexport = () => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <section className="relative py-[72px] md:py-24 text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] overflow-clip" style={{ display: "flex", justifyContent: "center" }}>
                <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>

                <div className="container relative">
                    {/* Banner */}
                    <div className="w-fit mx-auto">
                        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                            <span
                                className={cn(
                                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                                )}
                                style={{
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                }}
                            />
                            🚀 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                            <AnimatedGradientText className="text-sm font-medium">
                                We're Hiring at ADHIBA
                            </AnimatedGradientText>
                            <ChevronRightIcon className="ml-1 size-4 stroke-neutral-500 transition-transformduration-300 ease-in-out group-hover:translate-x-0.5" />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="flex justify-center mt-8">
                        <div className="inline-flex relative">
                            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex">
                                Build Your<br /> Future with Us
                            </h1>

                        </div>
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
            <section className="dark:bg-black w-[1300px] mx-auto text-black dark:text-white py-[42px] md:py-12">
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

function BlogSlider() {
    return (
        <>
            <section className="py-6 bg-white dark:bg-black transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                        {/* Left Text Block */}
                        <div className="w-full flex justify-between flex-col lg:w-2/5">
                            <div className="block lg:text-left text-center">
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] mb-5">
                                    Join Our <span className="text-indigo-600 dark:text-indigo-400">Creative Team</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-300 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                                    At ADHIBA, we believe in talent, innovation, and growth. Explore our current openings and become part of a passionate team that’s shaping the future of IT and design.
                                </p>
                                {/* <a
                                    href="javascript:;"
                                    className="cursor-pointer border border-gray-300 dark:border-gray-600 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 dark:text-white font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    View All
                                </a> */}
                            </div>
                        </div>

                        {/* Job Cards */}
                        <div className="w-full overflow-x-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-6">
                                {/* Card 1 */}
                                <div className="w-full group">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1696244059.png"
                                            alt="Digital Marketing"
                                            className="rounded-2xl w-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        Digital Marketing Executive
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-300 leading-6 mb-6">
                                        Drive campaigns, manage SEO/SEM, and build ADHIBA’s digital presence with creativity and strategy.
                                    </p>
                                    <a
                                        href="/career/digital-marketing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400 font-semibold"
                                    >
                                        Apply Now
                                        <svg
                                            width="15"
                                            height="12"
                                            viewBox="0 0 15 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Card 2 */}
                                <div className="w-full group">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1696244074.png"
                                            alt="Graphic Designer"
                                            className="rounded-2xl w-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        Graphic Designer
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-300 leading-6 mb-6">
                                        Turn ideas into stunning visuals. Design engaging graphics for digital platforms and branding.
                                    </p>
                                    <a
                                        href="/career/graphic-designer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400 font-semibold"
                                    >
                                        Apply Now
                                        <svg
                                            width="15"
                                            height="12"
                                            viewBox="0 0 15 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                                stroke="#4338CA"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
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
