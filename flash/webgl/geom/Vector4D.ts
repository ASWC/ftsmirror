import { VerticeBuffer } from "./VerticeBuffer";
import { Point } from "../../geom/Point";
import { BaseObject } from "../../system/BaseObject";
import { Utils } from "./Utils";


export class Vector4D extends BaseObject
{    
    protected vertices:Float32Array;

    constructor(x:number = 0, y:number = 0, z:number = 0, w:number = 0)
    {
        super();
        this.vertices = new Float32Array(4);
        this.vertices[0] = x;
        this.vertices[1] = y;
        this.vertices[2] = z;
        this.vertices[3] = w;
        this.hasChanged();
    }

    public scale(scale:number):void
    {
        this.vertices[0] = this.vertices[0] * scale;
        this.vertices[1] = this.vertices[1] * scale;
        this.vertices[2] = this.vertices[2] * scale;
        this.vertices[3] = this.vertices[3] * scale;
        this.hasChanged();
    }

    public copy(source:Vector4D):void 
    {
        Utils.copy(this.vertices, source.vertices);
    }

    public clone(value:Vector4D):Vector4D
    {
        return new Vector4D(value.x, value.y, value.z, value.w);
    }

    public set(x:number, y:number, z:number, w:number):void 
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    public ceil():void
    {
        this.vertices[0] = Math.ceil(this.vertices[0]);
        this.vertices[1] = Math.ceil(this.vertices[1]);
        this.vertices[2] = Math.ceil(this.vertices[2]);
        this.vertices[3] = Math.ceil(this.vertices[3]);
        this.hasChanged();
    }

    public floor():void
    {
        this.vertices[0] = Math.floor(this.vertices[0]);
        this.vertices[1] = Math.floor(this.vertices[1]);
        this.vertices[2] = Math.floor(this.vertices[2]);
        this.vertices[3] = Math.floor(this.vertices[3]);
        this.hasChanged();
    }

    public round():void
    {
        this.vertices[0] = Math.round(this.vertices[0]);
        this.vertices[1] = Math.round(this.vertices[1]);
        this.vertices[2] = Math.round(this.vertices[2]);
        this.vertices[3] = Math.round(this.vertices[3]);
        this.hasChanged();
    }

    public static min(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        target.x = Math.min(source1[0] , source2[0]);
        target.y = Math.min(source1[1] , source2[1]);
        target.z = Math.min(source1[2] , source2[2]);
        target.w = Math.min(source1[3] , source2[3]);
        return target;
    }

    public static max(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        target.x = Math.max(source1[0] , source2[0]);
        target.y = Math.max(source1[1] , source2[1]);
        target.z = Math.max(source1[2] , source2[2]);
        target.w = Math.max(source1[3] , source2[3]);
        return target;
    }

    public static divideVectors(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        Utils.divide(target.vertices, source1.vertices, source2.vertices);        
        return target;
    }

    public static multiplyVectors(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        Utils.multiply(target.vertices, source1.vertices, source2.vertices);
        return target;
    }

    public static subtractVectors(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        Utils.subtract(target.vertices, source1.vertices, source2.vertices);
        return target;
    }

    public static addVectors(source1:Vector4D, source2:Vector4D, target:Vector4D = null):Vector4D
    {
        if(!target)
        {
            target = new Vector4D();
        }
        Utils.add(target.vertices, source1.vertices, source2.vertices);
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

    public set z(value:number)
    {
        this.vertices[2] = value;
        this.hasChanged();
    }

    public set w(value:number)
    {
        this.vertices[3] = value;
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

    public get z():number
    {
        return this.vertices[2];
    }

    public get w():number
    {
        return this.vertices[3];
    }



    public scaleAndAdd(source1:Vector4D, scale:number):void
    {
        this.vertices[0] = this.vertices[0] + (source1.vertices[0] * scale);
        this.vertices[1] = this.vertices[1] + (source1.vertices[1] * scale);
        this.vertices[2] = this.vertices[2] + (source1.vertices[2] * scale);
        this.vertices[3] = this.vertices[3] + (source1.vertices[3] * scale);
        this.hasChanged();
    }


    /*
    public static distance(target:Vector4D, source1:Vector4D):number
    {
        var x:number = target.vertices[0] - source1.vertices[0];
        var y:number = target.vertices[1] - source1.vertices[1];
        var z:number = target.vertices[2] - source1.vertices[2];
        var w:number = target.vertices[3] - source1.vertices[3];
        return Math.sqrt(x*x + y*y + z*z + w*w);
    }

    public static squaredDistance(target:Vector4D, source1:Vector4D):number
    {
        var x:number = target.vertices[0] - source1.vertices[0];
        var y:number = target.vertices[1] - source1.vertices[1];
        var z:number = target.vertices[2] - source1.vertices[2];
        var w:number = target.vertices[3] - source1.vertices[3];
        return x*x + y*y + z*z + w*w;
    }

    public static vectorLength(target:Vector4D):number
    {
        var x:number = target[0];
        var y:number = target[1];
        var z:number = target[2];
        var w:number = target[3];
        return Math.sqrt(x*x + y*y + z*z + w*w);
    }

    public static vectorSquaredLength(target:Vector4D):number
    {
        var x:number = target[0];
        var y:number = target[1];
        var z:number = target[2];
        var w:number = target[3];
        return x*x + y*y + z*z + w*w;
    }

    public static negate(target:Vector4D, source1:Vector4D):Vector4D
    {
        target[0] = -source1[0];
        target[1] = -source1[1];
        target[2] = -source1[2];
        target[3] = -source1[3];
        return target;
    }

    public static inverse(target:Vector4D, source1:Vector4D):Vector4D
    {
        target[0] = 1.0 / source1[0];
        target[1] = 1.0 / source1[1];
        target[2] = 1.0 / source1[2];
        target[3] = 1.0 / source1[3];
        return target;
    }

    public static normalize(target:Vector4D, source1:Vector4D):Vector4D
    {
        var x:number = source1[0];
        var y:number = source1[1];
        var z:number = source1[2];
        var w:number = source1[3];
        var length:number = x*x + y*y + z*z + w*w;
        if (length > 0)
        {
            length = 1 / Math.sqrt(length);
            target[0] = x * length;
            target[1] = y * length;
            target[2] = z * length;
            target[3] = w * length;
        }
        return target;
    }

    public static dot(target:Vector4D, source1:Vector4D):number
    {
        return target[0] * source1[0] + target[1] * source1[1] + target[2] * source1[2] + target[3] * source1[3];
    }

    public static lerp(target:Vector4D, source1:Vector4D, source2:Vector4D, t:number):Vector4D
    {
        let ax:number = source1[0];
        let ay:number = source1[1];
        let az:number = source1[2];
        let aw:number = source1[3];
        target[0] = ax + t * (source2[0] - ax);
        target[1] = ay + t * (source2[1] - ay);
        target[2] = az + t * (source2[2] - az);
        target[3] = aw + t * (source2[3] - aw);
        return target;
    }

    public static random(target:Vector4D, scale:number):Vector4D
    {
        scale = scale || 1.0;
        var v1:number;
        var v2:number;
        var v3:number;
        var v4:number;
        var s1:number;
        var s2:number;
        do 
        {
          v1 = Math.random() * 2 - 1;
          v2 = Math.random() * 2 - 1;
          s1 = v1 * v1 + v2 * v2;
        } while (s1 >= 1);
        do 
        {
          v3 = Math.random() * 2 - 1;
          v4 = Math.random() * 2 - 1;
          s2 = v3 * v3 + v4 * v4;
        } while (s2 >= 1);      
        var d:number = Math.sqrt((1 - s1) / s2);
        target[0] = scale * v1;
        target[1] = scale * v2;
        target[2] = scale * v3 * d;
        target[3] = scale * v4 * d;
        return target;
    }

    public static transformMat4(target:Vector4D, source1:Vector4D, matrix:Matrix4D):Vector4D
    {
        var x:number = source1[0]
        var y:number = source1[1]
        var z:number = source1[2]
        var w:number = source1[3];
        target[0] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w;
        target[1] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w;
        target[2] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w;
        target[3] = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w;
        return target;
    }

    public static transformQuat(target:Vector4D, source1:Vector4D, quat:Quaternion):Vector4D
    {
        var x:number = source1[0]
        var y:number = source1[1]
        var z:number = source1[2];
        var qx:number = quat[0]
        var qy:number = quat[1]
        var qz:number = quat[2]
        var qw:number = quat[3];
        var ix:number = qw * x + qy * z - qz * y;
        var iy:number = qw * y + qz * x - qx * z;
        var iz:number = qw * z + qx * y - qy * x;
        var iw:number = -qx * x - qy * y - qz * z;
        target[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        target[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        target[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        target[3] = source1[3];
        return target;
    }

    public toString():string
    {
        return 'vec4(' + this.vertices[0] + ', ' + this.vertices[1] + ', ' + this.vertices[2] + ', ' + this.vertices[3] + ')';
    }

    public static exactEquals(target:Vector4D, source1:Vector4D):boolean
    {
        return target[0] === source1[0] && target[1] === source1[1] && target[2] === source1[2] && target[3] === source1[3];
    }

    public static equals(target:Vector4D, source1:Vector4D):boolean
    {
      var a0:number = target[0]
      var a1:number = target[1]
      var a2:number = target[2]
      var a3:number = target[3];
      var b0:number = source1[0]
      var b1:number = source1[1]
      var b2:number = source1[2]
      var b3:number = source1[3];
      return (Math.abs(a0 - b0) <= Vector4D.PRECISION * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
              Math.abs(a1 - b1) <= Vector4D.PRECISION * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
              Math.abs(a2 - b2) <= Vector4D.PRECISION * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
              Math.abs(a3 - b3) <= Vector4D.PRECISION * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
    }*/
}
