import { IVerticeIndex } from "../webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "../webgl/geom/IVerticeBufferDelegate";



export class Polygon //implements IVerticeIndex
{
    protected _delegate:IVerticeBufferDelegate;
    protected _vertices:Float32Array;
    protected _index:number;
    protected _needUpdate:boolean;
    
    constructor()
    {
        this._needUpdate = true;
    }

    public get collumns():Float32Array[]
    {
        return null;
    }

    public set delegate(value:IVerticeBufferDelegate)
    {
        this._delegate = value;
    }

    public get rawVertices():Float32Array
    {
        return this.vertices;
    }

    public duplicate(totalDuplicates:number):void
    {

    }

    public set index(value:number)
    {
        this._index = value;
    }

    public get index():number
    {
        return this._index;
    }

    public get length():number
    {
        return this.vertices.length;
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get vertices():Float32Array
    {
        if(!this._vertices)
        {
            this._vertices = new Float32Array(12);            
        }
        if(this._needUpdate)
        {

            this._vertices = new Float32Array([
                0.0,  0.0,
                1.0,  0.0,
                0.0,  1.0,
                0.0,  1.0,
                1.0,  0.0,
                1.0,  1.0,
            ])
        }        
        return this._vertices;
    }
}