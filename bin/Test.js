define(["require", "exports", "flash/display/Stage", "flash/display/StageAlign", "flash/display/StageScaleMode"], function (require, exports, Stage_1, StageAlign_1, StageScaleMode_1) {
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
            this.align = StageAlign_1.StageAlign.TOP_LEFT;
            this.scaleMode = StageScaleMode_1.StageScaleMode.NO_SCALE;
            this.color = 0x99333333;
            this.createContextById(0);
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