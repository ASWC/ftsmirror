
declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export class ArrayTypes
{
    public static INT8ARRAY:string = "Int8Array";
    public static UINT8ARRAY:string = "Uint8Array";
    public static INT16ARRAY:string = "Int16Array";
    public static UINT16ARRAY:string = "Uint16Array";
    public static INT32ARRAY:string = "Int32Array";
    public static UINT32ARRAY:string = "Uint32Array";
    public static UINT8CLAMPEDARRAY:string = "Uint8ClampedArray";
    public static FLOAT32ARRAY:string = "Float32Array";
    public static FLOAT64ARRAY:string = "Float64Array";

    public static int8pool:Int8Array[] = [];
    public static uint8pool:Uint8Array[] = [];
    public static int16pool:Int16Array[] = [];
    public static uint16pool:Uint16Array[] = [];
    public static int32pool:Int32Array[] = [];
    public static uint32pool:Uint32Array[] = [];
    public static uint8clampedpool:Uint8ClampedArray[] = [];
    public static float32pool:Float64Array[] = [];
    public static float64pool:Float32Array[] = [];

    public static getTypedArray(type:string, length:number):TypedArray
    {
        var pooledArray:TypedArray;
        if(type == ArrayTypes.INT8ARRAY)
        {
            if(ArrayTypes.int8pool.length)
            {
                pooledArray =  ArrayTypes.int8pool[ArrayTypes.int8pool.length -1];
                ArrayTypes.int8pool.length -= 1;
                return pooledArray;
            }
            return new Int8Array(length);
        }
        else if(type == ArrayTypes.UINT8ARRAY)
        {
            if(ArrayTypes.uint8pool.length)
            {
                pooledArray =  ArrayTypes.uint8pool[ArrayTypes.uint8pool.length -1];
                ArrayTypes.uint8pool.length -= 1;
                return pooledArray;
            }
            return new Uint8Array(length);
        }
        else if(type == ArrayTypes.INT16ARRAY)
        {
            if(ArrayTypes.int16pool.length)
            {
                pooledArray =  ArrayTypes.int16pool[ArrayTypes.int16pool.length -1];
                ArrayTypes.int16pool.length -= 1;
                return pooledArray;
            }
            return new Int16Array(length);
        }
        else if(type == ArrayTypes.UINT16ARRAY)
        {
            if(ArrayTypes.uint16pool.length)
            {
                pooledArray =  ArrayTypes.uint16pool[ArrayTypes.uint16pool.length -1];
                ArrayTypes.uint16pool.length -= 1;
                return pooledArray;
            }
            return new Uint16Array(length);
        }
        else if(type == ArrayTypes.INT32ARRAY)
        {
            if(ArrayTypes.int32pool.length)
            {
                pooledArray =  ArrayTypes.int32pool[ArrayTypes.int32pool.length -1];
                ArrayTypes.int32pool.length -= 1;
                return pooledArray;
            }
            return new Int32Array(length);
        }
        else if(type == ArrayTypes.UINT32ARRAY)
        {
            if(ArrayTypes.uint32pool.length)
            {
                pooledArray =  ArrayTypes.uint32pool[ArrayTypes.uint32pool.length -1];
                ArrayTypes.uint32pool.length -= 1;
                return pooledArray;
            }
            return new Uint32Array(length);
        }
        else if(type == ArrayTypes.UINT8CLAMPEDARRAY)
        {
            if(ArrayTypes.uint8clampedpool.length)
            {
                pooledArray =  ArrayTypes.uint8clampedpool[ArrayTypes.uint8clampedpool.length -1];
                ArrayTypes.uint8clampedpool.length -= 1;
                return pooledArray;
            }
            return new Uint8ClampedArray(length);
        }
        else if(type == ArrayTypes.FLOAT64ARRAY)
        {
            if(ArrayTypes.float64pool.length)
            {
                pooledArray =  ArrayTypes.float64pool[ArrayTypes.float64pool.length -1];
                ArrayTypes.float64pool.length -= 1;
                return pooledArray;
            }
            return new Float64Array(length);
        }
        if(ArrayTypes.float32pool.length)
        {
            pooledArray =  ArrayTypes.float32pool[ArrayTypes.float32pool.length -1];
            ArrayTypes.float32pool.length -= 1;
            return pooledArray;
        }
        return new Float32Array(length);
    }

    public static recycle(value:TypedArray):void
    {
        value.fill(0);
        if(value instanceof Int8Array)
        {
            ArrayTypes.addToPool(ArrayTypes.int8pool, value);
        }
        else if(value instanceof Float32Array)
        {
            ArrayTypes.addToPool(ArrayTypes.float64pool, value);
        }
        else if(value instanceof Float64Array)
        {
            ArrayTypes.addToPool(ArrayTypes.float32pool, value);
        }
        else if(value instanceof Uint8ClampedArray)
        {
            ArrayTypes.addToPool(ArrayTypes.uint8clampedpool, value);
        }
        else if(value instanceof Uint32Array)
        {
            ArrayTypes.addToPool(ArrayTypes.uint32pool, value);
        }
        else if(value instanceof Int32Array)
        {
            ArrayTypes.addToPool(ArrayTypes.int32pool, value);
        }
        else if(value instanceof Uint16Array)
        {
            ArrayTypes.addToPool(ArrayTypes.uint16pool, value);
        }
        else if(value instanceof Int16Array)
        {
            ArrayTypes.addToPool(ArrayTypes.int16pool, value);
        }
        else if(value instanceof Uint8Array)
        {
            ArrayTypes.addToPool(ArrayTypes.uint8pool, value);
        }
    }

    protected static addToPool(pool:TypedArray[], value:TypedArray):void
    {
        var index:number = pool.indexOf(value);
        if(index < 0)
        {
            pool.push(value);
        }
    }
    
}