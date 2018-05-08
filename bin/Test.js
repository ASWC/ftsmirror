define(["require", "exports", "flash/display/Stage", "flash/display/StageAlign", "flash/display/StageScaleMode"], function (require, exports, Stage_1, StageAlign_1, StageScaleMode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test extends Stage_1.Stage {
        constructor() {
            super();
            this.align = StageAlign_1.StageAlign.TOP_LEFT;
            this.scaleMode = StageScaleMode_1.StageScaleMode.NO_SCALE;
            this._context3D.setCanvas(-1, -1, 0x33000000);
            // this._context3D = Stage3D.createContext();
            //this._context3D.setCanvas(400, 400);
            //this._context3D = Stage3D.assignContextByid(1);
            // this._context3D.setCanvas(null, 400, 400, 0xAA00FF00);
            //this._context3D = Stage3D.assignContextByid(2);
            //this._context3D.setCanvas(null, 200, 200, 0xFF00FFFF);
            // assign different context
            // set context size + color
            // create a context if none exist
        }
    }
    exports.Test = Test;
});
//# sourceMappingURL=Test.js.map