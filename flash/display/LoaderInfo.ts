import { UncaughtErrorEvents } from "flash/events/UncaughtErrorEvents";
import { EventDispatcher } from "flash/events/EventDispatcher";
import { DisplayObject } from "flash/display/DisplayObject";
import { Loader } from "flash/display/Loader";
import { ApplicationDomain } from "flash/system/ApplicationDomain";
import { ByteArray } from "flash/utils/ByteArray";
import { Event } from "flash/events/Event";
import { HTTPStatusEvent } from "flash/events/HTTPStatusEvent";
import { IOErrorEvent } from "flash/events/IOErrorEvent";
import { ProgressEvent } from "flash/events/ProgressEvent";
import { URLRequest } from "../net/URLRequest";

export class LoaderInfo extends EventDispatcher
{
    protected static _complete:Event;
    protected static _unload:Event;
    protected static _init:Event;
    protected static _open:Event;
    protected static _statusEvent:HTTPStatusEvent;
    protected static _error:IOErrorEvent;
    protected static _progress:ProgressEvent;
    protected _loader:Loader;
    protected _request:URLRequest;
    protected _callBack:Function;
    protected _image:HTMLImageElement;

    constructor()
    {
        super();
    }

    public load():void
    {
        this._image = new Image();
        /*
        image.complete // < boolean if loaded
        image.crossOrigin // anonymous | use-credentials
        image.currentSrc
        image.height
        image.longDesc
        image.lowsrc
        image.name
        image.naturalHeight
        image.naturalWidth
        image.src
        image.sizes
        image.srcset
        image.width*/
        this._image.addEventListener("error", this.handleError)
        this._image.addEventListener("load", this.handleload)
        this._image.addEventListener("loadend", this.handlloadend)
        this._image.addEventListener("loadstart", this.handleloadstart)
        this._image.addEventListener("suspend", this.handlesuspend)
        this._image.addEventListener("progress", this.handleprogress)
        this._image.src = this._request.url;
    }

    private handleload = (event)=>
    {
        if(this._image.complete)
        {
            this._callBack.call(this._loader, this._image);
        }
        this.dispatchEvent(Event.getEvent(Event.COMPLETE))
        //this.reveal(event.currentTarget);
    }

    private handleError = (event)=>
    {
        //this.reveal(event);
    }

    private handlesuspend = (event)=>
    {
        //this.reveal(event);
    }

    private handleloadstart = (event)=>
    {
        //this.reveal(event);
    }

    private handlloadend = (event)=>
    {
        //this.reveal(event);
    }    
    
    private handleprogress = (event)=>
    {
        //this.reveal(event);
    }

    public static setLoaderInfo(loaderinfo:LoaderInfo, loader:Loader, request:URLRequest, callback:Function):void
    {
        loaderinfo._loader = loader;
        loaderinfo._request = request;
        loaderinfo._callBack = callback;
        loaderinfo.load();
    }

    public get actionScriptVersion():number
    {
        return null;
    }
    
    public get applicationDomain():ApplicationDomain
    {
        return null;
    }
    
    public get bytes():ByteArray
    {
        return null;
    }
    
    public get bytesLoaded():number
    {
        return null;
    }
    
    public get bytesTotal():number
    {
        return null;
    }
    
    public get childAllowsParent():boolean
    {
        return null;
    }
    
    public get childSandboxBridge():any
    {
        return null;
    }
    
    public set childSandboxBridge(door:any)
    {
        
    }
    
    public get content():DisplayObject
    {
        return null;
    }
    
    public get contentType():string
    {
        return null;
    }
    
    public get frameRate():number
    {
        return null;
    }
    
    public get height():number
    {
        if(this._image)
        {
            return this._image.naturalHeight;
        }
        return 0;
    }
    
    public get isURLInaccessible():boolean
    {
        return null;
    }
    
    public get loader():Loader
    {
        return this._loader;
    }
    
    public get loaderURL():string
    {
        if(this._request)
        {
            return this._request.url;
        }
        return null;
    }
    
    public get parameters():any
    {
        return null;
    }
    
    public get parentAllowsChild():boolean
    {
        return null;
    }
    
    public get parentSandboxBridge():any
    {
        return null;
    }
    
    public set parentSandboxBridge(door:any)
    {
        
    }
    
    public get sameDomain():boolean
    {
        return null;
    }
    
    public get sharedEvents():EventDispatcher
    {
        return null;
    }
    
    public get swfVersion():number
    {
        return null;
    }
    
    public get uncaughtErrorEvents():UncaughtErrorEvents
    {
        return null;
    }
    
    public get url():string
    {
        if(this._request)
        {
            return this._request.url;
        }
        return null;
    }
    
    public get width():number
    {
        if(this._image)
        {
            return this._image.naturalWidth;
        }
        return 0;
    }
}