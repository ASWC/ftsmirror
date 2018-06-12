define(["require", "exports", "flash/system/BaseObject", "flash/Error", "flash/display3D/Context3DDrawTypes", "flash/webgl/VertexShader", "flash/webgl/FragmentShader"], function (require, exports, BaseObject_1, Error_1, Context3DDrawTypes_1, VertexShader_1, FragmentShader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._dataLength = 0;
            this._fragmentProgramShader = new FragmentShader_1.FragmentShader();
            this._vertexProgramShader = new VertexShader_1.VertexShader();
            this.setPrecision("mediump");
            this._drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
            this._programBuilt = false;
            this._invalidProgram = false;
            Program3D.UNREGISTERED_PROGRAMS.push(this);
        }
        get dataLength() {
            return this._dataLength;
        }
        set dataLength(value) {
            this._dataLength = value;
        }
        setPrecision(value) {
            this._fragmentProgramShader.precision = "precision " + value + " float;";
        }
        get fragmentShader() {
            return this._fragmentProgramShader;
        }
        get vertexShader() {
            return this._vertexProgramShader;
        }
        static getProgram(name) {
            return Program3D.PROGRAMS[name];
        }
        static registerPrograms(gl) {
            while (Program3D.UNREGISTERED_PROGRAMS.length) {
                var program = Program3D.UNREGISTERED_PROGRAMS.shift();
                var programBuilt = program.buildProgram(gl);
                if (!programBuilt) {
                    Program3D.UNREGISTERED_PROGRAMS.push(program);
                }
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
        buildProgram(context) {
            var error;
            if (!this._name) {
                error = new Error_1.Error("Program3D does not have a valid name set.");
                return false;
            }
            if (this._dataLength <= 0) {
                error = new Error_1.Error("Program3D does not have a vertice count set.");
                return false;
            }
            this.vertexShader.buildShader(context);
            this.fragmentShader.buildShader(context);
            if (!this.vertexShader.shaderValid) {
                error = new Error_1.Error("Program3D " + this.name + " could not build its vertex shader");
                this._invalidProgram = true;
                return false;
            }
            if (!this.fragmentShader.shaderValid) {
                error = new Error_1.Error("Program3D " + this.name + " could not build its fragment shader");
                this._invalidProgram = true;
                return false;
            }
            this._program = Program3D.createProgram(context, this.vertexShader.shader, this.fragmentShader.shader);
            if (!this._program) {
                error = new Error_1.Error("Program3D " + this.name + " could not create a valid program");
                this._invalidProgram = true;
                return false;
            }
            this.vertexShader.getLocations(context, this._program);
            this.fragmentShader.getLocations(context, this._program);
            this.vertexShader.dataLength = this._dataLength;
            this.fragmentShader.dataLength = this._dataLength;
            return true;
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
            this.vertexShader.prepareForDraw();
            this.fragmentShader.prepareForDraw();
            var offset = 0;
            this._bindedContext.drawArrays(this._drawType, offset, this._dataLength * this.vertexShader.vertexCount);
            this._bindedContext = null;
            this.vertexShader.drawingContext = null;
            this.fragmentShader.drawingContext = null;
        }
        bind(context) {
            if (this._invalidProgram) {
                return;
            }
            this._bindedContext = context;
            context.useProgram(this._program);
            this.vertexShader.drawingContext = context;
            this.fragmentShader.drawingContext = context;
        }
    }
    Program3D.PRECISION_MEDIUM = "mediump";
    Program3D.PROGRAMS = {};
    Program3D.UNREGISTERED_PROGRAMS = [];
    exports.Program3D = Program3D;
});
//# sourceMappingURL=Program3D.js.map