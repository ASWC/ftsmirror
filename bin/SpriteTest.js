define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/geom/TextureUvs", "flash/webgl/geom/VerticeBuffer"], function (require, exports, Sprite_1, Program3D_1, TextureUvs_1, VerticeBuffer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteTest extends Sprite_1.Sprite {
        constructor() {
            super();
            this.programName = "simple_square_test";
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
                        rectangle.setUv(0, 0.5);
                        rectangle.setUv(1, 0.5);
                        rectangle.setUv(2, 0);
                        rectangle.setUv(3, -0.5);
                        rectangle.setUv(4, 0.5);
                        rectangle.setUv(5, 0);
                        rectangle.setUv(6, 0.5);
                        rectangle.setUv(7, -0.5);
                        rectangle.setUv(8, 0);
                        rectangle.setUv(9, -0.5);
                        rectangle.setUv(10, -0.5);
                        rectangle.setUv(11, 0);
                        this.verticeData = new VerticeBuffer_1.VerticeBuffer();
                        this.verticeData.addVertices(rectangle);
                    }
                    program.updateVertexData("aSquareVertexPosition", this.verticeData);
                    program.flush();
                }
            }
        }
        render(elapsedTime) {
        }
    }
    exports.SpriteTest = SpriteTest;
});
//# sourceMappingURL=SpriteTest.js.map