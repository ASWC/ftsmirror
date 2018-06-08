import { BaseObject } from "../../system/BaseObject";
import { Utils } from "./Utils";


export class Vector3D extends BaseObject
{
    protected _vertices:Float32Array;

    constructor(x:number = 0, y:number = 0, z:number = 0)
    {
        super();
        this._vertices = new Float32Array(3);
        this._vertices[0] = x;
        this._vertices[1] = y;
        this._vertices[2] = z;
        this.hasChanged();
    }

    public get vertices():Float32Array
    {
        return this._vertices;
    }

    public scaleAndAdd(source1:Vector3D, scale:number):void
    {
        this._vertices[0] = this._vertices[0] + (source1._vertices[0] * scale);
        this._vertices[1] = this._vertices[1] + (source1._vertices[1] * scale);
        this._vertices[2] = this._vertices[2] + (source1._vertices[2] * scale);
        this.hasChanged();
    }

    public scale(scale:number):void
    {
        this._vertices[0] = this._vertices[0] * scale;
        this._vertices[1] = this._vertices[1] * scale;
        this._vertices[2] = this._vertices[2] * scale;
        this.hasChanged();
    }

    public ceil():void
    {
        this._vertices[0] = Math.ceil(this._vertices[0]);
        this._vertices[1] = Math.ceil(this._vertices[1]);
        this._vertices[2] = Math.ceil(this._vertices[2]);
        this.hasChanged();
    }

    public floor():void
    {
        this._vertices[0] = Math.floor(this._vertices[0]);
        this._vertices[1] = Math.floor(this._vertices[1]);
        this._vertices[2] = Math.floor(this._vertices[2]);
        this.hasChanged();
    }

    public round():void
    {
        this._vertices[0] = Math.round(this._vertices[0]);
        this._vertices[1] = Math.round(this._vertices[1]);
        this._vertices[2] = Math.round(this._vertices[2]);
        this.hasChanged();
    }

    public copy(source:Vector3D):void 
    {
        Utils.copy(this._vertices, source._vertices);
    }

    public clone(value:Vector3D):Vector3D
    {
        return new Vector3D(value.x, value.y, value.z);
    }

    public set(x:number, y:number, z:number, w:number):void 
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static divideVectors(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        Utils.divide(target._vertices, source1._vertices, source2._vertices);        
        return target;
    }

    public static multiplyVectors(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        Utils.multiply(target._vertices, source1._vertices, source2._vertices);
        return target;
    }

    public static subtractVectors(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        Utils.subtract(target._vertices, source1._vertices, source2._vertices);
        return target;
    }

    public static addVectors(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        Utils.add(target._vertices, source1._vertices, source2._vertices);
        return target;
    }

    public static min(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        target.x = Math.min(source1[0] , source2[0]);
        target.y = Math.min(source1[1] , source2[1]);
        target.z = Math.min(source1[2] , source2[2]);
        return target;
    }

    public static max(source1:Vector3D, source2:Vector3D, target:Vector3D = null):Vector3D
    {
        if(!target)
        {
            target = new Vector3D();
        }
        target.x = Math.max(source1[0] , source2[0]);
        target.y = Math.max(source1[1] , source2[1]);
        target.z = Math.max(source1[2] , source2[2]);
        return target;
    }

    public set x(value:number)
    {
        this._vertices[0] = value;
        this.hasChanged();
    }

    public set y(value:number)
    {
        this._vertices[1] = value;
        this.hasChanged();
    }

    public set z(value:number)
    {
        this._vertices[2] = value;
        this.hasChanged();
    }

    public get x():number
    {
        return this._vertices[0];
    }

    public get y():number
    {
        return this._vertices[1];
    }

    public get z():number
    {
        return this._vertices[2];
    }


}