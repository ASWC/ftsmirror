import { BaseObject } from "flash/system/BaseObject";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";

export class DisplayObject extends BaseObject
{
    protected _parent:DisplayObjectContainer;

    public get parent(): DisplayObjectContainer
    {
        return this._parent;
    }

    public static setParent(child:DisplayObject, paent:DisplayObjectContainer):void
    {
        child._parent = paent;
    }
}