define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
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
        getCollumnAt(index = 0) {
            var columndata;
            var collumns = [];
            var datalength = 0;
            for (var i = 0; i < this._verticeIndexes.length; i++) {
                var dataCollumn = this._verticeIndexes[i].collumns[index];
                collumns.push(dataCollumn);
                datalength += dataCollumn.length;
            }
            while (collumns) {
            }
            return columndata;
        }
        onVerticeChanged(value) {
            this._needUpdate = true;
            this._changedVertices.push(value);
        }
        addVertices(value) {
            this._verticeIndexes.push(value);
            this._verticeLength += value.length;
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get length() {
            return this._verticeLength;
        }
        reset() {
        }
    }
    exports.VerticeBuffer = VerticeBuffer;
});
//# sourceMappingURL=VerticeBuffer.js.map