import { IVerticeIndex } from "./IVerticeIndex";


export interface IVerticeBufferDelegate
{
    onVerticeChanged(value:IVerticeIndex):void;
}