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
        }
        reset() {
            this.verticeManager = new VerticeBuffer_1.VerticeBuffer();
        }
        setData(data) {
            this.verticeManager.addVertices(data);
        }
        getLine() {
            return "attribute " + this.dataType + " " + this.name + ";";
        }
        get vertices() {
            return this.verticeManager.vertices;
        }
        get length() {
            return this.verticeManager.indexedVertices;
        }
    }
    exports.VertexAttribute = VertexAttribute;
});
//# sourceMappingURL=VertexAttribute.js.map