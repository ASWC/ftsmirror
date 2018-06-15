define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ArrayTypes {
        static getTypedArray(type, length) {
            var pooledArray;
            if (type == ArrayTypes.INT8ARRAY) {
                if (ArrayTypes.int8pool.length) {
                    pooledArray = ArrayTypes.int8pool[ArrayTypes.int8pool.length - 1];
                    ArrayTypes.int8pool.length -= 1;
                    return pooledArray;
                }
                return new Int8Array(length);
            }
            else if (type == ArrayTypes.UINT8ARRAY) {
                if (ArrayTypes.uint8pool.length) {
                    pooledArray = ArrayTypes.uint8pool[ArrayTypes.uint8pool.length - 1];
                    ArrayTypes.uint8pool.length -= 1;
                    return pooledArray;
                }
                return new Uint8Array(length);
            }
            else if (type == ArrayTypes.INT16ARRAY) {
                if (ArrayTypes.int16pool.length) {
                    pooledArray = ArrayTypes.int16pool[ArrayTypes.int16pool.length - 1];
                    ArrayTypes.int16pool.length -= 1;
                    return pooledArray;
                }
                return new Int16Array(length);
            }
            else if (type == ArrayTypes.UINT16ARRAY) {
                if (ArrayTypes.uint16pool.length) {
                    pooledArray = ArrayTypes.uint16pool[ArrayTypes.uint16pool.length - 1];
                    ArrayTypes.uint16pool.length -= 1;
                    return pooledArray;
                }
                return new Uint16Array(length);
            }
            else if (type == ArrayTypes.INT32ARRAY) {
                if (ArrayTypes.int32pool.length) {
                    pooledArray = ArrayTypes.int32pool[ArrayTypes.int32pool.length - 1];
                    ArrayTypes.int32pool.length -= 1;
                    return pooledArray;
                }
                return new Int32Array(length);
            }
            else if (type == ArrayTypes.UINT32ARRAY) {
                if (ArrayTypes.uint32pool.length) {
                    pooledArray = ArrayTypes.uint32pool[ArrayTypes.uint32pool.length - 1];
                    ArrayTypes.uint32pool.length -= 1;
                    return pooledArray;
                }
                return new Uint32Array(length);
            }
            else if (type == ArrayTypes.UINT8CLAMPEDARRAY) {
                if (ArrayTypes.uint8clampedpool.length) {
                    pooledArray = ArrayTypes.uint8clampedpool[ArrayTypes.uint8clampedpool.length - 1];
                    ArrayTypes.uint8clampedpool.length -= 1;
                    return pooledArray;
                }
                return new Uint8ClampedArray(length);
            }
            else if (type == ArrayTypes.FLOAT64ARRAY) {
                if (ArrayTypes.float64pool.length) {
                    pooledArray = ArrayTypes.float64pool[ArrayTypes.float64pool.length - 1];
                    ArrayTypes.float64pool.length -= 1;
                    return pooledArray;
                }
                return new Float64Array(length);
            }
            if (ArrayTypes.float32pool.length) {
                pooledArray = ArrayTypes.float32pool[ArrayTypes.float32pool.length - 1];
                ArrayTypes.float32pool.length -= 1;
                return pooledArray;
            }
            return new Float32Array(length);
        }
        static recycle(value) {
            value.fill(0);
            if (value instanceof Int8Array) {
                ArrayTypes.addToPool(ArrayTypes.int8pool, value);
            }
            else if (value instanceof Float32Array) {
                ArrayTypes.addToPool(ArrayTypes.float64pool, value);
            }
            else if (value instanceof Float64Array) {
                ArrayTypes.addToPool(ArrayTypes.float32pool, value);
            }
            else if (value instanceof Uint8ClampedArray) {
                ArrayTypes.addToPool(ArrayTypes.uint8clampedpool, value);
            }
            else if (value instanceof Uint32Array) {
                ArrayTypes.addToPool(ArrayTypes.uint32pool, value);
            }
            else if (value instanceof Int32Array) {
                ArrayTypes.addToPool(ArrayTypes.int32pool, value);
            }
            else if (value instanceof Uint16Array) {
                ArrayTypes.addToPool(ArrayTypes.uint16pool, value);
            }
            else if (value instanceof Int16Array) {
                ArrayTypes.addToPool(ArrayTypes.int16pool, value);
            }
            else if (value instanceof Uint8Array) {
                ArrayTypes.addToPool(ArrayTypes.uint8pool, value);
            }
        }
        static addToPool(pool, value) {
            var index = pool.indexOf(value);
            if (index < 0) {
                pool.push(value);
            }
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
    ArrayTypes.int8pool = [];
    ArrayTypes.uint8pool = [];
    ArrayTypes.int16pool = [];
    ArrayTypes.uint16pool = [];
    ArrayTypes.int32pool = [];
    ArrayTypes.uint32pool = [];
    ArrayTypes.uint8clampedpool = [];
    ArrayTypes.float32pool = [];
    ArrayTypes.float64pool = [];
    exports.ArrayTypes = ArrayTypes;
});
//# sourceMappingURL=ArrayTypes.js.map