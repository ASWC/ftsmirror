define(["require", "exports", "flash/webgl/geom/IndexedVertice", "flash/webgl/data/ArrayTypes", "flash/geom/Color"], function (require, exports, IndexedVertice_1, ArrayTypes_1, Color_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ColorVertices extends IndexedVertice_1.IndexedVertice {
        constructor(color, collumns = 1, totalDuplicate = 0) {
            super(4, ArrayTypes_1.ArrayTypes.FLOAT32ARRAY, collumns, totalDuplicate);
            this._color = new Color_1.Color(color);
            this.color = color;
        }
        set color(value) {
            this._color.color = value;
            this.setData(0, this._color.absoluteRed);
            this.setData(1, this._color.absoluteGreen);
            this.setData(2, this._color.absoluteBlue);
            this.setData(3, this._color.absoluteAlpha);
        }
        get alpha() {
            return this._color.alpha;
        }
        get red() {
            return this._color.red;
        }
        get green() {
            return this._color.green;
        }
        get blue() {
            return this._color.blue;
        }
        get absoluteAlpha() {
            return this._color.absoluteAlpha;
        }
        get absoluteRed() {
            return this._color.absoluteRed;
        }
        get absoluteGreen() {
            return this._color.absoluteGreen;
        }
        get absoluteBlue() {
            return this._color.absoluteBlue;
        }
        set alpha(value) {
            this._color.alpha = value;
            this.setData(3, this._color.absoluteAlpha);
        }
        set absoluteAlpha(value) {
            this._color.absoluteAlpha = value;
            this.setData(3, this._color.absoluteAlpha);
        }
        set red(value) {
            this._color.red = value;
            this.setData(0, this._color.absoluteRed);
        }
        set absoluteRed(value) {
            this._color.absoluteRed = value;
            this.setData(0, this._color.absoluteRed);
        }
        set green(value) {
            this._color.green = value;
            this.setData(1, this._color.absoluteGreen);
        }
        set absoluteGreen(value) {
            this._color.absoluteGreen = value;
            this.setData(1, this._color.absoluteGreen);
        }
        set blue(value) {
            this._color.blue = value;
            this.setData(2, this._color.absoluteBlue);
        }
        set absoluteBlue(value) {
            this._color.absoluteBlue = value;
            this.setData(2, this._color.absoluteBlue);
        }
        get color() {
            return this._color.color;
        }
    }
    exports.ColorVertices = ColorVertices;
});
//# sourceMappingURL=ColorVertices.js.map