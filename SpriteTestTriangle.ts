import { Sprite } from "flash/display/Sprite";
import { TextureUvs } from "flash/geom/TextureUvs";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { Rectangle } from "flash/geom/Rectangle";


export class SpriteTestTriangle extends Sprite
{
    private programName:string;
    private _pos:number;
    private _uvs:Rectangle;

    constructor(pos:number)
    {
        super();
        this._pos = pos;
        this._uvs = new Rectangle(0.25 + pos, 0.25 + pos, 0.5 + pos, 0.5 + pos);
        /*
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
        this._uvs.setUv(11, 0 + this._pos);    */    
        this.programName = "simple_square_test_triangles";
    }

    public present(context:Context3D):void
    {
        /*var program:Program3D = Program3D.getProgram(this.programName);
        if(program)
        {    
            context.bind(program)
            program.vertexShader.updateAttribute("aSquareVertexPosition", this._uvs);         
        }   */
    }
}