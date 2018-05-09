define(["require", "exports", "flash/system/BaseObject", "../Error", "../geom/Rectangle"], function (require, exports, BaseObject_1, Error_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._isUploaded = false;
            this._isProgramBuilt = false;
            this._fragmentUniform = [];
            this._fragmentMainLines = [];
            this._vertexAttributes = [];
            this._vertexUniform = [];
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
            shaderlines += this.extractVariables(this._vertexUniform);
            shaderlines += "void main()" + this.getLineBreak();
            shaderlines += "{" + this.getLineBreak();
            shaderlines += this.extractLines(this._vertexMainLines);
            shaderlines += "}" + this.getLineBreak();
            return shaderlines;
        }
        getLineBreak() {
            return "\n";
        }
        buildFragment() {
            var shaderlines = '';
            shaderlines += this._precision + this.getLineBreak();
            shaderlines += this.extractVariables(this._fragmentUniform);
            /*
            shaderlines += this.extractVariables(this._vertexAttributes);
    
            */
            shaderlines += "void main()" + this.getLineBreak();
            shaderlines += "{" + this.getLineBreak();
            shaderlines += this.extractLines(this._fragmentMainLines);
            shaderlines += "}" + this.getLineBreak();
            return shaderlines;
        }
        present(context) {
            context.viewport(0, 0, context.canvas.width, context.canvas.height);
            context.useProgram(this._shaderProgram);
            if (this._fragmentUniform && this._fragmentUniform.length) {
                for (var i = 0; i < this._fragmentUniform.length; i++) {
                    //context.enableVertexAttribArray(this._vertexUniform[i].attributeLocation);
                    context.uniform4f(this._fragmentUniform[i].uniformLocation, 0.5, 0.0, 0.0, 1);
                }
            }
            if (this._vertexUniform && this._vertexUniform.length) {
                for (var i = 0; i < this._vertexUniform.length; i++) {
                    //context.enableVertexAttribArray(this._vertexUniform[i].attributeLocation);
                    context.uniform2f(this._vertexUniform[i].uniformLocation, context.canvas.width, context.canvas.height);
                }
            }
            if (this._vertexAttributes && this._vertexAttributes.length) {
                for (var i = 0; i < this._vertexAttributes.length; i++) {
                    context.enableVertexAttribArray(this._vertexAttributes[i].attributeLocation);
                }
            }
            // Bind the position buffer.
            context.bindBuffer(context.ARRAY_BUFFER, this._buffer);
            // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
            var size = 2; // 2 components per iteration
            var type = context.FLOAT; // the data is 32bit floats
            var normalize = false; // don't normalize the data
            var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            var offset = 0; // start at the beginning of the buffer
            if (this._vertexAttributes && this._vertexAttributes.length) {
                for (var i = 0; i < this._vertexAttributes.length; i++) {
                    context.vertexAttribPointer(this._vertexAttributes[i].attributeLocation, size, type, normalize, stride, offset);
                }
            }
            var primitiveType = context.TRIANGLES;
            var offset = 0;
            var count = 6;
            context.drawArrays(primitiveType, offset, count);
        }
        build(context) {
            if (this._isUploaded) {
                return;
            }
            var vertexcode = this.buildVertex();
            var fragmentcode = this.buildFragment();
            this.show(vertexcode);
            this.show(fragmentcode);
            var vertexShader = this.createShader(context, context.VERTEX_SHADER, vertexcode);
            var fragmentShader = this.createShader(context, context.FRAGMENT_SHADER, fragmentcode);
            if (vertexShader && fragmentShader) {
                this.show("shaders are ready");
            }
            else {
                this.show("shader creation failed");
            }
            var program = this.createProgram(context, vertexShader, fragmentShader);
            if (program) {
                this._shaderProgram = program;
                if (this._vertexAttributes && this._vertexAttributes.length) {
                    for (var i = 0; i < this._vertexAttributes.length; i++) {
                        var positionAttributeLocation = context.getAttribLocation(program, this._vertexAttributes[i].name);
                        this._vertexAttributes[i].attributeLocation = positionAttributeLocation;
                        this.show('got attribute location of : ' + positionAttributeLocation);
                    }
                }
                if (this._vertexUniform && this._vertexUniform.length) {
                    for (var i = 0; i < this._vertexUniform.length; i++) {
                        var uniformLocation = context.getUniformLocation(program, this._vertexUniform[i].name);
                        this._vertexUniform[i].uniformLocation = uniformLocation;
                    }
                }
                if (this._fragmentUniform && this._fragmentUniform.length) {
                    for (var i = 0; i < this._fragmentUniform.length; i++) {
                        var uniformLocation = context.getUniformLocation(program, this._fragmentUniform[i].name);
                        this._fragmentUniform[i].uniformLocation = uniformLocation;
                    }
                }
                this._rectangles = [];
                //for (var ii:number = 0; ii < 50; ++ii) 
                // {
                var rect = new Rectangle_1.Rectangle(100, 100, 100, 100);
                this._rectangles.push(rect);
                //context.uniform4f(uniformLocation, Math.random(), Math.random(), Math.random(), 1);
                //context.drawArrays(context.TRIANGLES, 0, 6);
                // }
                /*
                
    
                */
                this.show("attribute: " + positionAttributeLocation);
                var positionBuffer = context.createBuffer();
                this._buffer = positionBuffer;
                // present ?
                context.bindBuffer(context.ARRAY_BUFFER, positionBuffer);
                var data = new Float32Array(4);
                var rect = this._rectangles[0];
                data[i] = rect.x;
                data[i + 1] = rect.x + rect.width;
                data[i + 2] = rect.y;
                data[i + 3] = rect.y + rect.height;
                /*
            for(var i:number = 0; i < this._rectangles.length; i++)
            {
                var rect:Rectangle = this._rectangles[i];
                data[i] = rect.x;
                data[i + 1] = rect.x + rect.width;
                data[i + 2] = rect.y;
                data[i + 3] = rect.y + rect.height
            }*/
                context.bufferData(context.ARRAY_BUFFER, data, context.STATIC_DRAW);
            }
            this._isUploaded = true;
        }
        // protected setRectangle(gl, x, y, width, height) 
        // {
        // var x1 = x;
        //var x2 = x + width;
        // var y1 = y;
        //var y2 = y + height;
        // NOTE: gl.bufferData(gl.ARRAY_BUFFER, ...) will affect
        // whatever buffer is bound to the `ARRAY_BUFFER` bind point
        // but so far we only have one buffer. If we had more than one
        // buffer we'd want to bind that buffer to `ARRAY_BUFFER` first.
        /*gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
           x1, y1,
           x2, y1,
           x1, y2,
           x1, y2,
           x2, y1,
           x2, y2]), gl.STATIC_DRAW);*/
        // }
        createProgram(context, vertexShader, fragmentShader) {
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
        createShader(context, type, source) {
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
        get isUploaded() {
            return this._isUploaded;
        }
        addToFragmentMain(value) {
            this._fragmentMainLines.push(value);
        }
        setPrecision(value) {
            this._precision = "precision " + value + " float;";
        }
        addUniformToFragment(value, type) {
            var variable = new ShaderVariable();
            variable.modifier = "uniform";
            variable.type = type;
            variable.name = value;
            this._fragmentUniform.push(variable);
        }
        addUniformToVertex(value, type) {
            var variable = new ShaderVariable();
            variable.modifier = "uniform";
            variable.type = type;
            variable.name = value;
            this._vertexUniform.push(variable);
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
    Program3D.VEC2 = "vec2";
    Program3D.PRECISION_MEDIUM = "mediump";
    exports.Program3D = Program3D;
    class ShaderVariable {
        getLine() {
            return this.modifier + " " + this.type + " " + this.name + ";";
        }
    }
});
//# sourceMappingURL=Program3D.js.map