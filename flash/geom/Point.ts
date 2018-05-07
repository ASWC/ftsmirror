import { BaseObject } from "flash/system/BaseObject";

export class Point extends BaseObject
{
    protected _points:Float32Array;

    constructor(x:number=0, y:number=0)    
    {
        super();
        this._points = new Float32Array(2);
        this._points[0] = x;
        this._points[1] = y;
    }
    
    public set x(value:number)
    {
        this._points[0] = value;
        this.hasChanged();
    }

    public get x():number
    {
        return this._points[0];
    }

    public set y(value:number)
    {
        this._points[1] = value;
        this.hasChanged();
    }

    public get y():number
    {
        return this._points[1];
    }
		
	public add(v:Point):Point
	{
        var point:Point = new Point();
        point.x = this.x + v.x;
        point.x = this.y + v.y;
		return point;
	}
		
	public clone():Point
	{
		return new Point(this.x, this.y);
	}
		
	public copyFrom(sourcePoint:Point):void
	{
        this.x = sourcePoint.x;
        this.y = sourcePoint.y;
	}
		
	public equals(toCompare:Point):Boolean
	{
        if(this.x == toCompare.x && this.y == toCompare.y)
        {
            return true;
        }
		return false;
	}
		
	public get length():number
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
		
	public normalize(thickness:number):void
	{
		var l = this.length;
	    this.x = this.x / l * thickness;
	    this.y = this.y / l * thickness;
	}
		
	public offset(dx:number, dy:number):void
	{
		this.x += dx;
	    this.y += dy;
	}
		
	public setTo(xa:number, ya:number):void
	{
        this.x = xa;
        this.y = ya;
	}
		
	public subtract(v:Point):Point
	{
		return new Point(this.x - v.x, this.y - v.y);
    }

    public static polar(len:number, angle:number):Point
    {
        return new Point(len * Math.cos(angle), len * Math.sin(angle));
    }

    public static distance(pt1:Point, pt2:Point):number
    {
        var x = pt1.x - pt2.x;
        var y = pt1.y - pt2.y;
        return Math.sqrt(x * x + y * y);
    }
        
    public static interpolate(pt1:Point, pt2:Point, f:number):Point
    {
        return new Point( pt2.x + (pt1.x - pt2.x) * f, pt2.y + (pt1.y - pt2.y) * f );
    }
}