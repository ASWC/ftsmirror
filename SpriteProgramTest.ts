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
        this._bounds.x = 0;
        this._bounds.y = 0;
        this._bounds.width = 100;
        this._bounds.height = 100;
        this.angle = 30;

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
            /*
            new Float32Array([
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
                67, 90,
            ]),*/
        }



        this.color = new Color(0xFF00FF00);
        

        
        
        //this.matrix.translate(10, 10);
        //this.matrix.translate(0, 0);
        //this.matrix.translate(200, 200);

        //
        
        //this.matrix.scale(2, 2);

        
        
       // this.show(this.matrix.tx)
        //this.show(this.matrix.ty)
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this._programName);
        if(program)
        {   
            context.bind(program);    

            /*
            this.matrix.identity();
            
            
            */
           //this.matrix = new Matrix();
           // this.matrix.setProjection(program.resolution.rawVertices[0], program.resolution.rawVertices[1]);
           // this.matrix.scale(1, 1);

            this.angle++;

            //this.angle = 10

            //this.vrotation.rawVertices[0] = Math.sin(this.angle * Math.PI / 180)
            //this.vrotation.rawVertices[1] = Math.cos(this.angle * Math.PI / 180)
            
            //this.matrix.translate(200, 200);

            var angle:number = this.angle  * Math.PI / 180

           // this.matrix.rotate(angle)


             //this.matrix.rotate(angle)
            

            //this.matrix.scale(2, 2);

            //program.vertexShader.updateUniform("u_triangleColor", this.color.vertices);

            
            //program.vertexShader.updateUniform("u_G_projection", program.worldProjection);
            //this.matrix.multiply(program.worldProjection);
            //program.worldProjection.multiply(this.matrix);

            var ts:Matrix = new Matrix();
            ts.translate(this.translation.rawVertices[0], this.translation.rawVertices[1]);

            

            var sc:Matrix = new Matrix();
            sc.scale(this.scale.rawVertices[0], this.scale.rawVertices[1]);

            

            var rr:Matrix = new Matrix();
            rr.rotate(angle);

            

            var matrix:Matrix = new Matrix();

            var matrix:Matrix = Matrix.multiply(ts, rr);

           // this.show(matrix.rawVertices);

            matrix = Matrix.multiply(matrix, sc);

            

            /*

            var matrix:Matrix = new Matrix();
            matrix.translate(this.translation.rawVertices[0], this.translation.rawVertices[1]);

            matrix.rotate(angle);

            matrix.scale(this.scale.rawVertices[0], this.scale.rawVertices[1]);*/

            program.vertexShader.updateAttribute("a_position", this.shape);
            program.vertexShader.updateUniform("u_resolution", program.resolution);   

            program.vertexShader.updateUniform("u_matrix", matrix);

            //program.vertexShader.updateUniform("u_translation", this.translation);
            //program.vertexShader.updateUniform("u_rotation", this.vrotation);
            //program.vertexShader.updateUniform("u_scale", this.scale);

            program.fragmentShader.updateUniform("u_color", this.color.vertices); 
            
            /*this.show("start")
            for(var i:number = 0; i < this.shape.rawVertices.length; i += 2)
            {
                var matrix:Matrix = new Matrix();
                matrix.tx = this.shape.rawVertices[i]
                matrix.ty = this.shape.rawVertices[i + 1]

                matrix.scale(this.scale.rawVertices[0], this.scale.rawVertices[1]);

                var x:number = this.shape.rawVertices[i] * this.scale.rawVertices[0] 
                var y:number = this.shape.rawVertices[i + 1] * this.scale.rawVertices[1] 
                

                this.show(x + " : " + y);

                this.show("matrix " + matrix.a + " : " + matrix.d);
            }*/


            /*

show: 0 : 0
Tracer.ts:112 show: 45 : 0
2Tracer.ts:112 show: 0 : 225
Tracer.ts:112 show: 45 : 0
Tracer.ts:112 show: 45 : 225
Tracer.ts:112 show: 45 : 0
Tracer.ts:112 show: 150 : 0
2Tracer.ts:112 show: 45 : 45
Tracer.ts:112 show: 150 : 0
Tracer.ts:112 show: 150 : 45
Tracer.ts:112 show: 45 : 90
Tracer.ts:112 show: 100.5 : 90
2Tracer.ts:112 show: 45 : 135
Tracer.ts:112 show: 100.5 : 90
Tracer.ts:112 show: 100.5 : 135
Tracer.ts:112 show: start
Tracer.ts:112 show: 0 : 0
Tracer.ts:112 show: 45 : 0
2Tracer.ts:112 show: 0 : 225
Tracer.ts:112 show: 45 : 0
Tracer.ts:112 show: 45 : 225
Tracer.ts:112 show: 45 : 0
Tracer.ts:112 show: 150 : 0
2Tracer.ts:112 show: 45 : 45
Tracer.ts:112 show: 150 : 0
Tracer.ts:112 show: 150 : 45
Tracer.ts:112 show: 45 : 90
Tracer.ts:112 show: 100.5 : 90
2Tracer.ts:112 show: 45 : 135
Tracer.ts:112 show: 100.5 : 90
Tracer.ts:112 show: 100.5 : 135

            */




            

             
            

            //program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);   
            //program.vertexShader.addUniform("u_resolution", Context3DVertexBufferFormat.VEC2);
            //program.vertexShader.addUniform("u_translation", Context3DVertexBufferFormat.VEC2);
            //program.vertexShader.addUniform("u_rotation", Context3DVertexBufferFormat.VEC2);

            

            //this.matrix.rotate(angle)

            //this.show(this.angle);

            
        }
    }
}