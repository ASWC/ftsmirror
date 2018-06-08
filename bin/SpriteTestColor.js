define(["require", "exports", "flash/display/Sprite", "flash/webgl/geom/VerticeBuffer", "flash/display3D/Program3D", "flash/geom/TextureUvs"], function (require, exports, Sprite_1, VerticeBuffer_1, Program3D_1, TextureUvs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteTestColor extends Sprite_1.Sprite {
        constructor() {
            super();
            this._uniformColor = [];
            this._uniformColor.push(1);
            this._uniformColor.push(0.6);
            this._uniformColor.push(0.2);
            this._uniformColor.push(1);
            this.programName = "simple_square_test_color";
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this.programName);
            if (program) {
                if (program.ready) {
                    if (context.currentProgram != program) {
                        context.bind(program);
                    }
                    if (!this.verticeData) {
                        var rectangle = new TextureUvs_1.TextureUvs();
                        rectangle.setUv(0, 0.3);
                        rectangle.setUv(1, 0.3);
                        rectangle.setUv(2, 0);
                        rectangle.setUv(3, -0.3);
                        rectangle.setUv(4, 0.3);
                        rectangle.setUv(5, 0);
                        rectangle.setUv(6, 0.3);
                        rectangle.setUv(7, -0.3);
                        rectangle.setUv(8, 0);
                        rectangle.setUv(9, -0.3);
                        rectangle.setUv(10, -0.3);
                        rectangle.setUv(11, 0);
                        this.verticeData = new VerticeBuffer_1.VerticeBuffer();
                        this.verticeData.addVertices(rectangle);
                    }
                    program.updateVertexData("aSquareVertexPosition", this.verticeData);
                    program.updateFragmentUniform("uPixelColor", this._uniformColor);
                    program.flush();
                }
            }
        }
        render(elapsedTime) {
        }
    }
    exports.SpriteTestColor = SpriteTestColor;
});
//# sourceMappingURL=SpriteTestColor.js.map