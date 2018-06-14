define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexVarying extends BaseObject_1.BaseObject {
        constructor(name, type) {
            super();
            this.size = 0;
            this.name = name;
            this.dataType = type;
        }
        getLine() {
            return "varying " + this.dataType + " " + this.name + ";";
        }
    }
    exports.VertexVarying = VertexVarying;
});
//# sourceMappingURL=VertexVarying.js.map