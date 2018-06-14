define(["require", "exports", "flash/display/Stage", "flash/display/StageAlign", "flash/display/StageScaleMode", "flash/display3D/Program3D", "flash/display3D/Context3DVertexBufferFormat", "flash/display3D/Context3DDrawTypes", "SpriteProgramTest"], function (require, exports, Stage_1, StageAlign_1, StageScaleMode_1, Program3D_1, Context3DVertexBufferFormat_1, Context3DDrawTypes_1, SpriteProgramTest_1) {
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
            this.frameRate = 1;
            this.align = StageAlign_1.StageAlign.TOP_LEFT;
            this.scaleMode = StageScaleMode_1.StageScaleMode.NO_SCALE;
            this.color = 0xAAFF3333;
            this.createContextById(0);
            /*
            var indexeddata:IndexedVertice = new IndexedVertice(9, ArrayTypes.FLOAT64ARRAY, 3, 10);
            indexeddata.setData(0, 78.543);
            indexeddata.setData(1, 12.0);
            indexeddata.setData(2, 15.0);
            indexeddata.setData(3, 6.0);
            indexeddata.setData(4, 6.0);
            indexeddata.setData(5, 6.0);
            indexeddata.setData(6, 6.0);
            indexeddata.setData(7, 3.0);
            indexeddata.setData(8, 6.0);*/
            /*var program:Program3D = new Program3D();
            program.vertexShader.addAttribute("aSquareVertexPosition", Context3DVertexBufferFormat.VEC3);
            program.vertexShader.addToMain("gl_Position = vec4(aSquareVertexPosition, 1.0);");
            program.fragmentShader.addToMain("gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);");
            program.drawType = Context3DDrawTypes.TRIANGLE_STRIP
            program.dataLength = 4; // < define
            program.name = "simple_square_test";
            var testsprite:SpriteTest = new SpriteTest(-0.5);
            this.addChild(testsprite);
            var testsprite:SpriteTest = new SpriteTest(-0.2);
            this.addChild(testsprite);*/
            /* var program:Program3D = new Program3D();
             program.vertexShader.addAttribute("aSquareVertexPosition", Context3DVertexBufferFormat.VEC2);
             program.vertexShader.addToMain("gl_Position = vec4(aSquareVertexPosition, 0.0, 1.0);");
             program.fragmentShader.addToMain("gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);");
             program.dataLength = 6;
             program.drawType = Context3DDrawTypes.TRIANGLES;
             program.name = "simple_square_test_triangles";
             var testtriangles:SpriteTestTriangle = new SpriteTestTriangle(-0.3);
             this.addChild(testtriangles);
             var testtriangles:SpriteTestTriangle = new SpriteTestTriangle(0.1);
             this.addChild(testtriangles);*/
            /*var program:Program3D = new Program3D();
            program.vertexShader.addAttribute("aSquareVertexPosition", Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("uTriangleColor", Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addAttribute("a_translation", Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addVarying("uPixelColor", Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addUniform("u_resolution", Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addToMain("vec2 position = aSquareVertexPosition + u_translation;");
            program.vertexShader.addToMain("vec2 zeroToOne = position / u_resolution;");
            program.vertexShader.addToMain("vec2 zeroToTwo = zeroToOne * 2.0;");
            program.vertexShader.addToMain("vec2 clipSpace = zeroToTwo - 1.0;");
            program.vertexShader.addToMain("gl_Position = vec4(clipSpace * vec2(1, -1), 0.0, 1.0);");
            program.vertexShader.addToMain("uPixelColor = uTriangleColor;");
            program.dataLength = 6; // CALCULATE LENGTH OF DATA
            program.fragmentShader.addVarying("uPixelColor", Context3DVertexBufferFormat.VEC4);
            program.fragmentShader.addToMain("gl_FragColor = uPixelColor;");
            program.drawType = Context3DDrawTypes.TRIANGLES;
            program.name = "simple_square_test_color";
            var testspritecolor:SpriteTestColor = new SpriteTestColor([Math.random(), Math.random(), Math.random(), 1.0]);
            this.addChild(testspritecolor);
            testspritecolor.x = 0//Math.random() * this.stageWidth;
            testspritecolor.y = Math.random() * (this.stageHeight - 100);
            this.show(this.stageHeight);
            Tween.to(testspritecolor, "x", Linear.easeIn, testspritecolor.x, testspritecolor.x + 600, 3000, false);*/
            var program = new Program3D_1.Program3D(18, "simple_projection");
            program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addUniform("a_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addUniform("a_scale", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addUniform("u_projection", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addUniform("u_translation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addUniform("u_rotation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addToMain("v_color = a_color;");
            program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
            program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);");
            program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.fragmentShader.addToMain("gl_FragColor = v_color;");
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
            var sprite = new SpriteProgramTest_1.SpriteProgramTest();
            this.addChild(sprite);
            /*
            var testspritecolor:SpriteTestColor = new SpriteTestColor(200, [0.0, 0.6, 1.0, 1.0]);
            this.addChild(testspritecolor);*/
            // points shape in pixel
            // vec2 = position
            // vec2 = scale
            // float = angle
            // matrix3 = object calculation
            // p: vertex
            // p: fragment
            // p: set vertex values
            // p: set fragment values
            // p: drawing
            /*
            */
            //program.addAttributeToVertex("aSquareVertexPosition", Context3DVertexBufferFormat.VEC3, 3);
            //program.addUniformToFragment("uPixelColor", Context3DVertexBufferFormat.VEC4);
            //program.addToVertexMain("gl_Position = vec4(aSquareVertexPosition, 1.0);");
            //program.addToFragmentMain("gl_FragColor = uPixelColor;");
            //program.vertexShader.addUniform("uPixelColor", Context3DVertexBufferFormat.VEC4)
            /*
             var testspritecolor:SpriteTestColor = new SpriteTestColor(0.5, [1.0, 0.3, 0.4, 1.0]);
             this.addChild(testspritecolor);
     
             var testspritecolor:SpriteTestColor = new SpriteTestColor(-0.5, [0.5, 0.8, 0.4, 1.0]);
             this.addChild(testspritecolor);
     
             var testspritecolor:SpriteTestColor = new SpriteTestColor(-0.3, [0.5, 0.8, 1, 1.0]);
             this.addChild(testspritecolor);*/
            /*
            var program:Program3D = new Program3D();
            program.addAttributeToVertex("aSquareVertexPosition", Context3DVertexBufferFormat.VEC3, 3);
            program.addUniformToVertex("uModelTransform", Context3DVertexBufferFormat.MAT4);
            program.addUniformToFragment("uPixelColor", Context3DVertexBufferFormat.VEC4);
            program.addToVertexMain("gl_Position = uModelTransform * vec4(aSquareVertexPosition, 1.0);");
            program.addToFragmentMain("gl_FragColor = uPixelColor;");
            program.drawType = Context3DDrawTypes.TRIANGLE_STRIP
            program.name = "simple_square_test_matrix4";
    
    
            var spritematrix:SpriteMatrixtest = new SpriteMatrixtest(0.25, 0.25);
            this.addChild(spritematrix);
    
            var spritematrix:SpriteMatrixtest = new SpriteMatrixtest(0.5, 0.75);
            this.addChild(spritematrix);*/
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