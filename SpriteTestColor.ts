import { Sprite } from "flash/display/Sprite";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { TextureUvs } from "flash/geom/TextureUvs";
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { Rectangle } from "flash/geom/Rectangle";


export class SpriteTestColor extends Sprite
{
    private programName:string;
    private _pos:number;
    private _uvs:Rectangle;
    private _colorVertice:IndexedVertice;

    constructor(pos:number, colors:number[])
    {
        super();

        this._pos = pos;
        this._uvs = new Rectangle(0.25 + pos, 0.25 + pos, 0.5 + pos, 0.5 + pos);
        this._colorVertice = new IndexedVertice(24, Context3DVertexBufferFormat.FLOAT)

        var concatcolor:number[] = [];
        for(var i:number = 0; i < 6; i++)
        {
            concatcolor.push(colors[0]);
            concatcolor.push(colors[1]);
            concatcolor.push(colors[2]);
            concatcolor.push(colors[3]);
        }

        this._colorVertice.fromArray(concatcolor);



        /*
        this._colorVertice.rawVertices[0] = colors[0];
        this._colorVertice.rawVertices[1] = colors[1];
        this._colorVertice.rawVertices[2] = colors[2];
        this._colorVertice.rawVertices[3] = colors[3];*/

        
        this.programName = "simple_square_test_color";
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this.programName);
        if(program)
        {   
            context.bind(program)
            program.vertexShader.updateAttribute("aSquareVertexPosition", this._uvs);  
            program.vertexShader.updateAttribute("uTriangleColor", this._colorVertice);  

        
        }        
    }
    
    protected render(elapsedTime:number):void
    {

    }
}