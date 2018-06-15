import { BaseObject } from "flash/system/BaseObject";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";

export class VerticeDuplicator extends BaseObject// implements IVerticeIndex, IVerticeBufferDelegate
{
    protected _vertices:Float32Array|Int32Array;
    protected _index:number;
    protected _delegate:IVerticeBufferDelegate;
    protected _verticeTarget:IVerticeIndex;
    protected _totalDuplication:number;
    protected _duplicateLength:number;
    protected _splits:number;
    protected _verticeCollumns:Float32Array[];

    constructor(indexedVertice:IVerticeIndex, totalDuplication:number, splits:number = 1)
    {
        super();
        this._splits = splits;
        this._verticeTarget = indexedVertice;
        this._totalDuplication = totalDuplication;
        //this._verticeTarget.delegate = this;
        //this._duplicateLength = totalDuplication * this._verticeTarget.rawVertices.length;
        this.onVerticeChanged(indexedVertice);
    }

    protected splitData():void
    {
        /*this._verticeCollumns = [];
        var targetlenght:number = this._verticeTarget.rawVertices.length;
        var datalength:number = targetlenght / this._splits;
        var targetData:Float32Array[] = [];
        for(var i:number = 0; i < this._splits; i++)
        {
            var subarray:Float32Array = <Float32Array> this._verticeTarget.rawVertices.subarray(i, i + datalength)
            targetData.push(subarray);
        }
        for(var i:number = 0; i < this._splits; i++)
        {
            var splitteddata:Float32Array = this.duplicateData(targetData[i]);
            this._verticeCollumns.push(splitteddata);
        }*/
    }

    public get collumns():Float32Array[]
    {
        return this._verticeCollumns;
    }

    protected duplicateData(targetData:Float32Array|Int32Array):Float32Array
    {
        var arraylength:number = this._totalDuplication * targetData.length;
        var vertices:Float32Array = new Float32Array(arraylength);
        var targetlenght:number = targetData.length;
        var count:number = 0;
        for(var i:number = 0; i < this._totalDuplication; i++)
        {
            for(var j:number = 0; j < targetlenght; j++)
            {
                vertices[count++] = targetData[j];
            }
        }
        return vertices;
    }

    public onVerticeChanged(value:IVerticeIndex):void
    {
        /*this._vertices = this.duplicateData(this._verticeTarget.rawVertices);        
        this.splitData();
        if(this._delegate)
        {
            this._delegate.onVerticeChanged(this);
        }*/
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