define(["require", "exports", "flash/system/BaseObject", "flash/display3D/Context3DVertexBufferFormat", "flash/webgl/geom/VerticeBuffer"], function (require, exports, BaseObject_1, Context3DVertexBufferFormat_1, VerticeBuffer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexUniform extends BaseObject_1.BaseObject {
        constructor(name, type) {
            super();
            this.name = name;
            this.dataType = type;
            this.verticeManager = new VerticeBuffer_1.VerticeBuffer();
        }
        reset() {
            this.verticeManager.reset();
        }
        setData(data) {
            this.verticeManager.addVertices(data);
        }
        getVerticeAt(index = 0) {
            return this.verticeManager.getCollumnAt(index);
        }
        getLine() {
            return "uniform " + this.dataType + " " + this.name + ";";
        }
        bind(context, data) {
            if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2) {
                context.uniform2f(this.location, data[0], data[1]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC3) {
                context.uniform3f(this.location, data[0], data[1], data[2]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4) {
                context.uniform4f(this.location, data[0], data[1], data[2], data[3]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4_A) {
                if (data instanceof Float32Array) {
                    context.uniform4fv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC3_A) {
                if (data instanceof Float32Array) {
                    context.uniform3fv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2_A) {
                if (data instanceof Float32Array) {
                    context.uniform2fv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT) {
                context.uniform1f(this.location, data[0]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT_A) {
                if (data instanceof Float32Array) {
                    context.uniform1fv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT2 || this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT2_A) {
                if (data instanceof Float32Array) {
                    context.uniformMatrix2fv(this.location, false, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3 || this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3_A) {
                if (data instanceof Float32Array) {
                    context.uniformMatrix3fv(this.location, false, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT4 || this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT4_A) {
                if (data instanceof Float32Array) {
                    context.uniformMatrix4fv(this.location, false, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT) {
                context.uniform1i(this.location, data[0]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_A) {
                if (data instanceof Int32Array) {
                    context.uniform1iv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC2) {
                context.uniform2i(this.location, data[0], data[1]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC3) {
                context.uniform3i(this.location, data[0], data[1], data[2]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC4) {
                context.uniform4i(this.location, data[0], data[1], data[2], data[3]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC4_A) {
                if (data instanceof Int32Array) {
                    context.uniform4iv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC3_A) {
                if (data instanceof Int32Array) {
                    context.uniform3iv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.INT_VEC2_A) {
                if (data instanceof Int32Array) {
                    context.uniform2iv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLER2D) {
                context.uniform1i(this.location, data[0]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLER2D_A) {
                if (data instanceof Int32Array) {
                    context.uniform1iv(this.location, data);
                }
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLERCUBE) {
                context.uniform1i(this.location, data[0]);
            }
            else if (this.dataType == Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLERCUBE_A) {
                if (data instanceof Int32Array) {
                    context.uniform1iv(this.location, data);
                }
            }
        }
    }
    exports.VertexUniform = VertexUniform;
});
//# sourceMappingURL=VertexUniform.js.map