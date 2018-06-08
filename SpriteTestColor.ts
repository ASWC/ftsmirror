import { Sprite } from "flash/display/Sprite";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { Context3D } from "flash/display3D/Context3D";
import { Program3D } from "flash/display3D/Program3D";
import { TextureUvs } from "flash/geom/TextureUvs";


export class SpriteTestColor extends Sprite
{
    private verticeData:VerticeBuffer;
    private programName:string;
    private _uniformColor:number[];

    constructor()
    {
        super();
        this._uniformColor = [];
        this._uniformColor.push(1);
        this._uniformColor.push(0.6);
        this._uniformColor.push(0.2);
        this._uniformColor.push(1);        
        this.programName = "simple_square_test_color";

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
                    rectangle.setUv(0, 0.3);
                    rectangle.setUv(1, 0.3);
                    rectangle.setUv(2, 0);

                    rectangle.setUv(3, -0.3);
                    rectangle.setUv(4, 0.3);
                    rectangle.setUv(5, 0);

                    rectangle.setUv(6, 0.3);
                    rectangle.setUv(7, -0.3);
                    rectangle.setUv(8, 0);
                    
                    rectangle.setUv(9, -0.3);
                    rectangle.setUv(10, -0.3);
                    rectangle.setUv(11, 0);
                    this.verticeData = new VerticeBuffer();
                    this.verticeData.addVertices(rectangle);
                    
                }
                program.updateVertexData("aSquareVertexPosition", this.verticeData)
                program.updateFragmentUniform("uPixelColor", this._uniformColor);
                program.flush();
            }
        }        
    }
    
    protected render(elapsedTime:number):void
    {

    }
}