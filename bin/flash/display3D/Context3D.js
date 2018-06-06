define(["require", "exports", "flash/system/BaseObject", "flash/webgl/ObjectUtils", "flash/geom/Color", "./Program3D", "flash/geom/Rectangle", "../webgl/shadertypes/VerticeBuffer", "../geom/Polygon"], function (require, exports, BaseObject_1, ObjectUtils_1, Color_1, Program3D_1, Rectangle_1, VerticeBuffer_1, Polygon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
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
        render(container) {
            this.resize();
            if (Program3D_1.Program3D.hasUnregisteredPrograms) {
                Program3D_1.Program3D.registerPrograms(this._gl);
            }
            if (container.numChildren) {
                if (!this._gl) {
                    return;
                }
                var child = container.getChildAt(0);
                var program = Program3D_1.Program3D.getProgram("texture_program_nomatrix_test");
                if (program) {
                    program.use(this._gl);
                    program.registerTexture(this._gl, child.bitmapData);
                    var rect = new Rectangle_1.Rectangle(300, 150, 178, 95);
                    //this.reveal(rect.vertices);
                    var vbuffer = new VerticeBuffer_1.VerticeBuffer();
                    vbuffer.addVertices(rect);
                    program.updateVertexData(this._gl, 'a_position', vbuffer);
                    var uvs = new Polygon_1.Polygon();
                    //this.reveal(uvs.vertices);
                    var vbuffer = new VerticeBuffer_1.VerticeBuffer();
                    vbuffer.addVertices(uvs);
                    program.updateVertexData(this._gl, 'a_texCoord', vbuffer);
                    program.updateVertexUniform(this._gl, "u_resolution", [this._canvas.width, this._canvas.height]);
                    //program.updateFragmentUniform(this._gl, "u_color", [0.5, 0.2, 0.2, 0.5]);
                    //program.present(this._gl);
                    /*var positions:Float32Array = new Float32Array(12)
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
                    positions[11] = 1;   */
                }
            }
            if (!this._programTest) {
                /*this._programTest = new Program3D();
                this._programTest.name = "triangle_program_flat_color_resolution";
                this._programTest.addAttributeToVertex("a_position", Context3DVertexBufferFormat.VEC4, 2);
                this._programTest.addUniformToVertex("u_resolution", Context3DVertexBufferFormat.VEC2);
                this._programTest.addToVertexMain("vec2 zeroToOne = a_position.xy / u_resolution;");
                this._programTest.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
                this._programTest.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
                this._programTest.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
                this._programTest.addUniformToFragment("u_color", Context3DVertexBufferFormat.VEC4);
                this._programTest.addToFragmentMain("gl_FragColor = u_color;");   */
                /*
                // simple flat color program
                this._programTest.name = "triangle_program_flat_color_nomatrix";
                this._programTest.addAttributeToVertex("a_position", Program3D.VEC4, 2);
                this._programTest.addToVertexMain("gl_Position = a_position;");
                this._programTest.addToFragmentMain("gl_FragColor = vec4(1, 0, 0.5, 1);");
                */
            }
            //if(!this._programTest.ready)
            //{
            /*this._programTest.buildProgram(this._gl);*/
            //}
            //if(this._programTest.ready)
            // {
            //this._programTest.bind(this._gl);
            //
            //var rect2:Rectangle = new Rectangle(150, 300, 178, 95);
            /*
            var vertices1:Float32Array = rect.vertices;
            var vertices2:Float32Array = rect2.vertices;
            var vertices:Float32Array = new Float32Array(vertices1.length + vertices2.length)
            vertices.set(vertices1, 0)
            vertices.set(vertices2, vertices1.length) */
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
            //this._programTest.present(this._gl);
            //}
            /*this.drawcount++;
            if(this.drawcount == 2000)
            {
                this.recttest.width = 400;
            }*/
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