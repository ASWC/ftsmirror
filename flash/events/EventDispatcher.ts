import { IEventDispatcher } from "flash/events/IEventDispatcher";
import { Event } from "flash/events/Event";

export class EventDispatcher implements IEventDispatcher
{
    constructor(target:IEventDispatcher = null)
    {

    }

    public willTrigger(type:string):boolean
    {
        return false;
    }

    public removeEventListener(type:string, listener:Function, useCapture:boolean = false):void
    {

    }

    public hasEventListener(type:string):boolean
    {
        return false;
    }

    public dispatchEvent(event:Event):boolean
    {
        return false;
    }

    public addEventListener(type:string, listener:Function, useCapture:boolean = false, priority:number = 0, useWeakReference:boolean = false):void
    {

    }
}