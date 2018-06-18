define(["require", "exports", "flash/system/BaseObject", "flash/display3D/textures/Texture", "../display3D/textures/AtlasManager"], function (require, exports, BaseObject_1, Texture_1, AtlasManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BitmapData extends BaseObject_1.BaseObject {
        constructor(width, height, transparent, fillColor) {
            super();
            this._texture = new Texture_1.Texture();
            this._texture.nativeWidth = width;
            this._texture.nativeHeight = height;
            this._texture.transparent = transparent;
            this._texture.fillColor = fillColor;
            this._width = width;
            this._height = height;
            this._transparent = transparent;
            this._fillColor = fillColor;
        }
        get texture() {
            return this._texture;
        }
        setImage(image) {
            this._nativeImage = image;
            this._texture.source = image;
        }
        static setTexture(image) {
            AtlasManager_1.AtlasManager.addImage(image);
            var bitmapData = new BitmapData(image.naturalWidth, image.naturalHeight, true, 0xFFFFFFFF);
            bitmapData.setImage(image);
            return bitmapData;
        }
        static getNativeImage(data) {
            if (!data) {
                return null;
            }
            if (!data._nativeImage) {
                return null;
            }
            return data._nativeImage;
        }
    }
    exports.BitmapData = BitmapData;
});
//# sourceMappingURL=BitmapData.js.map