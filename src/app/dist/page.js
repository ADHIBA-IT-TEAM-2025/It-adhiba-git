'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var home_1 = require("@/components/B-components/LANDING/home");
function Home() {
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
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(home_1["default"], null)));
}
exports["default"] = Home;
