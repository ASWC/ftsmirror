

export class Utils
{
    public static PRECISION:number = 0.000001;

    
    public static multiply(target:Float32Array, source:Float32Array, source2:Float32Array):void
    {
        for(var i:number = 0; i < target.length; i++)
        {
            target[i] = source[i] * source2[i];
        }
    }

    public static divide(target:Float32Array, source:Float32Array, source2:Float32Array):void
    {
        for(var i:number = 0; i < target.length; i++)
        {
            target[i] = source[i] / source2[i];
        }
    }
    
    public static subtract(target:Float32Array, source:Float32Array, source2:Float32Array):void
    {
        for(var i:number = 0; i < target.length; i++)
        {
            target[i] = source[i] - source2[i];
        }
    }

    public static copy(target:Float32Array, source:Float32Array):void 
    {
        for(var i:number = 0; i < target.length; i++)
        {
            target[i] = source[i];
        }
    }

    public static add(target:Float32Array, source:Float32Array, source2:Float32Array):void
    {
        for(var i:number = 0; i < target.length; i++)
        {
            target[i] = source[i] + source2[i];
        }
    }
}