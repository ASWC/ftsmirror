define(["require", "exports", "flash/system/BaseObject", "flash/webgl/geom/Utils"], function (require, exports, BaseObject_1, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vector2D extends BaseObject_1.BaseObject {
        constructor(x = 0, y = 0) {
            super();
            this.vertices = new Float32Array(2);
            this.vertices[0] = x;
            this.vertices[1] = y;
            this.hasChanged();
        }
        scaleAndAdd(source1, scale) {
            this.vertices[0] = this.vertices[0] + (source1.vertices[0] * scale);
            this.vertices[1] = this.vertices[1] + (source1.vertices[1] * scale);
            this.hasChanged();
        }
        scale(scale) {
            this.vertices[0] = this.vertices[0] * scale;
            this.vertices[1] = this.vertices[1] * scale;
            this.hasChanged();
        }
        ceil() {
            this.vertices[0] = Math.ceil(this.vertices[0]);
            this.vertices[1] = Math.ceil(this.vertices[1]);
            this.hasChanged();
        }
        floor() {
            this.vertices[0] = Math.floor(this.vertices[0]);
            this.vertices[1] = Math.floor(this.vertices[1]);
            this.hasChanged();
        }
        round() {
            this.vertices[0] = Math.round(this.vertices[0]);
            this.vertices[1] = Math.round(this.vertices[1]);
            this.hasChanged();
        }
        copy(source) {
            Utils_1.Utils.copy(this.vertices, source.vertices);
        }
        clone(value) {
            return new Vector2D(value.x, value.y);
        }
        set(x, y, z, w) {
            this.x = x;
            this.y = y;
        }
        static divideVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            Utils_1.Utils.divide(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static multiplyVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            Utils_1.Utils.multiply(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static subtractVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            Utils_1.Utils.subtract(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static addVectors(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            Utils_1.Utils.add(target.vertices, source1.vertices, source2.vertices);
            return target;
        }
        static min(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            target.x = Math.min(source1[0], source2[0]);
            target.y = Math.min(source1[1], source2[1]);
            return target;
        }
        static max(source1, source2, target = null) {
            if (!target) {
                target = new Vector2D();
            }
            target.x = Math.max(source1[0], source2[0]);
            target.y = Math.max(source1[1], source2[1]);
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
        get x() {
            return this.vertices[0];
        }
        get y() {
            return this.vertices[1];
        }
    }
    exports.Vector2D = Vector2D;
});
//# sourceMappingURL=Vector2D.js.map