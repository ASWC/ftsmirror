

export class Context3DVertexBufferFormat
{
    public static VEC4:string = "vec4";
    public static VEC4_A:string = "vec4_a";
    public static VEC3:string = "vec3";
    public static VEC3_A:string = "vec3_a";
    public static VEC2:string = "vec2";
    public static VEC2_A:string = "vec2_a";
    public static FLOAT:string = "float";
    public static FLOAT_A:string = "float_a";
    public static MAT2:string = "mat2";
    public static MAT2_A:string = "mat2_a";
    public static MAT3:string = "mat3";
    public static MAT3_A:string = "mat3_a";
    public static MAT4:string = "mat4";
    public static MAT4_A:string = "mat4_a";
    public static INT:string = "int";
    public static INT_A:string = "int_a";
    public static INT_VEC4:string = "ivec4";
    public static INT_VEC4_A:string = "ivec4_a";
    public static INT_VEC3:string = "ivec3";
    public static INT_VEC3_A:string = "ivec3_a";
    public static INT_VEC2:string = "ivec2";
    public static INT_VEC2_A:string = "ivec2_a";
    public static SAMPLER2D:string = "sampler2D";
    public static SAMPLER2D_A:string = "sampler2D_a";
    public static SAMPLERCUBE:string = "samplerCube";
    public static SAMPLERCUBE_A:string = "samplerCube_a";

    public static getSize(type:string):number
    {
        if(type == "vec3" || type == "vec3_a")
        {
            return 3;
        }
        if(type == "vec4" || type == "vec4_a")
        {
            return 4;
        }
        if(type == "vec2" || type == "vec2_a" || type == "MAT2" || type == "MAT2_A")
        {
            return 2;
        }
        if(type == "FLOAT" || type == "FLOAT_A")
        {
            return 1;
        }
        
/*
    public static MAT3:string = "mat3";
    public static MAT3_A:string = "mat3_a";
    public static MAT4:string = "mat4";
    public static MAT4_A:string = "mat4_a";
    public static INT:string = "int";
    public static INT_A:string = "int_a";
    public static INT_VEC4:string = "ivec4";
    public static INT_VEC4_A:string = "ivec4_a";
    public static INT_VEC3:string = "ivec3";
    public static INT_VEC3_A:string = "ivec3_a";
    public static INT_VEC2:string = "ivec2";
    public static INT_VEC2_A:string = "ivec2_a";
    public static SAMPLER2D:string = "sampler2D";
    public static SAMPLER2D_A:string = "sampler2D_a";
    public static SAMPLERCUBE:string = "samplerCube";
    public static SAMPLERCUBE_A:string = "samplerCube_a";*/
        return 0;
    }
}