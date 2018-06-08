define(["require", "exports", "flash/system/BaseObject", "flash/Error", "flash/webgl/shadertypes/VertexAttribute", "flash/webgl/shadertypes/VertexUniform", "../webgl/shadertypes/VertexVarying", "../display/BitmapData", "../webgl/shadertypes/TextureData", "./Context3DDrawTypes"], function (require, exports, BaseObject_1, Error_1, VertexAttribute_1, VertexUniform_1, VertexVarying_1, BitmapData_1, TextureData_1, Context3DDrawTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
            this._textures = {};
            this._programBuilt = false;
            this._invalidProgram = false;
            this._fragmentMainLines = [];
            this._vertexAttributes;
            this._vertexMainLines = [];
            this._precision = "precision mediump float;";
            Program3D.UNREGISTERED_PROGRAMS.push(this);
        }
        static getProgram(name) {
            return Program3D.PROGRAMS[name];
        }
        static registerPrograms(gl) {
            while (Program3D.UNREGISTERED_PROGRAMS.length) {
                var program = Program3D.UNREGISTERED_PROGRAMS.shift();
                program.buildProgram(gl);
            }
        }
        static get hasUnregisteredPrograms() {
            if (Program3D.UNREGISTERED_PROGRAMS.length) {
                return true;
            }
            return false;
        }
        set name(value) {
            this._name = value;
            Program3D.PROGRAMS[value] = this;
        }
        get name() {
            return this._name;
        }
        addToFragmentMain(value) {
            this._fragmentMainLines.push(value);
        }
        addToVertexMain(value) {
            this._vertexMainLines.push(value);
        }
        addUniformToFragment(value, type) {
            if (!this._fragmentUniform) {
                this._fragmentUniform = [];
                this._fragmentUniformDic = {};
            }
            var variable = new VertexUniform_1.VertexUniform();
            variable.dataType = type;
            variable.name = value;
            this._fragmentUniform.push(variable);
            this._fragmentUniformDic[variable.name] = variable;
        }
        addVaryingToFragment(value, type) {
            if (!this._fragmentVarying) {
                this._fragmentVarying = [];
                this._fragmentVaryingDic = {};
            }
            var variable = new VertexVarying_1.VertexVarying();
            variable.dataType = type;
            variable.name = value;
            this._fragmentVarying.push(variable);
            this._fragmentVaryingDic[variable.name] = variable;
        }
        addVaryingToVertex(value, type) {
            if (!this._vertexVarying) {
                this._vertexVarying = [];
                this._vertexVaryingDic = {};
            }
            var variable = new VertexVarying_1.VertexVarying();
            variable.dataType = type;
            variable.name = value;
            this._vertexVarying.push(variable);
            this._vertexVaryingDic[variable.name] = variable;
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
        set drawType(value) {
            this._drawType = value;
        }
        flush() {
            if (!this._bindedContext) {
                return;
            }
            var offset = 0;
            this._bindedContext.drawArrays(this._drawType, offset, this._vertextCount);
            //this.show('count: ' + this._vertextCount)   
        }
        bind(context) {
            if (this._invalidProgram) {
                return;
            }
            this._bindedContext = context;
            context.useProgram(this._program);
            this._vertextCount = 0;
        }
        updateFragmentUniform(name, data) {
            if (this._invalidProgram) {
                return;
            }
            var vertextUniform = this._fragmentUniformDic[name];
            if (vertextUniform != undefined) {
                vertextUniform.bind(this._bindedContext, data);
            }
        }
        /*public use(context:WebGLRenderingContext)
        {
            context.useProgram(this._program);
        }*/
        updateVertexUniform(name, data) {
            if (this._invalidProgram) {
                return;
            }
            var vertextUniform = this._vertexUniformDic[name];
            if (vertextUniform != undefined) {
                vertextUniform.bind(this._bindedContext, data);
            }
        }
        updateVertexData(name, data) {
            if (this._invalidProgram) {
                return;
            }
            var variable = this._vertextAttributesDic[name];
            if (!variable) {
                return;
            }
            this._bindedContext.enableVertexAttribArray(variable.attributeLocation);
            this._bindedContext.bindBuffer(this._bindedContext.ARRAY_BUFFER, variable.buffer);
            if (data.needUpdate) {
                this._bindedContext.bufferData(this._bindedContext.ARRAY_BUFFER, data.vertices, this._bindedContext.STATIC_DRAW);
            }
            var type = this._bindedContext.FLOAT;
            var normalize = false;
            var stride = 0;
            var offset = 0;
            this._bindedContext.vertexAttribPointer(variable.attributeLocation, variable.size, type, normalize, stride, offset);
            this._vertextCount += data.length / variable.size;
        }
        present(context) {
            context.useProgram(this._program);
            /*
            if(this._vertextCount == 0)
            {
                return;
            }
            if(!this._program)
            {
                return;
            }
            var primitiveType = context.TRIANGLES;
            var offset = 0;
            context.drawArrays(primitiveType, offset, this._vertextCount);   */
        }
        registerTexture(context, data) {
            var image = BitmapData_1.BitmapData.getNativeImage(data);
            if (!image) {
                return;
            }
            if (this._textures[image.src] == undefined) {
                var texture = new TextureData_1.TextureData();
                texture.image = image;
                var webgltexture = context.createTexture();
                context.bindTexture(context.TEXTURE_2D, webgltexture);
                context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.CLAMP_TO_EDGE);
                context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.CLAMP_TO_EDGE);
                context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.NEAREST);
                context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.NEAREST);
                context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, image);
                texture.webgltexture = webgltexture;
                this._textures[image.src] = texture;
            }
            else {
                context.activeTexture(context.TEXTURE0);
            }
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
                    this.show(vertextUniform.name + " vertex u: " + vertextUniform.location);
                }
            }
            if (this._fragmentUniform) {
                for (var i = 0; i < this._fragmentUniform.length; i++) {
                    var vertextUniform = this._fragmentUniform[i];
                    vertextUniform.location = context.getUniformLocation(this._program, vertextUniform.name);
                    this.show(vertextUniform.name + " fragment u: " + vertextUniform.location);
                }
            }
            this.show(this.name + " built and ready");
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
            shaderlines += Program3D.extractUniforms(this._fragmentUniform);
            shaderlines += Program3D.extractVarying(this._fragmentVarying);
            shaderlines += "void main()" + Program3D.lineBreak;
            shaderlines += "{" + Program3D.lineBreak;
            shaderlines += Program3D.extractProgramLines(this._fragmentMainLines);
            shaderlines += "}" + Program3D.lineBreak;
            return shaderlines;
        }
        buildVertexSource() {
            var shaderlines = '';
            shaderlines += Program3D.extractVeertexAttributes(this._vertexAttributes);
            shaderlines += Program3D.extractUniforms(this._vertexUniform);
            shaderlines += Program3D.extractVarying(this._vertexVarying);
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
        static extractVarying(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + Program3D.lineBreak;
            }
            return lines;
        }
        static extractUniforms(variables) {
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
    Program3D.PRECISION_MEDIUM = "mediump";
    Program3D.PROGRAMS = {};
    Program3D.UNREGISTERED_PROGRAMS = [];
    exports.Program3D = Program3D;
    class ShaderVariable {
        getLine() {
            return this.modifier + " " + this.type + " " + this.name + ";";
        }
    }
});
//# sourceMappingURL=Program3D.js.map