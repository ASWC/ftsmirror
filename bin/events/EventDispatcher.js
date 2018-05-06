define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EventDispatcher {
        constructor(target = null) {
        }
        willTrigger(type) {
            return false;
        }
        removeEventListener(type, listener, useCapture = false) {
        }
        hasEventListener(type) {
            return false;
        }
        dispatchEvent(event) {
            return false;
        }
        addEventListener(type, listener, useCapture = false, priority = 0, useWeakReference = false) {
        }
    }
    exports.EventDispatcher = EventDispatcher;
});
//# sourceMappingURL=EventDispatcher.js.map