define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/webgl/geom/IndexedVertice", "flash/display3D/Context3DVertexBufferFormat", "flash/geom/Rectangle"], function (require, exports, Sprite_1, Program3D_1, IndexedVertice_1, Context3DVertexBufferFormat_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteTestColor extends Sprite_1.Sprite {
        constructor(pos, colors) {
            super();
            this._pos = pos;
            this._uvs = new Rectangle_1.Rectangle(0.25 + pos, 0.25 + pos, 0.5 + pos, 0.5 + pos);
            this._colorVertice = new IndexedVertice_1.IndexedVertice(24, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            var concatcolor = [];
            for (var i = 0; i < 6; i++) {
                concatcolor.push(colors[0]);
                concatcolor.push(colors[1]);
                concatcolor.push(colors[2]);
                concatcolor.push(colors[3]);
            }
            this._colorVertice.fromArray(concatcolor);
            /*
            this._colorVertice.rawVertices[0] = colors[0];
            this._colorVertice.rawVertices[1] = colors[1];
            this._colorVertice.rawVertices[2] = colors[2];
            this._colorVertice.rawVertices[3] = colors[3];*/
            this.programName = "simple_square_test_color";
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this.programName);
            if (program) {
                context.bind(program);
                program.vertexShader.updateAttribute("aSquareVertexPosition", this._uvs);
                program.vertexShader.updateAttribute("uTriangleColor", this._colorVertice);
            }
        }
        render(elapsedTime) {
        }
    }
    exports.SpriteTestColor = SpriteTestColor;
});
//# sourceMappingURL=SpriteTestColor.js.map