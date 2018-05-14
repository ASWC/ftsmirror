import { ByteArray } from "flash/utils/ByteArray";

export interface IDataInput
{
    readByte():number;
    bytesAvailable():number;
    readFloat():number;
    endian():string;
    endian(value:string):void;
    objectEncoding():number;
    readBytes(bytes:ByteArray, offset:number, length:number):void;
    objectEncoding(value:number):void;
    readDouble():number;
    readUnsignedShort():number;
    readUTFBytes(length:number):string;
    readObject():any;
    readShort():number;
    readUnsignedInt():number;
    readUTF():string;
    readInt():number;
    readUnsignedByte():number;
    readMultiByte(length:number, charSet:string):string;
    readBoolean():boolean;
}