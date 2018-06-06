define(["require", "exports", "../system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BitmapData extends BaseObject_1.BaseObject {
        setImage(image) {
            this._nativeImage = image;
        }
        static setTexture(image) {
            var bitmapData = new BitmapData();
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