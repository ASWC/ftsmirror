import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Rectangle } from "flash/geom/Rectangle";
import { Program3D } from "flash/display3D/Program3D";
import { TextureUvs } from "flash/geom/TextureUvs";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { ColorVertices } from "flash/webgl/geom/ColorVertices";
import { IndexedMatrix } from "flash/webgl/data/IndexedMatrix";
import { ArrayTypes } from "flash/webgl/data/ArrayTypes";
import { Bitmap } from "flash/display/Bitmap";



export class SpriteTest extends Sprite
{
    private shape:IndexedVertice;
    private angle:number; 
    private color:ColorVertices;
    protected scale:IndexedMatrix;
    protected projection:IndexedMatrix;
    protected trasnlation:IndexedMatrix;
    protected rotationMatrix:IndexedMatrix;
    protected speed:number;
    protected _bitmap:Bitmap;

    private textcoords:IndexedVertice;
    private textids:IndexedVertice;

    constructor(w:number, h:number, rrs:number, bitmap:Bitmap)
    {
        super();    
        this._programName = "atlas_test";

        this.shape = new IndexedVertice(12, ArrayTypes.FLOAT32ARRAY);
        this.shape.setData(0, -1);//left
        this.shape.setData(1, 1);//top

        this.shape.setData(2, -1);//left
        this.shape.setData(3, -1);//bottom

        this.shape.setData(4, 1);//right
        this.shape.setData(5, 1);//top

        this.shape.setData(6, 1);//right
        this.shape.setData(7, 1);//top

        this.shape.setData(8, -1);//left
        this.shape.setData(9, -1);//bottom

        this.shape.setData(10, 1);//right
        this.shape.setData(11, -1);//bottom

        this.textcoords = new IndexedVertice(12, ArrayTypes.FLOAT32ARRAY);
        this.textcoords.setData(0, 0);//left
        this.textcoords.setData(1, 1);//top

        this.textcoords.setData(2, 0);//left
        this.textcoords.setData(3, 0);//bottom

        this.textcoords.setData(4, 1);
        this.textcoords.setData(5, 1);

        this.textcoords.setData(6, 1);
        this.textcoords.setData(7, 1);

        this.textcoords.setData(8, 0);
        this.textcoords.setData(9, 0);

        this.textcoords.setData(10, 1);
        this.textcoords.setData(11, 0);

        /*
        this._bitmap = bitmap;     
        
        this.speed = rrs
        this.angle = 0;

        this.textids = new IndexedVertice(1, ArrayTypes.INT32ARRAY);
        this.textids.setData(0, 0);

        this.textcoords = new IndexedVertice(12, ArrayTypes.FLOAT32ARRAY);

         


                
        this.color = new ColorVertices(Math.random() * 0xFFFFFFFF, 1, 6); 
        this.trasnlation = new IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
        this.trasnlation.translate(w, h);
        this.rotationMatrix = new IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
        this.projection = new IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
        this.scale = new IndexedMatrix(1, 0, 0, 1, 0, 0, 6);
        this.scale.scale(1.5, 1.5);*/
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this._programName);
        if(program)
        {   
            context.bind(program); 
            program.vertexShader.updateAttribute("a_position", this.shape);
            program.vertexShader.updateAttribute("a_texcoord", this.textcoords);

            this.show('test')

            /*
 
        program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat.VEC2);    
      
     
        program.fragmentShader.addUniform("u_texture", Context3DVertexBufferFormat.SAMPLER2D);
      




            this.angle += this.speed;            
            var angle:number = this.angle * Math.PI / 180;
            this.projection.setProjection(program.resolution.getData(0), program.resolution.getData(1));    
            this.rotationMatrix.rotate(angle);
            var textid:number = program.useTexture(this._bitmap.bitmapData.texture);
            this.textids.setData(0, textid);
            
            program.vertexShader.updateAttribute("a_color", this.color);  
            program.vertexShader.updateAttribute("a_scale", this.scale);
            program.vertexShader.updateAttribute("u_projection", this.projection);
            program.vertexShader.updateAttribute("u_translation", this.trasnlation);
            program.vertexShader.updateAttribute("u_rotation", this.rotationMatrix);
            program.vertexShader.updateAttribute("a_texcoord", this.textcoords);
            program.fragmentShader.updateUniform("u_texture", this.textids);   */         
        }
    }
    
    protected render(elapsedTime:number):void
    {

    }
}