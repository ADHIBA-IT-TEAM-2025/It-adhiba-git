'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Testimonial = {
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotationValues, setRotationValues] = useState<number[]>([]);

  useEffect(() => {
    // Generate random rotation values only on the client side
    setRotationValues(
      testimonials.map(() => Math.floor(Math.random() * 21) - 10)
    );
  }, [testimonials]); // Runs only when testimonials change

  const handleNext = () => {
    setActive(prev => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const getRotateY = (index: number) => rotationValues[index] ?? 0;

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20" style={{ zIndex: "0" }}>
      <div className="relative grid grid-cols-2 md:grid-cols-2 gap-20">

        <div className="relative h-60 sm:h-80 md:h-96 lg:h-[28rem] w-64 sm:w-80 md:w-96 lg:w-[32rem] ml-10">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: getRotateY(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : getRotateY(index),
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: getRotateY(index),
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt="slider"
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          ></motion.div>
        </div>
      </div>
      <div className="flex gap-4 md:pt-0 flex items-center justify-center mt-15 mx-auto">
        <button
          onClick={handlePrev}
          className="h-13 w-13 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="h-13 w-13 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
        >
          <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
