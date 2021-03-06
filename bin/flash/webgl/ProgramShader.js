define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ProgramShader extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._dataLength = 0;
            this._vertexCount = 0;
            this._shaderValid = false;
            this._attributes = [];
            this._attributesDic = {};
            this._mainLines = [];
            this._varying = [];
            this._varyingDic = {};
            this._uniform = [];
            this._uniformDic = {};
        }
        set dataLength(value) {
            this._dataLength = value;
        }
        get vertexCount() {
            return this._vertexCount;
        }
        set drawingContext(value) {
            this._drawingContext = value;
            if (!this._drawingContext) {
                this._vertexCount = 0;
            }
        }
        prepareForDraw() {
            if (!this._drawingContext) {
                return;
            }
            this.prepareAttributes();
            this.prepareVaryings();
            this.prepareUniforms();
        }
        prepareVaryings() {
        }
        prepareUniforms() {
            for (var i = 0; i < this._uniform.length; i++) {
                var vertextUniform = this._uniform[i];
                vertextUniform.reset();
            }
        }
        prepareAttributes() {
            for (var i = 0; i < this._attributes.length; i++) {
                var vertextAttribute = this._attributes[i];
                for (var j = 0; j < vertextAttribute.locations.length; j++) {
                    var location = vertextAttribute.locations[j];
                    var buffer = vertextAttribute.collumnBuffers[j];
                    var bufferdata = vertextAttribute.getVerticeAt(j);
                    this._drawingContext.enableVertexAttribArray(location);
                    this._drawingContext.bindBuffer(this._drawingContext.ARRAY_BUFFER, buffer);
                    this._drawingContext.bufferData(this._drawingContext.ARRAY_BUFFER, bufferdata, this._drawingContext.STATIC_DRAW);
                    var type = this._drawingContext.FLOAT;
                    var normalize = false;
                    var stride = 0;
                    var offset = 0;
                    this._drawingContext.vertexAttribPointer(location, vertextAttribute.size, type, normalize, stride, offset);
                }
                vertextAttribute.reset();
            }
        }
        updateUniform(name, data) {
            if (!this._drawingContext) {
                return;
            }
            var vertextUniform = this._uniformDic[name];
            if (vertextUniform != undefined) {
                var rawdata = data.rawData;
                vertextUniform.setData(data);
                vertextUniform.bind(this._drawingContext, rawdata);
            }
        }
        updateAttribute(name, data) {
            var variable = this._attributesDic[name];
            if (!variable) {
                return;
            }
            if (!this._drawingContext) {
                return;
            }
            variable.setData(data);
            this._vertexCount = variable.length;
        }
        getLocations(context, program) {
            for (var i = 0; i < this._attributes.length; i++) {
                var vertextAttribute = this._attributes[i];
                vertextAttribute.attributeLocation = context.getAttribLocation(program, vertextAttribute.name);
                for (var j = 0; j < vertextAttribute.totalBuffer; j++) {
                    vertextAttribute.collumnBuffers.push(context.createBuffer());
                }
            }
            for (var i = 0; i < this._uniform.length; i++) {
                var vertextUniform = this._uniform[i];
                vertextUniform.location = context.getUniformLocation(program, vertextUniform.name);
            }
        }
        get shader() {
            return this._programShader;
        }
        get shaderValid() {
            return this._shaderValid;
        }
        buildShader(context) {
        }
        createShader(context, type, source) {
            var shader = context.createShader(type);
            context.shaderSource(shader, source);
            context.compileShader(shader);
            var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
            if (success) {
                return shader;
            }
            var compilationLog = context.getShaderInfoLog(shader);
            this.show("shader " + compilationLog);
            context.deleteShader(shader);
            return null;
        }
        get lineBreak() {
            return "\n";
        }
        extractAttributes(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + this.lineBreak;
            }
            return lines;
        }
        extractUniforms(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + this.lineBreak;
            }
            return lines;
        }
        extractLines(mainlines) {
            var lines = '';
            for (var i = 0; i < mainlines.length; i++) {
                lines += mainlines[i] + this.lineBreak;
            }
            return lines;
        }
        extractVarying(variables) {
            var lines = '';
            if (!variables) {
                return lines;
            }
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + this.lineBreak;
            }
            return lines;
        }
    }
    exports.ProgramShader = ProgramShader;
});
//# sourceMappingURL=ProgramShader.js.map