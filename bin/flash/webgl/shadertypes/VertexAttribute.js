define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexAttribute extends BaseObject_1.BaseObject {
        constructor() {
            super(...arguments);
            this.size = 0;
        }
        getLine() {
            return "attribute " + this.dataType + " " + this.name + ";";
        }
    }
    exports.VertexAttribute = VertexAttribute;
});
//# sourceMappingURL=VertexAttribute.js.map