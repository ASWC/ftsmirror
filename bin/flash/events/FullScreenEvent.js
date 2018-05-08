define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FullScreenEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, text = "", error = null) {
            super(type, bubbles, cancelable);
            this._error = error;
        }
    }
    FullScreenEvent.ASYNC_ERROR = "asyncError";
    exports.FullScreenEvent = FullScreenEvent;
});
//# sourceMappingURL=FullScreenEvent.js.map