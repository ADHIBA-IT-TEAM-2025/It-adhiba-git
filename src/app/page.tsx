'use client';
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HEADERIT from '@/components/A-header/header';
import Landingit from '@/components/B-components/LANDING/home';
import { Footerit } from '@/components/A-header/footer';
import Features from '@/app/services/website-development/features1';

export default function Home() {

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2, // Slightly higher for extra smoothness
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
