'use client';
import landingban from "../../../assets/Landingthree-banner.png"
import { motion } from "framer-motion";
import Image from "next/image";
import centerimg from "../../../assets/center-img.png"
import { cn } from "@/lib/utils";
import { HoverEffect, projects } from "../design-development/Webdesign";
import { ComponentPropsWithoutRef } from "react";

const WEBCLOUDHOSTING = () => {
  return (
    <>
      <MarqueeDemo />

    </>
  );
}
export default WEBCLOUDHOSTING;

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <>
      
      
      <figure className="relative h-full me-5 mt-3 cursor-pointer overflow-hidden  p-4 ">
        <div className="flex flex-row items-center gap-2">
          <Image className="rounded-full" width="64" height="64" alt="Review" src={img} />
        </div>
      </figure>
    </>
  );
};

 function MarqueeDemo() {
  return (
    <>
      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-1.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-2.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-3.png")} />

        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-4.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-5.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-6.png")} />
        </Marquee>
        <Marquee pauseOnHover className="[--duration:30s]">
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-7.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-8.png")} />
          <ReviewCard img={require("../../../assets/Web-Designing/ICON-9.png")} />
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-black"></div>
      </div>

      <div className="mt-20 text-center">
        <span className="animate-fadeIn">
          <h1 className="text-[55px] font-semibold leading-[115%] text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white to-white/80 shadow-md">
            AI that works<br />with your OS
          </h1>
        </span>
        <p className="mt-8 mb-3 text-[16px] font-medium leading-6 text-white/60 shadow-md tracking-wide">
          Raycast AI combines leading models with powerful <br /> extensions - right on your OS
        </p>
        <div className="mt-10 flex justify-center">
          {/* <Button>Contact Us</Button> */}
        </div>
      </div>

      <CardHoverEffectDemo />
    </>
  );
}

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

 function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

 function CardHoverEffectDemo() {
  return (
    <div className="w-[1300px] mx-auto px-8 mt-15 mb-15">
      <HoverEffect items={projects} />
    </div>
  );
}