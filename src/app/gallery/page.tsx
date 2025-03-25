    "use client";
    import React from "react";
    import { HeroParallax } from "../../components/ui/hero-parallax";   
    import galler1 from '../../assets/GALLERY (1).png';
    import galler2 from  '../../assets/GALLERY (2).png'; 
    import galler3 from  '../../assets/GALLERY (3).png';  
    import galler4 from  '../../assets/GALLERY (4).png'; 
    import galler5 from  '../../assets/GALLERY (5).png'; 
    import galler6 from  '../../assets/GALLERY (6).png'; 
    import galler7 from  '../../assets/GALLERY (7).png'; 
    import galler8 from  '../../assets/GALLERY (8).png'; 
    import galler9 from  '../../assets/GALLERY (9).png'; 
    import galler10 from '../../assets/GALLERY (10).png'; 
    import galler11 from '../../assets/GALLERY (11).png'; 
    import galler12 from '../../assets/GALLERY (12).png'; 
    import galler13 from '../../assets/GALLERY (13).png'; 
    import galler14 from '../../assets/GALLERY (14).png';

    export default function HeroParallaxDemo() {
        return <HeroParallax products={products} />;
    }
    export const products = [
        {
            title: "Moonbeam",
            link: "https://gomoonbeam.com",
            thumbnail: galler1
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail: galler2
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail: galler3
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail: galler4
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail: galler5
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:galler6
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:galler7
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:galler14
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail:galler8
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            thumbnail:galler9
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            thumbnail:galler10
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            thumbnail:galler11
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            thumbnail:galler12
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            thumbnail:galler13
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            thumbnail:galler14
        },
    ];
