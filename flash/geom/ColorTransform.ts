import { BaseObject } from "flash/system/BaseObject";

export class ColorTransform extends BaseObject
{
    public redMultiplier:number;
    public greenMultiplier:number;
    public blueMultiplier:number;
    public alphaMultiplier:number;
    public redOffset:number;
    public greenOffset:number;
    public blueOffset:number;
    public alphaOffset:number;
    protected _color:number;

    constructor(redMultiplier:number=1.0, greenMultiplier:number=1.0, blueMultiplier:number=1.0, alphaMultiplier:number=1.0, redOffset:number=0, greenOffset:number=0, blueOffset:number=0, alphaOffset:number=0)
    {
        super();
        this.redMultiplier = redMultiplier;
        this.greenMultiplier = greenMultiplier;
        this.blueMultiplier = blueMultiplier;
        this.alphaMultiplier = alphaMultiplier;
        this.redOffset = redOffset;
        this.greenOffset = greenOffset;
        this.blueOffset = blueOffset;
        this.alphaOffset = alphaOffset;
        this._color = 0;        
    }
    
    public get color():number
    {
        var red:number = this.correctColor((255 * this.redMultiplier) + this.redOffset);
        var green:number = this.correctColor((255 * this.greenMultiplier) + this.greenOffset);
        var blue:number = this.correctColor((255 * this.blueMultiplier) + this.blueOffset);
        var alpha:number = this.correctColor((255 * this.alphaMultiplier) + this.alphaOffset);
        this._color = red<<24 | green<<16 | blue<<8 | alpha;
        return this._color;
    }

    protected correctColor(value:number):number
    {
        if(value < 0)
        {   
            return 0;
        }
        if(value > 255)
        {
            return 255;
        }
        return value;
    }
    
    public set color(newColor:number)
    {
        this._color = newColor;
    }
    
    public concat(second:ColorTransform):void
    {
        this.alphaMultiplier = (this.alphaMultiplier + second.alphaMultiplier) / 2;
        this.greenMultiplier = (this.greenMultiplier + second.greenMultiplier) / 2;
        this.blueMultiplier = (this.blueMultiplier + second.blueMultiplier) / 2;
        this.alphaMultiplier = (this.alphaMultiplier + second.alphaMultiplier) / 2;
        this.redOffset = (this.redOffset + second.redOffset) / 2;
        this.greenOffset = (this.greenOffset + second.greenOffset) / 2;
        this.blueOffset = (this.blueOffset + second.blueOffset) / 2;
        this.alphaOffset = (this.alphaOffset + second.alphaOffset) / 2;
    }
}