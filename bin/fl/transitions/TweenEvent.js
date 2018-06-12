define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TweenEvent extends Event_1.Event {
        constructor(type, time, position, bubbles = false, cancelable = false) {
            super(type, bubbles, cancelable);
            this.position = NaN;
            this.time = NaN;
        }
    }
    TweenEvent.MOTION_CHANGE = "motionChange";
    TweenEvent.MOTION_FINISH = "motionFinish";
    TweenEvent.MOTION_LOOP = "motionLoop";
    TweenEvent.MOTION_RESUME = "motionResume";
    TweenEvent.MOTION_START = "motionStart";
    TweenEvent.MOTION_STOP = "motionStop";
    exports.TweenEvent = TweenEvent;
});
//# sourceMappingURL=TweenEvent.js.map