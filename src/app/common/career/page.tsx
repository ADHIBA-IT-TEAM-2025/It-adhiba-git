"use client";

import { useRef } from "react";  // ✅ Import useRef
import React from 'react';
import careerImage from '../../../assets/career.png';
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
import { useScroll, useTransform } from "framer-motion";
import appScreen from "../../../assets/images/app-screen.png";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRightIcon } from "lucide-react";

export default function career() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <Landing />
            <Logoscroll />
            <Features />
        </>
    );
}

// componunt
export  function Landing() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <>
            <section ref={sectionRef} className="relative py-[72px] md:py-24 text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] overflow-clip" style={{ display: "flex", justifyContent: "center" }}>
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
                        <p className="text-center text-xl mt-8 max-w-md">Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your success.</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get for free</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export function Logoscroll() {
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

export function Features() {
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



