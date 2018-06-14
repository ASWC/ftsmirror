define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Polygon {
        constructor() {
            this._needUpdate = true;
        }
        set delegate(value) {
            this._delegate = value;
        }
        get rawVertices() {
            return this.vertices;
        }
        duplicate(totalDuplicates) {
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
                this._vertices = new Float32Array([
                    0.0, 0.0,
                    1.0, 0.0,
                    0.0, 1.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    1.0, 1.0,
                ]);
            }
            return this._vertices;
        }
    }
    exports.Polygon = Polygon;
});
//# sourceMappingURL=Polygon.js.map