define(["require", "exports", "flash/system/Tracer"], function (require, exports, Tracer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BaseObject {
        constructor() {
            this._instanceName = "instance_" + BaseObject.instanceid.toString();
            this._name = this.className + "_" + BaseObject.instanceid.toString();
            BaseObject.instanceid++;
        }
        set name(value) {
            this._name = value;
        }
        get name() {
            return this._name;
        }
        hasChanged() {
            this._needUpdate = true;
        }
        get instanceName() {
            return this._instanceName;
        }
        get className() {
            return this.constructor.name;
        }
        show(value) {
            Tracer_1.Tracer.show(value);
        }
        reveal(value) {
            Tracer_1.Tracer.reveal(value);
        }
        revealMethods(value) {
            Tracer_1.Tracer.revealMethods(value);
        }
        toString() {
            return this.toString();
        }
    }
    BaseObject.instanceid = 0;
    exports.BaseObject = BaseObject;
});
//# sourceMappingURL=BaseObject.js.map