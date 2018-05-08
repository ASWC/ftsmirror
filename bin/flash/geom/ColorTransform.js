define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ColorTransform extends BaseObject_1.BaseObject {
        constructor(redMultiplier = 1.0, greenMultiplier = 1.0, blueMultiplier = 1.0, alphaMultiplier = 1.0, redOffset = 0, greenOffset = 0, blueOffset = 0, alphaOffset = 0) {
            super();
            this.redMultiplier = redMultiplier;
            this.greenMultiplier = greenMultiplier;
            this.blueMultiplier = blueMultiplier;
            this.alphaMultiplier = alphaMultiplier;
            this.redOffset = redOffset;
            this.greenOffset = greenOffset;
            this.blueOffset = blueOffset;
            this.alphaOffset = alphaOffset;
            this._color = 0;
        }
        get color() {
            var red = this.correctColor((255 * this.redMultiplier) + this.redOffset);
            var green = this.correctColor((255 * this.greenMultiplier) + this.greenOffset);
            var blue = this.correctColor((255 * this.blueMultiplier) + this.blueOffset);
            var alpha = this.correctColor((255 * this.alphaMultiplier) + this.alphaOffset);
            this._color = red << 24 | green << 16 | blue << 8 | alpha;
            return this._color;
        }
        correctColor(value) {
            if (value < 0) {
                return 0;
            }
            if (value > 255) {
                return 255;
            }
            return value;
        }
        set color(newColor) {
            this._color = newColor;
        }
        concat(second) {
            this.alphaMultiplier = (this.alphaMultiplier + second.alphaMultiplier) / 2;
            this.greenMultiplier = (this.greenMultiplier + second.greenMultiplier) / 2;
            this.blueMultiplier = (this.blueMultiplier + second.blueMultiplier) / 2;
            this.alphaMultiplier = (this.alphaMultiplier + second.alphaMultiplier) / 2;
            this.redOffset = (this.redOffset + second.redOffset) / 2;
            this.greenOffset = (this.greenOffset + second.greenOffset) / 2;
            this.blueOffset = (this.blueOffset + second.blueOffset) / 2;
            this.alphaOffset = (this.alphaOffset + second.alphaOffset) / 2;
        }
    }
    exports.ColorTransform = ColorTransform;
});
//# sourceMappingURL=ColorTransform.js.map