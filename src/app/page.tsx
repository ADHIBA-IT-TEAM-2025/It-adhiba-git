'use client';
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HEADERIT from '@/components/A-header/header';
import Landingit from '@/components/B-components/LANDING/home';
import { Footerit } from '@/components/A-header/footer';

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 8, // Slightly higher for extra smoothness
  //     easing: t => 1 - Math.pow(1 - t, 4), // More natural easing
  //     smoothWheel: true,
  //   });

  //   const raf = (time: number) => {
  //     lenis.raf(time);
  //     window.requestAnimationFrame(raf);
  //   };

  //   window.requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div>
      <Landingit />
    </div>
  );
}
