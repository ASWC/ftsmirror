define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexVarying extends BaseObject_1.BaseObject {
        constructor() {
            super(...arguments);
            //public uniformLocation:WebGLUniformLocation;
            //public buffer:WebGLBuffer;
            this.size = 0;
        }
        getLine() {
            return "varying " + this.dataType + " " + this.name + ";";
        }
    }
    exports.VertexVarying = VertexVarying;
});
//# sourceMappingURL=VertexVarying.js.map