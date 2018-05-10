import { BaseObject } from "flash/system/BaseObject";


export class VertexAttribute extends BaseObject
{
    public dataType:string;
    public attributeLocation:number;
    public uniformLocation:WebGLUniformLocation;
    public buffer:WebGLBuffer;
    public size:number = 0;

    public getLine():string
    {
        return "attribute " + this.dataType + " " + this.name + ";";
    }
}

export interface VertexAttributeDictionary
{
    [name:string]:VertexAttribute;
}