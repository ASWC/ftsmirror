import { BaseObject } from "flash/system/BaseObject";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";

export class VertexUniform extends BaseObject
{
    protected verticeManager:VerticeBuffer;
    public dataType:string;
    public location:WebGLUniformLocation;

    constructor(name:string, type:string)
    {
        super();
        this.name = name;
        this.dataType = type;
        this.verticeManager = new VerticeBuffer();
    }

    public reset():void
    {
        this.verticeManager = new VerticeBuffer();
    }

    public setData(data:IVerticeIndex):void
    {
        this.verticeManager.addVertices(data);
    }

    public getLine():string
    {
        return "uniform " + this.dataType + " " + this.name + ";";        
    }

    public get vertices():Float32Array
    {
        return this.verticeManager.vertices;
    }

    public bind(context:WebGLRenderingContext, data:Float32Array|Int32Array|number[]):void
    {
        if(this.dataType == Context3DVertexBufferFormat.VEC2)
        {
            context.uniform2f(this.location, data[0], data[1]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC3)
        {
            context.uniform3f(this.location, data[0], data[1], data[2]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC4)
        {
            context.uniform4f(this.location, data[0], data[1], data[2], data[3]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC4_A)
        {
            context.uniform4fv(this.location, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC3_A)
        {
            context.uniform3fv(this.location, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC2_A)
        {
            context.uniform2fv(this.location, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.FLOAT)
        {
            context.uniform1f(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.FLOAT_A)
        {
            context.uniform1fv(this.location, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT2 || this.dataType == Context3DVertexBufferFormat.MAT2_A)
        {
            context.uniformMatrix2fv(this.location, false, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT3 || this.dataType == Context3DVertexBufferFormat.MAT3_A)
        {
            context.uniformMatrix3fv(this.location, false, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT4 || this.dataType == Context3DVertexBufferFormat.MAT4_A)
        {
            context.uniformMatrix4fv(this.location, false, new Float32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT)
        {
            context.uniform1i(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_A)
        {
            if(data instanceof Int32Array)
            {
                context.uniform1iv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC2)
        {
            context.uniform2i(this.location, data[0], data[1]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC3)
        {
            context.uniform3i(this.location, data[0], data[1], data[2]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC4)
        {
            context.uniform4i(this.location, data[0], data[1], data[2], data[3]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC4_A)
        {
            context.uniform4iv(this.location, new Int32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC3_A)
        {
            context.uniform3iv(this.location, new Int32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC2_A)
        {
            context.uniform2iv(this.location, new Int32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLER2D)
        {
            context.uniform1i(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLER2D_A)
        {
            context.uniform1iv(this.location, new Int32Array(data));
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLERCUBE)
        {
            context.uniform1i(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLERCUBE_A)
        {
            context.uniform1iv(this.location, new Int32Array(data));
        }        
    }
}


export interface VertexUniformDictionary
{
    [name:string]:VertexUniform;
}