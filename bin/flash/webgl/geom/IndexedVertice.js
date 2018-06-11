define(["require", "exports", "flash/system/BaseObject", "../../display3D/Context3DVertexBufferFormat"], function (require, exports, BaseObject_1, Context3DVertexBufferFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IndexedVertice extends BaseObject_1.BaseObject {
        constructor(length, type) {
            super();
            if (type == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT) {
                this._vertices = new Int32Array(length);
            }
            else if (type == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT) {
                this._vertices = new Float32Array(length);
            }
        }
        fromArray(values, offset = -1) {
            var start = 0;
            if (offset >= 0) {
                start = offset;
            }
            for (var i = start; i < values.length; i++) {
                this._vertices[i] = values[i];
            }
        }
        get rawVertices() {
            return this._vertices;
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get length() {
            return this._vertices.length;
        }
        set index(value) {
            this._index = value;
        }
        get index() {
            return this._index;
        }
        set delegate(value) {
            this._delegate = value;
        }
    }
    exports.IndexedVertice = IndexedVertice;
});
//# sourceMappingURL=IndexedVertice.js.map