import { BaseObject } from "flash/system/BaseObject";
import { Error } from "flash/Error";
import { Rectangle } from "flash/geom/Rectangle";
import { Matrix } from "flash/geom/Matrix";
import { BitmapData } from "flash/display/BitmapData";
import { TextureDataDictionary, TextureData } from "flash/webgl/shadertypes/TextureData";
import { Context3DDrawTypes } from "flash/display3D/Context3DDrawTypes";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { VertexShader } from "flash/webgl/VertexShader";
import { FragmentShader } from "flash/webgl/FragmentShader";

export class Program3D extends BaseObject
{
    public static PRECISION_MEDIUM:string = "mediump";
    protected static PROGRAMS:Program3DDictionary = {};
    protected static UNREGISTERED_PROGRAMS:Program3D[] = [];   
    protected _program:WebGLProgram;    
    protected _drawType:number;
    protected _invalidProgram:boolean;
    protected _programBuilt:boolean;
    protected _bindedContext:WebGLRenderingContext;
    protected _vertexProgramShader:VertexShader;
    protected _fragmentProgramShader:FragmentShader;
    protected _verticeCount:number;

    constructor()
    {
        super();
        this._verticeCount = 0;
        this._fragmentProgramShader = new FragmentShader();
        this._vertexProgramShader = new VertexShader();
        this.setPrecision("mediump");
        this._drawType = Context3DDrawTypes.TRIANGLES;
        this._programBuilt = false;
        this._invalidProgram = false;       
        Program3D.UNREGISTERED_PROGRAMS.push(this)
    }

    public get verticeCount():number
    {
        return this._verticeCount;
    }

    public set verticeCount(value:number)
    {
        this._verticeCount = value;
    }

    public setPrecision(value:string):void
    {
        this._fragmentProgramShader.precision = "precision " + value + " float;";
    }

    public get fragmentShader():FragmentShader
    {
        return this._fragmentProgramShader;
    }

    public get vertexShader():VertexShader
    {
        return this._vertexProgramShader;
    }

    public static getProgram(name:string):Program3D
    {
        return Program3D.PROGRAMS[name];
    }

    public static registerPrograms(gl:WebGLRenderingContext):void
    {
        while(Program3D.UNREGISTERED_PROGRAMS.length)
        {
            var program:Program3D = Program3D.UNREGISTERED_PROGRAMS.shift();
            program.buildProgram(gl);
        }
    }

    public static get hasUnregisteredPrograms():boolean
    {
        if(Program3D.UNREGISTERED_PROGRAMS.length)
        {
            return true;
        }
        return false;
    }

    public set name(value:string)
    {
        this._name = value;
        Program3D.PROGRAMS[value] = this;
    }

    public get name():string
    {
        return this._name;
    }

    public buildProgram(context:WebGLRenderingContext):void
    {
        this.vertexShader.buildShader(context);
        this.fragmentShader.buildShader(context);
        if(!this.vertexShader.shaderValid || !this.fragmentShader.shaderValid)
        {            
            this._invalidProgram = true;
            return;
        }
        this._program = Program3D.createProgram(context, this.vertexShader.shader, this.fragmentShader.shader);
        if(!this._program)
        {
            this._invalidProgram = true;
            return;
        }
        this.vertexShader.getLocations(context, this._program);
        this.fragmentShader.getLocations(context, this._program);
    }

    protected static createProgram(context:WebGLRenderingContext, vertexShader:WebGLShader, fragmentShader:WebGLShader):WebGLProgram
    {
        var program:WebGLProgram = context.createProgram();
        context.attachShader(program, vertexShader);
        context.attachShader(program, fragmentShader);
        context.linkProgram(program);
        var success = context.getProgramParameter(program, context.LINK_STATUS);
        if (success) 
        {
            return program;
        }
        var error:Error = new Error(context.getProgramInfoLog(program));
        context.deleteProgram(program);
        return null;
    }

    public get ready():boolean
    {
        if(this._invalidProgram)
        {
            return this._invalidProgram;
        }
        if(!this._program)
        {
            return false;
        }
        return true;
    }

    public set drawType(value:number)
    {
        this._drawType = value;
    }

    public flush():void
    {
        if(!this._bindedContext)
        {
            return;
        }
        this.vertexShader.prepareForDraw();
        this.fragmentShader.prepareForDraw();
        var offset = 0;
        this._bindedContext.drawArrays(this._drawType, offset, this._verticeCount * this.vertexShader.vertexCount);           
        this._bindedContext = null;
        this.vertexShader.drawingContext = null;
        this.fragmentShader.drawingContext = null;
    }

    public bind(context:WebGLRenderingContext):void
    {
        if(this._invalidProgram)
        {
            return;
        }
        this._bindedContext = context;
        context.useProgram(this._program);
        this.vertexShader.drawingContext = context;
        this.fragmentShader.drawingContext = context;
    }

}


export interface Program3DDictionary
{
    [name:string]:Program3D;
}
