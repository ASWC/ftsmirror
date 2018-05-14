import { BaseObject } from "flash/system/BaseObject";

export class VertexVarying extends BaseObject
{
    public dataType:string;
    public varyingLocation:number;
    //public uniformLocation:WebGLUniformLocation;
    //public buffer:WebGLBuffer;
    public size:number = 0;

    public getLine():string
    {
        return "varying " + this.dataType + " " + this.name + ";";        
    }
}

export interface VertexVaryingDictionary
{
    [name:string]:VertexVarying;
}