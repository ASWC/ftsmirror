import { VerticeBuffer } from "flash/webgl/geom/VerticeBuffer";
import { IVerticeBufferDelegate } from "./IVerticeBufferDelegate";

export interface IVerticeIndex
{
    needUpdate:boolean;
    length:number;
    index:number;
    rawVertices:Float32Array;
    delegate:IVerticeBufferDelegate;
}
