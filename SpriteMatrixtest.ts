import { Sprite } from "flash/display/Sprite";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { TextureUvs } from "flash/geom/TextureUvs";
import { Program3D } from "flash/display3D/Program3D";
import { Context3D } from "flash/display3D/Context3D";
import { Matrix4D } from "flash/webgl/geom/Matrix4D";
import { Vector3D } from "flash/webgl/geom/Vector3D";
import { Transform } from "flash/geom/Transform";


export class SpriteMatrixtest extends Sprite
{
    private verticeData:VerticeBuffer;
    private programName:string;
    private _uniformColor:number[];
    private _matrix:Matrix4D;

    private angle:number;

    constructor()
    {
        super();
        this._matrix = new Matrix4D();

        this.angle = 45;

        this._matrix.translate(new Vector3D(-0.25, 0.25))
        
        
        this._matrix.rotateZ(Transform.toRadians(this.angle));


        this._uniformColor = [];
        this._uniformColor.push(0.1);
        this._uniformColor.push(0.6);
        this._uniformColor.push(0.2);
        this._uniformColor.push(1);        
        this.programName = "simple_square_test_matrix4";
    }

    public present(context:Context3D):void
    {
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

                

                //this.angle++;
                this.show('angle: ' + this.angle)


                program.updateVertexUniform("uModelTransform", this._matrix.vertices);
                program.updateVertexData("aSquareVertexPosition", this.verticeData)
                program.updateFragmentUniform("uPixelColor", this._uniformColor);
                //program.flush();
            }
        }        
    }
}