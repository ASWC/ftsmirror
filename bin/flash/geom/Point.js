define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Point extends BaseObject_1.BaseObject {
        constructor(x = 0, y = 0) {
            super();
            this._points = new Float32Array(2);
            this._points[0] = x;
            this._points[1] = y;
        }
        set x(value) {
            this._points[0] = value;
            this.hasChanged();
        }
        get x() {
            return this._points[0];
        }
        set y(value) {
            this._points[1] = value;
            this.hasChanged();
        }
        get y() {
            return this._points[1];
        }
        add(v) {
            var point = new Point();
            point.x = this.x + v.x;
            point.x = this.y + v.y;
            return point;
        }
        clone() {
            return new Point(this.x, this.y);
        }
        copyFrom(sourcePoint) {
            this.x = sourcePoint.x;
            this.y = sourcePoint.y;
        }
        equals(toCompare) {
            if (this.x == toCompare.x && this.y == toCompare.y) {
                return true;
            }
            return false;
        }
        get length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        normalize(thickness) {
            var l = this.length;
            this.x = this.x / l * thickness;
            this.y = this.y / l * thickness;
        }
        offset(dx, dy) {
            this.x += dx;
            this.y += dy;
        }
        setTo(xa, ya) {
            this.x = xa;
            this.y = ya;
        }
        subtract(v) {
            return new Point(this.x - v.x, this.y - v.y);
        }
        static polar(len, angle) {
            return new Point(len * Math.cos(angle), len * Math.sin(angle));
        }
        static distance(pt1, pt2) {
            var x = pt1.x - pt2.x;
            var y = pt1.y - pt2.y;
            return Math.sqrt(x * x + y * y);
        }
        static interpolate(pt1, pt2, f) {
            return new Point(pt2.x + (pt1.x - pt2.x) * f, pt2.y + (pt1.y - pt2.y) * f);
        }
    }
    exports.Point = Point;
});
//# sourceMappingURL=Point.js.map