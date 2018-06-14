import { BaseObject } from "flash/system/BaseObject";
import { VertexVarying, VertexVaryingDictionary } from "flash/webgl/shadertypes/VertexVarying";
import { VertexUniform, VertexUniformDictionary } from "flash/webgl/shadertypes/VertexUniform";
import { VertexAttribute, VertexAttributeDictionary } from "flash/webgl/shadertypes/VertexAttribute";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { Error } from "flash/Error";

export class ProgramShader extends BaseObject
{
    protected _programShader:WebGLShader;
    protected _attributes:VertexAttribute[];
    protected _attributesDic:VertexAttributeDictionary;
    protected _mainLines:string[];
    protected _varying:VertexVarying[];
    protected _varyingDic:VertexVaryingDictionary;
    protected _uniform:VertexUniform[];
    protected _uniformDic:VertexUniformDictionary;
    protected _shaderValid:boolean;
    protected _drawingContext:WebGLRenderingContext;
    protected _vertexCount:number;    
    protected _dataLength:number;

    constructor()
    {
        super();        
        this._dataLength = 0;
        this._vertexCount = 0;
        this._shaderValid = false;
        this._attributes = [];
        this._attributesDic = {};
        this._mainLines = [];
        this._varying = [];
        this._varyingDic = {};
        this._uniform = [];
        this._uniformDic = {};
    }

    public set dataLength(value:number)
    {
        this._dataLength = value;
    }

    public get vertexCount():number
    {
        return this._vertexCount;
    }

    public set drawingContext(value:WebGLRenderingContext)
    {
        this._drawingContext = value;
        if(!this._drawingContext)
        {
            this._vertexCount = 0;
        }        
    }

    public prepareForDraw():void
    {
        if(!this._drawingContext)
        {
            return;
        }
        this.prepareAttributes();
        this.prepareVaryings();
        this.prepareUniforms();
    }

    public prepareVaryings():void
    {
        
    }

    public prepareUniforms():void
    {
        for(var i:number = 0; i < this._uniform.length; i++)
        {
            var vertextUniform:VertexUniform = this._uniform[i];
            vertextUniform.reset();
        }
    }

    public prepareAttributes():void
    {        
        for(var i:number = 0; i < this._attributes.length; i++)
        {
            var vertextAttribute:VertexAttribute = this._attributes[i];


            for(var j:number = 0; j < vertextAttribute.locations.length; j++)
            {
                var location:number = vertextAttribute.locations[j];
                var buffer:WebGLBuffer = vertextAttribute.collumnBuffers[j];
                var bufferdata:Float32Array = vertextAttribute.dataCollumns[j];
                this._drawingContext.enableVertexAttribArray(location);
                this._drawingContext.bindBuffer(this._drawingContext.ARRAY_BUFFER, buffer);  

                // this must be splitted
                this._drawingContext.bufferData(this._drawingContext.ARRAY_BUFFER, vertextAttribute.vertices, this._drawingContext.STATIC_DRAW); 

                var type = this._drawingContext.FLOAT;
                var normalize = false;
                var stride = 0;
                var offset = 0;
                this._drawingContext.vertexAttribPointer(location, vertextAttribute.size, type, normalize, stride, offset);
            }
            vertextAttribute.reset();            
        }
    }

    public updateUniform(name:string, data:IVerticeIndex):void
    {      
        if(!this._drawingContext)
        {
            return;
        }
        var vertextUniform:VertexUniform = this._uniformDic[name];
        if(vertextUniform != undefined)
        {     
            vertextUniform.setData(data);       
            vertextUniform.bind(this._drawingContext, vertextUniform.vertices);
        }           
    }

    public updateAttribute(name:string, data:IVerticeIndex):void
    {
        var variable:VertexAttribute = this._attributesDic[name];
        if(!variable)
        {
            return;
        }
        if(!this._drawingContext)
        {
            return;
        }
        variable.setData(data);
        this._vertexCount = variable.length;         
    }

    public getLocations(context:WebGLRenderingContext, program:WebGLProgram):void
    {
        for(var i:number = 0; i < this._attributes.length; i++)
        {
            var vertextAttribute:VertexAttribute = this._attributes[i];
            vertextAttribute.attributeLocation = context.getAttribLocation(program, vertextAttribute.name);
            for(var j:number = 0; j < vertextAttribute.totalBuffer; j++)
            {
                vertextAttribute.collumnBuffers.push(context.createBuffer());
            }            
        }
        for(var i:number = 0; i < this._uniform.length; i++)
        {
            var vertextUniform:VertexUniform = this._uniform[i];
            vertextUniform.location = context.getUniformLocation(program, vertextUniform.name);
        }
    }

    public get shader():WebGLShader
    {
        return this._programShader;
    }

    public get shaderValid():boolean
    {
        return this._shaderValid;
    }

    public buildShader(context:WebGLRenderingContext):void
    {

    }

    protected createShader(context:WebGLRenderingContext, type:number, source:string):WebGLShader
    {
        var shader:WebGLShader = context.createShader(type);
        context.shaderSource(shader, source);
        context.compileShader(shader);
        var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
        if (success) 
        {            
            return shader;
        }      
        var compilationLog:string = context.getShaderInfoLog(shader);
        this.show("shader " + compilationLog);          
        context.deleteShader(shader);
        return null;
      }

    protected get lineBreak():string
    {
        return "\n";
    }

    protected extractAttributes(variables:VertexAttribute[]):string
    {
        var lines:string = '';
        if(!variables)
        {
            return lines;
        }
        for(var i:number = 0; i < variables.length; i++)        
        {
            lines += variables[i].getLine() + this.lineBreak;
        }
        return lines;
    }

    protected extractUniforms(variables:VertexUniform[]):string
    {
        var lines:string = '';
        if(!variables)
        {
            return lines;
        }
        for(var i:number = 0; i < variables.length; i++)        
        {
            lines += variables[i].getLine() + this.lineBreak;
        }
        return lines;
      }

    protected extractLines(mainlines:string[]):string
    {
        var lines:string = '';
        for(var i:number = 0; i < mainlines.length; i++)        
        {
            lines += mainlines[i] + this.lineBreak;
        }
        return lines;
    }

    protected extractVarying(variables:VertexVarying[]):string
    {
        var lines:string = '';
        if(!variables)
        {
            return lines;
        }
        for(var i:number = 0; i < variables.length; i++)        
        {
            lines += variables[i].getLine() + this.lineBreak;
        }
        return lines;
    }
      
}