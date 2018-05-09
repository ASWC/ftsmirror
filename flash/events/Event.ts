
export class Event
{
    public static ACTIVATE:string = "activate";
    public static ADDED:string = "added";
    public static ADDED_TO_STAGE:string = "addedToStage";
    public static BROWSER_ZOOM_CHANGE:string = "browserZoomChange";
    public static CANCEL:string = "cancel";
    public static CHANGE:string = "change";
    public static CLOSE:string = "close";
    public static CHANNEL_MESSAGE:string = "channelMessage";
    public static CLOSING:string = "closing";
    public static COMPLETE:string = "complete";
    public static COPY:string = "copy";
    public static CUT:string = "cut";
    public static CONTEXT3D_CREATE:string = "context3DCreate";
    public static DEACTIVATE:string = "deactivate";
    public static MOUSE_LEAVE:string = "mouseLeave";
    public static RENDER:string = "render";
    public static NETWORK_CHANGE:string = "networkChange";
    public static EXITING:string = "exiting";
    public static TAB_CHILDREN_CHANGE:string = "tabChildrenChange";
    public static TAB_ENABLED_CHANGE:string = "tabEnabledChange";
    public static TEXTURE_READY:string = "textureReady";
    public static USER_IDLE:string = "userIdle";
    public static USER_PRESENT:string = "userPresent";
    public static RESIZE:string = "resize";
    public static VIDEO_FRAME:string = "videoFrame";
    public static WORKER_STATE:string = "workerState";
    public static UNLOAD:string = "unload";
    public static SCROLL:string = "scroll";
    public static STANDARD_OUTPUT_CLOSE:string = "standardOutputClose";
    public static SUSPEND:string = "suspend";
    public static SELECT:string = "select";
    public static OPEN:string = "open";
    public static TAB_INDEX_CHANGE:string = "tabIndexChange";
    public static REMOVED_FROM_STAGE:string = "removedFromStage";
    public static STANDARD_INPUT_CLOSE:string = "standardInputClose";
    public static TEXT_INTERACTION_MODE_CHANGE:string = "textInteractionModeChange";
    public static SELECT_ALL:string = "selectAll";
    public static STANDARD_ERROR_CLOSE:string = "standardErrorClose";
    public static ID3:string = "id3";
    public static SOUND_COMPLETE:string = "soundComplete";
    public static ENTER_FRAME:string = "enterFrame";
    public static PASTE:string = "paste";
    public static REMOVED:string = "removed";
    public static PREPARING:string = "preparing";
    public static LOCATION_CHANGE:string = "locationChange";
    public static CONNECT:string = "connect";
    public static FRAME_LABEL:string = "frameLabel";
    public static INIT:string = "init";
    public static HTML_RENDER:string = "htmlRender";
    public static HTML_DOM_INITIALIZE:string = "htmlDOMInitialize";
    public static EXIT_FRAME:string = "exitFrame";
    public static FRAME_CONSTRUCTED:string = "frameConstructed";
    public static FULLSCREEN:string = "fullScreen";
    public static DISPLAYING:string = "displaying";
    public static HTML_BOUNDS_CHANGE:string = "htmlBoundsChange";
    public static CLEAR:string = "clear";
    public static CHANNEL_STATE:string = "channelState";

    protected _bubbles:boolean;
    protected _type:string;
    protected _target:any;
    protected _eventPhase:number;
    protected _currentTarget:any;
    protected _cancelable:boolean;

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false)
    {
        this._type = type;
        this._bubbles = bubbles;
        this._cancelable = cancelable;
    }

    public stopPropagation():void
    {

    }

    public stopImmediatePropagation():void
    {

    }

    public preventDefault():void
    {

    }

    public clone():Event
    {
        return new Event(this._type, this._bubbles, this._cancelable);
    }

    public isDefaultPrevented():boolean
    {
        return false;
    }

    public get cancelable():boolean
    {
        return this._cancelable;
    }

    public get type():string
    {
        return this._type;
    }

    public get target():any
    {
        return this._target;
    }

    public get eventPhase():number
    {
        return this._eventPhase;
    }

    public get currentTarget():any
    {
        return this._currentTarget;
    }

    public get bubbles():boolean
    {
        return this._bubbles;
    }

    public static linkEvent(event:Event, currentTarget:any = null, target:any = null):void
    {
        if(target)
        {
            event._target = target;
        }
        if(currentTarget)
        {
            event._currentTarget = currentTarget;            
        }
    }
}