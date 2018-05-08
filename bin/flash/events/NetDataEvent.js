define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NetDataEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, text = "", error = null) {
            super(type, bubbles, cancelable);
            this._error = error;
        }
    }
    NetDataEvent.ASYNC_ERROR = "asyncError";
    exports.NetDataEvent = NetDataEvent;
});
//# sourceMappingURL=NetDataEvent.js.map