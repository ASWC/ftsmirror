import { BaseObject } from "flash/system/BaseObject";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | number[];

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
        this.verticeManager.reset();
    }

    public setData(data:IVerticeIndex):void
    {
        this.verticeManager.addVertices(data);
    }

    public getVerticeAt(index:number = 0):TypedArray
    {
        return this.verticeManager.getCollumnAt(index);
    }

    public getLine():string
    {
        return "uniform " + this.dataType + " " + this.name + ";";        
    }

    public bind(context:WebGLRenderingContext, data:TypedArray):void
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
            if(data instanceof Float32Array)
            {
                context.uniform4fv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC3_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniform3fv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.VEC2_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniform2fv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.FLOAT)
        {
            context.uniform1f(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.FLOAT_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniform1fv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT2 || this.dataType == Context3DVertexBufferFormat.MAT2_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniformMatrix2fv(this.location, false, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT3 || this.dataType == Context3DVertexBufferFormat.MAT3_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniformMatrix3fv(this.location, false, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.MAT4 || this.dataType == Context3DVertexBufferFormat.MAT4_A)
        {
            if(data instanceof Float32Array)
            {
                context.uniformMatrix4fv(this.location, false, data);
            }            
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
            if(data instanceof Int32Array)
            {
                context.uniform4iv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC3_A)
        {
            if(data instanceof Int32Array)
            {
                context.uniform3iv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.INT_VEC2_A)
        {
            if(data instanceof Int32Array)
            {
                context.uniform2iv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLER2D)
        {
            context.uniform1i(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLER2D_A)
        {
            if(data instanceof Int32Array)
            {
                context.uniform1iv(this.location, data);
            }            
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLERCUBE)
        {
            context.uniform1i(this.location, data[0]);
        }
        else if(this.dataType == Context3DVertexBufferFormat.SAMPLERCUBE_A)
        {
            if(data instanceof Int32Array)
            {
                context.uniform1iv(this.location, data);
            }            
        }        
    }
}


export interface VertexUniformDictionary
{
    [name:string]:VertexUniform;
}