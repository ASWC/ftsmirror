import { BaseObject } from "../system/BaseObject";


export class BitmapData extends BaseObject
{
    protected _nativeImage:HTMLImageElement;

    protected setImage(image:HTMLImageElement):void
    {
        this._nativeImage = image;
    }

    public static setTexture(image:HTMLImageElement):BitmapData
    {
        var bitmapData:BitmapData = new BitmapData();
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