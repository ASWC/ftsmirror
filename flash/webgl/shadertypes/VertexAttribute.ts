import { BaseObject } from "flash/system/BaseObject";
import { Context3DVertexBufferFormat } from "flash/display3D/Context3DVertexBufferFormat";
import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export class VertexAttribute extends BaseObject
{
    protected verticeManager:VerticeBuffer;
    public dataType:string;
    protected _attributeLocation:number;
    public uniformLocation:WebGLUniformLocation;
    public buffer:WebGLBuffer;
    protected _collumnBuffers:WebGLBuffer[];
    public size:number = 0;
    protected _totalBuffers:number;
    protected _locations:number[];

    constructor(name:string, type:string)
    {
        super();
        this.verticeManager = new VerticeBuffer();
        this.name = name;
        this.dataType = type;
        this.size = Context3DVertexBufferFormat.getSize(this.dataType);
        this._totalBuffers = Context3DVertexBufferFormat.getTotalBuffers(type);
        this._collumnBuffers = [];
    }

    public getVerticeAt(index:number = 0):TypedArray
    {
        return this.verticeManager.getCollumnAt(index);
    }

    public set attributeLocation(value:number)
    {
        this._attributeLocation = value;
        this._locations = [];
        for(var i:number = 0; i < this._totalBuffers; i++)
        {
            this._locations.push(this._attributeLocation + i);
        }
    }

    public setData(data:IVerticeIndex):void
    {        
        this.verticeManager.addVertices(data);
    }

    public get length():number
    {
        return this.verticeManager.length;
    }

    public reset():void
    {
        this.verticeManager.reset();
    }

    public get collumnBuffers():WebGLBuffer[]
    {
        return this._collumnBuffers;
    }

    public get locations():number[]
    {
        return this._locations;
    }

    public get totalBuffer():number
    {
        return this._totalBuffers;
    }

    public getLine():string
    {
        return "attribute " + this.dataType + " " + this.name + ";";        
    }


}

export interface VertexAttributeDictionary
{
    [name:string]:VertexAttribute;
}