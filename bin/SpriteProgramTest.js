define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/geom/Color", "flash/geom/Matrix", "flash/webgl/geom/IndexedVertice", "flash/display3D/Context3DVertexBufferFormat"], function (require, exports, Sprite_1, Program3D_1, Color_1, Matrix_1, IndexedVertice_1, Context3DVertexBufferFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteProgramTest extends Sprite_1.Sprite {
        constructor() {
            super();
            this._programName = "simple_projection";
            this.angle = 0;
            this.vrotation = new IndexedVertice_1.IndexedVertice(2, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this.vrotation.rawVertices[0] = Math.sin(this.angle * Math.PI / 180);
            this.vrotation.rawVertices[1] = Math.cos(this.angle * Math.PI / 180);
            this.translation = new IndexedVertice_1.IndexedVertice(2, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this.translation.rawVertices[0] = 200;
            this.translation.rawVertices[1] = 200;
            this.scale = new IndexedVertice_1.IndexedVertice(2, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this.scale.rawVertices[0] = 1.5;
            this.scale.rawVertices[1] = 1.5;
            if (!this.shape) {
                this.shape = new IndexedVertice_1.IndexedVertice(36, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
                this.shape.fromArray([
                    // left column
                    0, 0,
                    30, 0,
                    0, 150,
                    0, 150,
                    30, 0,
                    30, 150,
                    // top rung
                    30, 0,
                    100, 0,
                    30, 30,
                    30, 30,
                    100, 0,
                    100, 30,
                    // middle rung
                    30, 60,
                    67, 60,
                    30, 90,
                    30, 90,
                    67, 60,
                    67, 90
                ]);
            }
            this.color = new Color_1.Color(Math.random() * 0xFFFFFFFF);
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this._programName);
            if (program) {
                context.bind(program);
                this.angle++;
                var angle = this.angle * Math.PI / 180;
                var proj = new Matrix_1.Matrix();
                proj.setProjection(program.resolution.rawVertices[0], program.resolution.rawVertices[1]);
                var ts = new Matrix_1.Matrix();
                ts.translate(this.translation.rawVertices[0], this.translation.rawVertices[1]);
                var sc = new Matrix_1.Matrix();
                sc.scale(this.scale.rawVertices[0], this.scale.rawVertices[1]);
                var rr = new Matrix_1.Matrix();
                rr.rotate(angle);
                program.vertexShader.updateAttribute("a_position", this.shape);
                program.vertexShader.updateUniform("a_scale", sc);
                program.vertexShader.updateUniform("u_projection", proj);
                program.vertexShader.updateUniform("u_translation", ts);
                program.vertexShader.updateUniform("u_rotation", rr);
                program.vertexShader.updateAttribute("a_color", this.color.vertices);
            }
        }
    }
    exports.SpriteProgramTest = SpriteProgramTest;
});
//# sourceMappingURL=SpriteProgramTest.js.map