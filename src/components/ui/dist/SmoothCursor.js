"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SmoothCursor = void 0;
var react_1 = require("motion/react");
var react_2 = require("react");
var DefaultCursorSVG = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 50, height: 54, viewBox: "0 0 50 54", fill: "none", style: { scale: 0.5 } },
        React.createElement("g", { filter: "url(#filter0_d_91_7928)" },
            React.createElement("path", { d: "M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z", fill: "black" }),
            React.createElement("path", { d: "M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z", stroke: "white", strokeWidth: 2.25825 })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_d_91_7928", x: 0.602397, y: 0.952444, width: 49.0584, height: 52.428, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { "in": "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: 2.25825 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2.25825 }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_91_7928" }),
                React.createElement("feBlend", { mode: "normal", "in": "SourceGraphic", in2: "effect1_dropShadow_91_7928", result: "shape" })))));
};
function SmoothCursor(_a) {
    var _b = _a.cursor, cursor = _b === void 0 ? React.createElement(DefaultCursorSVG, null) : _b, _c = _a.springConfig, springConfig = _c === void 0 ? {
        damping: 45,
        stiffness: 400,
        mass: 1,
        restDelta: 0.001
    } : _c;
    var _d = react_2.useState(false), isMoving = _d[0], setIsMoving = _d[1];
    var lastMousePos = react_2.useRef({ x: 0, y: 0 });
    var velocity = react_2.useRef({ x: 0, y: 0 });
    var lastUpdateTime = react_2.useRef(Date.now());
    var previousAngle = react_2.useRef(0);
    var accumulatedRotation = react_2.useRef(0);
    var cursorX = react_1.useSpring(0, springConfig);
    var cursorY = react_1.useSpring(0, springConfig);
    var rotation = react_1.useSpring(0, __assign(__assign({}, springConfig), { damping: 60, stiffness: 300 }));
    var scale = react_1.useSpring(1, __assign(__assign({}, springConfig), { stiffness: 500, damping: 35 }));
    react_2.useEffect(function () {
        var updateVelocity = function (currentPos) {
            var currentTime = Date.now();
            var deltaTime = currentTime - lastUpdateTime.current;
            if (deltaTime > 0) {
                velocity.current = {
                    x: (currentPos.x - lastMousePos.current.x) / deltaTime,
                    y: (currentPos.y - lastMousePos.current.y) / deltaTime
                };
            }
            lastUpdateTime.current = currentTime;
            lastMousePos.current = currentPos;
        };
        var smoothMouseMove = function (e) {
            var currentPos = { x: e.clientX, y: e.clientY };
            updateVelocity(currentPos);
            var speed = Math.sqrt(Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2));
            cursorX.set(currentPos.x);
            cursorY.set(currentPos.y);
            if (speed > 0.1) {
                var currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
                    90;
                var angleDiff = currentAngle - previousAngle.current;
                if (angleDiff > 180)
                    angleDiff -= 360;
                if (angleDiff < -180)
                    angleDiff += 360;
                accumulatedRotation.current += angleDiff;
                rotation.set(accumulatedRotation.current);
                previousAngle.current = currentAngle;
                scale.set(0.95);
                setIsMoving(true);
                var timeout_1 = setTimeout(function () {
                    scale.set(1);
                    setIsMoving(false);
                }, 150);
                return function () { return clearTimeout(timeout_1); };
            }
        };
        var rafId;
        var throttledMouseMove = function (e) {
            if (rafId)
                return;
            rafId = requestAnimationFrame(function () {
                smoothMouseMove(e);
                rafId = 0;
            });
        };
        document.body.style.cursor = "none";
        window.addEventListener("mousemove", throttledMouseMove);
        return function () {
            window.removeEventListener("mousemove", throttledMouseMove);
            document.body.style.cursor = "auto";
            if (rafId)
                cancelAnimationFrame(rafId);
        };
    }, [cursorX, cursorY, rotation, scale]);
    return (React.createElement(react_1.motion.div, { style: {
            position: "fixed",
            left: cursorX,
            top: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            rotate: rotation,
            scale: scale,
            zIndex: 100,
            pointerEvents: "none",
            willChange: "transform"
        }, initial: { scale: 0 }, animate: { scale: 1 }, transition: {
            type: "spring",
            stiffness: 400,
            damping: 30
        } }, cursor));
}
exports.SmoothCursor = SmoothCursor;
