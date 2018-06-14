
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

    public static getTypedArray(type:string, length:number):TypedArray
    {
        if(type == ArrayTypes.INT8ARRAY)
        {
            return new Int8Array(length);
        }
        else if(type == ArrayTypes.UINT8ARRAY)
        {
            return new Uint8Array(length);
        }
        else if(type == ArrayTypes.INT16ARRAY)
        {
            return new Int16Array(length);
        }
        else if(type == ArrayTypes.UINT16ARRAY)
        {
            return new Uint16Array(length);
        }
        else if(type == ArrayTypes.INT32ARRAY)
        {
            return new Int32Array(length);
        }
        else if(type == ArrayTypes.UINT32ARRAY)
        {
            return new Uint32Array(length);
        }
        else if(type == ArrayTypes.UINT8CLAMPEDARRAY)
        {
            return new Uint8ClampedArray(length);
        }
        else if(type == ArrayTypes.FLOAT64ARRAY)
        {
            return new Float64Array(length);
        }
        return new Float32Array(length);
    }
}