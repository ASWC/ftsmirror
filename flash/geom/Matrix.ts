import { BaseObject } from "flash/system/BaseObject";
import { Point } from "flash/geom/Point";
import { IndexedVertice } from "../webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "../display3D/Context3DVertexBufferFormat";

export class Matrix extends IndexedVertice
{
    constructor(a:number=1, b:number=0, c:number=0, d:number=1, tx:number=0, ty:number=0)
	{
        super(9, Context3DVertexBufferFormat.FLOAT);        
        this.identity();
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }

    public get rawMatrix():Float32Array|Int32Array
    {
        return this._vertices;
    }
		
	public concat(m:Matrix):void
	{
        this.a = (m.a * this.a) + (m.b * this.c);
        this.b = (m.a * this.b) + (m.b * this.d);
        this.c = (m.c * this.a) + (m.d * this.c);
        this.d = (m.c * this.b) + (m.d * this.d);
        this.tx = (m.tx * this.a) + (m.ty * this.c) + this.tx;
        this.ty = (m.tx * this.b) + (m.ty * this.d) + this.ty;        
	}
		
	public copyFrom(sourceMatrix:Matrix):void
	{
		this.a = sourceMatrix.a;
        this.b = sourceMatrix.b;
        this.c = sourceMatrix.c;
        this.d = sourceMatrix.d
        this.tx = sourceMatrix.tx;
        this.ty = sourceMatrix.ty;
    }
    
    public rotate(angle:number):void
	{
		const cos:number = Math.cos(angle);
        const sin:number = Math.sin(angle);
        this.a = (this.a * cos) - (this.b * sin);
        this.b = (this.a * sin) + (this.b * cos);
        this.c = (this.c * cos) - (this.d * sin);
        this.d = (this.c * sin) + (this.d * cos);
        this.tx = (this.tx * cos) - (this.ty * sin);
        this.ty = (this.tx * sin) + (this.ty * cos);
    }
    
    public scale(sx:number, sy:number):void
	{


        this._vertices[0] = sx * this._vertices[0];
        this._vertices[1] = sx * this._vertices[1];
        this._vertices[2] = sx * this._vertices[2];
      
        this._vertices[3] = sy * this._vertices[3];
        this._vertices[4] = sy * this._vertices[4];
        this._vertices[5] = sy * this._vertices[5];
      
        this._vertices[6] = this._vertices[6];
        this._vertices[7] = this._vertices[7];
        this._vertices[8] = this._vertices[8];
    }
    
    public translate(dx:number, dy:number):void
	{
        this._vertices[6] = dx * this._vertices[0] + dy * this._vertices[3] + this._vertices[6];
        this._vertices[7] = dx * this._vertices[1] + dy * this._vertices[4] + this._vertices[7];
        this._vertices[8] = dx * this._vertices[2] + dy * this._vertices[5] + this._vertices[8];		
    }
		
	public createBox(scaleX:number, scaleY:number, rotation:number=0, tx:number=0, ty:number=0):void
	{
        this.identity();
        this.rotate(rotation);
        this.scale(scaleX, scaleY);
        this.translate(tx, ty);
	}
		
	public createGradientBox(width:number, height:number, rotation:number=0, tx:number=0, ty:number=0):void
	{
        this.identity();
        this.a = width / 1638.4
		this.d = height / 1638.4;
        this.rotate(rotation);
        this.translate(tx + (width / 2), ty + (height / 2));
    }
		
	public invert():void
	{
        const n:number = (this.a * this.d) - (this.b * this.c);
        this.a = this.d / n;
        this.b = -this.b / n;
        this.c = -this.c / n;
        this.d = this.a / n;
        this.tx = ((this.c * this.ty) - (this.d * this.tx)) / n;
        this.ty = -((this.a * this.ty) - (this.b * this.tx)) / n;
    }
    
	public setTo(aa:number, ba:number, ca:number, da:number, txa:number, tya:number):void
	{
        this.a = aa;
        this.b = ba;
        this.c = ca;
        this.d = da;
        this.tx = txa;
        this.ty = tya;
    }
    
		
	public transformPoint(point:Point):Point
	{
        var newpos:Point = new Point();
        newpos.x = (this.a * point.x) + (this.c * point.y) + this.tx;
        newpos.y = (this.b * point.x) + (this.d * point.y) + this.ty;
		return newpos;
	}
		
	public deltaTransformPoint(point:Point):Point
	{
        var newpos:Point = new Point();
        newpos.x = (this.a * point.x) + (this.c * point.y);
        newpos.y = (this.b * point.x) + (this.d * point.y);
		return newpos;
    }
    

    public clone():Matrix
	{
		return new Matrix();
	}
    
    public set tx(value:number)
    {
        this._vertices[2] = value;
        this.hasChanged();
    }

    public get tx():number
    {
        return this._vertices[2];
    }

    public set d(value:number)
    {
        this._vertices[4] = value;
        this.hasChanged();
    }

    public get d():number
    {
        return this._vertices[4];
    }

    public set c(value:number)
    {
        this._vertices[3] = value;
        this.hasChanged();
    }

    public get c():number
    {
        return this._vertices[3];
    }

    public set b(value:number)
    {
        this._vertices[1] = value;
        this.hasChanged();
    }

    public get b():number
    {
        return this._vertices[1];
    }

    public set a(value:number)
    {
        this._vertices[0] = value;
        this.hasChanged();
    }

    public get a():number
    {
        return this._vertices[0];
    }

    public set ty(value:number)
    {
        this._vertices[5] = value;
        this.hasChanged();
    }

    public get ty():number
    {
        return this._vertices[5];
    }




    public identity():void
	{
        this._vertices[0] = 1.0;// a
        this._vertices[1] = 0.0;// b
        this._vertices[2] = 0.0;// tx
        this._vertices[3] = 0.0;// c
        this._vertices[4] = 1.0;// d
        this._vertices[5] = 0.0;// ty
        this._vertices[6] = 0.0;
        this._vertices[7] = 0.0;
        this._vertices[8] = 1.0;
        this.hasChanged();
	}
}