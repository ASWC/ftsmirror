define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/geom/Color", "flash/geom/Matrix"], function (require, exports, Sprite_1, Program3D_1, Color_1, Matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteProgramTest extends Sprite_1.Sprite {
        constructor() {
            super();
            this._programName = "simple_projection";
            this._bounds.x = 0;
            this._bounds.y = 0;
            this._bounds.width = 512;
            this._bounds.height = 300;
            this.color = new Color_1.Color(0xFF00FF00);
            this.matrix = new Matrix_1.Matrix();
            //this.matrix.translate(0, 0);
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this._programName);
            if (program) {
                context.bind(program);
                program.vertexShader.updateUniform("u_triangleColor", this.color.vertices);
                program.vertexShader.updateUniform("u_G_resolution", program.resolution);
                program.vertexShader.updateUniform("u_G_projection", program.worldProjection);
                program.vertexShader.updateUniform("u_transform", this.matrix);
                program.vertexShader.updateAttribute("a_vertexPosition", this._bounds);
            }
        }
    }
    exports.SpriteProgramTest = SpriteProgramTest;
});
//# sourceMappingURL=SpriteProgramTest.js.map