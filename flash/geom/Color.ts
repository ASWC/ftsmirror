import { BaseObject } from "flash/system/BaseObject";
import { IndexedVertice } from "../webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "../display3D/Context3DVertexBufferFormat";

export class Color extends BaseObject
{
    protected _color:number;
	protected _red:number;
	protected _green:number;
	protected _blue:number;
	protected _alpha:number;
	protected _absoluteRed:number;
	protected _absoluteGreen:number;
	protected _absoluteBlue:number;
	protected _absoluteAlpha:number;	
	protected _colorVertices:IndexedVertice;

	constructor(color:number = 0xFFFFFFFF)
	{
		super();		
		this._colorVertices = new IndexedVertice(4, Context3DVertexBufferFormat.FLOAT);
		this.color = color;          
	}

	public set color(value:number)
	{				
		this._color = value;
		this._alpha = (this._color >> 24) & 0xFF;
		this._red = (this._color >> 16) & 0xFF;
		this._green = (this._color >> 8) & 0xFF;
		this._blue = this._color & 0xFF;
		this._absoluteAlpha = ((this._color >> 24) & 0xFF) / 255;
		this._absoluteRed = ((this._color >> 16) & 0xFF) / 255;
		this._absoluteGreen = ((this._color >> 8) & 0xFF) / 255;
		this._absoluteBlue = (this._color & 0xFF) / 255;
		this._colorVertices.rawVertices[0] = this._absoluteRed;
		this._colorVertices.rawVertices[1] = this._absoluteGreen;
		this._colorVertices.rawVertices[2] = this._absoluteBlue;
		this._colorVertices.rawVertices[3] = this._absoluteAlpha;
	}

	public get vertices():IndexedVertice
	{
		return this._colorVertices;
	}

	public get alpha():number
	{
		return this._alpha;
	}

	public get red():number
	{
		return this._red;
	}

	public get green():number
	{
		return this._green;
	}

	public get blue():number
	{
		return this._blue;
	}

	public get absoluteAlpha():number
	{
		return this._absoluteAlpha;
	}

	public get absoluteRed():number
	{
		return this._absoluteRed;
	}

	public get absoluteGreen():number
	{
		return this._absoluteGreen;
	}

	public get absoluteBlue():number
	{
		return this._absoluteBlue;
	}

	public set alpha(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 255)
		{
			value = 255;
		}
		this._color &= (0x00FFFFFF);
		this._color |= (value<<24);
		this._alpha = (this._color >> 24) & 0xFF;
		this._absoluteAlpha = ((this._color >> 24) & 0xFF) / 255;
		this._colorVertices.rawVertices[3] = this._absoluteAlpha;
	}

	public set absoluteAlpha(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 1)
		{
			value = 1;
		}
		value = value * 255;
		this._color &= (0x00FFFFFF);
		this._color |= (value<<24);
		this._alpha = (this._color >> 24) & 0xFF;
		this._absoluteAlpha = ((this._color >> 24) & 0xFF) / 255;
		this._colorVertices.rawVertices[3] = this._absoluteAlpha;
	}

	public set red(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 255)
		{
			value = 255;
		}
		this._color &= (0xFF00FFFF);
		this._color |= (value<<16);
		this._red = (this._color >> 16) & 0xFF;
		this._absoluteRed = ((this._color >> 16) & 0xFF) / 255;
		this._colorVertices.rawVertices[0] = this._absoluteRed;
	}

	public set absoluteRed(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 1)
		{
			value = 1;
		}
		value = value * 255;
		this._color &= (0xFF00FFFF);
		this._color |= (value<<16);
		this._red = (this._color >> 16) & 0xFF;
		this._absoluteRed = ((this._color >> 16) & 0xFF) / 255;
		this._colorVertices.rawVertices[0] = this._absoluteRed;
	}

	public set green(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 255)
		{
			value = 255;
		}
		this._color &= (0xFFFF00FF);
		this._color |= (value<<8);
		this._green = (this._color >> 8) & 0xFF;
		this._absoluteGreen = ((this._color >> 8) & 0xFF) / 255;
		this._colorVertices.rawVertices[1] = this._absoluteGreen;
	}

	public set absoluteGreen(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 1)
		{
			value = 1;
		}
		value = value * 255;
		this._color &= (0xFFFF00FF);
		this._color |= (value<<8);
		this._green = (this._color >> 8) & 0xFF;
		this._absoluteGreen = ((this._color >> 8) & 0xFF) / 255;
		this._colorVertices.rawVertices[1] = this._absoluteGreen;
	}

	public set blue(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 255)
		{
			value = 255;
		}
		this._color &= (0xFFFFFF00);
		this._color |= (value);
		this._blue = this._color & 0xFF;
		this._absoluteBlue = (this._color & 0xFF) / 255;
		this._colorVertices.rawVertices[2] = this._absoluteBlue;
	}

	public set absoluteBlue(value:number)
	{
		if (value < 0)
		{
			value = 0;
		}
		else if (value > 1)
		{
			value = 1;
		}
		value = value * 255;
		this._color &= (0xFFFFFF00);
		this._color |= (value);
		this._blue = this._color & 0xFF;
		this._absoluteBlue = (this._color & 0xFF) / 255;
		this._colorVertices.rawVertices[2] = this._absoluteBlue;
	}

	public get color():number
	{
		return this._color;
	}



	public getAbsolutOpposite(includeAlpha:boolean = true):number
	{
		var color:number;
		var ratio:number = 1 - ( 0.299 * this.red + 0.587 * this.green + 0.114 * this.blue) / 255;
		var base:number = 255;
		var contrast:number = -50;
		if(ratio < 0.5)
		{
			this.color = 0xFF000000;
			base = 0;
			contrast = 50;
		}
		else
		{
			this.color = 0xFFFFFFFF;
		}
		var value:number;
		value = base + (contrast * this.absoluteRed);
		this.color &= (0xFF00FFFF);
		this.color |= (value<<16);
		value = base + (contrast * this.absoluteBlue);
		this.color &= (0xFFFFFF00);
		this.color |= (value);
		value = base + (contrast * this.absoluteGreen);
		this.color &= (0xFFFF00FF);
		this.color |= (value<<8);
		if(includeAlpha)
		{
			value = base + (contrast * this.absoluteAlpha);
			this.color &= (0x00FFFFFF);
			this.color |= (value<<24);
		}
		return this.color;
	}

	public lighten(percent:number):number
	{
		if(percent < 0)
		{
			percent = 0;
		}
		if(percent > 1)
		{
			percent = 1;
		}
		var totalLighten:number = percent;
		var lightAlpha:number = this.alpha;
		var lightRed:number = this.red + ((255 - this.red) * totalLighten);
		var lightBlue:number = this.blue + ((255 - this.blue) * totalLighten);
		var lightGreen:number = this.green + ((255 - this.green) * totalLighten);
		return  lightAlpha<<24 | lightRed<<16 | lightGreen<<8 | lightBlue;
	}

	public darken(percent:number):number
	{
		if(percent < 0)
		{
			percent = 0;
		}
		if(percent > 1)
		{
			percent = 1;
		}
		var totalLighten:number = 1 - percent;
		var lightAlpha:number = this.alpha;
		var lightRed:number = this.red * totalLighten;
		var lightBlue:number = this.blue * totalLighten;
		var lightGreen:number = this.green * totalLighten;
		return  lightAlpha<<24 | lightRed<<16 | lightGreen<<8 | lightBlue;
	}

	public static limit(n:number, hi:number, lo:number):number
	{
		if (n < lo)
		{
			return lo;
		}
		else if (n > hi)
		{
			return hi;
		}
		return n;
	}

	public static darken(n:number, amount:number = -64):number
	{
		//var r:uint,g:uint,b:uint,tot:int;
	//	r=n>>16 & 0xff;g=n>>8 & 0xff;b=n & 0xff;
		//return (Colour.limit(r+amount,0xff,0)<<16)+(Colour.limit(g+amount,0xff,0)<<8)+(Colour.limit(b+amount,0xff,0));
		return null;
	}

	public static lighten(n:number, amount:number = 16):number
	{
		return Color.darken(n,amount);
	}

	public static power(value:number):number
	{
		return (((value >> 16) & 0xFF) + ((value >> 8) & 0xFF) + (value & 0xFF)) / 765.0;
	}
}