define(["require", "exports", "flash/display/DisplayObject"], function (require, exports, DisplayObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Bitmap extends DisplayObject_1.DisplayObject {
        constructor(bitmapData) {
            super();
            this.bitmapData = bitmapData;
        }
        get bitmapData() {
            return this._bitmapData;
        }
        set bitmapData(value) {
            if (!value) {
                return;
            }
            this._bitmapData = value;
        }
    }
    exports.Bitmap = Bitmap;
});
//# sourceMappingURL=Bitmap.js.map