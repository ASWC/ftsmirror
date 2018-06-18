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
import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { Texture } from "flash/display3D/textures/Texture";

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
    protected _dataLength:number;
    protected _resolution:IndexedVertice;
    protected _worldprojection:Matrix;

    constructor(vertexpacketSize:number, programName:string)
    {
        super();
        this._name = programName;
        this._dataLength = vertexpacketSize;
        this._fragmentProgramShader = new FragmentShader();
        this._vertexProgramShader = new VertexShader();
        this.setPrecision("mediump");
        this._drawType = Context3DDrawTypes.TRIANGLES;
        this._programBuilt = false;
        this._invalidProgram = false;       
        Program3D.UNREGISTERED_PROGRAMS.push(this)
        Program3D.PROGRAMS[this._name] = this;
    }

    public useTexture(texture:Texture):number
    {
        this.show('using texture')
        if(!this._bindedContext)
        {
            return;
        }
        var textureid:number = 0;
        if(!texture.uploaded)
        {
            var gltexture:WebGLTexture = this._bindedContext.createTexture();
            texture.setData(gltexture);
            this._bindedContext.bindTexture(this._bindedContext.TEXTURE_2D, gltexture);
            this._bindedContext.texImage2D(this._bindedContext.TEXTURE_2D, 0, this._bindedContext.RGBA, this._bindedContext.RGBA, this._bindedContext.UNSIGNED_BYTE, texture.source);
            this._bindedContext.generateMipmap(this._bindedContext.TEXTURE_2D);
        }


        return textureid;
    }

    public get worldProjection():Matrix
    {
        return this._worldprojection; 
    }

    public set worldProjection(value:Matrix)
    {
        this._worldprojection = value;
    }

    public get resolution():IndexedVertice
    {
        return this._resolution;
    }

    public set resolution(value:IndexedVertice)
    {
        this._resolution = value;
    }

    public get dataLength():number
    {
        return this._dataLength;
    }

    /*public set dataLength(value:number)
    {
        this._dataLength = value;
    }*/

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
            var programBuilt:boolean = program.buildProgram(gl);
            if(!programBuilt)
            {
                Program3D.UNREGISTERED_PROGRAMS.push(program);
            }
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

    /*public set name(value:string)
    {
        this._name = value;
        Program3D.PROGRAMS[value] = this;
    }*/

    public get name():string
    {
        return this._name;
    }

    public buildProgram(context:WebGLRenderingContext):boolean
    {
        var error:Error;
        if(!this._name)
        {
            error = new Error("Program3D does not have a valid name set.")
            return false;
        }
        if(this._dataLength <= 0)
        {
            error = new Error("Program3D does not have a vertice count set.")
            return false;
        }
        this.vertexShader.buildShader(context);        
        this.fragmentShader.buildShader(context);       
        if(!this.vertexShader.shaderValid)
        {            
            error = new Error("Program3D " + this.name + " could not build its vertex shader")
            this._invalidProgram = true;
            return false;
        }
        if(!this.fragmentShader.shaderValid)
        {            
            error = new Error("Program3D " + this.name + " could not build its fragment shader")
            this._invalidProgram = true;
            return false;
        }        
        this._program = Program3D.createProgram(context, this.vertexShader.shader, this.fragmentShader.shader);
        if(!this._program)
        {
            error = new Error("Program3D " + this.name + " could not create a valid program")
            this._invalidProgram = true;
            return false;
        }
        this.vertexShader.getLocations(context, this._program);
        this.fragmentShader.getLocations(context, this._program);
        this.vertexShader.dataLength = this._dataLength;
        this.fragmentShader.dataLength = this._dataLength;
        return true;
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
        this._bindedContext.drawArrays(this._drawType, offset, this._dataLength * this.vertexShader.vertexCount);           
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
