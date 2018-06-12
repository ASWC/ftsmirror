define(["require", "exports", "flash/events/EventDispatcher", "flash/display/Stage"], function (require, exports, EventDispatcher_1, Stage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Tween extends EventDispatcher_1.EventDispatcher {
        constructor(obj, prop, func, begin, finish, duration, useSeconds = false) {
            super();
            this._time = 0;
            this.begin = begin;
            this.prop = prop;
            this.useSeconds = useSeconds;
            this.obj = obj;
            this.looping = false;
            this.isPlaying = false;
            this._duration = duration;
            if (!this.useSeconds) {
                this._duration = duration / 1000;
            }
            this._finish = finish;
            this._FPS = 0;
            this.func = func;
            this.change = this.finish - this.begin;
        }
        static to(obj, prop, func, begin, finish, duration, useSeconds = false) {
            var tween = new Tween(obj, prop, func, begin, finish, duration, useSeconds);
            tween.start();
            Tween.tweens.push(tween);
            return tween;
        }
        run(time) {
            this._time += time / 1000;
            this.advance(this._time);
        }
        advance(time) {
            this.prevTime = this._time;
            if (time > this._duration) {
                if (this.looping) {
                    //this.rewind (time - this._duration);
                    //this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_LOOP, this._time, this._position));
                }
                else {
                    //this._timer.stop();
                    //this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_STOP, this._time, this._position));
                    //for (var j:any in propholder)
                    //{
                    //	property = this.propholder[j] as ABTweenProperty;
                    //	property.finalize()
                    //}
                    //this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_FINISH, this._time, this._position));
                    //this.obj = null;
                }
            }
            else {
                //this.show("time " + time);
                //this.show("this.begin " + this.begin);
                //this.show("this.change " + this.change);
                //this.show("this._duration " + this._duration);
                //this.show('tweening at: ' + this.func(time, this.begin, this.change, this._duration));
                this.obj[this.prop] = this.func(time, this.begin, this.change, this._duration);
                //this._time = time;
                //for (var i:any in propholder)
                //{
                //	var property:ABTweenProperty = this.propholder[i] as ABTweenProperty;
                //	property.update(this._time, this._duration);
                //}
                //this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_CHANGE, this._time, this._position));
            }
        }
        yoyo() {
        }
        stop() {
            Stage_1.Stage.unRegisterRunnable(this);
        }
        start() {
            Stage_1.Stage.registerRunnable(this);
        }
        rewind(t = 0) {
        }
        resume() {
        }
        prevFrame() {
        }
        nextFrame() {
        }
        fforward() {
        }
        continueTo(finish, duration) {
        }
        get time() {
            return this._time;
        }
        set time(value) {
            this._time = value;
        }
        get position() {
            return this._position;
        }
        set position(value) {
            this._position = value;
        }
        get FPS() {
            return this._FPS;
        }
        set FPS(value) {
            this._FPS = value;
        }
        get finish() {
            return this._finish;
        }
        set finish(value) {
            this._finish = value;
        }
        get duration() {
            return this._duration;
        }
        set duration(value) {
            this._duration = value;
        }
    }
    Tween.tweens = [];
    exports.Tween = Tween;
});
//# sourceMappingURL=Tween.js.map