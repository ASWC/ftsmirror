import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Rectangle } from "flash/geom/Rectangle";
import { Program3D } from "flash/display3D/Program3D";
import { TextureUvs } from "flash/geom/TextureUvs";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";



export class SpriteTest extends Sprite
{
    private programName:string;
    private _pos:number;
    private _uvs:TextureUvs;

    constructor(pos:number)
    {
        super();
        this._pos = pos;
        this._uvs = new TextureUvs();
        this._uvs.setUv(0, 0.3 + this._pos);
        this._uvs.setUv(1, 0.3 + this._pos);
        this._uvs.setUv(2, 0 + this._pos);
        this._uvs.setUv(3, -0.3 + this._pos);
        this._uvs.setUv(4, 0.3 + this._pos);
        this._uvs.setUv(5, 0 + this._pos);
        this._uvs.setUv(6, 0.3 + this._pos);
        this._uvs.setUv(7, -0.3 + this._pos);
        this._uvs.setUv(8, 0 + this._pos);   
        this._uvs.setUv(9, -0.3 + this._pos);
        this._uvs.setUv(10, -0.3 + this._pos);
        this._uvs.setUv(11, 0 + this._pos);
        



        
        this.programName = "simple_square_test";

    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this.programName);
        if(program)
        {    
            context.bind(program)
            program.vertexShader.updateAttribute("aSquareVertexPosition", this._uvs);         
        }        
    }
    
    protected render(elapsedTime:number):void
    {

    }
}