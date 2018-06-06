define(["require", "exports", "flash/display/DisplayObject"], function (require, exports, DisplayObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InteractiveObject extends DisplayObject_1.DisplayObject {
        constructor() {
            super();
            this._mouseEnabled = true;
        }
        set mouseEnabled(value) {
            this._mouseEnabled = value;
        }
        get mouseEnabled() {
            return this._mouseEnabled;
        }
        get accessibilityImplementation() { return null; }
        get contextMenu() { return null; }
        get doubleClickEnabled() { return null; }
        get focusRect() { return null; }
        get needsSoftKeyboard() { return null; }
        get softKeyboard() { return null; }
        get softKeyboardInputAreaOfInterest() { return null; }
        get tabEnabled() { return null; }
        get tabIndex() { return null; }
        requestSoftKeyboard() {
            return null;
        }
    }
    exports.InteractiveObject = InteractiveObject;
});
//# sourceMappingURL=InteractiveObject.js.map