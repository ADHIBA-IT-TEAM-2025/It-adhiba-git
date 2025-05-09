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

export function CardHoverEffectDemo() {
    return (
        <div className="w-[1300px] mx-auto px-8 mt-15 mb-15">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
        img: require("../../../assets/Web-dev/ICON-1.png"),
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
        img: require("../../../assets/Web-dev/ICON-2.png"),
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
        img: require("../../../assets/Web-dev/ICON-3.png"),
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
        img: require("../../../assets/Web-dev/ICON-4.png"),
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
        img: require("../../../assets/Web-dev/ICON-5.png"),
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
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
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
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
            <motion.div
                className="relative flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-20 mt-25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,61,207,0.5)_30%,rgba(92,36,204,0)_100%)] 
            w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:h-[900px] 
            rounded-full opacity-80 blur-3xl"></div>
                </div>

                {/* Decorative Images */}

                <Image
                    src={centerimg}
                    alt="Decorative Lines"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl sm:max-w-3xl lg:max-w-5xl h-screen z-10 object-cover"
                    width={1200}
                    height={800}
                    priority
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Image
                        src={Leftimg}
                        alt="Solutions Left"
                        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[15%] md:w-[20%] z-10"
                        width={200}
                        height={200}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Image
                        src={Rightimg}
                        alt="Solutions Right"
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[15%] md:w-[20%] z-10"
                        width={200}
                        height={200}
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 px-4 mt-15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.div
                        className="fade-animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl flex flex-col text-center lg:text-7xl font-semibold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="bg-gradient-to-r from-purple-50 via-neutral-400 to-transparent bg-clip-text text-transparent">
                                Smart Solutions
                            </span>
                            <span className="bg-gradient-to-r from-purple-50 via-neutral-400 to-transparent bg-clip-text text-transparent">
                                for Efficiency
                            </span>
                        </motion.h1>
                        <motion.p
                            className="max-w-lg mt-5"
                            style={{ color: "#ffffff70" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Innovative solutions designed to streamline and optimize<br /> your workflow efficiently.
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            className="flex items-center justify-center py-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <button
                                className="relative inline-block p-px font-semibold leading-6 text-white no-underline 
                  shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900 transition-all 
                  scale-105"
                                style={{
                                    background: "linear-gradient(rgba(88, 65, 113, 0.8), rgba(78, 74, 86, 0.8))",
                                }}
                            >
                                <div className="relative z-10 flex items-center px-6 py-2 space-x-2 rounded-xl ring-1 ring-white/10">
                                    <span>Marketplace</span>
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <CardHoverEffectDemo />
            <section className=" w-[1300px] mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="">
                            <h3 style={{ color: "#fff", fontSize: "50px", margin: "0", fontWeight: "bold", marginLeft: "60px", lineHeight: "120%" }}>Our Impact & <br />
                                <WordRotateDemo /></h3>
                        </div>
                        <Image src={cardLeftimg} alt="" className="mt-5" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="">
                            <p style={{ color: "#ffffff50", fontSize: "22px", margin: "0", fontWeight: "bold", marginLeft: "60px", textAlign: "justify" }}>Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your success.</p>

                        </div>
                        <Image src={cardRightimg} alt="" className="mt-5" /></div>
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
