define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DisplayObject extends BaseObject_1.BaseObject {
        get parent() {
            return this._parent;
        }
        static setParent(child, paent) {
            child._parent = paent;
        }
    }
    exports.DisplayObject = DisplayObject;
});
//# sourceMappingURL=DisplayObject.js.map