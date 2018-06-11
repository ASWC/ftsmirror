import { BaseObject } from "flash/system/BaseObject";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";

export class VertexAttribute extends BaseObject
{
    protected verticeManager:VerticeBuffer;
    public dataType:string;
    public attributeLocation:number;
    public uniformLocation:WebGLUniformLocation;
    public buffer:WebGLBuffer;
    public size:number = 0;

    constructor(name:string, type:string)
    {
        super();
        this.verticeManager = new VerticeBuffer();
        this.name = name;
        this.dataType = type;
        this.size = Context3DVertexBufferFormat.getSize(this.dataType);
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
        return "attribute " + this.dataType + " " + this.name + ";";        
    }

    public get vertices():Float32Array
    {
        return this.verticeManager.vertices;
    }

    public get length():number
    {
        return this.verticeManager.indexedVertices;
    }
}

export interface VertexAttributeDictionary
{
    [name:string]:VertexAttribute;
}