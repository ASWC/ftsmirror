import { BaseObject } from "flash/system/BaseObject";
import { Point } from "flash/geom/Point";
import { IVerticeIndex } from "../webgl/shadertypes/IVerticeIndex";
import { VerticeBuffer } from "../webgl/shadertypes/VerticeBuffer";
import { IVerticeBufferDelegate } from "../webgl/shadertypes/IVerticeBufferDelegate";

export class Rectangle extends BaseObject implements IVerticeIndex
{
    protected _rectangle:Float32Array;
    protected _bottomRight:Point;
    protected _topLeft:Point;
    protected _size:Point;
    protected _vertices:Float32Array;
    protected _index:number;
    protected _delegate:IVerticeBufferDelegate;

    constructor(x:number=0, y:number=0, width:number=0, height:number=0)
	{
        super();
        this._rectangle = new Float32Array(4);
        this._rectangle[0] = x;
        this._rectangle[1] = y;
        this._rectangle[2] = width;
        this._rectangle[3] = height;
        this._needUpdate = true;
    }

    public hasChanged():void
    {
        this._needUpdate = true;
        if(this._delegate)
        {
            this._delegate.onVerticeChanged(this);
        }
    }

    public set delegate(value:IVerticeBufferDelegate)
    {
        this._delegate = value;
    }

    public get rawVertices():Float32Array
    {
        return this.vertices;
    }

    public set index(value:number)
    {
        this._index = value;
    }

    public get index():number
    {
        return this._index;
    }

    public get length():number
    {
        return this.vertices.length;
    }

    public get needUpdate():boolean
    {
        return this._needUpdate;
    }

    public get vertices():Float32Array
    {
        if(!this._vertices)
        {
            this._vertices = new Float32Array(12);            
        }
        if(this._needUpdate)
        {
            this._vertices[0] = this._rectangle[0];
            this._vertices[1] = this._rectangle[1];    
            this._vertices[2] = this._rectangle[0] + this._rectangle[2];
            this._vertices[3] = this._rectangle[1];    
            this._vertices[4] = this._rectangle[0];
            this._vertices[5] = this._rectangle[1] + this._rectangle[3];    
            this._vertices[6] = this._rectangle[0];
            this._vertices[7] = this._rectangle[1] + this._rectangle[3];
            this._vertices[8] = this._rectangle[0] + this._rectangle[2];
            this._vertices[9] = this._rectangle[1] + this._rectangle[3];
            this._vertices[10] = this._rectangle[0] + this._rectangle[2];
            this._vertices[11] = this._rectangle[1];
        }        
        return this._vertices;
    }

    public get height():number
	{
		return this._rectangle[3];
	}
		
	public set height(value:number)
	{
        this._rectangle[3] = value;
        this.hasChanged();
	}

    public get width():number
	{
		return this._rectangle[2];
	}
		
	public set width(value:number)
	{
        this._rectangle[2] = value;
        this.hasChanged();
	}

    public get y():number
	{
		return this._rectangle[1];
	}
		
	public set y(value:number)
	{
        this._rectangle[1] = value;
        this.hasChanged();
	}
    
    public get x():number
	{
		return this._rectangle[0];
	}
		
	public set x(value:number)
	{
        this._rectangle[0] = value;
        this.hasChanged();
    }

    public get top():number
    {
        return this.y;
    }
    
    public set top(value:number)
    {
        this.y = value;
    }

    public get right():number
    {
        return this.x + this.width;
    }
    
    public set right(value:number)
    {
        this.width = value - this.x;
    }
    
    public get left():number
	{
		return this.x;
	}
		
	public set left(value:number)
	{
		this.x = value;
	}
		
	public get bottom():number
	{
		return this.y + this.height;
	}
		
	public set bottom(value:number)
	{
		this.height = value - this.y;
	}
		
	public get bottomRight():Point
	{
        if(!this._bottomRight)
        {
            this._bottomRight = new Point();
        }
        this._bottomRight.x = this.bottom;
        this._bottomRight.y = this.right;
		return this._bottomRight;
	}
		
	public set bottomRight(value:Point)
	{
		if(!this._bottomRight)
        {
            this._bottomRight = new Point();
        }
        this.bottom = value.y;
        this.right = value.x;
        this._bottomRight = value;
    }
    
    public get size():Point
    {
        if(!this._size)
        {
            this._size = new Point();
        }
        this._size.x = this.width;
        this._size.y = this.height;
        return this.size;
    }
    
    public set size(value:Point)
    {
        this.size = value;
        this.width = this._size.x;
        this.height = this._size.y;
    }

    public get topLeft():Point
    {
        if(!this._topLeft)
        {
            this._topLeft = new Point();
        }
        this._topLeft.x = this.x;
        this._topLeft.y = this.y;
        return this._topLeft;
    }
    
    public set topLeft(value:Point)
    {
        this._topLeft = value;
        this.x = this._topLeft.x;
        this.y = this._topLeft.y;
    }
		
	public clone():Rectangle
	{
		return new Rectangle(this.x, this.y, this.width, this.height);
	}
		
	public contains(x:number, y:number):boolean
	{
        if (this.width <= 0 || this.height <= 0)
        {
            return false;
        }
        if (x >= this.x && x < this.x + this.width)
        {
            if (y >= this.y && y < this.y + this.height)
            {
                return true;
            }
        }
        return false;
	}
		
	public containsPoint(point:Point):boolean
	{
		return this.contains(point.x, point.y);
	}
		
	public containsRect(rect:Rectangle):boolean
	{
		if ((this.width * rect.height) > (this.width * rect.height))
        {
            return false;
        }
        return ((rect.x > this.x && rect.x < this.right) && (rect.right > this.x && rect.right < this.right) && (rect.y > this.y && rect.y < this.bottom) && (rect.bottom > this.y && rect.bottom < this.bottom));
	}
		
	public copyFrom(sourceRect:Rectangle):void
	{
		this._rectangle[0] = sourceRect.x;
        this._rectangle[1] = sourceRect.y;
        this._rectangle[2] = sourceRect.width;
        this._rectangle[3] = sourceRect.height;
        this.hasChanged();
	}
		
	public equals(toCompare:Rectangle):boolean
	{
		return (this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height);
	}
		
	public inflate(dx:number, dy:number):void
	{
        this.x = this.x - dx;
        this.y = this.y - dy;
        this.width = this.width + (dx * 2);
        this.height = this.height + (dy * 2);
        this.hasChanged();
	}
		
	public inflatePoint(point:Point):void
	{
		this.inflate(point.x, point.y);
	}
		
	public intersection(toIntersect:Rectangle):Rectangle
	{
		var x0 = Math.max(this.x, toIntersect.x);
        var y0 = Math.max(this.y, toIntersect.y);
        var x1 = Math.min(this.x+this.width, toIntersect.x+toIntersect.width);
        var y1 = Math.min(this.y+this.height, toIntersect.y+toIntersect.height);
        return new Rectangle(x0, y0, x1-x0, y1-y0);
	}
		
	public intersects(toIntersect:Rectangle):boolean
	{
		return !(toIntersect.left > this.right || toIntersect.right < this.left || toIntersect.top > this.bottom || toIntersect.bottom < this.top);
	}
		
	public isEmpty():boolean
	{
        if(this.width <= 0 || this.height <= 0)
        {
            return true;
        }
		return false;
    }
    
    public offset(dx:number, dy:number):void
    {
        this.x += dx;
        this.y += dy;
    }	
    
    public offsetPoint(point:Point):void
    {
        this.offset(point.x, point.y);
    }

    public setEmpty():void
    {
        this._rectangle[0] = 0;
        this._rectangle[1] = 0;
        this._rectangle[2] = 0;
        this._rectangle[3] = 0;
        this.hasChanged();
    }

    public setTo(xa:number, ya:number, widtha:number, heighta:number):void
    {
        this._rectangle[0] = xa;
        this._rectangle[1] = ya;
        this._rectangle[2] = widtha;
        this._rectangle[3] = heighta;
        this.hasChanged();
    }

    public union(toUnion:Rectangle):Rectangle
    {
        var x0 = Math.min(this.x, toUnion.x);
        var y0 = Math.min(this.y, toUnion.y);
        var x1 = Math.max(this.x+this.width, toUnion.x+toUnion.width);
        var y1 = Math.max(this.y+this.height, toUnion.y+toUnion.height);
        return new Rectangle(x0, y0, x1-x0, y1-y0);
    }
	

}