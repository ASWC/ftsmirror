define(["require", "exports", "flash/display/Stage", "flash/display/StageAlign", "flash/display/StageScaleMode", "flash/display/Loader", "flash/events/Event", "flash/net/URLRequest", "flash/display3D/Program3D", "flash/display3D/Context3DVertexBufferFormat", "SpriteTest", "flash/display3D/Context3DDrawTypes"], function (require, exports, Stage_1, StageAlign_1, StageScaleMode_1, Loader_1, Event_1, URLRequest_1, Program3D_1, Context3DVertexBufferFormat_1, SpriteTest_1, Context3DDrawTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test extends Stage_1.Stage {
        constructor() {
            super();
            this.handleComplete = (event) => {
                this.show("picture loaded");
                // gl.bindTexture(gl.TEXTURE_2D, texture);
                // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
                // gl.generateMipmap(gl.TEXTURE_2D);
                var bitmap = this.loader.content;
                var test = new SpriteTest_1.SpriteTest(500, 400, 2.4, bitmap);
                this.addChild(test);
                /*
        
                
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
            this.frameRate = 60;
            this.align = StageAlign_1.StageAlign.TOP_LEFT;
            this.scaleMode = StageScaleMode_1.StageScaleMode.NO_SCALE;
            this.color = 0xAAFF3333;
            this.createContextById(0);
            /*var program:Program3D = new Program3D(18, "simple_projection");
            program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addToMain("v_color = a_color;");
            program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
            program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);");
            program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
            program.fragmentShader.addToMain("gl_FragColor = v_color;");
            program.drawType = Context3DDrawTypes.TRIANGLES;
            var sprite:SpriteProgramTest = new SpriteProgramTest(200, 200, 1);
            this.addChild(sprite);
            var sprite:SpriteProgramTest = new SpriteProgramTest(250, 250, 3);
            this.addChild(sprite);
            var sprite:SpriteProgramTest = new SpriteProgramTest(300, 300, 2.4);
            this.addChild(sprite);*/
            var program = new Program3D_1.Program3D(6, "simple_texture");
            program.vertexShader.addVarying("v_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addToMain("v_texcoord = a_texcoord;");
            program.vertexShader.addToMain("v_color = a_color;");
            program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
            program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);");
            program.fragmentShader.addUniform("u_texture", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLER2D);
            program.fragmentShader.addVarying("v_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.fragmentShader.addToMain("gl_FragColor = texture2D(u_texture, v_texcoord);");
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
            this.loader = new Loader_1.Loader();
            this.loader.contentLoaderInfo.addEventListener(Event_1.Event.COMPLETE, this.handleComplete);
            this.loader.load(new URLRequest_1.URLRequest("cubetexture.png"));
        }
    }
    exports.Test = Test;
});
//# sourceMappingURL=Test.js.map