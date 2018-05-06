import { Event } from "flash/events/Event";

export class AccelerometerEvent extends Event
{
    public static UPDATE:string = "update";

    protected _accelerationX:number;
    protected _accelerationY:number;
    protected _accelerationZ:number;
    protected _timestamp:number;

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, timestamp:number = 0, accelerationX:number = 0, accelerationY:number = 0, accelerationZ:number = 0)
    {
        super(type, bubbles, cancelable);
        this._accelerationX = accelerationX;
        this._accelerationY = accelerationY;
        this._accelerationZ = accelerationZ;
        this._timestamp = timestamp;
    }

    public get accelerationX():number
    {
        return this._accelerationX;
    }
    public set accelerationX(value:number)
    {
        this._accelerationX = value;
    }

    public get accelerationY():number
    {
        return this._accelerationY;
    }
    public set accelerationY(value:number)
    {
        this._accelerationY = value;
    }

    public get accelerationZ():number
    {
        return this._accelerationZ;
    }
    public set accelerationZ(value:number)
    {
        this._accelerationZ = value;
    }

    public get timestamp():number
    {
        return this._timestamp;
    }
    public set timestamp(value:number)
    {
        this._timestamp = value;
    }
}