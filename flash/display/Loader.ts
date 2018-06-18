import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { DisplayObject } from "flash/display/DisplayObject";
import { LoaderInfo } from "flash/display/LoaderInfo";
import { UncaughtErrorEvents } from "flash/events/UncaughtErrorEvents";
import { URLRequest } from "flash/net/URLRequest";
import { ByteArray } from "flash/utils/ByteArray";
import { LoaderContext } from "flash/system/LoaderContext";
import { IFilePromise } from "flash/desktop/IFilePromise";
import { Bitmap } from "./Bitmap";
import { BitmapData } from "./BitmapData";

export class Loader extends DisplayObjectContainer
{
    protected _loaderInfo:LoaderInfo;
    protected _urlRequest:URLRequest;
    protected _bitmap:Bitmap;
    protected _bitmapData:BitmapData;

    constructor()
    {
        super();
        this._loaderInfo = new LoaderInfo();
    }

    protected assetLoaded(image:HTMLImageElement):void
    {		
        this._bitmapData = BitmapData.setTexture(image);
        this._bitmap = new Bitmap(this._bitmapData);
    }

    public addChild(child:DisplayObject):DisplayObject
	{
		return null
	}
		
	public addChildAt(child:DisplayObject, index:number):DisplayObject
	{
		return null;
	}
		
	public close():void
	{
		
	}
		
	public get content():DisplayObject
	{
        if(this._bitmap)
        {
            return this._bitmap;
        }
		return null;
	}
		
	public get contentLoaderInfo():LoaderInfo
	{
		return this._loaderInfo;
	}
		
	public load(request:URLRequest, context:LoaderContext=null):void
	{
        this._urlRequest = request;
        LoaderInfo.setLoaderInfo(this._loaderInfo, this, this._urlRequest, this.assetLoaded);        
    }    
		
	public loadBytes(bytes:ByteArray, context:LoaderContext=null):void
	{
		
	}
		
	public loadFilePromise(promise:IFilePromise, context:LoaderContext=null):void
	{
		
	}
		
	public removeChild(child:DisplayObject):DisplayObject
	{
		return null;
	}
		
	public removeChildAt(index:number):DisplayObject
	{
		return null;
	}
		
	public setChildIndex(child:DisplayObject, index:number):void
	{
		
	}
		
	public get uncaughtErrorEvents():UncaughtErrorEvents
	{
		return null;
	}
		
	public unload():void
	{
		
	}
		
	public unloadAndStop(gc:Boolean=true):void
	{
		
	}
}