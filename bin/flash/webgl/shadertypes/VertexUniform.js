define(["require", "exports", "flash/system/BaseObject"], function (require, exports, BaseObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VertexUniform extends BaseObject_1.BaseObject {
        getLine() {
            return "uniform " + this.dataType + " " + this.name + ";";
        }
        bind(context, data) {
            if (this.dataType == "vec2") {
                context.uniform2f(this.location, data[0], data[1]);
            }
        }
    }
    exports.VertexUniform = VertexUniform;
});
//# sourceMappingURL=VertexUniform.js.map