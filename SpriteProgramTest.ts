import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { Color } from "flash/geom/Color";
import { Matrix } from "flash/geom/Matrix";


export class SpriteProgramTest extends Sprite
{
    private color:Color;
    private matrix:Matrix;

    constructor()
    {
        super();
        this._programName = "simple_projection";
        this._bounds.x = 0;
        this._bounds.y = 0;
        this._bounds.width = 512;
        this._bounds.height = 300;
        this.color = new Color(0xFF00FF00);
        this.matrix = new Matrix();
        //this.matrix.translate(0, 0);
    }

    public present(context:Context3D):void
    {
        var program:Program3D = Program3D.getProgram(this._programName);
        if(program)
        {   
            context.bind(program);
            
            program.vertexShader.updateUniform("u_triangleColor", this.color.vertices);
            program.vertexShader.updateUniform("u_G_resolution", program.resolution);
            program.vertexShader.updateUniform("u_G_projection", program.worldProjection);
            program.vertexShader.updateUniform("u_transform", this.matrix);
            program.vertexShader.updateAttribute("a_vertexPosition", this._bounds);

            
        }
    }
}