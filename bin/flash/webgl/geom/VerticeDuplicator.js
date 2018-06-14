define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VerticeDuplicator extends BaseObject_1.BaseObject {
        constructor(indexedVertice, totalDuplication, splits = 1) {
            super();
            this._splits = splits;
            this._verticeTarget = indexedVertice;
            this._totalDuplication = totalDuplication;
            this._verticeTarget.delegate = this;
            //this._duplicateLength = totalDuplication * this._verticeTarget.rawVertices.length;
            this.onVerticeChanged(indexedVertice);
        }
        splitData() {
            /*this._verticeCollumns = [];
            var targetlenght:number = this._verticeTarget.rawVertices.length;
            var datalength:number = targetlenght / this._splits;
            var targetData:Float32Array[] = [];
            for(var i:number = 0; i < this._splits; i++)
            {
                var subarray:Float32Array = <Float32Array> this._verticeTarget.rawVertices.subarray(i, i + datalength)
                targetData.push(subarray);
            }
            for(var i:number = 0; i < this._splits; i++)
            {
                var splitteddata:Float32Array = this.duplicateData(targetData[i]);
                this._verticeCollumns.push(splitteddata);
            }*/
        }
        get collumns() {
            return this._verticeCollumns;
        }
        duplicateData(targetData) {
            var arraylength = this._totalDuplication * targetData.length;
            var vertices = new Float32Array(arraylength);
            var targetlenght = targetData.length;
            var count = 0;
            for (var i = 0; i < this._totalDuplication; i++) {
                for (var j = 0; j < targetlenght; j++) {
                    vertices[count++] = targetData[j];
                }
            }
            return vertices;
        }
        onVerticeChanged(value) {
            /*this._vertices = this.duplicateData(this._verticeTarget.rawVertices);
            this.splitData();
            if(this._delegate)
            {
                this._delegate.onVerticeChanged(this);
            }*/
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
    exports.VerticeDuplicator = VerticeDuplicator;
});
//# sourceMappingURL=VerticeDuplicator.js.map