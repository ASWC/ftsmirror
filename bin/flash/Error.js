define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Error extends BaseObject_1.BaseObject {
        constructor(message = "", id = 0) {
            super();
            this.message = message;
            this._errorID = id;
            Error._GolbalErrors.push(this);
        }
        get errorID() {
            return this._errorID;
        }
        getStackTrace() {
            return this.message;
        }
        static GetLastError() {
            if (Error._GolbalErrors.length) {
                return Error._GolbalErrors[Error._GolbalErrors.length - 1];
            }
            return null;
        }
    }
    Error._GolbalErrors = [];
    exports.Error = Error;
});
//# sourceMappingURL=Error.js.map