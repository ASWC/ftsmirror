import { Event } from "flash/events/Event";


export class ErrorEvent extends Event
{
    public static ASYNC_ERROR:string = "asyncError"
    public _error:Error

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, text:string = "", error:Error = null)
    {
        super(type, bubbles, cancelable);
        this._error = error;
    }
}