define(["require", "exports", "flash/system/BaseObject", "flash/geom/Point"], function (require, exports, BaseObject_1, Point_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Matrix extends BaseObject_1.BaseObject {
        constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
            super();
            this._matrix = new Float32Array(9);
            this.identity();
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        }
        concat(m) {
            this.a = (m.a * this.a) + (m.b * this.c);
            this.b = (m.a * this.b) + (m.b * this.d);
            this.c = (m.c * this.a) + (m.d * this.c);
            this.d = (m.c * this.b) + (m.d * this.d);
            this.tx = (m.tx * this.a) + (m.ty * this.c) + this.tx;
            this.ty = (m.tx * this.b) + (m.ty * this.d) + this.ty;
        }
        copyFrom(sourceMatrix) {
            this.a = sourceMatrix.a;
            this.b = sourceMatrix.b;
            this.c = sourceMatrix.c;
            this.d = sourceMatrix.d;
            this.tx = sourceMatrix.tx;
            this.ty = sourceMatrix.ty;
        }
        rotate(angle) {
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            this.a = (this.a * cos) - (this.b * sin);
            this.b = (this.a * sin) + (this.b * cos);
            this.c = (this.c * cos) - (this.d * sin);
            this.d = (this.c * sin) + (this.d * cos);
            this.tx = (this.tx * cos) - (this.ty * sin);
            this.ty = (this.tx * sin) + (this.ty * cos);
        }
        scale(sx, sy) {
            this.a *= sx;
            this.d *= sy;
            this.c *= sx;
            this.b *= sy;
            this.tx *= sx;
            this.ty *= sy;
        }
        translate(dx, dy) {
            this.tx += dx;
            this.ty += dy;
        }
        createBox(scaleX, scaleY, rotation = 0, tx = 0, ty = 0) {
            this.identity();
            this.rotate(rotation);
            this.scale(scaleX, scaleY);
            this.translate(tx, ty);
        }
        createGradientBox(width, height, rotation = 0, tx = 0, ty = 0) {
            this.identity();
            this.a = width / 1638.4;
            this.d = height / 1638.4;
            this.rotate(rotation);
            this.translate(tx + (width / 2), ty + (height / 2));
        }
        invert() {
            const n = (this.a * this.d) - (this.b * this.c);
            this.a = this.d / n;
            this.b = -this.b / n;
            this.c = -this.c / n;
            this.d = this.a / n;
            this.tx = ((this.c * this.ty) - (this.d * this.tx)) / n;
            this.ty = -((this.a * this.ty) - (this.b * this.tx)) / n;
        }
        setTo(aa, ba, ca, da, txa, tya) {
            this.a = aa;
            this.b = ba;
            this.c = ca;
            this.d = da;
            this.tx = txa;
            this.ty = tya;
        }
        transformPoint(point) {
            var newpos = new Point_1.Point();
            newpos.x = (this.a * point.x) + (this.c * point.y) + this.tx;
            newpos.y = (this.b * point.x) + (this.d * point.y) + this.ty;
            return newpos;
        }
        deltaTransformPoint(point) {
            var newpos = new Point_1.Point();
            newpos.x = (this.a * point.x) + (this.c * point.y);
            newpos.y = (this.b * point.x) + (this.d * point.y);
            return newpos;
        }
        clone() {
            return new Matrix();
        }
        set tx(value) {
            this._matrix[2] = value;
            this.hasChanged();
        }
        get tx() {
            return this._matrix[2];
        }
        set d(value) {
            this._matrix[4] = value;
            this.hasChanged();
        }
        get d() {
            return this._matrix[4];
        }
        set c(value) {
            this._matrix[3] = value;
            this.hasChanged();
        }
        get c() {
            return this._matrix[3];
        }
        set b(value) {
            this._matrix[1] = value;
            this.hasChanged();
        }
        get b() {
            return this._matrix[1];
        }
        set a(value) {
            this._matrix[0] = value;
            this.hasChanged();
        }
        get a() {
            return this._matrix[0];
        }
        set ty(value) {
            this._matrix[5] = value;
            this.hasChanged();
        }
        get ty() {
            return this._matrix[5];
        }
        identity() {
            this._matrix[0] = 1.0; // a
            this._matrix[1] = 0.0; // b
            this._matrix[2] = 0.0; // tx
            this._matrix[3] = 0.0; // c
            this._matrix[4] = 1.0; // d
            this._matrix[5] = 0.0; // ty
            this._matrix[6] = 0.0;
            this._matrix[7] = 0.0;
            this._matrix[8] = 1.0;
            this.hasChanged();
        }
    }
    exports.Matrix = Matrix;
});
//# sourceMappingURL=Matrix.js.map