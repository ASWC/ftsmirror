import { EventDispatcher } from "../events/EventDispatcher";


export class Timer extends EventDispatcher
{
    protected static _frameListener:FrameRequestCallback;
    protected static _requestId:number;
    protected static started:boolean = false;
    protected static lastTime:number;
    protected static elapsedMS:number;
    protected static _maxElapsedMS:number;
    protected static deltaTime:number;
    protected static speed:number;
    protected static FPMS:number = 60;
    protected static _callBacks:TimerCallBack[];

    protected _repeatCount:number;
    protected _delay:number;
    protected _currentCount:number;

    constructor(delay:number, repeatCount:number = 0)
    {
        super();
        this._repeatCount = repeatCount;
        this._delay = delay;
        this._currentCount = 0;
    }

    public static getGlobalTimer():TimerCallBack[]
    {
        if(Timer.started)
        {
            return Timer._callBacks;
        }
        else
        {
            Timer._callBacks = [];
            Timer.started = true;
            Timer._frameListener = (time) =>
            {
                Timer.update(time);
                Timer._requestId = requestAnimationFrame(Timer._frameListener);
            }
            Timer._requestId = requestAnimationFrame(Timer._frameListener);
        }
        return Timer._callBacks;
    }

    public static update(currentTime:number = performance.now()):void
    {
        if(Timer._callBacks && Timer._callBacks.length)
        {
            for(var i:number = 0; i < Timer._callBacks.length; i++)
            {
                Timer._callBacks[i].tickUpdate(currentTime);
            }
        }
        let elapsedMS;
        if (currentTime > Timer.lastTime)
        {
            elapsedMS = Timer.elapsedMS = currentTime - Timer.lastTime;
            if (elapsedMS > Timer._maxElapsedMS)
            {
                elapsedMS = Timer._maxElapsedMS;
            }
            Timer.deltaTime = elapsedMS * Timer.FPMS * Timer.speed;            
        }
        else
        {
            Timer.deltaTime = Timer.elapsedMS = 0;
        }
        Timer.lastTime = currentTime;
    }

    public reset():void
    {
        this._currentCount = 0;
    }

    public start():void
    {

    }

    public stop():void
    {

    }

    public get currentCount():number
    {
        return this._currentCount;
    }

    public get delay():number
    {
        return this._delay;
    }

    public set delay(value:number)
    {
        this._delay = value;
    }

    public get repeatCount():number
    {
        return this._repeatCount;
    }

    public set repeatCount(value:number)
    {
        this._repeatCount = value;
    }
}


interface TimerCallBack
{
    tickUpdate(time:number):void;
}