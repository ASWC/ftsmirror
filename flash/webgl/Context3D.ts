import { BaseObject } from "flash/system/BaseObject";
import { ObjectUtils } from "flash/webgl/ObjectUtils";
import { Color } from "flash/geom/Color";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { Program3D } from "./Program3D";
import { Rectangle } from "../geom/Rectangle";

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

    constructor()
    {
        super();
        this._color = new Color(0x00000000);
    }

    public render(container:DisplayObjectContainer)
    {
        this.resize();
        if(!this._programTest)
        {
            this._programTest = new Program3D(); 
            this._programTest.name = "triangle_program_flat_color_resolution";  
            this._programTest.addAttributeToVertex("a_position", Program3D.VEC4, 2);
            this._programTest.addUniformToVertex("u_resolution", Program3D.VEC2);
            this._programTest.addToVertexMain("vec2 zeroToOne = a_position.xy / u_resolution;");
            this._programTest.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
            this._programTest.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
            this._programTest.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
            this._programTest.addToFragmentMain("gl_FragColor = vec4(1, 0, 0.5, 1);");


            /*
            // simple flat color program
            this._programTest.name = "triangle_program_flat_color_nomatrix";  
            this._programTest.addAttributeToVertex("a_position", Program3D.VEC4, 2);
            this._programTest.addToVertexMain("gl_Position = a_position;");
            this._programTest.addToFragmentMain("gl_FragColor = vec4(1, 0, 0.5, 1);");
            */
        }        
        if(!this._programTest.ready)
        {
            this._programTest.buildProgram(this._gl);
        }
        if(this._programTest.ready)
        {
            this._programTest.bind(this._gl);

            var positions:Float32Array = new Float32Array(12);
            positions[0] = 10;
            positions[1] = 20;

            positions[2] = 300;
            positions[3] = 20;

            positions[4] = 10;
            positions[5] = 100;

            positions[6] = 10;
            positions[7] = 100;
            positions[8] = 300;
            positions[9] = 100;
            positions[10] = 300;
            positions[11] = 20;
            

            var rect:Rectangle = new Rectangle(100, 25, 178, 95);
            var rect2:Rectangle = new Rectangle(150, 225, 178, 95);

            var vertices1:Float32Array = rect.vertices;
            var vertices2:Float32Array = rect2.vertices;

            var vertices:Float32Array = new Float32Array(vertices1.length + vertices2.length)
            
            vertices.set(vertices1, 0)
            vertices.set(vertices2, vertices1.length)



            this._programTest.updateVertexData(this._gl, 'a_position', vertices);
            this._programTest.updateVertexUniform(this._gl, "u_resolution", [this._canvas.width, this._canvas.height])


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

            this._programTest.present(this._gl);
        }

        
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
                var styleattribute:string = this._canvas.getAttribute("style");
                if(styleattribute && styleattribute.length)
                {
                    var attributes:string[] = styleattribute.split(";");
                    var newattributes:string[] = [];
                    for(var i:number = 0; i < attributes.length; i++)
                    {
                        if(attributes[i].indexOf("background-color") < 0)
                        {
                            newattributes.push(attributes[i]);      
                        }
                    }
                    this._color = new Color(canvasColor);               
                    var backgroundcolor:string = 'background-color:rgba(' + this._color.red + ", " + this._color.green + ", " + this._color.blue + ", " + this._color.absoluteAlpha + ")";
                    newattributes.push(backgroundcolor);
                    this._canvas.setAttribute("style", newattributes.join(";"));
                }
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

    public validate():void
    {        
        ObjectUtils.setProperty(this._canvas, "attachedstagerender", this._context3Did);
        ObjectUtils.setProperty(this._canvas, "context3did", this._contextId);
        ObjectUtils.setProperty(this._canvas, "context3dname", this._contextId);
        this._gl = this._canvas.getContext("webgl");
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

    public set canvas(value:HTMLCanvasElement)
    {
        if(this._canvas)
        {
            return;
        }
        this._canvas = value;
        this._context3Did = ObjectUtils.getProperty(this._canvas, "context3did");
        this._context3DName = ObjectUtils.getProperty(this._canvas, "context3dname");        
        if(!this._context3Did)
        {
            this._context3Did = this._contextId;
        }        
    }
}