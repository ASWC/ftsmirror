import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { Color } from "flash/geom/Color";
import { Matrix } from "flash/geom/Matrix";
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeDuplicator } from "flash/webgl/geom/VerticeDuplicator";
import { ColorVertices } from "flash/webgl/geom/ColorVertices";
import { IndexedMatrix } from "flash/webgl/data/IndexedMatrix";


export class SpriteProgramTest extends Sprite
{
    private shape:IndexedVertice;
    private angle:number; 
    private color:ColorVertices;
    protected scale:IndexedMatrix;
    protected projection:IndexedMatrix;
    protected trasnlation:IndexedMatrix;
    protected rotationMatrix:IndexedMatrix;

    constructor()
    {
        super();
        this._programName = "simple_projection";
        this.angle = 0;
        this.shape = new IndexedVertice(36, Context3DVertexBufferFormat.FLOAT);
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
        this.color = new ColorVertices(Math.random() * 0xFFFFFFFF, 1, 18); 
        this.trasnlation = new IndexedMatrix(1, 0, 0, 1, 0, 0);
        this.trasnlation.translate(200, 200);
        this.rotationMatrix = new IndexedMatrix(1, 0, 0, 1, 0, 0);
        this.projection = new IndexedMatrix(1, 0, 0, 1, 0, 0);
        this.scale = new IndexedMatrix(1, 0, 0, 1, 0, 0);
        this.scale.scale(1.5, 1.5);
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this._programName);
        if(program)
        {   
            context.bind(program);    
            this.angle++;
            var angle:number = this.angle  * Math.PI / 180;
            this.projection.setProjection(program.resolution.getData(0), program.resolution.getData(1));    
            this.rotationMatrix.rotate(angle);
            program.vertexShader.updateAttribute("a_position", this.shape);
            program.vertexShader.updateUniform("a_color", this.color);  
            program.vertexShader.updateUniform("a_scale", this.scale);
            program.vertexShader.updateUniform("u_projection", this.projection);
            program.vertexShader.updateUniform("u_translation", this.trasnlation);
            program.vertexShader.updateUniform("u_rotation", this.rotationMatrix);
        }
    }
}