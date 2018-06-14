define(["require", "exports", "flash/system/BaseObject", "flash/webgl/ObjectUtils", "flash/geom/Color", "./Program3D", "flash/display3D/Context3DVertexBufferFormat", "../webgl/geom/IndexedVertice", "../geom/Matrix"], function (require, exports, BaseObject_1, ObjectUtils_1, Color_1, Program3D_1, Context3DVertexBufferFormat_1, IndexedVertice_1, Matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._worldprojection = new Matrix_1.Matrix();
            //this._worldprojection.translate(-1, 1);
            //this._worldprojection.scale(1, -1);
            this._resolution = new IndexedVertice_1.IndexedVertice(2, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
        }
        get resolution() {
            return this._resolution;
        }
        get canvasWidth() {
            return this._canvasWidth;
        }
        get canvasHeight() {
            return this._canvasHeight;
        }
        set stage(value) {
            this._stage = value;
        }
        resize() {
            this._canvasWidth = this._canvas.clientWidth;
            this._canvasHeight = this._canvas.clientHeight;
            this._worldprojection.setProjection(this._canvas.width, this._canvas.height);
            this._resolution.setData(0, this._canvas.width);
            this._resolution.setData(1, this._canvas.height);
            if (!this._gl) {
                return;
            }
            if (this._canvas.width != this._canvasWidth || this._canvas.height != this._canvasHeight) {
                this._canvas.width = this._canvasWidth;
                this._canvas.height = this._canvasHeight;
                this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
            }
            this._gl.clearColor(this._color.absoluteRed, this._color.absoluteGreen, this._color.absoluteBlue, this._color.absoluteAlpha);
            this._gl.clear(this._gl.COLOR_BUFFER_BIT);
            //this._gl.enable(this._gl.DEPTH_TEST); 
        }
        set color(value) {
            this._color = value;
        }
        initRendering() {
            this.resize();
        }
        isValid() {
            if (this._gl) {
                return true;
            }
            return false;
        }
        validate() {
            this._gl = this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl");
            this._canvas.style.backgroundColor = "transparent";
        }
        set canvas(value) {
            if (this._canvas) {
                return;
            }
            this._canvas = value;
        }
        get canvas() {
            return this._canvas;
        }
        get currentProgram() {
            return null;
        }
        bind(program) {
            if (!this._gl) {
                return;
            }
            if (!program.ready) {
                return;
            }
            if (this._currentProgram) {
                if (this._currentProgram != program) {
                    this._currentProgram.flush();
                }
            }
            this._currentProgram = program;
            program.resolution = this._resolution;
            program.worldProjection = this._worldprojection;
            program.bind(this._gl);
        }
        render(elapsedTime) {
            this.resize();
            if (Program3D_1.Program3D.hasUnregisteredPrograms) {
                Program3D_1.Program3D.registerPrograms(this._gl);
            }
            if (this._stage && this._stage.numChildren) {
                var children = this._stage.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].present(this);
                }
            }
            if (this._currentProgram) {
                this._currentProgram.flush();
            }
            this._currentProgram = null;
        }
        renderGraphic(graphic) {
            this.show('rendering: ' + graphic);
        }
        release() {
            delete this._canvas.dataset.attachedstagerender;
        }
        set defaultContext(value) {
            this._defaultContext = value;
        }
        get defaultContext() {
            return this._defaultContext;
        }
        setCanvas(canvasWidth = -1, canvasHeight = -1, canvasColor = -1) {
            if (this._canvas) {
                if (canvasWidth > 0) {
                    this._canvas.width = canvasWidth;
                }
                if (canvasHeight > 0) {
                    this._canvas.height = canvasHeight;
                }
                if (canvasColor >= 0) {
                    this._color = new Color_1.Color(canvasColor);
                }
            }
        }
        set contextId(value) {
            this._contextId = value;
        }
        get context3Did() {
            return this._context3Did;
        }
        get context3DName() {
            return this._context3DName;
        }
        get hasContextAvailable() {
            var attachedStage = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "attachedstagerender");
            var gl = this._canvas.getContext("webgl");
            if (!gl) {
                return false;
            }
            if (attachedStage) {
                return false;
            }
            return true;
        }
    }
    exports.Context3D = Context3D;
});
//# sourceMappingURL=Context3D.js.map