define(["require", "exports", "flash/system/BaseObject", "flash/display3D/Context3DVertexBufferFormat", "flash/webgl/geom/VerticeBuffer"], function (require, exports, BaseObject_1, Context3DVertexBufferFormat_1, VerticeBuffer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexAttribute extends BaseObject_1.BaseObject {
        constructor(name, type) {
            super();
            this.size = 0;
            this.verticeManager = new VerticeBuffer_1.VerticeBuffer();
            this.name = name;
            this.dataType = type;
            this.size = Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.getSize(this.dataType);
            this._totalBuffers = Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.getTotalBuffers(type);
            this._collumnBuffers = [];
        }
        getVerticeAt(index = 0) {
            return this.verticeManager.getCollumnAt(index);
        }
        set attributeLocation(value) {
            this._attributeLocation = value;
            this._locations = [];
            for (var i = 0; i < this._totalBuffers; i++) {
                this._locations.push(this._attributeLocation + i);
            }
        }
        setData(data) {
            this.verticeManager.addVertices(data);
        }
        get length() {
            return this.verticeManager.length;
        }
        reset() {
            this.verticeManager.reset();
        }
        get collumnBuffers() {
            return this._collumnBuffers;
        }
        get locations() {
            return this._locations;
        }
        get totalBuffer() {
            return this._totalBuffers;
        }
        getLine() {
            return "attribute " + this.dataType + " " + this.name + ";";
        }
    }
    exports.VertexAttribute = VertexAttribute;
});
//# sourceMappingURL=VertexAttribute.js.map