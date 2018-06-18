define(["require", "exports", "flash/display3D/textures/TextureBase"], function (require, exports, TextureBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Texture extends TextureBase_1.TextureBase {
        constructor() {
            super();
            this._uploaded = false;
        }
        setData(value) {
            this._glTexture = value;
        }
        get uploaded() {
            return this._uploaded;
        }
        set nativeHeight(value) {
            this._nativeHeight = value;
        }
        set transparent(value) {
            this._transparent = value;
        }
        set fillColor(value) {
            this._fillColor = value;
        }
        set source(value) {
            this._source = value;
        }
        get source() {
            return this._source;
        }
        set nativeWidth(value) {
            this._nativeWidth = value;
        }
    }
    exports.Texture = Texture;
});
//# sourceMappingURL=Texture.js.map