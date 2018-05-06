define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class StageVideoAvailabilityEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, text = "", error = null) {
            super(type, bubbles, cancelable);
            this._error = error;
        }
    }
    StageVideoAvailabilityEvent.ASYNC_ERROR = "asyncError";
    exports.StageVideoAvailabilityEvent = StageVideoAvailabilityEvent;
});
//# sourceMappingURL=StageVideoAvailabilityEvent.js.map