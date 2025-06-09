import React from 'react';
import { ArrowRight } from 'lucide-react';

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
}

export function InteractiveHoverButton({
  text = 'Get a Quote',
  className,
}: InteractiveHoverButtonProps = {}) {
  return (
    <div
      className={`group relative w-42 cursor-pointer overflow-hidden rounded-full border bg-black dark:bg-white p-2 text-center font-semibold text-white dark:text-black ${className}`}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white dark:text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[#313985] transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#313985] dark:group-hover:bg-[#313985]"></div>
    </div>
  );
}

