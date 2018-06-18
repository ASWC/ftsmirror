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
import { SpriteTest } from "SpriteTest";
import { Context3DDrawTypes } from "flash/display3D/Context3DDrawTypes";
import { SpriteTestColor } from "SpriteTestColor";
import { SpriteMatrixtest } from "SpriteMatrixtest";
import { SpriteTestTriangle } from "SpriteTestTriangle";
import { Tween } from "fl/transitions/Tween";
import { Linear } from "fl/transitions/easing/Linear";
import { SpriteProgramTest } from "SpriteProgramTest";
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { ArrayTypes } from "flash/webgl/data/ArrayTypes";
import { ColorVertices } from "flash/webgl/geom/ColorVertices";
import { IndexedMatrix } from "flash/webgl/data/IndexedMatrix";
import { AtlasManager } from "flash/display3D/textures/AtlasManager";

export class Test extends Stage
{
    private loader:Loader;
    
    constructor()
    {        
        super();
        //AtlasManager.SIZE_LIMIT = 4096 * 2;
        this.frameRate = 1;
        this.align = StageAlign.TOP_LEFT;
        this.scaleMode = StageScaleMode.NO_SCALE;
        this.color = 0xAAFF3333;
        this.createContextById(0);   
        
        var program:Program3D = new Program3D(6, "atlas_test");   
        program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);  
        program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat.VEC2);    
        program.vertexShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.vertexShader.addToMain("v_texcoord = a_texcoord;");
        program.vertexShader.addToMain("gl_Position = vec4(a_position, 0, 1);"); 
        program.fragmentShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.fragmentShader.addUniform("u_texture", Context3DVertexBufferFormat.SAMPLER2D);
        program.fragmentShader.addToMain("gl_FragColor = texture2D(u_texture, v_texcoord);");
        program.drawType = Context3DDrawTypes.TRIANGLES;

        var sprite:SpriteTest = new SpriteTest(300, 300, 2.4, null);
        this.addChild(sprite);


        /*var program:Program3D = new Program3D(18, "simple_projection");        
        program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);  
        program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat.VEC4);     
        program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat.MAT3);   
        program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
        program.vertexShader.addToMain("v_color = a_color;");
        program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
        program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);");    
        program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
        program.fragmentShader.addToMain("gl_FragColor = v_color;");
        program.drawType = Context3DDrawTypes.TRIANGLES;
        var sprite:SpriteProgramTest = new SpriteProgramTest(200, 200, 1);
        this.addChild(sprite);
        var sprite:SpriteProgramTest = new SpriteProgramTest(250, 250, 3);
        this.addChild(sprite);
        var sprite:SpriteProgramTest = new SpriteProgramTest(300, 300, 2.4);
        this.addChild(sprite);*/


        /*var program:Program3D = new Program3D(6, "simple_texture");        
        program.vertexShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);  
        program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat.VEC4);     
        program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat.MAT3);   
        program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
        program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat.VEC2);        
        program.vertexShader.addToMain("v_texcoord = a_texcoord;");
        program.vertexShader.addToMain("v_color = a_color;");
        program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
        program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);"); 
        program.fragmentShader.addUniform("u_texture", Context3DVertexBufferFormat.SAMPLER2D);
        program.fragmentShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
        program.fragmentShader.addToMain("gl_FragColor = texture2D(u_texture, v_texcoord);");
        program.drawType = Context3DDrawTypes.TRIANGLES;

        

        */

        




       this.loader = new Loader();
       this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.handleComplete);
       this.loader.load(new URLRequest("cubetexture.png"));
    }

    private handleComplete = (event)=>
    {
        this.show("picture loaded")

        

        // gl.bindTexture(gl.TEXTURE_2D, texture);
        // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
        // gl.generateMipmap(gl.TEXTURE_2D);

        //var bitmap:Bitmap = <Bitmap> this.loader.content;
        //var test:SpriteTest = new SpriteTest(500, 400, 2.4, bitmap);
        //this.addChild(test);


        /*

        
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