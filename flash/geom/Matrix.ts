import { BaseObject } from "flash/system/BaseObject";
import { Point } from "flash/geom/Point";
import { IndexedVertice } from "../webgl/geom/IndexedVertice";
import { Context3DVertexBufferFormat } from "../display3D/Context3DVertexBufferFormat";

export class Matrix extends IndexedVertice
{
    private static identitymatrix:Matrix = new Matrix();

    constructor(a:number=1, b:number=0, c:number=0, d:number=1, tx:number=0, ty:number=0)
	{
        super(9, Context3DVertexBufferFormat.FLOAT);        
        this.identity();
    }

    public static multiply(a:Matrix, b:Matrix):Matrix
    {
        var matrix:Matrix = new Matrix();
        var a00 = a._vertices[0 * 3 + 0];
        var a01 = a._vertices[0 * 3 + 1];
        var a02 = a._vertices[0 * 3 + 2];
        var a10 = a._vertices[1 * 3 + 0];
        var a11 = a._vertices[1 * 3 + 1];
        var a12 = a._vertices[1 * 3 + 2];
        var a20 = a._vertices[2 * 3 + 0];
        var a21 = a._vertices[2 * 3 + 1];
        var a22 = a._vertices[2 * 3 + 2];
        var b00 = b._vertices[0 * 3 + 0];
        var b01 = b._vertices[0 * 3 + 1];
        var b02 = b._vertices[0 * 3 + 2];
        var b10 = b._vertices[1 * 3 + 0];
        var b11 = b._vertices[1 * 3 + 1];
        var b12 = b._vertices[1 * 3 + 2];
        var b20 = b._vertices[2 * 3 + 0];
        var b21 = b._vertices[2 * 3 + 1];
        var b22 = b._vertices[2 * 3 + 2];
        matrix._vertices[0] = b00 * a00 + b01 * a10 + b02 * a20;
        matrix._vertices[1] = b00 * a01 + b01 * a11 + b02 * a21
        matrix._vertices[2] = b00 * a02 + b01 * a12 + b02 * a22
        matrix._vertices[3] = b10 * a00 + b11 * a10 + b12 * a20
        matrix._vertices[4] = b10 * a01 + b11 * a11 + b12 * a21
        matrix._vertices[5] = b10 * a02 + b11 * a12 + b12 * a22
        matrix._vertices[6] = b20 * a00 + b21 * a10 + b22 * a20
        matrix._vertices[7] = b20 * a01 + b21 * a11 + b22 * a21
        matrix._vertices[8] = b20 * a02 + b21 * a12 + b22 * a22
        return matrix;
    }

    public setProjection(width:number, height:number):void
    {
        this.identity();
        this._vertices[0] = 2 / width;
        this._vertices[1] = 0;
        this._vertices[2] = 0;  
        this._vertices[3] = 0;
        this._vertices[4] = -2 / height;
        this._vertices[5] = 0;
        this._vertices[6] = -1;
        this._vertices[7] = 1;
        this._vertices[8] = 1;
    }

    public rotate(angle:number):void
	{
        const sin:number = Math.sin(angle);
        const cos:number = Math.cos(angle);  
        this._vertices[0] = cos;
        this._vertices[1] = -sin;
        this._vertices[2] = 0
        this._vertices[3] = sin;
        this._vertices[4] = cos;
        this._vertices[5] = 0
        this._vertices[6] = 0
        this._vertices[7] = 0
        this._vertices[8] = 1
    }

    public translate(dx:number, dy:number):void
	{        
        this._vertices[0] = 1;
        this._vertices[1] = 0;
        this._vertices[2] = 0
        this._vertices[3] = 0
        this._vertices[4] = 1
        this._vertices[5] = 0
        this._vertices[6] = dx;
        this._vertices[7] = dy;
        this._vertices[8] = 1
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

    public identity():void
	{
        this._vertices[0] = 1;
        this._vertices[1] = 0;
        this._vertices[2] = 0;
        this._vertices[3] = 0;
        this._vertices[4] = 1;
        this._vertices[5] = 0;
        this._vertices[6] = 0;
        this._vertices[7] = 0;
        this._vertices[8] = 1;
    }






    public clone():Matrix
	{
		return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
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
        this._vertices[7] = value;
        this.hasChanged();
    }

    public get ty():number
    {
        return this._vertices[7];
    }

    public set tx(value:number)
    {
        this._vertices[6] = value;
        this.hasChanged();
    }

    public get tx():number
    {
        return this._vertices[6];
    }





}