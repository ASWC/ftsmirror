import { BaseObject } from "flash/system/BaseObject";
import { IVerticeIndex } from "flash/webgl/geom/IVerticeIndex";
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";
import { ArrayTypes } from "flash/webgl/data/ArrayTypes";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export class IndexedVertice extends BaseObject implements IVerticeIndex
{
    protected _delegates:IVerticeBufferDelegate[];
    protected _vertices:TypedArray;
    protected _index:number;
    protected _type:string;
    protected _totalCollumns:number;
    protected _totalDuplicate:number;
    protected _fixedlength:number;
    protected _collumns:TypedArray[];

    constructor(length:number, type:string, collumns:number = 1, totalDuplicate:number = 0)
    {
        super();
        this._fixedlength = length;
        this._totalCollumns = collumns;
        this._totalDuplicate = totalDuplicate;
        this._type = type;
        this._delegates = [];
        this._vertices = ArrayTypes.getTypedArray(type, length);
        if(this._totalCollumns < 1)
        {
            this._totalCollumns = 1;
        }
        if(this._totalDuplicate < 1)
        {
            this._totalDuplicate = 1;
        }
        this._collumns = [];
        var collumnLength:number = (this._fixedlength / this._totalCollumns) * this._totalDuplicate;
        for(var i:number = 0; i < collumns; i++)
        {   
            var collumn:TypedArray = ArrayTypes.getTypedArray(type, collumnLength);
            this._collumns.push(collumn);
        }
        this.hasChanged();
    }

    public get rawData():TypedArray
    {
        return this._vertices;
    }

    public get type():string
    {
        return this._type;
    }

    protected updateIndex(index:number, data:number):void
    {        
        var column:TypedArray = this.getColumnByIndex(index);      
        var collumnIndex:number = index; 
        var columnLength:number = this._fixedlength / this._totalCollumns;
        if(collumnIndex >= columnLength)
        {
            while(collumnIndex >= columnLength)
            {
                collumnIndex -= columnLength;
            }
        }
        var startindex:number = collumnIndex;
        for(var i:number = 0; i < this._totalDuplicate; i++)
        {
            column[startindex] = data;
            startindex += columnLength;
        }    
    }

    protected getColumnByIndex(index:number):TypedArray
    {
        if(this._totalCollumns == 1)
        {
            return this._collumns[0];
        }
        var currentindex:number = Math.floor((index) / this._totalCollumns);
        if(currentindex >= this._collumns.length)
        {
            currentindex--;
        }        
        return this._collumns[currentindex];
    }

    public setData(index:number, data:number):void
    {
        this._vertices[index] = data;
        this.updateIndex(index, data);
        this.hasChanged();
        this.notifyDelegates();
    }

    public get collumns():TypedArray[]
    {
        return this._collumns;
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get length():number
    {
        return this._fixedlength / this._totalCollumns;
    }

    public set index(value:number)
    {
        this._index = value;
    }

    public get index():number
    {
        return this._index;
    }

    public addDelegate(value:IVerticeBufferDelegate):void
    {
        var index:number = this._delegates.indexOf(value);
        if(index < 0)
        {
            this._delegates.push(value);
        }
    }

    public notifyDelegates():void
    {
        if(this._delegates && this._delegates.length)
        {
            for(var i:number = 0; i < this._delegates.length; i++)
            {
                this._delegates[i].onVerticeChanged(this);
            }
        }
    }

    public removeDelegate(value:IVerticeBufferDelegate):void
    {
        var index:number = this._delegates.indexOf(value);
        if(index >= 0)
        {
            this._delegates.splice(index, 1);
        }
    }

    public removeDelegates():void
    {
        this._delegates.length = 0;
    }

    public getData(index:number):number
    {
        return this._vertices[index];
    }

}