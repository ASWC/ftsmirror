define(["require", "exports", "flash/display/Sprite", "flash/webgl/geom/Matrix4D", "flash/webgl/geom/Vector3D", "flash/geom/Transform"], function (require, exports, Sprite_1, Matrix4D_1, Vector3D_1, Transform_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteMatrixtest extends Sprite_1.Sprite {
        constructor(x = 0, y = 0) {
            super();
            this._posVector = new Vector3D_1.Vector3D(x, y);
            this._matrix = new Matrix4D_1.Matrix4D();
            this.angle = 0;
            this._matrix.translate(this._posVector);
            this._matrix.rotateZ(Transform_1.Transform.toRadians(this.angle));
            this._uniformColor = [];
            this._uniformColor.push(0.1);
            this._uniformColor.push(0.6);
            this._uniformColor.push(0.2);
            this._uniformColor.push(1);
            this.programName = "simple_square_test_matrix4";
        }
        present(context) {
            /*
            var program:Program3D = Program3D.getProgram(this.programName);
            if(program)
            {
                if(program.ready)
                {
                    if(context.currentProgram != program)
                    {
                        context.bind(program)
                    }
                    if(!this.verticeData)
                    {
                        var rectangle:TextureUvs = new TextureUvs();
                        rectangle.setUv(0, 0.2);
                        rectangle.setUv(1, 0.2);
                        rectangle.setUv(2, 0);
                        rectangle.setUv(3, -0.2);
                        rectangle.setUv(4, 0.2);
                        rectangle.setUv(5, 0);
                        rectangle.setUv(6, 0.2);
                        rectangle.setUv(7, -0.2);
                        rectangle.setUv(8, 0);
                        rectangle.setUv(9, -0.2);
                        rectangle.setUv(10, -0.2);
                        rectangle.setUv(11, 0);
                        this.verticeData = new VerticeBuffer();
                        this.verticeData.addVertices(rectangle);
                    }
                    this._matrix.identity()
                    this._matrix.translate(this._posVector)
                    this._matrix.rotateZ(Transform.toRadians(this.angle));
                    this.angle++;
    
    
                   // program.updateVertexUniform("uModelTransform", this._matrix.vertices);
                   // program.updateVertexData("aSquareVertexPosition", this.verticeData)
                   // program.updateFragmentUniform("uPixelColor", this._uniformColor);
    
                    
                    //program.flush();
                }
            }        */
        }
    }
    exports.SpriteMatrixtest = SpriteMatrixtest;
});
//# sourceMappingURL=SpriteMatrixtest.js.map