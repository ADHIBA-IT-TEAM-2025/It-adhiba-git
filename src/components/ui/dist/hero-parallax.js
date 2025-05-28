"use client";
"use strict";
exports.__esModule = true;
exports.ProductCard = exports.Header = exports.HeroParallax = void 0;
var react_1 = require("react");
var react_2 = require("motion/react");
var image_1 = require("next/image");
var link_1 = require("next/link");
exports.HeroParallax = function (_a) {
    var products = _a.products;
    var firstRow = products.slice(0, 5);
    var secondRow = products.slice(5, 10);
    var thirdRow = products.slice(10, 15);
    var ref = react_1["default"].useRef(null);
    var scrollYProgress = react_2.useScroll({
        target: ref,
        offset: ["start start", "end start"]
    }).scrollYProgress;
    var springConfig = { stiffness: 300, damping: 30, bounce: 100 };
    var translateX = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    var translateXReverse = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    var rotateX = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    var opacity = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    var rotateZ = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    var translateY = react_2.useSpring(react_2.useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (react_1["default"].createElement("div", { ref: ref, className: "h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]" },
        react_1["default"].createElement(exports.Header, null),
        react_1["default"].createElement(react_2.motion.div, { style: {
                rotateX: rotateX,
                rotateZ: rotateZ,
                translateY: translateY,
                opacity: opacity
            }, className: "" },
            react_1["default"].createElement(react_2.motion.div, { className: "flex flex-row-reverse space-x-reverse space-x-20 mb-20" }, firstRow.map(function (product) { return (react_1["default"].createElement(exports.ProductCard, { product: product, translate: translateX, key: product.title })); })),
            react_1["default"].createElement(react_2.motion.div, { className: "flex flex-row  mb-20 space-x-20 " }, secondRow.map(function (product) { return (react_1["default"].createElement(exports.ProductCard, { product: product, translate: translateXReverse, key: product.title })); })),
            react_1["default"].createElement(react_2.motion.div, { className: "flex flex-row-reverse space-x-reverse space-x-20" }, thirdRow.map(function (product) { return (react_1["default"].createElement(exports.ProductCard, { product: product, translate: translateX, key: product.title })); })))));
};
exports.Header = function () {
    return (react_1["default"].createElement("div", { className: "max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0" },
        react_1["default"].createElement("h1", { className: "text-2xl md:text-7xl font-bold dark:text-white" },
            "Our Work Speaks  ",
            react_1["default"].createElement("br", null),
            " for Itself"),
        react_1["default"].createElement("p", { className: "max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200" }, "Whether you're looking for UI/UX design inspiration, technical capabilities, or simply want to see what we\u2019ve built \u2014 this gallery gives you a front-row seat to our journey in shaping the digital future.")));
};
exports.ProductCard = function (_a) {
    var product = _a.product, translate = _a.translate;
    return (react_1["default"].createElement(react_2.motion.div, { style: {
            x: translate
        }, whileHover: {
            y: -20
        }, key: product.title, className: "group/product h-96 w-[30rem] relative shrink-0" },
        react_1["default"].createElement(link_1["default"], { href: product.link, className: "block group-hover/product:shadow-2xl " },
            react_1["default"].createElement(image_1["default"], { src: product.thumbnail, height: "600", width: "600", className: "object-cover object-left-top absolute h-full w-full inset-0", alt: product.title })),
        react_1["default"].createElement("div", { className: "absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" }),
        react_1["default"].createElement("h2", { className: "absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white" }, product.title)));
};
