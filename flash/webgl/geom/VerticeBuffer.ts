import { BaseObject } from "flash/system/BaseObject";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export class VerticeBuffer extends BaseObject implements IVerticeBufferDelegate
{
    protected _vertices:TypedArray;
    protected _needUpdate:boolean;
    protected _verticeIndexes:IVerticeIndex[];
    protected _changedVertices:IVerticeIndex[];
    protected _verticeLength:number;

    constructor()
    {
        super();
        this._verticeLength = 0;
        this._verticeIndexes = [];
        this._changedVertices = [];
        this._needUpdate = true;
    }



    public getCollumnAt(index:number = 0):TypedArray
    {
        var columndata:TypedArray;
        var collumns:TypedArray[] = [];
        var datalength:number = 0;
        for(var i:number = 0; i < this._verticeIndexes.length; i++)
        {
            var dataCollumn:TypedArray = this._verticeIndexes[i].collumns[index];
            collumns.push(dataCollumn);
            datalength += dataCollumn.length;
        }
        while(collumns)
        {

        }
        return columndata;
    }

    public onVerticeChanged(value:IVerticeIndex):void
    {
        this._needUpdate = true;
        this._changedVertices.push(value);   
    }

    public addVertices(value:IVerticeIndex):void
    {
        this._verticeIndexes.push(value);        
        this._verticeLength += value.length; 
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get length():number
    {
        return this._verticeLength;
    }

    public reset():void
    {

    }
}