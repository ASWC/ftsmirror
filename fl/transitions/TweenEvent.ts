import { Event } from "flash/events/Event";


export class TweenEvent extends Event
{
    public static MOTION_CHANGE:string = "motionChange";
    public static MOTION_FINISH:string = "motionFinish";
    public static MOTION_LOOP:string = "motionLoop";
    public static MOTION_RESUME:string = "motionResume";
    public static MOTION_START:string = "motionStart";
    public static MOTION_STOP:string = "motionStop";

    public position:number = NaN;
    public time:number = NaN;

    constructor(type:string, time:number, position:number, bubbles:boolean = false, cancelable:boolean = false)
    {
        super(type, bubbles, cancelable);
    }
}