define(["require", "exports", "../../system/BaseObject", "./Utils"], function (require, exports, BaseObject_1, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vector3D extends BaseObject_1.BaseObject {
        constructor(x = 0, y = 0, z = 0) {
            super();
            this._vertices = new Float32Array(3);
            this._vertices[0] = x;
            this._vertices[1] = y;
            this._vertices[2] = z;
            this.hasChanged();
        }
        get vertices() {
            return this._vertices;
        }
        scaleAndAdd(source1, scale) {
            this._vertices[0] = this._vertices[0] + (source1._vertices[0] * scale);
            this._vertices[1] = this._vertices[1] + (source1._vertices[1] * scale);
            this._vertices[2] = this._vertices[2] + (source1._vertices[2] * scale);
            this.hasChanged();
        }
        scale(scale) {
            this._vertices[0] = this._vertices[0] * scale;
            this._vertices[1] = this._vertices[1] * scale;
            this._vertices[2] = this._vertices[2] * scale;
            this.hasChanged();
        }
        ceil() {
            this._vertices[0] = Math.ceil(this._vertices[0]);
            this._vertices[1] = Math.ceil(this._vertices[1]);
            this._vertices[2] = Math.ceil(this._vertices[2]);
            this.hasChanged();
        }
        floor() {
            this._vertices[0] = Math.floor(this._vertices[0]);
            this._vertices[1] = Math.floor(this._vertices[1]);
            this._vertices[2] = Math.floor(this._vertices[2]);
            this.hasChanged();
        }
        round() {
            this._vertices[0] = Math.round(this._vertices[0]);
            this._vertices[1] = Math.round(this._vertices[1]);
            this._vertices[2] = Math.round(this._vertices[2]);
            this.hasChanged();
        }
        copy(source) {
            Utils_1.Utils.copy(this._vertices, source._vertices);
        }
        clone(value) {
            return new Vector3D(value.x, value.y, value.z);
        }
        set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        static divideVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            Utils_1.Utils.divide(target._vertices, source1._vertices, source2._vertices);
            return target;
        }
        static multiplyVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            Utils_1.Utils.multiply(target._vertices, source1._vertices, source2._vertices);
            return target;
        }
        static subtractVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            Utils_1.Utils.subtract(target._vertices, source1._vertices, source2._vertices);
            return target;
        }
        static addVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            Utils_1.Utils.add(target._vertices, source1._vertices, source2._vertices);
            return target;
        }
        static min(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            target.x = Math.min(source1[0], source2[0]);
            target.y = Math.min(source1[1], source2[1]);
            target.z = Math.min(source1[2], source2[2]);
            return target;
        }
        static max(source1, source2, target = null) {
            if (!target) {
                target = new Vector3D();
            }
            target.x = Math.max(source1[0], source2[0]);
            target.y = Math.max(source1[1], source2[1]);
            target.z = Math.max(source1[2], source2[2]);
            return target;
        }
        set x(value) {
            this._vertices[0] = value;
            this.hasChanged();
        }
        set y(value) {
            this._vertices[1] = value;
            this.hasChanged();
        }
        set z(value) {
            this._vertices[2] = value;
            this.hasChanged();
        }
        get x() {
            return this._vertices[0];
        }
        get y() {
            return this._vertices[1];
        }
        get z() {
            return this._vertices[2];
        }
    }
    exports.Vector3D = Vector3D;
});
//# sourceMappingURL=Vector3D.js.map