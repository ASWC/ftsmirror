define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DRMReturnVoucherCompleteEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, text = "", error = null) {
            super(type, bubbles, cancelable);
            this._error = error;
        }
    }
    DRMReturnVoucherCompleteEvent.ASYNC_ERROR = "asyncError";
    exports.DRMReturnVoucherCompleteEvent = DRMReturnVoucherCompleteEvent;
});
//# sourceMappingURL=DRMReturnVoucherCompleteEvent.js.map