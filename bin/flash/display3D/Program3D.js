define(["require", "exports", "flash/system/BaseObject", "flash/Error", "flash/display3D/Context3DDrawTypes", "flash/webgl/VertexShader", "flash/webgl/FragmentShader"], function (require, exports, BaseObject_1, Error_1, Context3DDrawTypes_1, VertexShader_1, FragmentShader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Program3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._verticeCount = 0;
            this._fragmentProgramShader = new FragmentShader_1.FragmentShader();
            this._vertexProgramShader = new VertexShader_1.VertexShader();
            this.setPrecision("mediump");
            this._drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
            this._programBuilt = false;
            this._invalidProgram = false;
            Program3D.UNREGISTERED_PROGRAMS.push(this);
        }
        get verticeCount() {
            return this._verticeCount;
        }
        set verticeCount(value) {
            this._verticeCount = value;
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
        buildProgram(context) {
            this.vertexShader.buildShader(context);
            this.fragmentShader.buildShader(context);
            if (!this.vertexShader.shaderValid || !this.fragmentShader.shaderValid) {
                this._invalidProgram = true;
                return;
            }
            this._program = Program3D.createProgram(context, this.vertexShader.shader, this.fragmentShader.shader);
            if (!this._program) {
                this._invalidProgram = true;
                return;
            }
            this.vertexShader.getLocations(context, this._program);
            this.fragmentShader.getLocations(context, this._program);
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
            this._bindedContext.drawArrays(this._drawType, offset, this._verticeCount * this.vertexShader.vertexCount);
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