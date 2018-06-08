import { BaseObject } from "../../system/BaseObject";
import { Utils } from "./Utils";


export class Vector2D extends BaseObject
{
    protected vertices:Float32Array;

    constructor(x:number = 0, y:number = 0)
    {
        super();
        this.vertices = new Float32Array(2);
        this.vertices[0] = x;
        this.vertices[1] = y;
        this.hasChanged();
    }

    public scaleAndAdd(source1:Vector2D, scale:number):void
    {
        this.vertices[0] = this.vertices[0] + (source1.vertices[0] * scale);
        this.vertices[1] = this.vertices[1] + (source1.vertices[1] * scale);
        this.hasChanged();
    }

    public scale(scale:number):void
    {
        this.vertices[0] = this.vertices[0] * scale;
        this.vertices[1] = this.vertices[1] * scale;
        this.hasChanged();
    }

    public ceil():void
    {
        this.vertices[0] = Math.ceil(this.vertices[0]);
        this.vertices[1] = Math.ceil(this.vertices[1]);
        this.hasChanged();
    }

    public floor():void
    {
        this.vertices[0] = Math.floor(this.vertices[0]);
        this.vertices[1] = Math.floor(this.vertices[1]);
        this.hasChanged();
    }

    public round():void
    {
        this.vertices[0] = Math.round(this.vertices[0]);
        this.vertices[1] = Math.round(this.vertices[1]);
        this.hasChanged();
    }

    public copy(source:Vector2D):void 
    {
        Utils.copy(this.vertices, source.vertices);
    }

    public clone(value:Vector2D):Vector2D
    {
        return new Vector2D(value.x, value.y);
    }

    public set(x:number, y:number, z:number, w:number):void 
    {
        this.x = x;
        this.y = y;
    }

    public static divideVectors(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        Utils.divide(target.vertices, source1.vertices, source2.vertices);        
        return target;
    }

    public static multiplyVectors(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        Utils.multiply(target.vertices, source1.vertices, source2.vertices);
        return target;
    }

    public static subtractVectors(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        Utils.subtract(target.vertices, source1.vertices, source2.vertices);
        return target;
    }

    public static addVectors(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        Utils.add(target.vertices, source1.vertices, source2.vertices);
        return target;
    }

    public static min(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        target.x = Math.min(source1[0] , source2[0]);
        target.y = Math.min(source1[1] , source2[1]);
        return target;
    }

    public static max(source1:Vector2D, source2:Vector2D, target:Vector2D = null):Vector2D
    {
        if(!target)
        {
            target = new Vector2D();
        }
        target.x = Math.max(source1[0] , source2[0]);
        target.y = Math.max(source1[1] , source2[1]);
        return target;
    }

    public set x(value:number)
    {
        this.vertices[0] = value;
        this.hasChanged();
    }

    public set y(value:number)
    {
        this.vertices[1] = value;
        this.hasChanged();
    }

    public get x():number
    {
        return this.vertices[0];
    }

    public get y():number
    {
        return this.vertices[1];
    }


}