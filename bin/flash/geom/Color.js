define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Color extends BaseObject_1.BaseObject {
        constructor(color = 0xFFFFFFFF) {
            super();
            this.color = color;
        }
        set color(value) {
            this._color = value;
            this._alpha = (this._color >> 24) & 0xFF;
            this._red = (this._color >> 16) & 0xFF;
            this._green = (this._color >> 8) & 0xFF;
            this._blue = this._color & 0xFF;
            this._absoluteAlpha = ((this._color >> 24) & 0xFF) / 255;
            this._absoluteRed = ((this._color >> 16) & 0xFF) / 255;
            this._absoluteGreen = ((this._color >> 8) & 0xFF) / 255;
            this._absoluteBlue = (this._color & 0xFF) / 255;
        }
        get alpha() {
            return this._alpha;
        }
        get red() {
            return this._red;
        }
        get green() {
            return this._green;
        }
        get blue() {
            return this._blue;
        }
        get absoluteAlpha() {
            return this._absoluteAlpha;
        }
        get absoluteRed() {
            return this._absoluteRed;
        }
        get absoluteGreen() {
            return this._absoluteGreen;
        }
        get absoluteBlue() {
            return this._absoluteBlue;
        }
        set alpha(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 255) {
                value = 255;
            }
            this._color &= (0x00FFFFFF);
            this._color |= (value << 24);
            this._alpha = -1;
        }
        set absoluteAlpha(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 1) {
                value = 1;
            }
            value = value * 255;
            this._color &= (0x00FFFFFF);
            this._color |= (value << 24);
            this._absoluteAlpha = -1;
        }
        set red(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 255) {
                value = 255;
            }
            this._color &= (0xFF00FFFF);
            this._color |= (value << 16);
            this._red = -1;
        }
        set absoluteRed(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 1) {
                value = 1;
            }
            value = value * 255;
            this._color &= (0xFF00FFFF);
            this._color |= (value << 16);
            this.absoluteRed = -1;
        }
        set green(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 255) {
                value = 255;
            }
            this._color &= (0xFFFF00FF);
            this._color |= (value << 8);
            this._green = -1;
        }
        set absoluteGreen(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 1) {
                value = 1;
            }
            value = value * 255;
            this._color &= (0xFFFF00FF);
            this._color |= (value << 8);
            this._absoluteGreen = -1;
        }
        set blue(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 255) {
                value = 255;
            }
            this._color &= (0xFFFFFF00);
            this._color |= (value);
            this._blue = -1;
        }
        set absoluteBlue(value) {
            if (value < 0) {
                value = 0;
            }
            else if (value > 1) {
                value = 1;
            }
            value = value * 255;
            this._color &= (0xFFFFFF00);
            this._color |= (value);
            this._absoluteBlue = -1;
        }
        get color() {
            return this._color;
        }
        getAbsolutOpposite(includeAlpha = true) {
            var color;
            var ratio = 1 - (0.299 * this.red + 0.587 * this.green + 0.114 * this.blue) / 255;
            var base = 255;
            var contrast = -50;
            if (ratio < 0.5) {
                this.color = 0xFF000000;
                base = 0;
                contrast = 50;
            }
            else {
                this.color = 0xFFFFFFFF;
            }
            var value;
            value = base + (contrast * this.absoluteRed);
            this.color &= (0xFF00FFFF);
            this.color |= (value << 16);
            value = base + (contrast * this.absoluteBlue);
            this.color &= (0xFFFFFF00);
            this.color |= (value);
            value = base + (contrast * this.absoluteGreen);
            this.color &= (0xFFFF00FF);
            this.color |= (value << 8);
            if (includeAlpha) {
                value = base + (contrast * this.absoluteAlpha);
                this.color &= (0x00FFFFFF);
                this.color |= (value << 24);
            }
            return this.color;
        }
        lighten(percent) {
            if (percent < 0) {
                percent = 0;
            }
            if (percent > 1) {
                percent = 1;
            }
            var totalLighten = percent;
            var lightAlpha = this.alpha;
            var lightRed = this.red + ((255 - this.red) * totalLighten);
            var lightBlue = this.blue + ((255 - this.blue) * totalLighten);
            var lightGreen = this.green + ((255 - this.green) * totalLighten);
            return lightAlpha << 24 | lightRed << 16 | lightGreen << 8 | lightBlue;
        }
        darken(percent) {
            if (percent < 0) {
                percent = 0;
            }
            if (percent > 1) {
                percent = 1;
            }
            var totalLighten = 1 - percent;
            var lightAlpha = this.alpha;
            var lightRed = this.red * totalLighten;
            var lightBlue = this.blue * totalLighten;
            var lightGreen = this.green * totalLighten;
            return lightAlpha << 24 | lightRed << 16 | lightGreen << 8 | lightBlue;
        }
        static limit(n, hi, lo) {
            if (n < lo) {
                return lo;
            }
            else if (n > hi) {
                return hi;
            }
            return n;
        }
        static darken(n, amount = -64) {
            //var r:uint,g:uint,b:uint,tot:int;
            //	r=n>>16 & 0xff;g=n>>8 & 0xff;b=n & 0xff;
            //return (Colour.limit(r+amount,0xff,0)<<16)+(Colour.limit(g+amount,0xff,0)<<8)+(Colour.limit(b+amount,0xff,0));
            return null;
        }
        static lighten(n, amount = 16) {
            return Color.darken(n, amount);
        }
        static power(value) {
            return (((value >> 16) & 0xFF) + ((value >> 8) & 0xFF) + (value & 0xFF)) / 765.0;
        }
    }
    exports.Color = Color;
});
//# sourceMappingURL=Color.js.map