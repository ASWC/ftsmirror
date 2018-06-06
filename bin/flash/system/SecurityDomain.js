define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SecurityDomain {
        static get currentDomain() {
            if (!SecurityDomain._instance) {
                SecurityDomain._instance = new SecurityDomain();
            }
            return SecurityDomain._instance;
        }
    }
    exports.SecurityDomain = SecurityDomain;
});
//# sourceMappingURL=SecurityDomain.js.map