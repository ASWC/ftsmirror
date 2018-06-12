import { EventDispatcher } from "flash/events/EventDispatcher";
import { Stage } from "flash/display/Stage";
import { IRunnable } from "flash/display/types/IRunnable";

export class Tween extends EventDispatcher implements IRunnable
{    
    protected static tweens:Tween[] = [];
    protected _duration:number;
    protected _finish:number;
    protected _FPS:number;
    protected _position:number;
    protected _time:number;
    protected prevTime:number;
    protected change:number;
    public begin:number;
    public func:Function;
    public isPlaying:boolean;
    public looping:boolean;
    public obj:any;
    public prop:string;
    public useSeconds:boolean;

    constructor(obj:any, prop:string, func:Function, begin:number, finish:number, duration:number, useSeconds:boolean = false)
    {
        super();
        this._time = 0;
        this.begin = begin;
        this.prop = prop;
        this.useSeconds = useSeconds;
        this.obj = obj;
        this.looping = false;
        this.isPlaying = false;
        this._duration = duration;        
        if(!this.useSeconds)
        {
            this._duration = duration / 1000;
        }        
        this._finish = finish;
        this._FPS = 0;
        this.func = func;
        this.change = this.finish - this.begin;
    }

    public static to(obj:any, prop:string, func:Function, begin:number, finish:number, duration:number, useSeconds:boolean = false):Tween
    {
        var tween:Tween = new Tween(obj, prop, func, begin, finish, duration, useSeconds);
        tween.start();
        Tween.tweens.push(tween);
        return tween;
    }

    public run(time:number):void
    {
        this._time += time / 1000;
        this.advance(this._time);
        
    }

    protected advance(time:number):void
    {
        this.prevTime = this._time;
		if (time > this._duration)
		{
			if (this.looping)
			{
				//this.rewind (time - this._duration);
				//this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_LOOP, this._time, this._position));
			}
			else
			{
				//this._timer.stop();
				//this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_STOP, this._time, this._position));
				//for (var j:any in propholder)
				//{
				//	property = this.propholder[j] as ABTweenProperty;
				//	property.finalize()
				//}
				//this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_FINISH, this._time, this._position));
				//this.obj = null;
			}
		}
		else
		{
            //this.show("time " + time);
            //this.show("this.begin " + this.begin);
            //this.show("this.change " + this.change);
            //this.show("this._duration " + this._duration);
            //this.show('tweening at: ' + this.func(time, this.begin, this.change, this._duration));
            this.obj[this.prop] = this.func(time, this.begin, this.change, this._duration);
			//this._time = time;
			//for (var i:any in propholder)
			//{
			//	var property:ABTweenProperty = this.propholder[i] as ABTweenProperty;
			//	property.update(this._time, this._duration);
			//}
			//this.dispatchEvent(new TweenEvent(TweenEvent.MOTION_CHANGE, this._time, this._position));
		}
    }

    public yoyo():void
    {

    }

    public stop():void
    {
        Stage.unRegisterRunnable(this);
    }

    public start():void
    {
        Stage.registerRunnable(this);
    }

    public rewind(t:number = 0):void
    {

    }

    public resume():void
    {

    }

    public prevFrame():void
    {

    }

    public nextFrame():void
    {

    }

    public fforward():void
    {

    }

    public continueTo(finish:number, duration:number):void
    {

    }

    public get time():number
    {
        return this._time;
    }

    public set time(value:number)
    {
        this._time = value;
    }

    public get position():number
    {
        return this._position;
    }

    public set position(value:number)
    {
        this._position = value;
    }

    public get FPS():number
    {
        return this._FPS;
    }

    public set FPS(value:number)
    {
        this._FPS = value;
    }

    public get finish():number
    {
        return this._finish;
    }

    public set finish(value:number)
    {
        this._finish = value;
    }

    public get duration():number
    {
        return this._duration;
    }

    public set duration(value:number)
    {
        this._duration = value;
    }
}