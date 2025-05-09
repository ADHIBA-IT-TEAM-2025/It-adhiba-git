'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { PackageSearchIcon, Settings2Icon, EyeClosed } from 'lucide-react';
import { Features } from './Features';
import { Spotlight } from '../../../components/ui/spotlight';
import { AuroraText } from '../../../components/magicui/aurora-text';
import whyus from '../../../assets/testiimg.jpg';
import whyus2 from '../../../assets/Animation - 1741936606753.gif';
import whyus3 from '../../../assets/Contact us Banner.png';
import whyus4 from '../../../assets/cardfooter.png';
import whyus5 from '../../../assets/GALLERY (14).png';
import { Transition } from '@headlessui/react';
import { InfiniteImageScroller } from '@/components/ui/infinite-moving-cards';
import Image, { StaticImageData } from 'next/image';

export const SpotlightSection = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="relative h-[35rem] w-full rounded-md flex items-center justify-center overflow-hidden bg-black"
            style={{
                background: `radial-gradient(circle at center, #313985, ${theme === 'dark' ? '#000' : '#fff'})`,
                maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))`,
                WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))`,
            }}
        >
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-6xl text-center text-white">
                        Crafting Digital Experience <br />
                        That <AuroraText>Inspire & Convert</AuroraText>
                    </h1>
                    <p className="mt-4 font-normal text-base text-[#8c8c8c] max-w-lg text-center mx-auto">
                        Spotlight effect is a great way to draw attention to a specific part
                        of the page.
                    </p>
                </div>
            </div>
        </div>
    );
};

export function InfiniteImageScrollerDemo() {
    return (
        <div className="h-[20rem] mb-[150px] mt-[-100px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteImageScroller
                images={[whyus5.src, whyus5.src, whyus5.src, whyus5.src, whyus5.src]}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const data = [
    {
        id: 1,
        title: '1. Choose Your Component',
        content:
            "Select the component that best suits your needs from Eldora UI's versatile collection.",
        image:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
        icon: <PackageSearchIcon className="size-6 text-primary" />,
    },
    {
        id: 2,
        title: '2. Add Utility Helpers',
        content:
            'Enhance functionality by incorporating utility helpers.',
        image:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
        icon: <Settings2Icon className="size-6 text-primary" />,
    },
    {
        id: 3,
        title: '3. Copy and Paste the Code',
        content:
            "Simply copy and paste the provided code into your project.",
        image:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png',
        icon: <EyeClosed className="size-6 text-primary" />,
    },
];

export function Component() {
    return (
        <section className="text-center mt-12 mb-12">
            <div className="flex flex-col items-center justify-center text-center mb-[44.8px]">
                <h2 className="text-white text-[3.25rem] leading-[1.1] mb-8">
                    Get Started Effortlessly
                </h2>
                <p className="text-[#dfe1f4d7] text-[0.9rem] max-w-[470px] leading-[1.8] font-normal">
                    Three simple steps to bring your ideas to life
                </p>
            </div>
            <Features data={data} />
        </section>
    );
}

export const FeaturesSection = () => {
    return (
        <div className="relative mb-25 rounded-[50px] bg-[radial-gradient(130%_130%_at_50%_20%,transparent_40%,#6633EE_100%,#FFFFFF_0px)] py-32">
            <div className="container mx-auto max-w-[1100px]">
                <div className="flex flex-col items-center justify-center text-center mb-[44.8px]">
                    <h2 className="text-white text-[3.25rem] leading-[1.1] mb-8">
                        Secure, Compliant and Fully <br /> Customizable
                    </h2>
                    <p className="text-[#dfe1f4d7] text-[0.9rem] max-w-[470px] leading-[1.8] font-normal">
                        UI Components designed to simplify compliant workflows.
                    </p>
                </div>
            </div>
        </div>
    );
};

// whytrustus

interface Testimonial {
    quote: string;
    img: StaticImageData | string;
    name: string;
    role: string;
}

export function Whyus() {
    const testimonials: Testimonial[] = [
        {
            quote: '6 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'John Doe',
            role: 'CEO, CompanyX',
        },
        {
            quote: '5 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'Jane Smith',
            role: 'Marketing Manager, CompanyY',
        },
        {
            quote: '1 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'John Doe',
            role: 'CEO, CompanyX',
        },
        {
            quote: '2 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'Jane Smith',
            role: 'Marketing Manager, CompanyY',
        },
        {
            quote: '3 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'John Doe',
            role: 'CEO, CompanyX',
        },
        {
            quote: '4 Evervault balances flexibility and security extremely well.',
            img: whyus,
            name: 'Jane Smith',
            role: 'Marketing Manager, CompanyY',
        },
    ];

    const testimonialsRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState<number>(0);
    const [autorotate, setAutorotate] = useState<boolean>(true);
    const autorotateTiming: number = 5000;

    useEffect(() => {
        if (!autorotate) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
        }, autorotateTiming);
        return () => clearInterval(interval);
    }, [active, autorotate, testimonials.length]);

    const heightFix = () => {
        if (testimonialsRef.current?.parentElement) {
            testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
        }
    };

    useEffect(() => {
        heightFix();
    }, []);

    return (
        <section className="relative px-6 styles_background__rbhqc styles_section__h_NXB">
            <div className="flex flex-col items-center justify-center max-w-[680px] text-center text-base leading-7 mx-auto mb-6">
                <h2
                    className="mx-auto text-center text-[3.25rem] leading-none tracking-[-0.02em] mb-6 last:mb-0 bg-clip-text text-transparent bg-gradient-to-b from-black via-black/70 to-black/40 dark:from-white dark:via-white/50 dark:to-white/30"
                    style={{ paddingTop: '5rem' }}
                >
                    Why Trust Us?
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                    Evervault is secure by default. We build, manage, and implement security best practices into the platform so you don’t have to.
                </div>
            </div>

            <div className="mx-auto my-12 w-fit max-w-full rounded-[24px] px-4 py-16 backdrop-blur-md bg-gradient-to-b from-[#31398590] to-[#000000] dark:from-[#1c1c2b] dark:to-[#0a0622] shadow-[0_8px_16px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(190,167,255,0.24)]">
                <div className="mx-auto relative max-w-full md:max-w-[850px]">
                    {/* Testimonial Image */}
                    <div className="relative h-32">
                        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#313985]/25 before:via-[#313985]/5 before:via-25% before:to-[#313985]/0 before:to-75%">
                            <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                                {testimonials.map((testimonial, index) => (
                                    <Transition
                                        as="div"
                                        key={index}
                                        show={active === index}
                                        className="absolute inset-0 -z-10 h-full"
                                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                        enterFrom="opacity-0 -rotate-[60deg]"
                                        enterTo="opacity-100 rotate-0"
                                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                        leaveFrom="opacity-100 rotate-0"
                                        leaveTo="opacity-0 rotate-[60deg]"
                                        beforeEnter={() => heightFix()}
                                    >
                                        <Image
                                            className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                                            src={testimonial.img}
                                            width={56}
                                            height={56}
                                            alt={testimonial.name}
                                        />

                                    </Transition>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
                        <div
                            className="relative flex flex-col h-[100px] overflow-hidden"
                            ref={testimonialsRef}
                        >
                            {testimonials.map((testimonial, index) => (
                                <Transition
                                    key={index}
                                    show={active === index}
                                    enter="transition ease-in-out duration-700"
                                    enterFrom="opacity-0 translate-y-2 absolute"
                                    enterTo="opacity-100 translate-y-0 absolute"
                                    leave="transition ease-out duration-500"
                                    leaveFrom="opacity-100 translate-y-0 absolute"
                                    leaveTo="opacity-0 translate-y-2 absolute"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#313985] dark:text-[#aab0ff] before:content-['\201C'] after:content-['\201D']">
                                        {testimonial.quote}
                                    </div>
                                </Transition>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="-m-1.5 flex flex-wrap justify-center">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={index}
                                className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-[#313985]/50 dark:focus-visible:ring-[#aab0ff] ${active === index
                                        ? 'bg-[#313985] text-white shadow-[#313985]/10 dark:bg-[#aab0ff] dark:text-[#313985]'
                                        : 'bg-white text-[#313985] hover:bg-[#e0e3ff] dark:bg-[#1c1c2b] dark:text-[#aab0ff] dark:hover:bg-[#313985]/20'
                                    }`}
                                onClick={() => {
                                    setActive(index);
                                    setAutorotate(false);
                                }}
                            >
                                <span>{testimonial.name}</span>
                                <span className={`${active === index ? 'text-[#e0e3ff]' : 'text-[#aab0ff]'}`}> - </span>
                                <span>{testimonial.role}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
