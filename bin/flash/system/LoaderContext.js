define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LoaderContext {
        constructor(checkPolicyFile = false, applicationDomain = null, securityDomain = null) {
            this.checkPolicyFile = false;
            this.requestedContentParent = null;
        }
        get allowLoadBytesCodeExecution() {
            return false;
        }
        set allowLoadBytesCodeExecution(value) {
        }
    }
    exports.LoaderContext = LoaderContext;
});
//# sourceMappingURL=LoaderContext.js.map