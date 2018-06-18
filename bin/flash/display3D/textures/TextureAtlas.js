define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextureAtlas extends BaseObject_1.BaseObject {
        constructor(gl, size, temp = false) {
            super();
            this._gl = gl;
            this._size = size;
            this._temp = temp;
            //this.show("first atlas")
            /*var canvas:HTMLCanvasElement = document.createElement("canvas");
            canvas.width = this._size;
            canvas.height = this._size;
            this._canvas2d = canvas.getContext('2d');*/
            this._freeareas = [];
            this._occupiedareas = [];
            /*var area:Rectangle = new Rectangle(0, 0, this._size, this._size);
            this._freeareas.push(area);
            this._texture = new Texture();*/
            var gltexture = this._gl.createTexture();
            this._gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
            //this._gl.activeTexture(textureid);
            this._gl.bindTexture(this._gl.TEXTURE_2D, gltexture);
            if (this._temp) {
                var texturedata = new Uint8Array(16);
                this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, 2, 2, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata);
            }
            else {
                var texturedata = new Uint8Array(this._size * this._size * 4);
                this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._size, this._size, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata);
            }
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST);
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST);
            this._gl.generateMipmap(this._gl.TEXTURE_2D);
            //this._gl.uniform1i(u_image0Location, 0);
            //this.show("atlas loaded")
        }
        set id(value) {
            this._id = value;
        }
        get id() {
            return this._id;
        }
    }
    exports.TextureAtlas = TextureAtlas;
});
//# sourceMappingURL=TextureAtlas.js.map