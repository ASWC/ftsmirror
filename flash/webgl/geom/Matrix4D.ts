import { BaseObject } from "../../system/BaseObject";
import { Vector3D } from "./Vector3D";


export class Matrix4D extends BaseObject
{
    protected _vertices:Float32Array;

    constructor()
    {
        super();
        this._vertices = new Float32Array(16);
        this.identity();        
    }

    public translate(vector:Vector3D):void
    {
        var x:number = vector.vertices[0];
        var y:number = vector.vertices[1];
        var z:number = vector.vertices[2];      
        this.vertices[12] = this.vertices[0] * x + this.vertices[4] * y + this.vertices[8] * z + this.vertices[12];
        this.vertices[13] = this.vertices[1] * x + this.vertices[5] * y + this.vertices[9] * z + this.vertices[13];
        this.vertices[14] = this.vertices[2] * x + this.vertices[6] * y + this.vertices[10] * z + this.vertices[14];
        this.vertices[15] = this.vertices[3] * x + this.vertices[7] * y + this.vertices[11] * z + this.vertices[15];      
    }

    public rotateZ(angle:number):void
    {
        var s:number = Math.sin(angle);
        var c:number = Math.cos(angle);
        var a00:number = this._vertices[0];
        var a01:number = this._vertices[1];
        var a02:number = this._vertices[2];
        var a03:number = this._vertices[3];
        var a10:number = this._vertices[4];
        var a11:number = this._vertices[5];
        var a12:number = this._vertices[6];
        var a13:number = this._vertices[7];      
        this._vertices[0] = a00 * c + a10 * s;
        this._vertices[1] = a01 * c + a11 * s;
        this._vertices[2] = a02 * c + a12 * s;
        this._vertices[3] = a03 * c + a13 * s;
        this._vertices[4] = a10 * c - a00 * s;
        this._vertices[5] = a11 * c - a01 * s;
        this._vertices[6] = a12 * c - a02 * s;
        this._vertices[7] = a13 * c - a03 * s;
    }

    public identity():void 
    {
        this._vertices[0] = 1;
        this._vertices[1] = 0;
        this._vertices[2] = 0;
        this._vertices[3] = 0;
        this._vertices[4] = 0;
        this._vertices[5] = 1;
        this._vertices[6] = 0;
        this._vertices[7] = 0;
        this._vertices[8] = 0;
        this._vertices[9] = 0;
        this._vertices[10] = 1;
        this._vertices[11] = 0;
        this._vertices[12] = 0;
        this._vertices[13] = 0;
        this._vertices[14] = 0;
        this._vertices[15] = 1;
        this.hasChanged();
    }

    public get vertices():Float32Array
    {
        return this._vertices;
    }


}