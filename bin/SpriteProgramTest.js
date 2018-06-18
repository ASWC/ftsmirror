define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/webgl/geom/IndexedVertice", "flash/display3D/Context3DVertexBufferFormat", "flash/webgl/geom/ColorVertices", "flash/webgl/data/IndexedMatrix"], function (require, exports, Sprite_1, Program3D_1, IndexedVertice_1, Context3DVertexBufferFormat_1, ColorVertices_1, IndexedMatrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteProgramTest extends Sprite_1.Sprite {
        constructor(w, h, rrs) {
            super();
            this.speed = rrs;
            this._programName = "simple_projection";
            this.angle = 0;
            this.shape = new IndexedVertice_1.IndexedVertice(36, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this.shape.setData(0, 0);
            this.shape.setData(1, 0);
            this.shape.setData(2, 30);
            this.shape.setData(3, 0);
            this.shape.setData(4, 0);
            this.shape.setData(5, 150);
            this.shape.setData(6, 0);
            this.shape.setData(7, 150);
            this.shape.setData(8, 30);
            this.shape.setData(9, 0);
            this.shape.setData(10, 30);
            this.shape.setData(11, 150);
            this.shape.setData(12, 30);
            this.shape.setData(13, 0);
            this.shape.setData(14, 100);
            this.shape.setData(15, 0);
            this.shape.setData(16, 30);
            this.shape.setData(17, 30);
            this.shape.setData(18, 30);
            this.shape.setData(19, 30);
            this.shape.setData(20, 100);
            this.shape.setData(21, 0);
            this.shape.setData(22, 100);
            this.shape.setData(23, 30);
            this.shape.setData(24, 30);
            this.shape.setData(25, 60);
            this.shape.setData(26, 67);
            this.shape.setData(27, 60);
            this.shape.setData(28, 30);
            this.shape.setData(29, 90);
            this.shape.setData(30, 30);
            this.shape.setData(31, 90);
            this.shape.setData(32, 67);
            this.shape.setData(33, 60);
            this.shape.setData(34, 67);
            this.shape.setData(35, 90);
            this.color = new ColorVertices_1.ColorVertices(Math.random() * 0xFFFFFFFF, 1, 18);
            this.trasnlation = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 18);
            this.trasnlation.translate(w, h);
            this.rotationMatrix = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 18);
            this.projection = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 18);
            this.scale = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 18);
            this.scale.scale(1.5, 1.5);
        }
        present(context) {
            var program = Program3D_1.Program3D.getProgram(this._programName);
            if (program) {
                context.bind(program);
                this.angle += this.speed;
                var angle = this.angle * Math.PI / 180;
                this.projection.setProjection(program.resolution.getData(0), program.resolution.getData(1));
                this.rotationMatrix.rotate(angle);
                program.vertexShader.updateAttribute("a_position", this.shape);
                program.vertexShader.updateAttribute("a_color", this.color);
                program.vertexShader.updateAttribute("a_scale", this.scale);
                program.vertexShader.updateAttribute("u_projection", this.projection);
                program.vertexShader.updateAttribute("u_translation", this.trasnlation);
                program.vertexShader.updateAttribute("u_rotation", this.rotationMatrix);
            }
        }
    }
    exports.SpriteProgramTest = SpriteProgramTest;
});
//# sourceMappingURL=SpriteProgramTest.js.map