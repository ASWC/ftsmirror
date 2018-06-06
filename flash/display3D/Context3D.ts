import { BaseObject } from "flash/system/BaseObject";
import { ObjectUtils } from "flash/webgl/ObjectUtils";
import { Color } from "flash/geom/Color";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { Program3D } from "./Program3D";
import { Rectangle } from "flash/geom/Rectangle";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeBuffer } from "../webgl/shadertypes/VerticeBuffer";
import { IDisplayObjectContainer } from "../display/types/IDisplayObjectContainer";
import { IDisplayObject } from "../display/types/IDisplayObject";
import { Bitmap } from "../display/Bitmap";
import { TextureUvs } from "../geom/TextureUvs";
import { Polygon } from "../geom/Polygon";

export class Context3D extends BaseObject
{
    protected _programTest:Program3D;
    protected _canvas:HTMLCanvasElement;
    protected _contextId:number;
    protected _context3Did:number;
    protected _context3DName:string;
    protected _defaultContext:boolean;
    protected _gl:WebGLRenderingContext;
    protected _color:Color;
    protected verticetest:VerticeBuffer;
    protected recttest:Rectangle;
    protected drawcount:number;

    constructor()
    {
        super();
    }

    protected resize():void
    {
        if(!this._gl)
        {
            return;
        }
        var displayWidth:number  = this._canvas.clientWidth;
        var displayHeight:number = this._canvas.clientHeight;
        if (this._canvas.width  != displayWidth || this._canvas.height != displayHeight) 
        {
            this._canvas.width  = displayWidth;
            this._canvas.height = displayHeight;
            this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
        }            
        this._gl.clearColor(this._color.absoluteRed, this._color.absoluteGreen, this._color.absoluteBlue, this._color.absoluteAlpha);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);        
    }

    public set color(value:Color)
    {
        this._color = value;
    }

    public initRendering():void
    {
        this.resize();
    }

    public isValid():boolean
    {
        if(this._gl)
        {
            return true;
        }
        return false;
    }

    public validate():void
    {        
        this._gl = this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl");     
    }

    public set canvas(value:HTMLCanvasElement)
    {
        if(this._canvas)
        {
            return;
        }
        this._canvas = value;      
    }

    public get canvas():HTMLCanvasElement
    {
        return this._canvas;
    }










    public render(container:IDisplayObjectContainer)
    {
        this.resize();
        if(Program3D.hasUnregisteredPrograms)
        {
            Program3D.registerPrograms(this._gl);
        }
        

        if(container.numChildren)
        {
            if(!this._gl)
            {
                return;
            }
            var child:Bitmap = <Bitmap> container.getChildAt(0);
            var program:Program3D = Program3D.getProgram("texture_program_nomatrix_test");
            if(program)
            {
                program.use(this._gl);
                
                program.registerTexture(this._gl, child.bitmapData);

                var rect:Rectangle = new Rectangle(300, 150, 178, 95);

                //this.reveal(rect.vertices);


                var vbuffer:VerticeBuffer = new VerticeBuffer()
                vbuffer.addVertices(rect);

                program.updateVertexData(this._gl, 'a_position', vbuffer);


             

                var uvs:Polygon = new Polygon();
                //this.reveal(uvs.vertices);
                var vbuffer:VerticeBuffer = new VerticeBuffer()
                vbuffer.addVertices(uvs);

                program.updateVertexData(this._gl, 'a_texCoord', vbuffer);

                program.updateVertexUniform(this._gl, "u_resolution", [this._canvas.width, this._canvas.height])        

                //program.updateFragmentUniform(this._gl, "u_color", [0.5, 0.2, 0.2, 0.5]);
                //program.present(this._gl);


                /*var positions:Float32Array = new Float32Array(12)
                positions[0] = 0;
                positions[1] = 0;
                positions[2] = -1;
                positions[3] = 0;
                positions[4] = 0;
                positions[5] = 1;
                positions[6] = 0;
                positions[7] = 0;
                positions[8] = 1;
                positions[9] = 0;
                positions[10] = 0;
                positions[11] = 1;   */              
            }
        }
        
        if(!this._programTest)
        {
            /*this._programTest = new Program3D(); 
            this._programTest.name = "triangle_program_flat_color_resolution";  
            this._programTest.addAttributeToVertex("a_position", Context3DVertexBufferFormat.VEC4, 2);
            this._programTest.addUniformToVertex("u_resolution", Context3DVertexBufferFormat.VEC2);
            this._programTest.addToVertexMain("vec2 zeroToOne = a_position.xy / u_resolution;");
            this._programTest.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
            this._programTest.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
            this._programTest.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
            this._programTest.addUniformToFragment("u_color", Context3DVertexBufferFormat.VEC4);
            this._programTest.addToFragmentMain("gl_FragColor = u_color;");   */      
            /*
            // simple flat color program
            this._programTest.name = "triangle_program_flat_color_nomatrix";  
            this._programTest.addAttributeToVertex("a_position", Program3D.VEC4, 2);
            this._programTest.addToVertexMain("gl_Position = a_position;");
            this._programTest.addToFragmentMain("gl_FragColor = vec4(1, 0, 0.5, 1);");
            */
        }        
        //if(!this._programTest.ready)
        //{
            /*this._programTest.buildProgram(this._gl);*/
        //}
        //if(this._programTest.ready)
       // {
            //this._programTest.bind(this._gl);
            //
            //var rect2:Rectangle = new Rectangle(150, 300, 178, 95);
            /*
            var vertices1:Float32Array = rect.vertices;
            var vertices2:Float32Array = rect2.vertices;
            var vertices:Float32Array = new Float32Array(vertices1.length + vertices2.length)            
            vertices.set(vertices1, 0)
            vertices.set(vertices2, vertices1.length) */  
            
            /*
            // simple flat color program
            var positions:Float32Array = new Float32Array(12)
            positions[0] = 0;
            positions[1] = 0;
            positions[2] = -1;
            positions[3] = 0;
            positions[4] = 0;
            positions[5] = 1;
            positions[6] = 0;
            positions[7] = 0;
            positions[8] = 1;
            positions[9] = 0;
            positions[10] = 0;
            positions[11] = 1;                 
            this._programTest.updateVertexData(this._gl, 'a_position', positions);
            */
            //this._programTest.present(this._gl);
        //}
        /*this.drawcount++;
        if(this.drawcount == 2000)
        {
            this.recttest.width = 400;
        }*/
    }

    protected renderGraphic(graphic:IDisplayObject):void
    {
        this.show('rendering: ' + graphic)
    }



    public release():void
    {
        delete this._canvas.dataset.attachedstagerender;
    }

    public set defaultContext(value:boolean)
    {
        this._defaultContext = value;
    }

    public get defaultContext():boolean
    {
        return this._defaultContext;
    }

    public setCanvas(canvasWidth:number = -1, canvasHeight:number = -1, canvasColor:number = -1):void
    {
        if(this._canvas)
        {
            if(canvasWidth > 0)
            {
                this._canvas.width = canvasWidth;
            }
            if(canvasHeight > 0)
            {
                this._canvas.height = canvasHeight;
            }            
            if(canvasColor >= 0)
            {
                this._color = new Color(canvasColor);  
            }          
        }
    }

    public set contextId(value:number)
    {
        this._contextId = value;
    }

    public get context3Did():number
    {
        return this._context3Did;
    }

    public get context3DName():string
    {
        return this._context3DName;
    }





    public get hasContextAvailable():boolean
    {
        var attachedStage:string = ObjectUtils.getProperty(this._canvas, "attachedstagerender");
        var gl:WebGLRenderingContext = this._canvas.getContext("webgl");
        if(!gl)
        {           
            return false;
        }
        if(attachedStage)
        {
            return false;
        }
        return true;
    }


}