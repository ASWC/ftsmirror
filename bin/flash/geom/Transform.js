define(["require", "exports", "flash/system/BaseObject", "flash/geom/ColorTransform", "flash/geom/Matrix"], function (require, exports, BaseObject_1, ColorTransform_1, Matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Transform extends BaseObject_1.BaseObject {
        constructor(displayObject) {
            super();
            this._displayObject = displayObject;
        }
        get concatenatedMatrix() {
            // GET ALL matrix OBJECT FROM PARENTS
            return null;
        }
        get concatenatedColorTransform() {
            // GET ALL COLORTRANSFORM OBJECT FROM PARENTS
            return null; //this._colorTransform;
        }
        get pixelBounds() {
            // calculate bounds
            return null;
        }
        get matrix() {
            if (!this._matrix) {
                this._matrix = new Matrix_1.Matrix();
            }
            return this._matrix;
        }
        set matrix(value) {
            this._matrix = value;
        }
        get colorTransform() {
            if (!this._colorTransform) {
                this._colorTransform = new ColorTransform_1.ColorTransform();
            }
            return this._colorTransform;
        }
        set colorTransform(value) {
            this._colorTransform = value;
        }
    }
    exports.Transform = Transform;
});
//# sourceMappingURL=Transform.js.map