import { BaseObject } from "flash/system/BaseObject";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";
import { Context3DVertexBufferFormat } from "../../display3D/Context3DVertexBufferFormat";

export class IndexedVertice extends BaseObject implements IVerticeIndex
{
    protected _delegate:IVerticeBufferDelegate;
    protected _vertices:Float32Array|Int32Array;
    protected _index:number;

    constructor(length:number, type:string)
    {
        super();
        if(type == Context3DVertexBufferFormat.INT)
        {
            this._vertices = new Int32Array(length);
        }
        else if(type == Context3DVertexBufferFormat.FLOAT)
        {
            this._vertices = new Float32Array(length);
        }
    }

    public duplicate(totalDuplicates:number):void
    {
        var currentVertices:Float32Array|Int32Array = this._vertices;
        this._vertices = new Float32Array(totalDuplicates);
        var count:number = 0;
        while(count < totalDuplicates)
        {
            for(var i:number = 0; i < currentVertices.length; i++)
            {
                if(count >= totalDuplicates)
                {
                    return;
                }
                this._vertices[count] = currentVertices[i];
                count++;
            }            
        }
    }

    public fromArray(values:number[], offset:number = -1):void
    {
        var start:number = 0;
        if(offset >= 0)
        {
            start = offset;
        }
        for(var i:number = start; i < values.length; i++)
        {
            this._vertices[i] = values[i];
        }
    }

    public get rawVertices():Float32Array|Int32Array
    {
        return this._vertices;
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get length():number
    {
        return this._vertices.length;
    }

    public set index(value:number)
    {
        this._index = value;
    }

    public get index():number
    {
        return this._index;
    }

    public set delegate(value:IVerticeBufferDelegate)
    {
        this._delegate = value;
    }

}