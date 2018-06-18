define(["require", "exports", "flash/webgl/shadertypes/VertexUniform", "flash/webgl/shadertypes/VertexVarying", "flash/webgl/shadertypes/VertexAttribute", "flash/webgl/ProgramShader"], function (require, exports, VertexUniform_1, VertexVarying_1, VertexAttribute_1, ProgramShader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FragmentShader extends ProgramShader_1.ProgramShader {
        constructor() {
            super();
        }
        buildShader(context) {
            var vertexcode = this.buildSource();
            this.show(vertexcode);
            this._programShader = this.createShader(context, context.FRAGMENT_SHADER, vertexcode);
            if (!this._programShader) {
                var error = new Error(context.getShaderInfoLog(this._programShader));
                return;
            }
            this._shaderValid = true;
        }
        buildSource() {
            var shaderlines = '';
            shaderlines += this._precision + this.lineBreak;
            shaderlines += this.extractAttributes(this._attributes);
            shaderlines += this.extractUniforms(this._uniform);
            shaderlines += this.extractVarying(this._varying);
            shaderlines += "void main()" + this.lineBreak;
            shaderlines += "{" + this.lineBreak;
            shaderlines += this.extractLines(this._mainLines);
            shaderlines += "}" + this.lineBreak;
            return shaderlines;
        }
        set precision(value) {
            this._precision = value;
        }
        addVarying(value, type) {
            var variable = new VertexVarying_1.VertexVarying(value, type);
            this._varying.push(variable);
            this._varyingDic[variable.name] = variable;
        }
        addUniform(value, type) {
            var variable = new VertexUniform_1.VertexUniform(value, type);
            this._uniform.push(variable);
            this._uniformDic[variable.name] = variable;
        }
        addAttribute(value, type) {
            var variable = new VertexAttribute_1.VertexAttribute(value, type);
            this._attributes.push(variable);
            this._attributesDic[value] = variable;
        }
        addToMain(value) {
            this._mainLines.push(value);
        }
    }
    exports.FragmentShader = FragmentShader;
});
//# sourceMappingURL=FragmentShader.js.map