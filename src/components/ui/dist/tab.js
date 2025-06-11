"use strict";
exports.__esModule = true;
exports.Tab = void 0;
var utils_1 = require("@/lib/utils");
var react_1 = require("motion/react");
var badge_1 = require("./badge");
exports.Tab = function (_a) {
    var text = _a.text, selected = _a.selected, setSelected = _a.setSelected, _b = _a.discount, discount = _b === void 0 ? false : _b;
    return (React.createElement("button", { onClick: function () { return setSelected(text); }, className: utils_1.cn("relative w-fit px-4 py-2 text-sm font-semibold capitalize text-foreground transition-colors", discount && "flex items-center justify-center gap-2.5") },
        React.createElement("span", { className: "relative z-10" }, text),
        selected && (React.createElement(react_1.motion.span, { layoutId: "tab", transition: { type: "spring", duration: 0.4 }, className: "absolute inset-0 z-0 rounded-full bg-background shadow-sm" })),
        discount && (React.createElement(badge_1.Badge, { className: utils_1.cn("relative z-10 whitespace-nowrap bg-gray-100 text-xs text-black shadow-none hover:bg-gray-100 rounded-full", selected
                ? "bg-[#F3F4F6] hover:bg-[#F3F4F6]"
                : "bg-gray-300 hover:bg-gray-300") }, "Save 35%"))));
};
