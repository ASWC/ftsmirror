define(["require", "exports", "../../system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Matrix4D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._vertices = new Float32Array(16);
            this.identity();
        }
        translate(vector) {
            var x = vector.vertices[0];
            var y = vector.vertices[1];
            var z = vector.vertices[2];
            this.vertices[12] = this.vertices[0] * x + this.vertices[4] * y + this.vertices[8] * z + this.vertices[12];
            this.vertices[13] = this.vertices[1] * x + this.vertices[5] * y + this.vertices[9] * z + this.vertices[13];
            this.vertices[14] = this.vertices[2] * x + this.vertices[6] * y + this.vertices[10] * z + this.vertices[14];
            this.vertices[15] = this.vertices[3] * x + this.vertices[7] * y + this.vertices[11] * z + this.vertices[15];
        }
        rotateZ(angle) {
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            var a00 = this._vertices[0];
            var a01 = this._vertices[1];
            var a02 = this._vertices[2];
            var a03 = this._vertices[3];
            var a10 = this._vertices[4];
            var a11 = this._vertices[5];
            var a12 = this._vertices[6];
            var a13 = this._vertices[7];
            this._vertices[0] = a00 * c + a10 * s;
            this._vertices[1] = a01 * c + a11 * s;
            this._vertices[2] = a02 * c + a12 * s;
            this._vertices[3] = a03 * c + a13 * s;
            this._vertices[4] = a10 * c - a00 * s;
            this._vertices[5] = a11 * c - a01 * s;
            this._vertices[6] = a12 * c - a02 * s;
            this._vertices[7] = a13 * c - a03 * s;
        }
        identity() {
            this._vertices[0] = 1;
            this._vertices[1] = 0;
            this._vertices[2] = 0;
            this._vertices[3] = 0;
            this._vertices[4] = 0;
            this._vertices[5] = 1;
            this._vertices[6] = 0;
            this._vertices[7] = 0;
            this._vertices[8] = 0;
            this._vertices[9] = 0;
            this._vertices[10] = 1;
            this._vertices[11] = 0;
            this._vertices[12] = 0;
            this._vertices[13] = 0;
            this._vertices[14] = 0;
            this._vertices[15] = 1;
            this.hasChanged();
        }
        get vertices() {
            return this._vertices;
        }
    }
    exports.Matrix4D = Matrix4D;
});
//# sourceMappingURL=Matrix4D.js.map