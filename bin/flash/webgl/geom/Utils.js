define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Utils {
        static multiply(target, source, source2) {
            for (var i = 0; i < target.length; i++) {
                target[i] = source[i] * source2[i];
            }
        }
        static divide(target, source, source2) {
            for (var i = 0; i < target.length; i++) {
                target[i] = source[i] / source2[i];
            }
        }
        static subtract(target, source, source2) {
            for (var i = 0; i < target.length; i++) {
                target[i] = source[i] - source2[i];
            }
        }
        static copy(target, source) {
            for (var i = 0; i < target.length; i++) {
                target[i] = source[i];
            }
        }
        static add(target, source, source2) {
            for (var i = 0; i < target.length; i++) {
                target[i] = source[i] + source2[i];
            }
        }
    }
    Utils.PRECISION = 0.000001;
    exports.Utils = Utils;
});
//# sourceMappingURL=Utils.js.map