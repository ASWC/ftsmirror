define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context3DVertexBufferFormat {
        static getSize(type) {
            if (type == "vec3" || type == "vec3_a") {
                return 3;
            }
            if (type == "vec4" || type == "vec4_a") {
                return 4;
            }
            if (type == "vec2" || type == "vec2_a") {
                return 2;
            }
            if (type == "mat3") {
                return 9;
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
    Context3DVertexBufferFormat.VEC4 = "vec4";
    Context3DVertexBufferFormat.VEC4_A = "vec4_a";
    Context3DVertexBufferFormat.VEC3 = "vec3";
    Context3DVertexBufferFormat.VEC3_A = "vec3_a";
    Context3DVertexBufferFormat.VEC2 = "vec2";
    Context3DVertexBufferFormat.VEC2_A = "vec2_a";
    Context3DVertexBufferFormat.FLOAT = "float";
    Context3DVertexBufferFormat.FLOAT_A = "float_a";
    Context3DVertexBufferFormat.MAT2 = "mat2";
    Context3DVertexBufferFormat.MAT2_A = "mat2_a";
    Context3DVertexBufferFormat.MAT3 = "mat3";
    Context3DVertexBufferFormat.MAT3_A = "mat3_a";
    Context3DVertexBufferFormat.MAT4 = "mat4";
    Context3DVertexBufferFormat.MAT4_A = "mat4_a";
    Context3DVertexBufferFormat.INT = "int";
    Context3DVertexBufferFormat.INT_A = "int_a";
    Context3DVertexBufferFormat.INT_VEC4 = "ivec4";
    Context3DVertexBufferFormat.INT_VEC4_A = "ivec4_a";
    Context3DVertexBufferFormat.INT_VEC3 = "ivec3";
    Context3DVertexBufferFormat.INT_VEC3_A = "ivec3_a";
    Context3DVertexBufferFormat.INT_VEC2 = "ivec2";
    Context3DVertexBufferFormat.INT_VEC2_A = "ivec2_a";
    Context3DVertexBufferFormat.SAMPLER2D = "sampler2D";
    Context3DVertexBufferFormat.SAMPLER2D_A = "sampler2D_a";
    Context3DVertexBufferFormat.SAMPLERCUBE = "samplerCube";
    Context3DVertexBufferFormat.SAMPLERCUBE_A = "samplerCube_a";
    exports.Context3DVertexBufferFormat = Context3DVertexBufferFormat;
});
//# sourceMappingURL=Context3DVertexBufferFormat.js.map