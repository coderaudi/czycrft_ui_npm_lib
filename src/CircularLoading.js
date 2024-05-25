import { jsx as _jsx } from "react/jsx-runtime";
var CircularLoading = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 40 : _b;
    return (_jsx("div", { style: {
            width: size,
            height: size,
            borderRadius: "50%",
            border: "4px solid #ccc",
            borderTopColor: "#00bcd4",
            animation: "spin 1s linear infinite",
        } }));
};
export default CircularLoading;
