import { IInteractiveObject } from "flash/display/types/IInteractiveObject";
import { AccessibilityImplementation } from "flash/accessibility/AccessibilityImplementation";
import { NativeMenu } from "flash/display/NativeMenu";
import { Rectangle } from "flash/geom/Rectangle";
import { DisplayObject } from "flash/display/DisplayObject";

export class InteractiveObject extends DisplayObject implements IInteractiveObject
{
    protected _mouseEnabled:boolean;

    constructor()
    {
        super();
        this._mouseEnabled = true;
    }

    public set mouseEnabled(value:boolean)
    {
        this._mouseEnabled = value;
    }

    public get mouseEnabled():boolean
    {
        return this._mouseEnabled;
    }

    public get accessibilityImplementation():number{return null;}
    public get contextMenu():number{return null;}
    public get doubleClickEnabled():boolean{return null;}
    public get focusRect():number{return null;}
    public get needsSoftKeyboard():boolean{return null;}
    public get softKeyboard():string{return null;}
    public get softKeyboardInputAreaOfInterest():Rectangle{return null;}
    public get tabEnabled():boolean{return null;}
    public get tabIndex():number{return null;}

    public requestSoftKeyboard():boolean
    {
        return null;
    }


}