define(["require", "exports", "../../system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VerticeBuffer extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._verticeLength = 0;
            this._verticeIndexes = [];
            this._changedVertices = [];
            this._needUpdate = true;
        }
        onVerticeChanged(value) {
            this._needUpdate = true;
            this._changedVertices.push(value);
        }
        addVertices(value) {
            this._verticeIndexes.push(value);
            this._verticeLength += value.length;
            value.delegate = this;
        }
        get indexedVertices() {
            return this._verticeIndexes.length;
        }
        get vertices() {
            if (!this._vertices) {
                this._vertices = new Float32Array(this._verticeLength);
                var index = 0;
                for (var i = 0; i < this._verticeIndexes.length; i++) {
                    this._vertices.set(this._verticeIndexes[i].rawVertices, index);
                    this._verticeIndexes[i].index = index;
                    index += this._verticeIndexes[i].rawVertices.length;
                }
            }
            if (this._changedVertices.length) {
                while (this._changedVertices.length) {
                    var vertice = this._changedVertices.shift();
                    this._vertices.set(vertice.rawVertices, vertice.index);
                }
            }
            this._needUpdate = false;
            return this._vertices;
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get length() {
            return this.vertices.length;
        }
    }
    exports.VerticeBuffer = VerticeBuffer;
});
//# sourceMappingURL=VerticeBuffer.js.map