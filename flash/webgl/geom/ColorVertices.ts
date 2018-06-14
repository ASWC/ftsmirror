import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { ArrayTypes } from "flash/webgl/data/ArrayTypes";
import { Color } from "flash/geom/Color";


export class ColorVertices extends IndexedVertice
{
    protected _color:Color;

    constructor(color:number, collumns:number = 1, totalDuplicate:number = 0)
    {
        super(4, ArrayTypes.FLOAT32ARRAY, collumns, totalDuplicate);
        this._color = new Color(color);
    }

    public set color(value:number)
	{			
        this._color.color = value;	
        this.setData(0, this._color.absoluteRed);
        this.setData(1, this._color.absoluteGreen);
        this.setData(2, this._color.absoluteBlue);
        this.setData(3, this._color.absoluteAlpha);
	}

	public get alpha():number
	{
		return this._color.alpha;
	}

	public get red():number
	{
		return this._color.red;
	}

	public get green():number
	{
		return this._color.green;
	}

	public get blue():number
	{
		return this._color.blue;
	}

	public get absoluteAlpha():number
	{
		return this._color.absoluteAlpha;
	}

	public get absoluteRed():number
	{
		return this._color.absoluteRed;
	}

	public get absoluteGreen():number
	{
		return this._color.absoluteGreen;
	}

	public get absoluteBlue():number
	{
		return this._color.absoluteBlue;
	}

	public set alpha(value:number)
	{
        this._color.alpha = value;
		this.setData(3, this._color.absoluteAlpha);
	}

	public set absoluteAlpha(value:number)
	{
        this._color.absoluteAlpha = value;
		this.setData(3, this._color.absoluteAlpha);
	}

	public set red(value:number)
	{
        this._color.red = value;
		this.setData(0, this._color.absoluteRed);
	}

	public set absoluteRed(value:number)
	{
        this._color.absoluteRed = value;
		this.setData(0, this._color.absoluteRed);
	}

	public set green(value:number)
	{
        this._color.green = value;
		this.setData(1, this._color.absoluteGreen);
	}

	public set absoluteGreen(value:number)
	{
        this._color.absoluteGreen = value;
		this.setData(1, this._color.absoluteGreen);
	}

	public set blue(value:number)
	{
        this._color.blue = value;
		this.setData(2, this._color.absoluteBlue);
	}

	public set absoluteBlue(value:number)
	{
        this._color.absoluteBlue = value;
		this.setData(2, this._color.absoluteBlue);
	}

	public get color():number
	{
		return this._color.color;
	}
}