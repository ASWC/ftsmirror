define(["require", "exports", "flash/webgl/geom/IndexedVertice", "flash/webgl/data/ArrayTypes"], function (require, exports, IndexedVertice_1, ArrayTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IndexedMatrix extends IndexedVertice_1.IndexedVertice {
        constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0, totalDuplicate = 1) {
            super(9, ArrayTypes_1.ArrayTypes.FLOAT32ARRAY, 3, totalDuplicate);
            this.identity();
            //this.setData(6, tx);
            //this.setData(7, ty);
        }
        setProjection(width, height) {
            this.identity();
            this.setData(0, 2 / width);
            this.setData(1, 0);
            this.setData(2, 0);
            this.setData(3, 0);
            this.setData(4, -2 / height);
            this.setData(5, 0);
            this.setData(6, -1);
            this.setData(7, 1);
            this.setData(8, 1);
        }
        rotate(angle) {
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);
            this.setData(0, cos);
            this.setData(1, -sin);
            this.setData(2, 0);
            this.setData(3, sin);
            this.setData(4, cos);
            this.setData(5, 0);
            this.setData(6, 0);
            this.setData(7, 0);
            this.setData(8, 1);
        }
        translate(dx, dy) {
            this.setData(0, 1);
            this.setData(1, 0);
            this.setData(2, 0);
            this.setData(3, 0);
            this.setData(4, 1);
            this.setData(5, 0);
            this.setData(6, dx);
            this.setData(7, dy);
            this.setData(8, 1);
        }
        scale(sx, sy) {
            this.setData(0, sx * this.getData(0));
            this.setData(1, sx * this.getData(1));
            this.setData(2, sx * this.getData(2));
            this.setData(3, sy * this.getData(3));
            this.setData(4, sy * this.getData(4));
            this.setData(5, sy * this.getData(5));
        }
        identity() {
            this.setData(0, 1);
            this.setData(1, 0);
            this.setData(2, 0);
            this.setData(3, 0);
            this.setData(4, 1);
            this.setData(5, 0);
            this.setData(6, 0);
            this.setData(7, 0);
            this.setData(8, 1);
        }
    }
    exports.IndexedMatrix = IndexedMatrix;
});
//# sourceMappingURL=IndexedMatrix.js.map