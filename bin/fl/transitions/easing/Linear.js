define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Linear {
        static easeNone(t, b, c, d) {
            return c * t / d + b;
        }
        static easeIn(t, b, c, d) {
            return c * t / d + b;
        }
        static easeOut(t, b, c, d) {
            return c * t / d + b;
        }
        static easeInOut(t, b, c, d) {
            return c * t / d + b;
        }
    }
    exports.Linear = Linear;
});
//# sourceMappingURL=Linear.js.map