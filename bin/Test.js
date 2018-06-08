define(["require", "exports", "flash/display/Stage", "flash/display/StageAlign", "flash/display/StageScaleMode", "flash/display3D/Program3D", "flash/display3D/Context3DVertexBufferFormat", "SpriteTest", "flash/display3D/Context3DDrawTypes", "SpriteTestColor", "SpriteMatrixtest"], function (require, exports, Stage_1, StageAlign_1, StageScaleMode_1, Program3D_1, Context3DVertexBufferFormat_1, SpriteTest_1, Context3DDrawTypes_1, SpriteTestColor_1, SpriteMatrixtest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test extends Stage_1.Stage {
        //private loader:Loader;
        constructor() {
            super();
            this.handleComplete = (event) => {
                /*
                var program:Program3D = new Program3D();
                program.name = "texture_program_nomatrix_test";
                program.addAttributeToVertex("a_position", Context3DVertexBufferFormat.VEC2, 2) // not sure about size
                program.addAttributeToVertex("a_texCoord", Context3DVertexBufferFormat.VEC2, 2) // not sure about size
                program.addVaryingToVertex("v_texCoord", Context3DVertexBufferFormat.VEC2);
                program.addUniformToVertex("u_resolution", Context3DVertexBufferFormat.VEC2);
                program.addToVertexMain("vec2 zeroToOne = a_position / u_resolution;");
                program.addToVertexMain("vec2 zeroToTwo = zeroToOne * 2.0;");
                program.addToVertexMain("vec2 clipSpace = zeroToTwo - 1.0;");
                program.addToVertexMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);");
                program.addToVertexMain("v_texCoord = a_texCoord;");
                program.addUniformToFragment("u_image", Context3DVertexBufferFormat.SAMPLER2D);
                program.addVaryingToFragment("v_texCoord", Context3DVertexBufferFormat.VEC2);
                program.addToFragmentMain("gl_FragColor = texture2D(u_image, v_texCoord);");
        
                var bitmap:Bitmap = <Bitmap> this.loader.content;
                var data:BitmapData = bitmap.bitmapData;
        
                this.addChild(bitmap);
        
                //this._context3D.registerTexture(this.loader.content);
        
        */
                /*
              void main()
              {
                 gl_FragColor = texture2D(u_image, v_texCoord);
              }
              </script>
        
                */
            };
            this.frameRate = 3;
            this.align = StageAlign_1.StageAlign.TOP_LEFT;
            this.scaleMode = StageScaleMode_1.StageScaleMode.NO_SCALE;
            this.color = 0xAAFF3333;
            this.createContextById(0);
            var program = new Program3D_1.Program3D();
            program.addAttributeToVertex("aSquareVertexPosition", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC3, 3);
            program.addToVertexMain("gl_Position = vec4(aSquareVertexPosition, 1.0);");
            program.addToFragmentMain("gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);");
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLE_STRIP;
            program.name = "simple_square_test";
            var testsprite = new SpriteTest_1.SpriteTest();
            this.addChild(testsprite);
            var program = new Program3D_1.Program3D();
            program.addAttributeToVertex("aSquareVertexPosition", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC3, 3);
            program.addUniformToFragment("uPixelColor", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.addToVertexMain("gl_Position = vec4(aSquareVertexPosition, 1.0);");
            program.addToFragmentMain("gl_FragColor = uPixelColor;");
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLE_STRIP;
            program.name = "simple_square_test_color";
            var testspritecolor = new SpriteTestColor_1.SpriteTestColor();
            this.addChild(testspritecolor);
            var program = new Program3D_1.Program3D();
            program.addAttributeToVertex("aSquareVertexPosition", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC3, 3);
            program.addUniformToVertex("uModelTransform", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT4);
            program.addUniformToFragment("uPixelColor", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.addToVertexMain("gl_Position = uModelTransform * vec4(aSquareVertexPosition, 1.0);");
            program.addToFragmentMain("gl_FragColor = uPixelColor;");
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLE_STRIP;
            program.name = "simple_square_test_matrix4";
            var spritematrix = new SpriteMatrixtest_1.SpriteMatrixtest();
            this.addChild(spritematrix);
            //program.buildProgram(this._context3D._);
            //this._context3D.setCanvas(-1, -1);
            //this.loader = new Loader();
            //this.loader.contentLoaderInfo.addEventListener(Event.COMPLETE, this.handleComplete);
            //this.loader.load(new URLRequest("20170818_120214.jpg"));
            //this.loader.contentLoaderInfo.addEventListener(ProgressEvent.pr, this.handleComplete);
            // this._context3D = Stage3D.createContext();
            //this._context3D.setCanvas(400, 400);
            //this._context3D = Stage3D.assignContextByid(1);
            // this._context3D.setCanvas(null, 400, 400, 0xAA00FF00);
            //this._context3D = Stage3D.assignContextByid(2);
            //this._context3D.setCanvas(null, 200, 200, 0xFF00FFFF);
            // assign different context
            // set context size + color
            // create a context if none exist
        }
    }
    exports.Test = Test;
});
//# sourceMappingURL=Test.js.map