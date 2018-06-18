import { BaseObject } from "flash/system/BaseObject";
import { ObjectUtils } from "flash/webgl/ObjectUtils";
import { Color } from "flash/geom/Color";
import { Program3D } from "./Program3D";
import { Rectangle } from "flash/geom/Rectangle";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { IDisplayObject } from "../display/types/IDisplayObject";
import { Stage } from "../display/Stage";
import { DisplayObject } from "../display/DisplayObject";
import { VerticeBuffer } from "../webgl/geom/VerticeBuffer";
import { IndexedVertice } from "../webgl/geom/IndexedVertice";
import { Matrix } from "../geom/Matrix";
import { AtlasManager } from "./textures/AtlasManager";

export class Context3D extends BaseObject
{
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
    protected _stage:Stage;
    protected _currentProgram:Program3D;
    protected _resolution:IndexedVertice;
    protected _worldprojection:Matrix;
    protected _canvasWidth:number;
    protected _canvasHeight:number;

    constructor()
    {
        super();
        this._worldprojection = new Matrix();
        this._resolution = new IndexedVertice(2, Context3DVertexBufferFormat.FLOAT);
    }

    public get resolution():IndexedVertice
    {
        return this._resolution;
    }

    public get canvasWidth():number
    {
        return this._canvasWidth;
    }

    public get canvasHeight():number
    {
        return this._canvasHeight;
    }

    public set stage(value:Stage)
    {
        this._stage = value;
    }

    protected resize():void
    {
        this._canvasWidth  = this._canvas.clientWidth;
        this._canvasHeight = this._canvas.clientHeight;
        this._worldprojection.setProjection(this._canvas.width, this._canvas.height);        
        this._resolution.setData(0, this._canvas.width);
        this._resolution.setData(1, this._canvas.height);
        if(!this._gl)
        {
            return;
        }        
        if (this._canvas.width  != this._canvasWidth || this._canvas.height != this._canvasHeight) 
        {
            this._canvas.width  = this._canvasWidth;
            this._canvas.height = this._canvasHeight;
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
        var maxtextures:number = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
        var maxsize:number = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE);
        AtlasManager.init(maxtextures, maxsize, this._gl);

        // max atlases
        // max atlas size
        // create first atlas > dive by rectangles


        //this.show("max textures: " + maxtextures);
        //this.show("max size: " + this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE));

        




        this._canvas.style.backgroundColor = "transparent"; 
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

    public get currentProgram():Program3D
    {
        return null;
    }

    public bind(program:Program3D):void
    {
        if(!this._gl)
        {
            return;
        }
        if(!program.ready)
        {
            return;
        }
        if(this._currentProgram)
        {
            if(this._currentProgram != program)
            {
                this._currentProgram.flush();
            }
        }
        this._currentProgram = program;
        program.resolution = this._resolution;
        program.worldProjection = this._worldprojection;
        program.bind(this._gl);
    }

    public render(elapsedTime:number)
    {
        this.resize();
        if(Program3D.hasUnregisteredPrograms)
        {
            Program3D.registerPrograms(this._gl);
        }        
        if(this._stage && this._stage.numChildren)
        {
            var children:DisplayObject[] = this._stage.children;
            for(var i:number = 0; i < children.length; i++)
            {
                children[i].present(this);
            }
        }
        if(this._currentProgram)
        {
            this._currentProgram.flush();
        }
        this._currentProgram = null;
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