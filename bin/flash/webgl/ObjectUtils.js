define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ObjectUtils {
        static getProperty(target, key) {
            if (target instanceof HTMLElement) {
                if (target.dataset[key] != undefined) {
                    return target.dataset[key];
                }
            }
            if (target[key] != undefined) {
                return target.dataset[key];
            }
            return null;
        }
        static setProperty(target, key, value) {
            if (target instanceof HTMLElement) {
                target.dataset[key] = value;
            }
            else {
                target[key] = value;
            }
        }
        static getParameter(target, key) {
            if (target['dataset'] != undefined) {
                var parameters = target['dataset'];
                if (parameters[key] != undefined) {
                    return parameters[key];
                }
            }
            return null;
        }
    }
    exports.ObjectUtils = ObjectUtils;
});
//# sourceMappingURL=ObjectUtils.js.map