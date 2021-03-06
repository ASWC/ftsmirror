define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PressAndTapGestureEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, text = "", error = null) {
            super(type, bubbles, cancelable);
            this._error = error;
        }
    }
    PressAndTapGestureEvent.ASYNC_ERROR = "asyncError";
    exports.PressAndTapGestureEvent = PressAndTapGestureEvent;
});
//# sourceMappingURL=PressAndTapGestureEvent.js.map