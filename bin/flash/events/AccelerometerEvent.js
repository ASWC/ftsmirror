define(["require", "exports", "flash/events/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AccelerometerEvent extends Event_1.Event {
        constructor(type, bubbles = false, cancelable = false, timestamp = 0, accelerationX = 0, accelerationY = 0, accelerationZ = 0) {
            super(type, bubbles, cancelable);
            this._accelerationX = accelerationX;
            this._accelerationY = accelerationY;
            this._accelerationZ = accelerationZ;
            this._timestamp = timestamp;
        }
        get accelerationX() {
            return this._accelerationX;
        }
        set accelerationX(value) {
            this._accelerationX = value;
        }
        get accelerationY() {
            return this._accelerationY;
        }
        set accelerationY(value) {
            this._accelerationY = value;
        }
        get accelerationZ() {
            return this._accelerationZ;
        }
        set accelerationZ(value) {
            this._accelerationZ = value;
        }
        get timestamp() {
            return this._timestamp;
        }
        set timestamp(value) {
            this._timestamp = value;
        }
    }
    AccelerometerEvent.UPDATE = "update";
    exports.AccelerometerEvent = AccelerometerEvent;
});
//# sourceMappingURL=AccelerometerEvent.js.map