import { VerticeBuffer } from "flash/webgl/shadertypes/VerticeBuffer";
import { IVerticeBufferDelegate } from "flash/webgl/shadertypes/IVerticeBufferDelegate";

export interface IVerticeIndex
{
    needUpdate:boolean;
    length:number;
    index:number;
    rawVertices:Float32Array;
    delegate:IVerticeBufferDelegate;
}
