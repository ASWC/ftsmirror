import { Event } from "flash/events/Event";

export class ActivityEvent extends Event
{
    protected _activating:boolean;

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, activating:boolean = false)
    {
        super(type, bubbles, cancelable);
        this._activating = activating;
    }

    public get activating():boolean
    {
        return this._activating;
    }
    public set activating(value:boolean)
    {
        this._activating = value;
    }
}