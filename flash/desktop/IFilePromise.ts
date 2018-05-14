import { ErrorEvent } from "flash/events/ErrorEvent";
import { IDataInput } from "flash/utils/IDataInput";

export interface IFilePromise
{
    isAsync():boolean;
    relativePath():string;
    close():void;
    open():IDataInput;
    reportError(e:ErrorEvent):void;
}