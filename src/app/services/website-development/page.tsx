'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  PackageSearchIcon,
  Settings2Icon,
  EyeClosed,
  ArrowUpRight,
  ArrowUpRightFromCircle,
} from 'lucide-react';
import { Features } from './Features';
import { Spotlight } from '../../../components/ui/spotlight';
import whyus from '../../../assets/testiimg.jpg';
import whyus2 from '../../../assets/Animation - 1741936606753.gif';
import whyus3 from '../../../assets/Contact us Banner.png';
import whyus4 from '../../../assets/cardfooter.png';
import whyus5 from '../../../assets/GALLERY (14).png';
import { Transition } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { InfiniteImageScroller } from '../../../components/ui/infinite-moving-cards';
import { AuroraText } from '../../../components/magicui/aurora-text';
import Textdivide from './features1';
import { useTheme } from "next-themes";
import { OrbitingCircles } from "@/components/ui/OrbitingCircles";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Check, ChevronRightIcon, LinkIcon } from "lucide-react";
import { CardHoverEffectDemo, Landingtwo } from './Webdev';
import { Component, InfiniteImageScrollerDemo, SpotlightSection, Whyus, FeaturesSection } from './WebDevPageSections';

export default function Webdevelopment() {
  return (
    <>
      <Landingtwo/>
    </>
  );
}


