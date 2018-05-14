import { BaseObject } from "../system/BaseObject";
import { URLRequestMethod } from "./URLRequestMethod";


export class URLRequest extends BaseObject
{
    protected _contentType:string;
    protected _data:any;
    protected _method:string;
    protected _url:string;
    protected _headers:any[];

    constructor(url:string = null)
    {
        super();
        this._url = url;
        this._headers = [];
        this._method = URLRequestMethod.GET;
        this._contentType = "application/x-www-form-urlencoded";
    }

    public useRedirectedURL(sourceRequest:URLRequest, wholeURL:boolean = false, pattern:any = null, replace:string = null):void
    {

    }

    public get authenticate():boolean
    {
        return false
    }

    public set authenticate(value:boolean)
    {

    }

    public get cacheResponse():boolean
    {
        return false;
    }

    public set cacheResponse(value:boolean)
    {
        
    }

    public get contentType():string
    {
        return this._contentType;
    }

    public set contentType(value:string)
    {
        this._contentType = value;
    }

    public get data():any
    {
        return this._data;
    }

    public set data(value:any)
    {
        this._data = value;
    }

    public get digest():string
    {
        return 'flashts';
    }

    public set digest(value:string)
    {
        
    }

    public get followRedirects():boolean
    {
        return true;
    }

    public set followRedirects(value:boolean)
    {
        
    }

    public get idleTimeout():number
    {
        return 0;
    }

    public set idleTimeout(value:number)
    {
        
    }

    public get manageCookies():boolean
    {
        return false;
    }

    public set manageCookies(value:boolean)
    {
        
    }

    public get useCache():boolean
    {
        return false;
    }
    public set useCache(value:boolean)
    {
        
    }

    public get method():string
    {
        return this._method;
    }

    public set method(value:string)
    {
        this._method = value;
    }

    public get requestHeaders():any[]
    {
        return this._headers;
    }

    public set requestHeaders(value:any[])
    {
        this._headers = value;
    }

    public get url():string
    {
        return this._url;
    }

    public set url(value:string)
    {
        this._url = value;
    }

    public get userAgent():string
    {
        return '';
    }

    public set userAgent(value:string)
    {
        
    }
}