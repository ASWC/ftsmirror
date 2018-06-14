define(["require", "exports", "flash/system/BaseObject", "flash/geom/Point"], function (require, exports, BaseObject_1, Point_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Rectangle extends BaseObject_1.BaseObject {
        constructor(x = 0, y = 0, width = 0, height = 0) {
            super();
            this._rectangle = new Float32Array(4);
            this._rectangle[0] = x;
            this._rectangle[1] = y;
            this._rectangle[2] = width;
            this._rectangle[3] = height;
            this._needUpdate = true;
        }
        hasChanged() {
            this._needUpdate = true;
            if (this._delegate) {
                this._delegate.onVerticeChanged(this);
            }
        }
        duplicate(totalDuplicates) {
        }
        set delegate(value) {
            this._delegate = value;
        }
        get rawVertices() {
            return this.vertices;
        }
        set index(value) {
            this._index = value;
        }
        get index() {
            return this._index;
        }
        get length() {
            return this.vertices.length;
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get vertices() {
            if (!this._vertices) {
                this._vertices = new Float32Array(12);
            }
            if (this._needUpdate) {
                this._vertices[0] = this._rectangle[0];
                this._vertices[1] = this._rectangle[1];
                this._vertices[2] = this._rectangle[0] + this._rectangle[2];
                this._vertices[3] = this._rectangle[1];
                this._vertices[4] = this._rectangle[0];
                this._vertices[5] = this._rectangle[1] + this._rectangle[3];
                this._vertices[6] = this._rectangle[0];
                this._vertices[7] = this._rectangle[1] + this._rectangle[3];
                this._vertices[8] = this._rectangle[0] + this._rectangle[2];
                this._vertices[9] = this._rectangle[1] + this._rectangle[3];
                this._vertices[10] = this._rectangle[0] + this._rectangle[2];
                this._vertices[11] = this._rectangle[1];
            }
            return this._vertices;
        }
        get height() {
            return this._rectangle[3];
        }
        set height(value) {
            this._rectangle[3] = value;
            this.hasChanged();
        }
        get width() {
            return this._rectangle[2];
        }
        set width(value) {
            this._rectangle[2] = value;
            this.hasChanged();
        }
        get y() {
            return this._rectangle[1];
        }
        set y(value) {
            this._rectangle[1] = value;
            this.hasChanged();
        }
        get x() {
            return this._rectangle[0];
        }
        set x(value) {
            this._rectangle[0] = value;
            this.hasChanged();
        }
        get top() {
            return this.y;
        }
        set top(value) {
            this.y = value;
        }
        get right() {
            return this.x + this.width;
        }
        set right(value) {
            this.width = value - this.x;
        }
        get left() {
            return this.x;
        }
        set left(value) {
            this.x = value;
        }
        get bottom() {
            return this.y + this.height;
        }
        set bottom(value) {
            this.height = value - this.y;
        }
        get bottomRight() {
            if (!this._bottomRight) {
                this._bottomRight = new Point_1.Point();
            }
            this._bottomRight.x = this.bottom;
            this._bottomRight.y = this.right;
            return this._bottomRight;
        }
        set bottomRight(value) {
            if (!this._bottomRight) {
                this._bottomRight = new Point_1.Point();
            }
            this.bottom = value.y;
            this.right = value.x;
            this._bottomRight = value;
        }
        get size() {
            if (!this._size) {
                this._size = new Point_1.Point();
            }
            this._size.x = this.width;
            this._size.y = this.height;
            return this.size;
        }
        set size(value) {
            this.size = value;
            this.width = this._size.x;
            this.height = this._size.y;
        }
        get topLeft() {
            if (!this._topLeft) {
                this._topLeft = new Point_1.Point();
            }
            this._topLeft.x = this.x;
            this._topLeft.y = this.y;
            return this._topLeft;
        }
        set topLeft(value) {
            this._topLeft = value;
            this.x = this._topLeft.x;
            this.y = this._topLeft.y;
        }
        clone() {
            return new Rectangle(this.x, this.y, this.width, this.height);
        }
        contains(x, y) {
            if (this.width <= 0 || this.height <= 0) {
                return false;
            }
            if (x >= this.x && x < this.x + this.width) {
                if (y >= this.y && y < this.y + this.height) {
                    return true;
                }
            }
            return false;
        }
        containsPoint(point) {
            return this.contains(point.x, point.y);
        }
        containsRect(rect) {
            if ((this.width * rect.height) > (this.width * rect.height)) {
                return false;
            }
            return ((rect.x > this.x && rect.x < this.right) && (rect.right > this.x && rect.right < this.right) && (rect.y > this.y && rect.y < this.bottom) && (rect.bottom > this.y && rect.bottom < this.bottom));
        }
        copyFrom(sourceRect) {
            this._rectangle[0] = sourceRect.x;
            this._rectangle[1] = sourceRect.y;
            this._rectangle[2] = sourceRect.width;
            this._rectangle[3] = sourceRect.height;
            this.hasChanged();
        }
        equals(toCompare) {
            return (this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height);
        }
        inflate(dx, dy) {
            this.x = this.x - dx;
            this.y = this.y - dy;
            this.width = this.width + (dx * 2);
            this.height = this.height + (dy * 2);
            this.hasChanged();
        }
        inflatePoint(point) {
            this.inflate(point.x, point.y);
        }
        intersection(toIntersect) {
            var x0 = Math.max(this.x, toIntersect.x);
            var y0 = Math.max(this.y, toIntersect.y);
            var x1 = Math.min(this.x + this.width, toIntersect.x + toIntersect.width);
            var y1 = Math.min(this.y + this.height, toIntersect.y + toIntersect.height);
            return new Rectangle(x0, y0, x1 - x0, y1 - y0);
        }
        intersects(toIntersect) {
            return !(toIntersect.left > this.right || toIntersect.right < this.left || toIntersect.top > this.bottom || toIntersect.bottom < this.top);
        }
        isEmpty() {
            if (this.width <= 0 || this.height <= 0) {
                return true;
            }
            return false;
        }
        offset(dx, dy) {
            this.x += dx;
            this.y += dy;
        }
        offsetPoint(point) {
            this.offset(point.x, point.y);
        }
        setEmpty() {
            this._rectangle[0] = 0;
            this._rectangle[1] = 0;
            this._rectangle[2] = 0;
            this._rectangle[3] = 0;
            this.hasChanged();
        }
        setTo(xa, ya, widtha, heighta) {
            this._rectangle[0] = xa;
            this._rectangle[1] = ya;
            this._rectangle[2] = widtha;
            this._rectangle[3] = heighta;
            this.hasChanged();
        }
        union(toUnion) {
            var x0 = Math.min(this.x, toUnion.x);
            var y0 = Math.min(this.y, toUnion.y);
            var x1 = Math.max(this.x + this.width, toUnion.x + toUnion.width);
            var y1 = Math.max(this.y + this.height, toUnion.y + toUnion.height);
            return new Rectangle(x0, y0, x1 - x0, y1 - y0);
        }
    }
    exports.Rectangle = Rectangle;
});
//# sourceMappingURL=Rectangle.js.map