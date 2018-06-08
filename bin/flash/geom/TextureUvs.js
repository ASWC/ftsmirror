define(["require", "exports", "flash/geom/Rectangle"], function (require, exports, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextureUvs extends Rectangle_1.Rectangle {
        constructor(x = 0, y = 0, width = 1, height = 1) {
            super(0, 0, 1, 1);
        }
        get vertices() {
            if (!this._vertices) {
                this._vertices = new Float32Array(12);
            }
            return this._vertices;
        }
        setUv(index, value) {
            if (!this._vertices) {
                this._vertices = new Float32Array(12);
            }
            this._vertices[index] = value;
        }
    }
    exports.TextureUvs = TextureUvs;
});
//# sourceMappingURL=TextureUvs.js.map