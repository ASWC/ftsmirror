import { Sprite } from "flash/display/Sprite";
import { Context3D } from "flash/display3D/Context3D";
import { Rectangle } from "flash/geom/Rectangle";
import { Program3D } from "flash/display3D/Program3D";
import { TextureUvs } from "flash/geom/TextureUvs";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";



export class SpriteTest extends Sprite
{
    private verticeData:VerticeBuffer;
    private programName:string;

    constructor()
    {
        super();
        



        
        this.programName = "simple_square_test";

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
                    rectangle.setUv(0, 0.5);
                    rectangle.setUv(1, 0.5);
                    rectangle.setUv(2, 0);

                    rectangle.setUv(3, -0.5);
                    rectangle.setUv(4, 0.5);
                    rectangle.setUv(5, 0);

                    rectangle.setUv(6, 0.5);
                    rectangle.setUv(7, -0.5);
                    rectangle.setUv(8, 0);
                    
                    rectangle.setUv(9, -0.5);
                    rectangle.setUv(10, -0.5);
                    rectangle.setUv(11, 0);
                    this.verticeData = new VerticeBuffer();
                    this.verticeData.addVertices(rectangle);
                    
                }
                program.updateVertexData("aSquareVertexPosition", this.verticeData)
                program.flush();
            }
        }        
    }
    
    protected render(elapsedTime:number):void
    {

    }
}