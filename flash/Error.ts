
import { BaseObject } from "flash/system/BaseObject";

export class Error extends BaseObject
{    
    protected static _GolbalErrors:Error[] = [];
    public message:string; 
    protected _errorID:number;

    constructor(message:string = "", id:number = 0)
    {
        super();
        this.message = message;
        this._errorID = id;
        Error._GolbalErrors.push(this);
    }

    public get errorID():number
    {
        return this._errorID;
    }

    public getStackTrace():string
    {
        return this.message;
    }

    public static GetLastError():Error
    {
        
        if(Error._GolbalErrors.length)
        {
            return Error._GolbalErrors[Error._GolbalErrors.length - 1];
        }
        return null;
    }
}