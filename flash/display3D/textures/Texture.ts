import { TextureBase } from "flash/display3D/textures/TextureBase";

export class Texture extends TextureBase
{
    protected _nativeHeight:number;
    protected _transparent:boolean;
    protected _fillColor:number;
    protected _source:HTMLImageElement;
    protected _nativeWidth:number;
    protected _uploaded:boolean;
    protected _glTexture:WebGLTexture;

    constructor()
    {
        super();
        this._uploaded = false;
    }

    public setData(value:WebGLTexture):void
    {
        this._glTexture = value;
    }

    public get uploaded():boolean
    {
        return this._uploaded;
    }

    public set nativeHeight(value:number)
    {
        this._nativeHeight = value;
    }

    public set transparent(value:boolean)
    {
        this._transparent = value;
    }

    public set fillColor(value:number)
    {
        this._fillColor = value;
    }

    public set source(value:HTMLImageElement)
    {
        this._source = value;
    }

    public get source():HTMLImageElement
    {
        return this._source;
    }

    public set nativeWidth(value:number)
    {
        this._nativeWidth = value;
    }
}