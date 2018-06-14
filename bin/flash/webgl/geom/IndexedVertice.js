define(["require", "exports", "flash/system/BaseObject", "flash/webgl/data/ArrayTypes"], function (require, exports, BaseObject_1, ArrayTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IndexedVertice extends BaseObject_1.BaseObject {
        constructor(length, type, collumns = 1, totalDuplicate = 0) {
            super();
            this._fixedlength = length;
            this._totalCollumns = collumns;
            this._totalDuplicate = totalDuplicate;
            this._type = type;
            this._delegates = [];
            this._vertices = ArrayTypes_1.ArrayTypes.getTypedArray(type, length);
            if (this._totalCollumns < 1) {
                this._totalCollumns = 1;
            }
            if (this._totalDuplicate < 1) {
                this._totalDuplicate = 1;
            }
            this._collumns = [];
            var collumnLength = (this._fixedlength / this._totalCollumns) * this._totalDuplicate;
            for (var i = 0; i < collumns; i++) {
                var collumn = ArrayTypes_1.ArrayTypes.getTypedArray(type, collumnLength);
                this._collumns.push(collumn);
            }
            this.hasChanged();
        }
        get type() {
            return this._type;
        }
        updateIndex(index, data) {
            var column = this.getColumnByIndex(index);
            var columnLength = this._fixedlength / this._totalCollumns;
            var collumnIndex = index;
            if (collumnIndex >= columnLength) {
                while (collumnIndex >= columnLength) {
                    collumnIndex -= columnLength;
                }
            }
            var startindex = collumnIndex;
            for (var i = 0; i < this._totalDuplicate; i++) {
                column[startindex] = data;
                startindex += columnLength;
            }
        }
        getColumnByIndex(index) {
            var currentindex = Math.floor((index) / this._totalCollumns);
            if (currentindex >= this._collumns.length) {
                currentindex--;
            }
            return this._collumns[currentindex];
        }
        setData(index, data) {
            this._vertices[index] = data;
            this.updateIndex(index, data);
            this.hasChanged();
            this.notifyDelegates();
        }
        get collumns() {
            return this._collumns;
        }
        get needUpdate() {
            return this._needUpdate;
        }
        get length() {
            return this._fixedlength / this._totalCollumns;
        }
        set index(value) {
            this._index = value;
        }
        get index() {
            return this._index;
        }
        addDelegate(value) {
            var index = this._delegates.indexOf(value);
            if (index < 0) {
                this._delegates.push(value);
            }
        }
        notifyDelegates() {
            if (this._delegates && this._delegates.length) {
                for (var i = 0; i < this._delegates.length; i++) {
                    this._delegates[i].onVerticeChanged(this);
                }
            }
        }
        removeDelegate(value) {
            var index = this._delegates.indexOf(value);
            if (index >= 0) {
                this._delegates.splice(index, 1);
            }
        }
        removeDelegates() {
            this._delegates.length = 0;
        }
        getData(index) {
            return this._vertices[index];
        }
    }
    exports.IndexedVertice = IndexedVertice;
});
//# sourceMappingURL=IndexedVertice.js.map