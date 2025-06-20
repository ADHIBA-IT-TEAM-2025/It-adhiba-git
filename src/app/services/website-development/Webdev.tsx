import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Leftimg from "../../../assets/Web-dev/left-img.png"
import Rightimg from "../../../assets/Web-dev/rightt-img.png"
import centerimg from "../../../assets/Web-dev/center-img.png"
import cardLeftimg from "../../../assets/Web-dev/card-left-img.png"
import cardRightimg from "../../../assets/Web-dev/card-right-img.png"
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { WordRotate } from "../../../components/magicui/word-rotate";
import centervideoimg from "../../../assets/video-placeholder.c1bbe879.jpg";
import './videosec.css';

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto mt-2 ">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Design",
        description:
            "We create visually stunning, user-focused designs that deliver intuitive and memorable online experiences.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-1.png"),
    },
    {
        title: "Development",
        description:
            "Our expert developers build scalable, high-performing websites tailored to your business goals and needs.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-2.png"),
    },
    {
        title: "Responsive",
        description:
            "Every website we build adapts beautifully across all devices, ensuring a consistent user experience.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-3.png"),
    },
    {
        title: "Optimization",
        description:
            "We optimize your site for speed, SEO, and conversions to boost visibility and engagement.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-4.png"),
    },
    {
        title: "Security",
        description:
            "Robust security measures protect your site and data, ensuring peace of mind for you.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-5.png"),
    },
    {
        title: "Support",
        description:
            "We offer ongoing support and maintenance to keep your website running smoothly and efficiently.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-6.png"),
    },
];

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        img: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="rounded-full h-12 w-12"
                        />
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <>
            <div
                className={cn(
                    "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                    className
                )}
                style={{ border: "1px solid #ffffff30" }}
            >
                <div className="relative z-50">
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <>
            <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
                {children}
            </h4>
        </>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <>
            <p
                className={cn(
                    "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
                    className
                )}
            >
                {children}
            </p>
        </>
    );
};

export function Landingtwo() {
    return (
        <>

            <section
                className="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover transition-colors duration-500 dark:bg-gray-900"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    {/* Badge */}
                    <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4 bg-white dark:bg-gray-800">
                        <span className="font-inter text-xs font-medium text-gray-900 dark:text-white ml-3">
                            Explore how to use for brands.
                        </span>
                        <a
                            href="/gallery"
                            className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 dark:text-white mb-5 md:text-5xl leading-[50px]">
                        Custom Web Development that
                        <span className="text-indigo-600 dark:text-indigo-400"> Elevates Your Brand </span>
                    </h1>

                    {/* Paragraph */}
                    <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-300 mb-9">
                        We build tailored websites that engage users and grow your digital presence effortlessly.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="#"
                        className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
                    >
                        Scroll down
                        <svg
                            className="ml-2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 7L10 12L15 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </a>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://pagedone.io/asset/uploads/1691054543.png"
                            alt="Dashboard image"
                            className="rounded-t-3xl h-auto object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-12 mb-12 bg-white dark:bg-[#000] transition-colors duration-500">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                        <div className="relative w-full text-center lg:text-left lg:w-2/4">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                                Enjoy the finest features with our solutions
                            </h2>
                        </div>
                        <div className="relative w-full text-center lg:text-left lg:w-2/4">
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-5">
                                We build modern, feature-rich websites and applications designed to enhance user experience, boost engagement, and simplify your business operations
                            </p>
                            <a href="/getintouch" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 lg:justify-start hover:text-indigo-700 dark:hover:text-indigo-300">
                                Button CTA
                                <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <CardHoverEffectDemo />

                </div>
            </section>

            <section className=" mb-12 bg-white dark:bg-black transition-colors duration-500">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                        <div className="relative w-full text-center lg:text-left lg:w-2/4">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                                Seamless digital experiences, built for results
                            </h2>
                        </div>
                        <div className="relative w-full text-center lg:text-left lg:w-2/4">
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-5">
                                Our web solutions are crafted for speed, scalability, and efficiency—making your online presence not just look great but perform flawlessly across all devices and browsers.
                            </p>
                            <a href="/getintouch" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 lg:justify-start hover:text-indigo-700 dark:hover:text-indigo-300">
                                Button CTA
                                <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">

                        <div className="group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <div className="bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14">

                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2 L3 14 H12 L11 22 L21 10 H13 Z" />
                                </svg>

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">Speed</h4>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white">
                                Experience lightning-fast transactions designed to save your time and increase efficiency.
                            </p>
                        </div>
                        <div className="group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <div className="bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14">

                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="7" cy="17" r="4" />
                                    <path d="M7 17L17 7M17 7H22M17 7V12" />
                                </svg>

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">Access</h4>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white">
                                Enjoy secure access to your data anytime, anywhere, with complete peace of mind.
                            </p>
                        </div>
                        <div className="group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <div className="bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14">

                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 4L19 8M8 15L4 19M14 14L21 21M3 3L14 14" />
                                </svg>

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">Simplicity</h4>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white">
                                Our solutions are easy to use, making complex financial processes feel effortless.
                            </p>
                        </div>
                        <div className="group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                            <div className="bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14">

                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 18V10A9 9 0 0 1 21 10V18" />
                                    <path d="M21 18a3 3 0 0 1-6 0v-3a3 3 0 0 1 6 0zM3 18a3 3 0 0 0 6 0v-3a3 3 0 0 0-6 0z" />
                                </svg>

                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white">Support</h4>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white">
                                Get expert help whenever you need it with our dedicated support team.
                            </p>
                        </div>


                    </div>
                </div>
            </section>

            <section className="  relative xl:mr-0 lg:mr-5 mr-0 bg-white dark:bg-black transition-colors duration-500">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-400 dark:text-gray-400 text-base font-normal leading-relaxed">website-development</h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story
                                        </h2>
                                        <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our journey in web development reflects true teamwork and dedication. From simple websites to complex platforms, we’ve overcome technical challenges, delivered successful projects, and built long-term trust with our clients.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">Frontend Magic</h4>
                                            <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Sleek interfaces built for seamless user experience.
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">Strong Backend</h4>
                                            <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Strong code runs quietly behind every click.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">Responsive Design</h4>
                                            <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                Perfect on mobile, tablet, and desktop too.
                                            </p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9">Scalable Solutions</h4>
                                            <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">
                                                We build to grow with your future needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 rounded-lg shadow transition-all duration-700 ease-in-out justify-center items-center flex">
                                <span className="px-1.5 text-indigo-600 dark:text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                                    Read More
                                </span>
                                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button> */}
                        </div>

                        <div className="w-full lg:justify-start justify-center items-start flex mt-12 mb-12">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 dark:sm:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:border-gray-700 relative">
                                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export function WordRotateDemo() {
    return (
        <WordRotate
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            words={["Word", "Acceptance"]}
        />
    );
}
