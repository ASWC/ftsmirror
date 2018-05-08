define(["require", "exports", "flash/system/BaseObject", "flash/webgl/ObjectUtils", "flash/geom/Color"], function (require, exports, BaseObject_1, ObjectUtils_1, Color_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context3D extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._color = new Color_1.Color(0x00000000);
            this.reveal(this._color);
        }
        resize() {
            if (!this._gl) {
                return;
            }
            var displayWidth = this._canvas.clientWidth;
            var displayHeight = this._canvas.clientHeight;
            if (this._canvas.width != displayWidth || this._canvas.height != displayHeight) {
                this._canvas.width = displayWidth;
                this._canvas.height = displayHeight;
                this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
            }
            this._gl.clearColor(this._color.absoluteRed, this._color.absoluteGreen, this._color.absoluteBlue, this._color.absoluteAlpha);
            this._gl.clear(this._gl.COLOR_BUFFER_BIT);
        }
        release() {
            delete this._canvas.dataset.attachedstagerender;
        }
        set defaultContext(value) {
            this._defaultContext = value;
        }
        get defaultContext() {
            return this._defaultContext;
        }
        setCanvas(canvasWidth = -1, canvasHeight = -1, canvasColor = -1) {
            if (this._canvas) {
                if (canvasWidth > 0) {
                    this._canvas.width = canvasWidth;
                }
                if (canvasHeight > 0) {
                    this._canvas.height = canvasHeight;
                }
                if (canvasColor >= 0) {
                    var styleattribute = this._canvas.getAttribute("style");
                    if (styleattribute && styleattribute.length) {
                        var attributes = styleattribute.split(";");
                        var newattributes = [];
                        for (var i = 0; i < attributes.length; i++) {
                            if (attributes[i].indexOf("background-color") < 0) {
                                newattributes.push(attributes[i]);
                            }
                        }
                        this._color = new Color_1.Color(canvasColor);
                        var backgroundcolor = 'background-color:rgba(' + this._color.red + ", " + this._color.green + ", " + this._color.blue + ", " + this._color.absoluteAlpha + ")";
                        newattributes.push(backgroundcolor);
                        this._canvas.setAttribute("style", newattributes.join(";"));
                    }
                }
            }
        }
        set contextId(value) {
            this._contextId = value;
        }
        get context3Did() {
            return this._context3Did;
        }
        get context3DName() {
            return this._context3DName;
        }
        validate() {
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "attachedstagerender", this._context3Did);
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "context3did", this._contextId);
            ObjectUtils_1.ObjectUtils.setProperty(this._canvas, "context3dname", this._contextId);
            this._gl = this._canvas.getContext("webgl");
        }
        get hasContextAvailable() {
            var attachedStage = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "attachedstagerender");
            var gl = this._canvas.getContext("webgl");
            if (!gl) {
                return false;
            }
            if (attachedStage) {
                return false;
            }
            return true;
        }
        set canvas(value) {
            if (this._canvas) {
                return;
            }
            this._canvas = value;
            this._context3Did = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "context3did");
            this._context3DName = ObjectUtils_1.ObjectUtils.getProperty(this._canvas, "context3dname");
            if (!this._context3Did) {
                this._context3Did = this._contextId;
            }
        }
    }
    exports.Context3D = Context3D;
});
//# sourceMappingURL=Context3D.js.map