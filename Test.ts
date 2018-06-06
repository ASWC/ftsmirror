import { BaseObject } from "flash/system/BaseObject";
import { Stage } from "flash/display/Stage";

import { Stage3D } from "flash/display3D/Stage3D";
import { Context3D } from "flash/display3D/Context3D";
import { StageAlign } from "flash/display/StageAlign";
import { StageScaleMode } from "flash/display/StageScaleMode";
import { Loader } from "flash/display/Loader";
import { Event } from "flash/events/Event";
import { ProgressEvent } from "flash/events/ProgressEvent";
import { URLRequest } from "flash/net/URLRequest";
import { Program3D } from "flash/display3D/Program3D";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { Bitmap } from "flash/display/Bitmap";
import { BitmapData } from "flash/display/BitmapData";

export class Test extends Stage
{
    //private loader:Loader;
    
    constructor()
    {
        super();
        this.align = StageAlign.TOP_LEFT;
        this.scaleMode = StageScaleMode.NO_SCALE;
        this.color = 0x99333333;
        this.createContextById(0);




        //this._context3D.setCanvas(-1, -1);

        //this.loader = new Loader();
        //this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.handleComplete);
        //this.loader.load(new URLRequest("20170818_120214.jpg"));

        //this.loader.contentLoaderInfo.addEventListener(ProgressEvent.pr, this.handleComplete);




       // this._context3D = Stage3D.createContext();

        //this._context3D.setCanvas(400, 400);

        //this._context3D = Stage3D.assignContextByid(1);

       // this._context3D.setCanvas(null, 400, 400, 0xAA00FF00);

        //this._context3D = Stage3D.assignContextByid(2);

        //this._context3D.setCanvas(null, 200, 200, 0xFF00FFFF);

        // assign different context
        // set context size + color
        // create a context if none exist
    }

    private handleComplete = (event)=>
    {
        /*
        var program:Program3D = new Program3D();
        program.name = "texture_program_nomatrix_test"; 
        program.addAttributeToVertex("a_position", Context3DVertexBufferFormat.VEC2, 2) // not sure about size
        program.addAttributeToVertex("a_texCoord", Context3DVertexBufferFormat.VEC2, 2) // not sure about size
        program.addVaryingToVertex("v_texCoord", Context3DVertexBufferFormat.VEC2);
        program.addUniformToVertex("u_resolution", Context3DVertexBufferFormat.VEC2);
        program.addToVertexMain("vec2 zeroToOne = a_position / u_resolution;");
        program.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
        program.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
        program.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
        program.addToVertexMain("v_texCoord = a_texCoord;");
        program.addUniformToFragment("u_image", Context3DVertexBufferFormat.SAMPLER2D);
        program.addVaryingToFragment("v_texCoord", Context3DVertexBufferFormat.VEC2);
        program.addToFragmentMain("gl_FragColor = texture2D(u_image, v_texCoord);");

        var bitmap:Bitmap = <Bitmap> this.loader.content;
        var data:BitmapData = bitmap.bitmapData;

        this.addChild(bitmap);

        //this._context3D.registerTexture(this.loader.content);

*/
        /*         
      void main() 
      {
         gl_FragColor = texture2D(u_image, v_texCoord);
      }
      </script>

        */

        
    



    }
}