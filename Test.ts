import { BaseObject } from "flash/system/BaseObject";
import { Stage } from "flash/display/Stage";

import { Stage3D } from "flash/display3D/Stage3D";
import { Context3D } from "flash/display3D/Context3D";
import { StageAlign } from "flash/display/StageAlign";
import { StageScaleMode } from "flash/display/StageScaleMode";

export class Test extends Stage
{
    constructor()
    {
        super();

        this.align = StageAlign.TOP_LEFT;
        this.scaleMode = StageScaleMode.NO_SCALE;
        this._context3D.setCanvas(-1, -1);


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