"use strict";
exports.__esModule = true;
exports.WordRotateDemo = exports.Landingtwo = exports.CardDescription = exports.CardTitle = exports.Card = exports.HoverEffect = exports.projects = exports.CardHoverEffectDemo = void 0;
var image_1 = require("next/image");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var react_2 = require("motion/react");
var link_1 = require("next/link");
var word_rotate_1 = require("../../../components/magicui/word-rotate");
require("./videosec.css");
function CardHoverEffectDemo() {
    return (React.createElement("div", { className: "max-w-7xl mx-auto mt-5 mb-10" },
        React.createElement(exports.HoverEffect, { items: exports.projects })));
}
exports.CardHoverEffectDemo = CardHoverEffectDemo;
exports.projects = [
    {
        title: "Design",
        description: "We create visually stunning, user-focused designs that deliver intuitive and memorable online experiences.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-1.png")
    },
    {
        title: "Development",
        description: "Our expert developers build scalable, high-performing websites tailored to your business goals and needs.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-2.png")
    },
    {
        title: "Responsive",
        description: "Every website we build adapts beautifully across all devices, ensuring a consistent user experience.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-3.png")
    },
    {
        title: "Optimization",
        description: "We optimize your site for speed, SEO, and conversions to boost visibility and engagement.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-4.png")
    },
    {
        title: "Security",
        description: "Robust security measures protect your site and data, ensuring peace of mind for you.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-5.png")
    },
    {
        title: "Support",
        description: "We offer ongoing support and maintenance to keep your website running smoothly and efficiently.",
        link: "#",
        img: require("../../../assets/Web-dev/ICON-6.png")
    },
];
exports.HoverEffect = function (_a) {
    var items = _a.items, className = _a.className;
    var _b = react_1.useState(null), hoveredIndex = _b[0], setHoveredIndex = _b[1];
    return (React.createElement("div", { className: utils_1.cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className) }, items.map(function (item, idx) { return (React.createElement(link_1["default"], { href: item === null || item === void 0 ? void 0 : item.link, key: item === null || item === void 0 ? void 0 : item.link, className: "relative group block p-2 h-full w-full", onMouseEnter: function () { return setHoveredIndex(idx); }, onMouseLeave: function () { return setHoveredIndex(null); } },
        React.createElement(react_2.AnimatePresence, null, hoveredIndex === idx && (React.createElement(react_2.motion.span, { className: "absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl", layoutId: "hoverBackground", initial: { opacity: 0 }, animate: {
                opacity: 1,
                transition: { duration: 0.15 }
            }, exit: {
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 }
            } }))),
        React.createElement(exports.Card, null,
            React.createElement(image_1["default"], { src: item.img, alt: item.title, width: 50, height: 50, className: "rounded-full h-12 w-12" }),
            React.createElement(exports.CardTitle, null, item.title),
            React.createElement(exports.CardDescription, null, item.description)))); })));
};
exports.Card = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: utils_1.cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className), style: { border: "1px solid #ffffff30" } },
            React.createElement("div", { className: "relative z-50" },
                React.createElement("div", { className: "p-4" }, children)))));
};
exports.CardTitle = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", { className: utils_1.cn("text-zinc-100 font-bold tracking-wide mt-4", className) }, children)));
};
exports.CardDescription = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: utils_1.cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className) }, children)));
};
function Landingtwo() {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover transition-colors duration-500 dark:bg-gray-900" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center" },
                React.createElement("div", { className: "border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4 bg-white dark:bg-gray-800" },
                    React.createElement("span", { className: "font-inter text-xs font-medium text-gray-900 dark:text-white ml-3" }, "Explore how to use for brands."),
                    React.createElement("a", { href: "#", className: "w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 transition-colors" },
                        React.createElement("svg", { width: "17", height: "16", viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241", stroke: "white", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })))),
                React.createElement("h1", { className: "max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 dark:text-white mb-5 md:text-5xl leading-[50px]" },
                    "Custom Web Development that",
                    React.createElement("span", { className: "text-indigo-600 dark:text-indigo-400" }, " Elevates Your Brand ")),
                React.createElement("p", { className: "max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-300 mb-9" }, "We build tailored websites that engage users and grow your digital presence effortlessly."),
                React.createElement("a", { href: "#", className: "w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500" },
                    "Know More",
                    React.createElement("svg", { className: "ml-2", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))),
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("img", { src: "https://pagedone.io/asset/uploads/1691054543.png", alt: "Dashboard image", className: "rounded-t-3xl h-auto object-cover shadow-lg" })))),
        React.createElement("section", { className: "py-24 bg-white dark:bg-[#000] transition-colors duration-500" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto" },
                    React.createElement("div", { className: "relative w-full text-center lg:text-left lg:w-2/4" },
                        React.createElement("h2", { className: "text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0" }, "Enjoy the finest features with our solutions")),
                    React.createElement("div", { className: "relative w-full text-center lg:text-left lg:w-2/4" },
                        React.createElement("p", { className: "text-lg font-normal text-gray-500 dark:text-gray-300 mb-5" }, "We build modern, feature-rich websites and applications designed to enhance user experience, boost engagement, and simplify your business operations"),
                        React.createElement("a", { href: "#", className: "flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 lg:justify-start hover:text-indigo-700 dark:hover:text-indigo-300" },
                            "Button CTA",
                            React.createElement("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))),
                React.createElement(CardHoverEffectDemo, null))),
        React.createElement("section", { className: "py-24 bg-white dark:bg-black transition-colors duration-500" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto" },
                    React.createElement("div", { className: "relative w-full text-center lg:text-left lg:w-2/4" },
                        React.createElement("h2", { className: "text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0" }, "Seamless digital experiences, built for results")),
                    React.createElement("div", { className: "relative w-full text-center lg:text-left lg:w-2/4" },
                        React.createElement("p", { className: "text-lg font-normal text-gray-500 dark:text-gray-300 mb-5" }, "Our web solutions are crafted for speed, scalability, and efficiency\u2014making your online presence not just look great but perform flawlessly across all devices and browsers."),
                        React.createElement("a", { href: "#", className: "flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 dark:text-indigo-400 lg:justify-start hover:text-indigo-700 dark:hover:text-indigo-300" },
                            "Button CTA",
                            React.createElement("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))),
                React.createElement("div", { className: "flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8" },
                    React.createElement("div", { className: "group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600" },
                        React.createElement("div", { className: "bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14" },
                            React.createElement("svg", { width: "30", height: "30", fill: "none", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z", stroke: "#4F46E5", strokeWidth: "2" }))),
                        React.createElement("h4", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white" }, "Speed"),
                        React.createElement("p", { className: "text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white" }, "Experience lightning-fast transactions designed to save your time and increase efficiency.")),
                    React.createElement("div", { className: "group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600" },
                        React.createElement("div", { className: "bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14" },
                            React.createElement("svg", { width: "30", height: "30", fill: "none", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z", stroke: "#4F46E5", strokeWidth: "2" }))),
                        React.createElement("h4", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white" }, "Access"),
                        React.createElement("p", { className: "text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white" }, "Enjoy secure access to your data anytime, anywhere, with complete peace of mind.")),
                    React.createElement("div", { className: "group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600" },
                        React.createElement("div", { className: "bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14" },
                            React.createElement("svg", { width: "30", height: "30", fill: "none", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z", stroke: "#4F46E5", strokeWidth: "2" }))),
                        React.createElement("h4", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white" }, "Simplicity"),
                        React.createElement("p", { className: "text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white" }, "Our solutions are easy to use, making complex financial processes feel effortless.")),
                    React.createElement("div", { className: "group relative w-full bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600" },
                        React.createElement("div", { className: "bg-white dark:bg-gray-700 rounded-full flex justify-center items-center mb-5 w-14 h-14" },
                            React.createElement("svg", { width: "30", height: "30", fill: "none", viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("path", { d: "M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z", stroke: "#4F46E5", strokeWidth: "2" }))),
                        React.createElement("h4", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-3 capitalize transition-all duration-500 group-hover:text-white" }, "Support"),
                        React.createElement("p", { className: "text-sm font-normal text-gray-500 dark:text-gray-300 transition-all duration-500 leading-5 group-hover:text-white" }, "Get expert help whenever you need it with our dedicated support team."))))),
        React.createElement("section", { className: "py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-white dark:bg-black transition-colors duration-500" },
            React.createElement("div", { className: "w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" },
                React.createElement("div", { className: "w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1" },
                    React.createElement("div", { className: "w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex" },
                        React.createElement("div", { className: "w-full flex-col justify-center items-start gap-8 flex" },
                            React.createElement("div", { className: "flex-col justify-start lg:items-start items-center gap-4 flex" },
                                React.createElement("h6", { className: "text-gray-400 dark:text-gray-400 text-base font-normal leading-relaxed" }, "About Us"),
                                React.createElement("div", { className: "w-full flex-col justify-start lg:items-start items-center gap-3 flex" },
                                    React.createElement("h2", { className: "text-indigo-700 dark:text-indigo-400 text-4xl font-bold font-manrope leading-normal lg:text-start text-center" }, "The Tale of Our Achievement Story"),
                                    React.createElement("p", { className: "text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center" }, "Our journey in web development reflects true teamwork and dedication. From simple websites to complex platforms, we\u2019ve overcome technical challenges, delivered successful projects, and built long-term trust with our clients."))),
                            React.createElement("div", { className: "w-full flex-col justify-center items-start gap-6 flex" },
                                React.createElement("div", { className: "w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1" },
                                    React.createElement("div", { className: "w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" },
                                        React.createElement("h4", { className: "text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9" }, "Frontend Magic"),
                                        React.createElement("p", { className: "text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed" }, "Sleek interfaces built for seamless user experience.")),
                                    React.createElement("div", { className: "w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" },
                                        React.createElement("h4", { className: "text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9" }, "Strong Backend"),
                                        React.createElement("p", { className: "text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed" }, "Strong code runs quietly behind every click."))),
                                React.createElement("div", { className: "w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1" },
                                    React.createElement("div", { className: "w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" },
                                        React.createElement("h4", { className: "text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9" }, "Responsive Design"),
                                        React.createElement("p", { className: "text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed" }, "Perfect on mobile, tablet, and desktop too.")),
                                    React.createElement("div", { className: "w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" },
                                        React.createElement("h4", { className: "text-gray-900 dark:text-white text-2xl font-bold font-manrope leading-9" }, "Scalable Solutions"),
                                        React.createElement("p", { className: "text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed" }, "We build to grow with your future needs."))))),
                        React.createElement("button", { className: "sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 dark:bg-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-700 rounded-lg shadow transition-all duration-700 ease-in-out justify-center items-center flex" },
                            React.createElement("span", { className: "px-1.5 text-indigo-600 dark:text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out" }, "Read More"),
                            React.createElement("svg", { className: "group-hover:translate-x-0.5 transition-all duration-700 ease-in-out", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
                                React.createElement("path", { d: "M6.75265 4.49658L11.2528 8.99677L6.75 13.4996", stroke: "#4F46E5", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })))),
                    React.createElement("div", { className: "w-full lg:justify-start justify-center items-start flex" },
                        React.createElement("div", { className: "sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 dark:sm:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:border-gray-700 relative" },
                            React.createElement("img", { className: "sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover", src: "https://pagedone.io/asset/uploads/1717742431.png", alt: "about Us image" }))))))));
}
exports.Landingtwo = Landingtwo;
function WordRotateDemo() {
    return (React.createElement(word_rotate_1.WordRotate, { className: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent", words: ["Word", "Acceptance"] }));
}
exports.WordRotateDemo = WordRotateDemo;
