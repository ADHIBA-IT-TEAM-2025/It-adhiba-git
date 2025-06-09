'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var features_split_image_01_b4363cde_png_1 = require("../../../assets/features-split-image-01.b4363cde.png");
function DigitalMarketingPage() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { className: "bg-gray-950 pt-16 px-4 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "title sm:text-4xl md:text-5xl text-white text-center font-bold mb-6" }, "Build up the whole picture"),
                react_1["default"].createElement("p", { className: "mb-16 mx-auto intro sm:max-w-xl text-center text-gray-400 text-lg" }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."),
                react_1["default"].createElement("ul", { className: "flex flex-col flex-wrap justify-center pt-15 mb-20 text-center border-b border-gray-900 sm:flex-row" }, Array.from({ length: 6 }).map(function (_, i) { return (react_1["default"].createElement("li", { key: i, className: "w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3" },
                    react_1["default"].createElement("span", { className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full" }),
                    react_1["default"].createElement("h3", { className: "mb-2 text-2xl font-bold text-white" }, "Robust Workflow"),
                    react_1["default"].createElement("p", { className: "max-w-xs mx-auto text-lg text-gray-500" }, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))); })))),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement("h2", { className: "title sm:text-4xl md:text-5xl text-white text-center font-bold mb-6" }, "Build up the whole picture"),
            react_1["default"].createElement("div", { className: "relative overflow-hidden pt-16 pb-32 space-y-24" }, [
                {
                    title: "Natural Language Processing (NLP):",
                    text: "The AI product utilizes advanced NLP algorithms to understand and interpret human language, enabling it to accurately process and analyze text-based inputs.",
                    imgPosition: "left"
                },
                {
                    title: "Sentiment Analysis:",
                    text: "The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback.",
                    imgPosition: "right"
                },
                {
                    title: "Natural Language Generation (NLG):",
                    text: "The AI product can generate human-like written content, summaries, or reports based on structured data or analysis results.",
                    imgPosition: "left"
                },
            ].map(function (feature, index) { return (react_1["default"].createElement("div", { key: index, className: "relative" },
                react_1["default"].createElement("div", { className: "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8" },
                    react_1["default"].createElement("div", { className: "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 " + (feature.imgPosition === "right" ? "lg:col-start-2" : "") },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#313985]" }),
                            react_1["default"].createElement("div", { className: "mt-6" },
                                react_1["default"].createElement("h2", { className: "text-3xl font-bold tracking-tight text-white" }, feature.title),
                                react_1["default"].createElement("p", { className: "mt-4 text-lg text-gray-300" }, feature.text),
                                react_1["default"].createElement("div", { className: "mt-6" },
                                    react_1["default"].createElement("p", { className: "inline-flex rounded-lg bg-[#313985] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm" }, "Learn More"))))),
                    react_1["default"].createElement("div", { className: "mt-12 sm:mt-16 lg:mt-0" },
                        react_1["default"].createElement("div", { className: "" + (feature.imgPosition === "right"
                                ? "-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                                : "-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0") },
                            react_1["default"].createElement(image_1["default"], { loading: "lazy", width: "647", height: "486", className: "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none", src: features_split_image_01_b4363cde_png_1["default"], alt: "" })))))); })))));
}
exports["default"] = DigitalMarketingPage;
