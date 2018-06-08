define(["require", "exports", "../../system/BaseObject", "./Utils"], function (require, exports, BaseObject_1, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vector4D extends BaseObject_1.BaseObject {
        constructor(x = 0, y = 0, z = 0, w = 0) {
            super();
            this.vertices = new Float32Array(4);
            this.vertices[0] = x;
            this.vertices[1] = y;
            this.vertices[2] = z;
            this.vertices[3] = w;
            this.hasChanged();
        }
        scale(scale) {
            this.vertices[0] = this.vertices[0] * scale;
            this.vertices[1] = this.vertices[1] * scale;
            this.vertices[2] = this.vertices[2] * scale;
            this.vertices[3] = this.vertices[3] * scale;
            this.hasChanged();
        }
        copy(source) {
            Utils_1.Utils.copy(this.vertices, source.vertices);
        }
        clone(value) {
            return new Vector4D(value.x, value.y, value.z, value.w);
        }
        set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        ceil() {
            this.vertices[0] = Math.ceil(this.vertices[0]);
            this.vertices[1] = Math.ceil(this.vertices[1]);
            this.vertices[2] = Math.ceil(this.vertices[2]);
            this.vertices[3] = Math.ceil(this.vertices[3]);
            this.hasChanged();
        }
        floor() {
            this.vertices[0] = Math.floor(this.vertices[0]);
            this.vertices[1] = Math.floor(this.vertices[1]);
            this.vertices[2] = Math.floor(this.vertices[2]);
            this.vertices[3] = Math.floor(this.vertices[3]);
            this.hasChanged();
        }
        round() {
            this.vertices[0] = Math.round(this.vertices[0]);
            this.vertices[1] = Math.round(this.vertices[1]);
            this.vertices[2] = Math.round(this.vertices[2]);
            this.vertices[3] = Math.round(this.vertices[3]);
            this.hasChanged();
        }
        static min(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            target.x = Math.min(source1[0], source2[0]);
            target.y = Math.min(source1[1], source2[1]);
            target.z = Math.min(source1[2], source2[2]);
            target.w = Math.min(source1[3], source2[3]);
            return target;
        }
        static max(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            target.x = Math.max(source1[0], source2[0]);
            target.y = Math.max(source1[1], source2[1]);
            target.z = Math.max(source1[2], source2[2]);
            target.w = Math.max(source1[3], source2[3]);
            return target;
        }
        static divideVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            Utils_1.Utils.divide(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static multiplyVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            Utils_1.Utils.multiply(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static subtractVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            Utils_1.Utils.subtract(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static addVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector4D();
            }
            Utils_1.Utils.add(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        set x(value) {
            this.vertices[0] = value;
            this.hasChanged();
        }
        set y(value) {
            this.vertices[1] = value;
            this.hasChanged();
        }
        set z(value) {
            this.vertices[2] = value;
            this.hasChanged();
        }
        set w(value) {
            this.vertices[3] = value;
            this.hasChanged();
        }
        get x() {
            return this.vertices[0];
        }
        get y() {
            return this.vertices[1];
        }
        get z() {
            return this.vertices[2];
        }
        get w() {
            return this.vertices[3];
        }
        scaleAndAdd(source1, scale) {
            this.vertices[0] = this.vertices[0] + (source1.vertices[0] * scale);
            this.vertices[1] = this.vertices[1] + (source1.vertices[1] * scale);
            this.vertices[2] = this.vertices[2] + (source1.vertices[2] * scale);
            this.vertices[3] = this.vertices[3] + (source1.vertices[3] * scale);
            this.hasChanged();
        }
    }
    exports.Vector4D = Vector4D;
});
//# sourceMappingURL=Vector4D.js.map