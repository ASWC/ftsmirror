import { BaseObject } from "flash/system/BaseObject";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";
import { ArrayTypes } from "../data/ArrayTypes";
import { IndexedVertice } from "./IndexedVertice";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export class VerticeBuffer extends BaseObject implements IVerticeBufferDelegate
{
    protected _vertices:TypedArray;
    protected _needUpdate:boolean;
    protected _verticeIndexes:IVerticeIndex[];
    protected _changedVertices:IVerticeIndex[];
    protected _verticeLength:number;
    protected _columns:TypedArray[];
    protected _dataLength:number;
    protected _type:string;

    constructor()
    {
        super();
        this._dataLength = 0;
        this._verticeLength = 0;
        this._verticeIndexes = [];
        this._changedVertices = [];
        this._needUpdate = true;
    }

    public reset():void
    {
        this._dataLength = 0;
        this._verticeLength = 0;
        this._verticeIndexes = [];
        this._changedVertices = [];
        this._columns = [];
    }

    public getCollumnAt(index:number = 0):TypedArray
    {
        var column:TypedArray = this._columns[index];
        if(column == undefined || !column)
        {
            column = ArrayTypes.getTypedArray(this._type, this._dataLength * this._verticeIndexes.length); 
            this._columns[index] = column;                    
            for(var i:number = 0; i < this._verticeIndexes.length; i++)
            {
                var indexedv:IVerticeIndex = this._verticeIndexes[i];
                var start:number = this._dataLength * i;
                column.set(indexedv.collumns[index], start);
            }
        }
        return column;
    }

    public onVerticeChanged(value:IVerticeIndex):void
    {
        this._needUpdate = true;
        this._changedVertices.push(value);   
    }

    public addVertices(value:IVerticeIndex):void
    {
        this._verticeIndexes.push(value);        
        this._dataLength = value.collumns[0].length; 
        this._verticeLength += this._dataLength; 
        this._type = value.type;        
        if(!this._columns)
        {
            this._columns = [];
        }
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get length():number
    {
        return this._verticeIndexes.length;
    }

    
}