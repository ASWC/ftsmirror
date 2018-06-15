define(["require", "exports", "flash/system/BaseObject", "../data/ArrayTypes"], function (require, exports, BaseObject_1, ArrayTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VerticeBuffer extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._dataLength = 0;
            this._verticeLength = 0;
            this._verticeIndexes = [];
            this._changedVertices = [];
            this._needUpdate = true;
        }
        reset() {
            this._dataLength = 0;
            this._verticeLength = 0;
            this._verticeIndexes = [];
            this._changedVertices = [];
            this._columns = [];
        }
        getCollumnAt(index = 0) {
            var column = this._columns[index];
            if (column == undefined || !column) {
                column = ArrayTypes_1.ArrayTypes.getTypedArray(this._type, this._dataLength * this._verticeIndexes.length);
                this._columns[index] = column;
                for (var i = 0; i < this._verticeIndexes.length; i++) {
                    var indexedv = this._verticeIndexes[i];
                    var start = this._dataLength * i;
                    column.set(indexedv.collumns[index], start);
                }
            }
            return column;
        }
        onVerticeChanged(value) {
            this._needUpdate = true;
            this._changedVertices.push(value);
        }
        addVertices(value) {
            this._verticeIndexes.push(value);
            this._dataLength = value.collumns[0].length;
            this._verticeLength += this._dataLength;
            this._type = value.type;
            if (!this._columns) {
                this._columns = [];
            }
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get length() {
            return this._verticeIndexes.length;
        }
    }
    exports.VerticeBuffer = VerticeBuffer;
});
//# sourceMappingURL=VerticeBuffer.js.map