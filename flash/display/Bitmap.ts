import { DisplayObject } from "flash/display/DisplayObject";
import { BitmapData } from "./BitmapData";


export class Bitmap extends DisplayObject
{
    protected _bitmapData:BitmapData;

    constructor(bitmapData:BitmapData)
    {
        super();
        this.bitmapData = bitmapData;
    }

    public get bitmapData():BitmapData
    {
        return this._bitmapData;
    }

    public set bitmapData(value:BitmapData)
    {
        if(!value)
        {
            return;
        }
        this._bitmapData = value;
    }
}