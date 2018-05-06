define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ActivityEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, activating = false) {
            super(type, bubbles, cancelable);
            this._activating = activating;
        }
        get activating() {
            return this._activating;
        }
        set activating(value) {
            this._activating = value;
        }
    }
    exports.ActivityEvent = ActivityEvent;
});
//# sourceMappingURL=ActivityEvent.js.map