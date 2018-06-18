define(["require", "exports", "flash/display/Sprite", "flash/display3D/Program3D", "flash/webgl/geom/IndexedVertice", "flash/webgl/geom/ColorVertices", "flash/webgl/data/IndexedMatrix", "flash/webgl/data/ArrayTypes"], function (require, exports, Sprite_1, Program3D_1, IndexedVertice_1, ColorVertices_1, IndexedMatrix_1, ArrayTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteTest extends Sprite_1.Sprite {
        constructor(w, h, rrs, bitmap) {
            super();
            this._bitmap = bitmap;
            this._programName = "simple_texture";
            this.speed = rrs;
            this.angle = 0;
            this.textids = new IndexedVertice_1.IndexedVertice(1, ArrayTypes_1.ArrayTypes.INT32ARRAY);
            this.textids.setData(0, 0);
            this.textcoords = new IndexedVertice_1.IndexedVertice(12, ArrayTypes_1.ArrayTypes.FLOAT32ARRAY);
            this.textcoords.setData(0, 1);
            this.textcoords.setData(1, 0);
            this.textcoords.setData(2, 1);
            this.textcoords.setData(3, 1);
            this.textcoords.setData(4, 0);
            this.textcoords.setData(5, 0);
            this.textcoords.setData(6, 1);
            this.textcoords.setData(7, 1);
            this.textcoords.setData(8, 0);
            this.textcoords.setData(9, 0);
            this.textcoords.setData(10, 0);
            this.textcoords.setData(11, 1);
            this.shape = new IndexedVertice_1.IndexedVertice(12, ArrayTypes_1.ArrayTypes.FLOAT32ARRAY);
            this.shape.setData(0, 0);
            this.shape.setData(1, 0);
            this.shape.setData(2, 200);
            this.shape.setData(3, 0);
            this.shape.setData(4, 0);
            this.shape.setData(5, 200);
            this.shape.setData(6, 200);
            this.shape.setData(7, 0);
            this.shape.setData(8, 0);
            this.shape.setData(9, 200);
            this.shape.setData(10, 200);
            this.shape.setData(11, 200);
            this.color = new ColorVertices_1.ColorVertices(Math.random() * 0xFFFFFFFF, 1, 6);
            this.trasnlation = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
            this.trasnlation.translate(w, h);
            this.rotationMatrix = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
            this.projection = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
            this.scale = new IndexedMatrix_1.IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
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
                var textid = program.useTexture(this._bitmap.bitmapData.texture);
                this.textids.setData(0, textid);
                program.vertexShader.updateAttribute("a_position", this.shape);
                program.vertexShader.updateAttribute("a_color", this.color);
                program.vertexShader.updateAttribute("a_scale", this.scale);
                program.vertexShader.updateAttribute("u_projection", this.projection);
                program.vertexShader.updateAttribute("u_translation", this.trasnlation);
                program.vertexShader.updateAttribute("u_rotation", this.rotationMatrix);
                program.vertexShader.updateAttribute("a_texcoord", this.textcoords);
                program.fragmentShader.updateUniform("u_texture", this.textids);
            }
        }
        render(elapsedTime) {
        }
    }
    exports.SpriteTest = SpriteTest;
});
//# sourceMappingURL=SpriteTest.js.map