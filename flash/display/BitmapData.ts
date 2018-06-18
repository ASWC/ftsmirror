import { BaseObject } from "flash/system/BaseObject";
import { Texture } from "flash/display3D/textures/Texture";
import { AtlasManager } from "../display3D/textures/AtlasManager";

export class BitmapData extends BaseObject
{
    protected _nativeImage:HTMLImageElement;
    protected _width:number;
    protected _height:number;
    protected _fillColor:number;
    protected _transparent:boolean;
    protected _texture:Texture;

    constructor(width:number, height:number, transparent:boolean, fillColor:number)
    {
        super();
        this._texture = new Texture();
        this._texture.nativeWidth = width;
        this._texture.nativeHeight = height;
        this._texture.transparent = transparent;
        this._texture.fillColor = fillColor;
        this._width = width;
        this._height = height;
        this._transparent = transparent;
        this._fillColor = fillColor;
    }

    public get texture():Texture
    {
        return this._texture;
    }

    protected setImage(image:HTMLImageElement):void
    {
        this._nativeImage = image;
        this._texture.source = image;
    }

    public static setTexture(image:HTMLImageElement):BitmapData
    {

        AtlasManager.addImage(image);


        var bitmapData:BitmapData = new BitmapData(image.naturalWidth, image.naturalHeight, true, 0xFFFFFFFF);        
        bitmapData.setImage(image);
        return bitmapData;
    }

    public static getNativeImage(data:BitmapData):HTMLImageElement
    {
        if(!data)
        {
            return null;
        }
        if(!data._nativeImage)
        {
            return null;
        }
        return data._nativeImage;
    }
}