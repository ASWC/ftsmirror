define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ArrayTypes {
        static getTypedArray(type, length) {
            if (type == ArrayTypes.INT8ARRAY) {
                return new Int8Array(length);
            }
            else if (type == ArrayTypes.UINT8ARRAY) {
                return new Uint8Array(length);
            }
            else if (type == ArrayTypes.INT16ARRAY) {
                return new Int16Array(length);
            }
            else if (type == ArrayTypes.UINT16ARRAY) {
                return new Uint16Array(length);
            }
            else if (type == ArrayTypes.INT32ARRAY) {
                return new Int32Array(length);
            }
            else if (type == ArrayTypes.UINT32ARRAY) {
                return new Uint32Array(length);
            }
            else if (type == ArrayTypes.UINT8CLAMPEDARRAY) {
                return new Uint8ClampedArray(length);
            }
            else if (type == ArrayTypes.FLOAT64ARRAY) {
                return new Float64Array(length);
            }
            return new Float32Array(length);
        }
    }
    ArrayTypes.INT8ARRAY = "Int8Array";
    ArrayTypes.UINT8ARRAY = "Uint8Array";
    ArrayTypes.INT16ARRAY = "Int16Array";
    ArrayTypes.UINT16ARRAY = "Uint16Array";
    ArrayTypes.INT32ARRAY = "Int32Array";
    ArrayTypes.UINT32ARRAY = "Uint32Array";
    ArrayTypes.UINT8CLAMPEDARRAY = "Uint8ClampedArray";
    ArrayTypes.FLOAT32ARRAY = "Float32Array";
    ArrayTypes.FLOAT64ARRAY = "Float64Array";
    exports.ArrayTypes = ArrayTypes;
});
//# sourceMappingURL=ArrayTypes.js.map