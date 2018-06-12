define(["require", "exports", "flash/geom/Point", "../webgl/geom/IndexedVertice", "../display3D/Context3DVertexBufferFormat"], function (require, exports, Point_1, IndexedVertice_1, Context3DVertexBufferFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Matrix extends IndexedVertice_1.IndexedVertice {
        constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
            super(9, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this.identity();
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        }
        get rawMatrix() {
            return this._vertices;
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
            this._vertices[0] = sx * this._vertices[0];
            this._vertices[1] = sx * this._vertices[1];
            this._vertices[2] = sx * this._vertices[2];
            this._vertices[3] = sy * this._vertices[3];
            this._vertices[4] = sy * this._vertices[4];
            this._vertices[5] = sy * this._vertices[5];
            this._vertices[6] = this._vertices[6];
            this._vertices[7] = this._vertices[7];
            this._vertices[8] = this._vertices[8];
        }
        translate(dx, dy) {
            this._vertices[6] = dx * this._vertices[0] + dy * this._vertices[3] + this._vertices[6];
            this._vertices[7] = dx * this._vertices[1] + dy * this._vertices[4] + this._vertices[7];
            this._vertices[8] = dx * this._vertices[2] + dy * this._vertices[5] + this._vertices[8];
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
            this._vertices[2] = value;
            this.hasChanged();
        }
        get tx() {
            return this._vertices[2];
        }
        set d(value) {
            this._vertices[4] = value;
            this.hasChanged();
        }
        get d() {
            return this._vertices[4];
        }
        set c(value) {
            this._vertices[3] = value;
            this.hasChanged();
        }
        get c() {
            return this._vertices[3];
        }
        set b(value) {
            this._vertices[1] = value;
            this.hasChanged();
        }
        get b() {
            return this._vertices[1];
        }
        set a(value) {
            this._vertices[0] = value;
            this.hasChanged();
        }
        get a() {
            return this._vertices[0];
        }
        set ty(value) {
            this._vertices[5] = value;
            this.hasChanged();
        }
        get ty() {
            return this._vertices[5];
        }
        identity() {
            this._vertices[0] = 1.0; // a
            this._vertices[1] = 0.0; // b
            this._vertices[2] = 0.0; // tx
            this._vertices[3] = 0.0; // c
            this._vertices[4] = 1.0; // d
            this._vertices[5] = 0.0; // ty
            this._vertices[6] = 0.0;
            this._vertices[7] = 0.0;
            this._vertices[8] = 1.0;
            this.hasChanged();
        }
    }
    exports.Matrix = Matrix;
});
//# sourceMappingURL=Matrix.js.map