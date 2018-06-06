define(["require", "exports", "flash/system/BaseObject", "flash/webgl/ObjectUtils", "flash/geom/Color", "./Program3D", "flash/geom/Rectangle", "flash/display3D/Context3DVertexBufferFormat"], function (require, exports, BaseObject_1, ObjectUtils_1, Color_1, Program3D_1, Rectangle_1, Context3DVertexBufferFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._color = new Color_1.Color(0x00FFFFFF);
        }
        render(container) {
            this.resize();
            if (!this._programTest) {
                this._programTest = new Program3D_1.Program3D();
                this._programTest.name = "triangle_program_flat_color_resolution";
                this._programTest.addAttributeToVertex("a_position", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4, 2);
                this._programTest.addUniformToVertex("u_resolution", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
                this._programTest.addToVertexMain("vec2 zeroToOne = a_position.xy / u_resolution;");
                this._programTest.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
                this._programTest.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
                this._programTest.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
                this._programTest.addUniformToFragment("u_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
                this._programTest.addToFragmentMain("gl_FragColor = u_color;");
                /*
                // simple flat color program
                this._programTest.name = "triangle_program_flat_color_nomatrix";
                this._programTest.addAttributeToVertex("a_position", Program3D.VEC4, 2);
                this._programTest.addToVertexMain("gl_Position = a_position;");
                this._programTest.addToFragmentMain("gl_FragColor = vec4(1, 0, 0.5, 1);");
                */
            }
            if (!this._programTest.ready) {
                this._programTest.buildProgram(this._gl);
            }
            if (this._programTest.ready) {
                this._programTest.bind(this._gl);
                var rect = new Rectangle_1.Rectangle(300, 150, 178, 95);
                var rect2 = new Rectangle_1.Rectangle(150, 300, 178, 95);
                var vertices1 = rect.vertices;
                var vertices2 = rect2.vertices;
                var vertices = new Float32Array(vertices1.length + vertices2.length);
                vertices.set(vertices1, 0);
                vertices.set(vertices2, vertices1.length);
                this._programTest.updateVertexData(this._gl, 'a_position', vertices);
                this._programTest.updateVertexUniform(this._gl, "u_resolution", [this._canvas.width, this._canvas.height]);
                this._programTest.updateFragmentUniform(this._gl, "u_color", [0.5, 0.2, 0.2, 0.5]);
                /*
                // simple flat color program
                var positions:Float32Array = new Float32Array(12)
                positions[0] = 0;
                positions[1] = 0;
                positions[2] = -1;
                positions[3] = 0;
                positions[4] = 0;
                positions[5] = 1;
                positions[6] = 0;
                positions[7] = 0;
                positions[8] = 1;
                positions[9] = 0;
                positions[10] = 0;
                positions[11] = 1;
                this._programTest.updateVertexData(this._gl, 'a_position', positions);
                */
                this._programTest.present(this._gl);
            }
        }
        resize() {
            if (!this._gl) {
                return;
            }
            var displayWidth = this._canvas.clientWidth;
            var displayHeight = this._canvas.clientHeight;
            if (this._canvas.width != displayWidth || this._canvas.height != displayHeight) {
                this._canvas.width = displayWidth;
                this._canvas.height = displayHeight;
                this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
            }
            this._gl.clearColor(this._color.absoluteRed, this._color.absoluteGreen, this._color.absoluteBlue, this._color.absoluteAlpha);
            this._gl.clear(this._gl.COLOR_BUFFER_BIT);
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
        validate() {
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "attachedstagerender", this._context3Did);
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "context3did", this._contextId);
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "context3dname", this._contextId);
            this._gl = this._canvas.getContext("webgl");
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
        set canvas(value) {
            if (this._canvas) {
                return;
            }
            this._canvas = value;
            this._context3Did = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "context3did");
            this._context3DName = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "context3dname");
            if (!this._context3Did) {
                this._context3Did = this._contextId;
            }
        }
    }
    exports.Context3D = Context3D;
});
//# sourceMappingURL=Context3D.js.map