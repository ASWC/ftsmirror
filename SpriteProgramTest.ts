import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { Color } from "flash/geom/Color";
import { Matrix } from "flash/geom/Matrix";
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";


export class SpriteProgramTest extends Sprite
{
    private color:Color;
    private matrix:Matrix;
    private shape:IndexedVertice;
    private angle:number;    
    private translation:IndexedVertice;
    private vrotation:IndexedVertice;
    private scale:IndexedVertice;

    constructor()
    {
        super();
        this._programName = "simple_projection";
        this.angle = 0;
        this.vrotation = new IndexedVertice(2, Context3DVertexBufferFormat.FLOAT);
        this.vrotation.rawVertices[0] = Math.sin(this.angle * Math.PI / 180)
        this.vrotation.rawVertices[1] = Math.cos(this.angle * Math.PI / 180)
        this.translation = new IndexedVertice(2, Context3DVertexBufferFormat.FLOAT);
        this.translation.rawVertices[0] = 200
        this.translation.rawVertices[1] = 200;
        this.scale = new IndexedVertice(2, Context3DVertexBufferFormat.FLOAT);
        this.scale.rawVertices[0] = 1.5
        this.scale.rawVertices[1] = 1.5;        
        if(!this.shape)
        {
            this.shape = new IndexedVertice(36, Context3DVertexBufferFormat.FLOAT);
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
        this.color = new Color(Math.random() * 0xFFFFFFFF);
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this._programName);
        if(program)
        {   
            context.bind(program);    
            this.angle++;
            var angle:number = this.angle  * Math.PI / 180
            var proj:Matrix = new Matrix();
            proj.setProjection(program.resolution.rawVertices[0], program.resolution.rawVertices[1]);
            var ts:Matrix = new Matrix();
            ts.translate(this.translation.rawVertices[0], this.translation.rawVertices[1]);
            var sc:Matrix = new Matrix();
            sc.scale(this.scale.rawVertices[0], this.scale.rawVertices[1]);
            var rr:Matrix = new Matrix();
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