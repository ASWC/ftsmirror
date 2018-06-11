define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/geom/Rectangle"], function (require, exports, Sprite_1, Program3D_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteTestTriangle extends Sprite_1.Sprite {
        constructor(pos) {
            super();
            this._pos = pos;
            this._uvs = new Rectangle_1.Rectangle(0.25 + pos, 0.25 + pos, 0.5 + pos, 0.5 + pos);
            /*
            this._uvs.setUv(0, 0.3 + this._pos);
            this._uvs.setUv(1, 0.3 + this._pos);
            this._uvs.setUv(2, 0 + this._pos);
            this._uvs.setUv(3, -0.3 + this._pos);
            this._uvs.setUv(4, 0.3 + this._pos);
            this._uvs.setUv(5, 0 + this._pos);
            this._uvs.setUv(6, 0.3 + this._pos);
            this._uvs.setUv(7, -0.3 + this._pos);
            this._uvs.setUv(8, 0 + this._pos);
            this._uvs.setUv(9, -0.3 + this._pos);
            this._uvs.setUv(10, -0.3 + this._pos);
            this._uvs.setUv(11, 0 + this._pos);    */
            this.programName = "simple_square_test_triangles";
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this.programName);
            if (program) {
                context.bind(program);
                program.vertexShader.updateAttribute("aSquareVertexPosition", this._uvs);
            }
        }
    }
    exports.SpriteTestTriangle = SpriteTestTriangle;
});
//# sourceMappingURL=SpriteTestTriangle.js.map