define(["require", "exports", "flash/system/BaseObject", "flash/geom/Rectangle", "flash/display3D/textures/Texture"], function (require, exports, BaseObject_1, Rectangle_1, Texture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextureAtlas extends BaseObject_1.BaseObject {
        constructor(gl, size) {
            super();
            this._gl = gl;
            this._size = size / 2;
            this.show(this._size);
            var canvas = document.createElement("canvas");
            canvas.width = this._size;
            canvas.height = this._size;
            this._canvas2d = canvas.getContext('2d');
            this._freeareas = [];
            this._occupiedareas = [];
            var area = new Rectangle_1.Rectangle(0, 0, this._size, this._size);
            this._freeareas.push(area);
            this._texture = new Texture_1.Texture();
            var texturedata = new Uint8Array(this._size * this._size * 4);
            var gltexture = this._gl.createTexture();
            this._texture.setData(gltexture);
            this._gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
            this._gl.bindTexture(this._gl.TEXTURE_2D, gltexture);
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._size, this._size, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata);
            this._gl.generateMipmap(this._gl.TEXTURE_2D);
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