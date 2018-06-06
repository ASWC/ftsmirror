define(["require", "exports", "flash/system/BaseObject", "flash/webgl/ObjectUtils", "flash/display3D/Context3D"], function (require, exports, BaseObject_1, ObjectUtils_1, Context3D_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stage3D extends BaseObject_1.BaseObject {
        static assignContextByid(id) {
            if (Stage3D._stageDictionaries[id] != undefined) {
                var context = Stage3D._stageDictionaries[id];
                if (context) {
                    ObjectUtils_1.ObjectUtils.setProperty(context.canvas, "contextid", true);
                    return context;
                }
            }
            return null;
        }
        static createContext() {
            if (Stage3D._defaultContext) {
                Stage3D._defaultContext.release();
                Stage3D._defaultContext = null;
            }
            var context3d = new Context3D_1.Context3D();
            context3d.contextId = Stage3D._stage3ds.length;
            var canvas = document.createElement("canvas");
            canvas.className = "stage3D";
            canvas.setAttribute("style", "background-color:black");
            canvas.width = 100;
            canvas.height = 100;
            document.body.appendChild(canvas);
            context3d.canvas = canvas;
            Stage3D._stageDictionaries[Stage3D._stage3ds.length] = context3d;
            Stage3D._stage3ds.push(context3d);
            context3d.validate();
            return context3d;
        }
        static assignContextByName(name) {
            if (Stage3D._defaultContext) {
                Stage3D._defaultContext.release();
                Stage3D._defaultContext = null;
            }
            if (Stage3D._stage3ds && Stage3D._stage3ds.length) {
                for (var i = 0; i < Stage3D._stage3ds.length; i++) {
                    var context3d = Stage3D._stage3ds[i];
                    if (context3d.context3DName == name) {
                        if (context3d.hasContextAvailable) {
                            context3d.validate();
                            return context3d;
                        }
                    }
                }
            }
            return null;
        }
        static assignContext() {
            if (Stage3D._defaultContext) {
                Stage3D._defaultContext.release();
                Stage3D._defaultContext = null;
            }
            if (Stage3D._stage3ds && Stage3D._stage3ds.length) {
                for (var i = 0; i < Stage3D._stage3ds.length; i++) {
                    var context3d = Stage3D._stage3ds[i];
                    var contextid = context3d.context3Did;
                    if (context3d.hasContextAvailable) {
                        context3d.validate();
                        context3d.defaultContext = true;
                        Stage3D._defaultContext = context3d;
                        return context3d;
                    }
                }
            }
            return null;
        }
        static getStages() {
            if (Stage3D._stage3ds) {
                return;
            }
            Stage3D._hasStages = true;
            var elements = document.getElementsByClassName("Stage3D");
            Stage3D._stage3ds = [];
            Stage3D._stageDictionaries = {};
            var currentContextid = 0;
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element instanceof HTMLCanvasElement) {
                    var hasContext = ObjectUtils_1.ObjectUtils.getProperty(element, 'hasContext') || false;
                    if (!hasContext) {
                        var context = new Context3D_1.Context3D();
                        context.contextId = currentContextid;
                        context.canvas = element;
                        Stage3D._stage3ds.push(context);
                        var stageid = parseInt(ObjectUtils_1.ObjectUtils.getParameter(element, "contextid"));
                        if (!isNaN(stageid)) {
                            context.contextId = stageid;
                            Stage3D._stageDictionaries[stageid] = context;
                        }
                        currentContextid++;
                    }
                }
            }
            if (!Stage3D._stage3ds.length) {
                Stage3D._hasStages = false;
            }
        }
        static getInstance() {
            if (!Stage3D._instance) {
                Stage3D._instance = new Stage3D();
            }
            return Stage3D._instance;
        }
    }
    exports.Stage3D = Stage3D;
});
//# sourceMappingURL=Stage3D.js.map