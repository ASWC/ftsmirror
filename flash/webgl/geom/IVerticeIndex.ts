
import { IVerticeBufferDelegate } from "flash/webgl/geom/IVerticeBufferDelegate";

declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export interface IVerticeIndex
{
    needUpdate:boolean;
    length:number;
    index:number;
    type:string;
    collumns:TypedArray[];
    rawData:TypedArray;
    addDelegate(value:IVerticeBufferDelegate):void;
    removeDelegate(value:IVerticeBufferDelegate):void;
    removeDelegates():void;    
    setData(index:number, data:number):void;
    getData(index:number):number;
    notifyDelegates():void;    
}
