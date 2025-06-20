'use client';
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("../../styles/home.css");
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var emailjs_com_1 = require("emailjs-com");
function GetInTouch() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Supportleft, null)));
}
exports["default"] = GetInTouch;
function Supportleft() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { className: "flex flex-col lg:flex-row container mx-auto" },
            react_1["default"].createElement("div", { className: "relative  w-full lg:w-2/4 mx-4 sm:mx-8 md:mx-12 lg:mx-28 xl:mx-32 my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 \r\n  before:content-[''] \r\n  before:absolute \r\n  before:w-full \r\n  before:h-full \r\n  before:-z-10 \r\n  rounded-[25px] \r\n  bg-[#313985]" },
                react_1["default"].createElement("div", { className: "p-7 " },
                    react_1["default"].createElement("h2", { className: "uppercase text-[55px] text-white text-gray-900 dark:text-white" }, "Contact info"),
                    react_1["default"].createElement("h4", { className: "text-[20px] text-white/80 dark:text-gray-400" }, "Let's Controverse"),
                    react_1["default"].createElement("div", { className: "flex mt-[35px]" },
                        react_1["default"].createElement("div", { className: "h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 " },
                            react_1["default"].createElement(lucide_react_1.PhoneOutgoingIcon, null)),
                        react_1["default"].createElement("div", { className: "ms-4" },
                            react_1["default"].createElement("h6", { className: "text-[15px] font-bold text-white dark:text-gray-300" }, "Contact Number"),
                            react_1["default"].createElement("p", { className: "text-white/80 dark:text-gray-400" }, "90253 28763"))),
                    react_1["default"].createElement("div", { className: "flex mt-[35px]" },
                        react_1["default"].createElement("div", { className: "h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 " },
                            react_1["default"].createElement(lucide_react_1.HandshakeIcon, null)),
                        react_1["default"].createElement("div", { className: "ms-4" },
                            react_1["default"].createElement("h6", { className: "text-[15px] font-bold text-white dark:text-gray-300" }, "Technical Support"),
                            react_1["default"].createElement("p", { className: "text-white/80 dark:text-gray-400" }, "99455 25896"))),
                    react_1["default"].createElement("div", { className: "flex mt-[35px]" },
                        react_1["default"].createElement("div", { className: "h-[50px] w-[50px] rounded-[10px] flex items-center justify-center text-white/80 " },
                            react_1["default"].createElement(lucide_react_1.MailsIcon, null)),
                        react_1["default"].createElement("div", { className: "ms-4" },
                            react_1["default"].createElement("h6", { className: "text-[15px] font-bold text-white dark:text-gray-300" }, "E-Mail"),
                            react_1["default"].createElement("p", { className: "text-white/80 dark:text-gray-400" }, "info@adhiba.com"))),
                    react_1["default"].createElement("div", { className: "mt-[35px]" },
                        react_1["default"].createElement("h4", { className: "text-[20px] text-white/80 dark:text-gray-400" }, "Where to Find Us"),
                        react_1["default"].createElement("p", { className: "mt-[14px] text-white/50 dark:text-gray-400 italic" },
                            "ADHIBA TECHNOLOGIES PRIVATE LIMITED",
                            react_1["default"].createElement("br", null),
                            "#2/153, Padamalaya Nagar, Narasimhanaikenpalayam, ",
                            react_1["default"].createElement("br", null),
                            "Coimbatore - 641031")),
                    react_1["default"].createElement("div", { className: "mt-[35px]" },
                        react_1["default"].createElement("h4", { className: "text-[20px] text-white/80 dark:text-gray-400" }, "Follow Us"),
                        react_1["default"].createElement("div", { className: "flex mt-[15px]" },
                            react_1["default"].createElement("div", { className: "h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  " },
                                react_1["default"].createElement(lucide_react_1.Instagram, null)),
                            react_1["default"].createElement("div", { className: "h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  " },
                                react_1["default"].createElement(lucide_react_1.Twitter, null)),
                            react_1["default"].createElement("div", { className: "h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  " },
                                react_1["default"].createElement(lucide_react_1.Youtube, null)),
                            react_1["default"].createElement("div", { className: "h-[50px] w-[50px] flex items-center justify-center rounded-[10px] text-white/65 border border-white/15 cursor-pointer transition-all  " },
                                react_1["default"].createElement(lucide_react_1.Linkedin, null)))))),
            react_1["default"].createElement("div", { className: "w-full lg:w-2/4 flex items-center justify-center mt-8 lg:mt-0" },
                react_1["default"].createElement(SignupFormDemo, null)))));
}
function SignupFormDemo() {
    var _this = this;
    var _a = react_1.useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        services: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    // Store validation error messages per field
    var _b = react_1.useState({}), errors = _b[0], setErrors = _b[1];
    var handleChange = function (e) {
        var _a;
        var _b = e.target, id = _b.id, value = _b.value;
        // Live prevent numbers for firstname/lastname
        if ((id === 'firstname' || id === 'lastname') && /[^A-Za-z]/.test(value)) {
            return; // Ignore invalid input
        }
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[id] = id === 'email' ? value.toLowerCase() : value, _a)));
    };
    var validateForm = function () {
        var nameRegex = /^[A-Za-z]{2,30}$/;
        var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        var mobileRegex = /^[0-9]{10,15}$/;
        var newErrors = {};
        if (!nameRegex.test(formData.firstname)) {
            newErrors.firstname = 'First name should be 2-30 alphabets.';
        }
        if (!nameRegex.test(formData.lastname)) {
            newErrors.lastname = 'Last name should be 2-30 alphabets.';
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number should be 10-15 digits.';
        }
        if (formData.services.length < 3 || formData.services.length > 50) {
            newErrors.services = 'Service field must be 3-50 characters.';
        }
        if (formData.message.length < 5 || formData.message.length > 200) {
            newErrors.message = 'Message should be 5-200 characters.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var serviceID, templateID, publicKey, templateParams, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!validateForm())
                        return [2 /*return*/];
                    serviceID = 'YOUR_SERVICE_ID';
                    templateID = 'YOUR_TEMPLATE_ID';
                    publicKey = 'YOUR_PUBLIC_KEY';
                    templateParams = {
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        email: formData.email,
                        mobile: formData.mobile,
                        services: formData.services,
                        message: formData.message,
                        to_email: 'sanjeev@adhiba.com' // Recipient email for your template
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, emailjs_com_1["default"].send(serviceID, templateID, templateParams, publicKey)];
                case 2:
                    _a.sent();
                    alert("Form submitted and email sent successfully!");
                    setFormData({
                        firstname: '', lastname: '', email: '', mobile: '', services: '', message: ''
                    });
                    setErrors({});
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('EmailJS error:', err_1);
                    alert("Failed to send email. Please try again later.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "max-w-md w-fit mx-auto rounded-none md:rounded-2xl p-7 shadow-input bg-white dark:bg-black" },
        react_1["default"].createElement("h2", { className: "uppercase text-[55px] text-gray-900 dark:text-white" }, "Let's Connect"),
        react_1["default"].createElement("h4", { className: "text-[20px] text-white/80 dark:text-gray-400" }, "Fill out the form, and we'll get back to you shortly"),
        react_1["default"].createElement("form", { className: "my-8", onSubmit: handleSubmit, noValidate: true },
            react_1["default"].createElement("div", { className: "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4" },
                react_1["default"].createElement("div", { className: "flex-1" },
                    react_1["default"].createElement("label", { htmlFor: "firstname", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "First Name"),
                    react_1["default"].createElement("input", { id: "firstname", value: formData.firstname, onChange: handleChange, type: "text", placeholder: "First name", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n                " + (errors.firstname ? 'border-red-500' : 'border-gray-300'), required: true }),
                    errors.firstname && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.firstname)),
                react_1["default"].createElement("div", { className: "flex-1" },
                    react_1["default"].createElement("label", { htmlFor: "lastname", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "Last Name"),
                    react_1["default"].createElement("input", { id: "lastname", value: formData.lastname, onChange: handleChange, type: "text", placeholder: "Last name", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n                " + (errors.lastname ? 'border-red-500' : 'border-gray-300'), required: true }),
                    errors.lastname && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.lastname))),
            react_1["default"].createElement("div", { className: "mb-4" },
                react_1["default"].createElement("label", { htmlFor: "email", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "Email Address"),
                react_1["default"].createElement("input", { id: "email", value: formData.email, onChange: handleChange, type: "email", placeholder: "projectmayhem@fc.com", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n              " + (errors.email ? 'border-red-500' : 'border-gray-300'), required: true }),
                errors.email && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.email)),
            react_1["default"].createElement("div", { className: "mb-4" },
                react_1["default"].createElement("label", { htmlFor: "mobile", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "Mobile Number"),
                react_1["default"].createElement("input", { id: "mobile", value: formData.mobile, onChange: handleChange, onKeyDown: function (e) {
                        // Allow control keys: backspace, delete, arrows, tab
                        if (e.key === 'Backspace' ||
                            e.key === 'Delete' ||
                            e.key === 'ArrowLeft' ||
                            e.key === 'ArrowRight' ||
                            e.key === 'Tab') {
                            return;
                        }
                        // Allow digits only (0-9)
                        if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                        }
                    }, type: "tel", placeholder: "1234567890", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n              " + (errors.mobile ? 'border-red-500' : 'border-gray-300'), required: true }),
                errors.mobile && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.mobile)),
            react_1["default"].createElement("div", { className: "mb-4" },
                react_1["default"].createElement("label", { htmlFor: "services", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "Services Looking For"),
                react_1["default"].createElement("input", { id: "services", value: formData.services, onChange: handleChange, type: "text", placeholder: "Website, Digital Marketing, etc.", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n              " + (errors.services ? 'border-red-500' : 'border-gray-300'), required: true }),
                errors.services && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.services)),
            react_1["default"].createElement("div", { className: "mb-8" },
                react_1["default"].createElement("label", { htmlFor: "message", className: "block mb-1 font-medium text-gray-900 dark:text-gray-200" }, "Your Message"),
                react_1["default"].createElement("textarea", { id: "message", value: formData.message, onChange: handleChange, placeholder: "Type your message here...", className: "w-full p-2 rounded border placeholder-gray-400 dark:placeholder-gray-600\n              " + (errors.message ? 'border-red-500' : 'border-gray-300'), rows: "4", required: true }),
                errors.message && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.message)),
            react_1["default"].createElement("button", { type: "submit", className: "w-full bg-gradient-to-br from-black to-neutral-700 dark:from-zinc-900 dark:to-zinc-900 text-white rounded-md h-10 font-medium shadow-md transition-transform duration-300 hover:scale-105" }, "Sign Up \u2192")),
        react_1["default"].createElement("div", { className: "flex justify-center space-x-4" },
            react_1["default"].createElement("button", { onClick: function () { return window.location.href = '/signup'; }, className: "text-blue-600 underline" }, "Signup"),
            react_1["default"].createElement("button", { onClick: function () { return window.location.href = '/login'; }, className: "text-blue-600 underline" }, "Login"))));
}
var BottomGradient = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("span", { className: "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" }),
        react_1["default"].createElement("span", { className: "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" })));
};
var LabelInputContainer = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex flex-col space-y-2 w-full', className) }, children));
};
