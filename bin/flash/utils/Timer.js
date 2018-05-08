define(["require", "exports", "../events/EventDispatcher"], function (require, exports, EventDispatcher_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Timer extends EventDispatcher_1.EventDispatcher {
        constructor(delay, repeatCount = 0) {
            super();
            this._repeatCount = repeatCount;
            this._delay = delay;
            this._currentCount = 0;
        }
        static getGlobalTimer() {
            if (Timer.started) {
                return Timer._callBacks;
            }
            else {
                Timer._callBacks = [];
                Timer.started = true;
                Timer._frameListener = (time) => {
                    Timer.update(time);
                    Timer._requestId = requestAnimationFrame(Timer._frameListener);
                };
                Timer._requestId = requestAnimationFrame(Timer._frameListener);
            }
            return Timer._callBacks;
        }
        static update(currentTime = performance.now()) {
            if (Timer._callBacks && Timer._callBacks.length) {
                for (var i = 0; i < Timer._callBacks.length; i++) {
                    Timer._callBacks[i].tickUpdate(currentTime);
                }
            }
            let elapsedMS;
            if (currentTime > Timer.lastTime) {
                elapsedMS = Timer.elapsedMS = currentTime - Timer.lastTime;
                if (elapsedMS > Timer._maxElapsedMS) {
                    elapsedMS = Timer._maxElapsedMS;
                }
                Timer.deltaTime = elapsedMS * Timer.FPMS * Timer.speed;
            }
            else {
                Timer.deltaTime = Timer.elapsedMS = 0;
            }
            Timer.lastTime = currentTime;
        }
        reset() {
            this._currentCount = 0;
        }
        start() {
        }
        stop() {
        }
        get currentCount() {
            return this._currentCount;
        }
        get delay() {
            return this._delay;
        }
        set delay(value) {
            this._delay = value;
        }
        get repeatCount() {
            return this._repeatCount;
        }
        set repeatCount(value) {
            this._repeatCount = value;
        }
    }
    Timer.started = false;
    Timer.FPMS = 60;
    exports.Timer = Timer;
});
//# sourceMappingURL=Timer.js.map