define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._isUploaded = false;
            this._isProgramBuilt = false;
            this._fragmentMainLines = [];
            this._vertexAttributes = [];
            this._vertexMainLines = [];
            this._precision = "precision mediump float;";
        }
        extractVariables(variables) {
            var lines = '';
            for (var i = 0; i < variables.length; i++) {
                lines += variables[i].getLine() + this.getLineBreak();
            }
            return lines;
        }
        extractLines(mainlines) {
            var lines = '';
            for (var i = 0; i < mainlines.length; i++) {
                lines += mainlines[i] + this.getLineBreak();
            }
            return lines;
        }
        buildVertex() {
            var shaderlines = '';
            shaderlines += this.extractVariables(this._vertexAttributes);
            shaderlines += "void main(void)" + this.getLineBreak();
            shaderlines += "{" + this.getLineBreak();
            shaderlines += this.extractLines(this._vertexMainLines);
            shaderlines += "}" + this.getLineBreak();
            return shaderlines;
        }
        getLineBreak() {
            return "\n";
        }
        build(context) {
            if (this._isUploaded) {
                return;
            }
            var vertexcode = this.buildVertex();
            // var fragmentcode:string = this.buildFragment();
            this.show(vertexcode);
            this._isUploaded = true;
            /*
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) {
                return shader;
                    }
                
                console.log(gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);*/
        }
        get isUploaded() {
            return this._isUploaded;
        }
        addToFragmentMain(value) {
            this._fragmentMainLines.push(value);
        }
        setPrecision(value) {
            this._precision = "precision " + value + " float;";
        }
        addAttributeToVertex(value, type) {
            var variable = new ShaderVariable();
            variable.modifier = "attribute";
            variable.type = type;
            variable.name = value;
            this._vertexAttributes.push(variable);
        }
        addToVertexMain(value) {
            this._vertexMainLines.push(value);
        }
    }
    Program3D.VEC4 = "vec4";
    Program3D.PRECISION_MEDIUM = "mediump";
    exports.Program3D = Program3D;
    class ShaderVariable {
        getLine() {
            return this.modifier + " " + this.type + " " + this.name;
        }
    }
});
//# sourceMappingURL=Program3D.js.map