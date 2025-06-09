"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var theme_provider_1 = require("../components/shadcn/ui/theme-provider");
var header_1 = require("@/components/A-header/header");
var footer_1 = require("@/components/A-header/footer");
exports.metadata = {
    title: 'IT Adhiba - Web, App, Software & Digital Solutions',
    description: 'IT Adhiba specializes in cutting-edge website, app, and software development, along with innovative digital marketing and signage solutions to elevate your brand.'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", suppressHydrationWarning: true },
        React.createElement("body", null,
            React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true },
                React.createElement(header_1["default"], null),
                React.createElement("main", null, children),
                React.createElement(footer_1.Footerit, null)))));
}
exports["default"] = RootLayout;
