define(["require", "exports", "flash/system/BaseObject", "flash/Error", "flash/webgl/shadertypes/VertexAttribute", "./shadertypes/VertexUniform"], function (require, exports, BaseObject_1, Error_1, VertexAttribute_1, VertexUniform_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._invalidProgram = false;
            this._fragmentMainLines = [];
            this._vertexAttributes;
            this._vertexMainLines = [];
            this._precision = "precision mediump float;";
        }
        addToFragmentMain(value) {
            this._fragmentMainLines.push(value);
        }
        addToVertexMain(value) {
            this._vertexMainLines.push(value);
        }
        addUniformToVertex(value, type) {
            if (!this._vertexUniform) {
                this._vertexUniform = [];
                this._vertexUniformDic = {};
            }
            var variable = new VertexUniform_1.VertexUniform();
            variable.dataType = type;
            variable.name = value;
            this._vertexUniform.push(variable);
            this._vertexUniformDic[variable.name] = variable;
        }
        addAttributeToVertex(value, type, size) {
            if (!this._vertexAttributes) {
                this._vertexAttributes = [];
                this._vertextAttributesDic = {};
            }
            var variable = new VertexAttribute_1.VertexAttribute();
            variable.size = size;
            variable.dataType = type;
            variable.name = value;
            this._vertexAttributes.push(variable);
            this._vertextAttributesDic[value] = variable;
        }
        setPrecision(value) {
            this._precision = "precision " + value + " float;";
        }
        get ready() {
            if (this._invalidProgram) {
                return this._invalidProgram;
            }
            if (!this._program) {
                return false;
            }
            return true;
        }
        bind(context) {
            if (this._invalidProgram) {
                return;
            }
            context.useProgram(this._program);
            this._vertextCount = 0;
        }
        updateVertexUniform(context, name, data) {
            if (this._invalidProgram) {
                return;
            }
            var vertextUniform = this._vertexUniformDic[name];
            if (vertextUniform != undefined) {
                vertextUniform.bind(context, data);
            }
        }
        updateVertexData(context, name, data) {
            if (this._invalidProgram) {
                return;
            }
            var variable = this._vertextAttributesDic[name];
            if (!variable) {
                return;
            }
            context.enableVertexAttribArray(variable.attributeLocation);
            context.bindBuffer(context.ARRAY_BUFFER, variable.buffer);
            context.bufferData(context.ARRAY_BUFFER, data, context.STATIC_DRAW);
            var type = context.FLOAT;
            var normalize = false;
            var stride = 0;
            var offset = 0;
            context.vertexAttribPointer(variable.attributeLocation, variable.size, type, normalize, stride, offset);
            this._vertextCount += data.length / variable.size;
        }
        present(context) {
            if (this._vertextCount == 0) {
                return;
            }
            if (!this._program) {
                return;
            }
            var primitiveType = context.TRIANGLES;
            var offset = 0;
            context.drawArrays(primitiveType, offset, this._vertextCount);
        }
        buildProgram(context) {
            var vertexcode = this.buildVertexSource();
            var fragmentcode = this.buildFragmentSource();
            if (!vertexcode || !fragmentcode) {
                this._invalidProgram = true;
                return;
            }
            this._vertexShader = Program3D.createShader(context, context.VERTEX_SHADER, vertexcode);
            this._fragmentShader = Program3D.createShader(context, context.FRAGMENT_SHADER, fragmentcode);
            if (!this._vertexShader || !this._fragmentShader) {
                this._invalidProgram = true;
                return;
            }
            this._program = Program3D.createProgram(context, this._vertexShader, this._fragmentShader);
            if (!this._program) {
                this._invalidProgram = true;
                return;
            }
            if (this._vertexAttributes) {
                for (var i = 0; i < this._vertexAttributes.length; i++) {
                    var vertextAttribute = this._vertexAttributes[i];
                    vertextAttribute.attributeLocation = context.getAttribLocation(this._program, vertextAttribute.name);
                    vertextAttribute.buffer = context.createBuffer();
                }
            }
            if (this._vertexUniform) {
                for (var i = 0; i < this._vertexUniform.length; i++) {
                    var vertextUniform = this._vertexUniform[i];
                    vertextUniform.location = context.getUniformLocation(this._program, vertextUniform.name);
                }
            }
        }
        static createProgram(context, vertexShader, fragmentShader) {
            var program = context.createProgram();
            context.attachShader(program, vertexShader);
            context.attachShader(program, fragmentShader);
            context.linkProgram(program);
            var success = context.getProgramParameter(program, context.LINK_STATUS);
            if (success) {
                return program;
            }
            var error = new Error_1.Error(context.getProgramInfoLog(program));
            context.deleteProgram(program);
            return null;
        }
        buildFragmentSource() {
            var shaderlines = '';
            shaderlines += this._precision + Program3D.lineBreak;
            //shaderlines += this.extractVariables(this._fragmentUniform);     
            //shaderlines += this.extractVariables(this._fragmentVarying); 
            shaderlines += "void main()" + Program3D.lineBreak;
            shaderlines += "{" + Program3D.lineBreak;
            shaderlines += Program3D.extractProgramLines(this._fragmentMainLines);
            shaderlines += "}" + Program3D.lineBreak;
            return shaderlines;
        }
        buildVertexSource() {
            var shaderlines = '';
            shaderlines += Program3D.extractVeertexAttributes(this._vertexAttributes);
            shaderlines += Program3D.extractVertexUniforms(this._vertexUniform);
            //shaderlines += this.extractVariables(this._vertexVarying);
            shaderlines += "void main()" + Program3D.lineBreak;
            shaderlines += "{" + Program3D.lineBreak;
            shaderlines += Program3D.extractProgramLines(this._vertexMainLines);
            shaderlines += "}" + Program3D.lineBreak;
            return shaderlines;
        }
        static createShader(context, type, source) {
            var shader = context.createShader(type);
            context.shaderSource(shader, source);
            context.compileShader(shader);
            var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
            if (success) {
                return shader;
            }
            var error = new Error_1.Error(context.getShaderInfoLog(shader));
            context.deleteShader(shader);
            return null;
        }
        static extractVertexUniforms(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + Program3D.lineBreak;
            }
            return lines;
        }
        static extractVeertexAttributes(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + Program3D.lineBreak;
            }
            return lines;
        }
        static extractProgramLines(mainlines) {
            var lines = '';
            for (var i = 0; i < mainlines.length; i++) {
                lines += mainlines[i] + Program3D.lineBreak;
            }
            return lines;
        }
        static get lineBreak() {
            return "\n";
        }
    }
    Program3D.VEC4 = "vec4";
    Program3D.VEC2 = "vec2";
    Program3D.MAT3 = "mat3";
    Program3D.PRECISION_MEDIUM = "mediump";
    exports.Program3D = Program3D;
    class ShaderVariable {
        getLine() {
            return this.modifier + " " + this.type + " " + this.name + ";";
        }
    }
});
//# sourceMappingURL=Program3D.js.map