
import { Tracer } from "flash/system/Tracer";

export class BaseObject
{
    private static instanceid:number = 0;
    protected _instanceName:string;
    protected _name:string;
    protected _needUpdate:boolean;

    constructor()
    {
        this._instanceName = "instance_" + BaseObject.instanceid.toString();
        this._name = this.className + "_" + BaseObject.instanceid.toString();
        BaseObject.instanceid++;
    }

    public hasChanged():void
    {
        this._needUpdate = true;
    }

    public get instanceName():string
    {
        return this._instanceName;
    }

    public get className():string
    {
        return this.constructor.name;
    }

    public show(value:any):void
    {
        Tracer.show(value);
    }

    public reveal(value:any):void
    {
        Tracer.reveal(value);
    }

    public revealMethods(value:any):void
    {
        Tracer.revealMethods(value);
    }

    public toString():String
	{
		return this.toString();
	}
}