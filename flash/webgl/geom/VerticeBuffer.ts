import { BaseObject } from "../../system/BaseObject";
import { IVerticeIndex } from "./IVerticeIndex";
import { IVerticeBufferDelegate } from "./IVerticeBufferDelegate";


export class VerticeBuffer extends BaseObject implements IVerticeBufferDelegate
{
    protected _vertices:Float32Array;
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

    public onVerticeChanged(value:IVerticeIndex):void
    {
        this._needUpdate = true;
        this._changedVertices.push(value);        
    }

    public addVertices(value:IVerticeIndex):void
    {
        this._verticeIndexes.push(value);
        this._verticeLength += value.length;
        value.delegate = this;
    }

    public get indexedVertices():number
    {
        return this._verticeIndexes.length;
    }

    public get vertices():Float32Array
    {
        if(!this._vertices)
        {
            this._vertices = new Float32Array(this._verticeLength);
            var index:number = 0;
            for(var i:number = 0; i < this._verticeIndexes.length; i++)
            {
                this._vertices.set(this._verticeIndexes[i].rawVertices, index);
                this._verticeIndexes[i].index = index;
                index += this._verticeIndexes[i].rawVertices.length;
            }
        }
        if(this._changedVertices.length)
        {
            while(this._changedVertices.length)
            {
                var vertice:IVerticeIndex = this._changedVertices.shift();
                this._vertices.set(vertice.rawVertices, vertice.index);
            }
        }
        this._needUpdate = false;
        return this._vertices;
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get length():number
    {
        return this.vertices.length;
    }
}