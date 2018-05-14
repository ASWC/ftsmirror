import { IDisplayObject } from "flash/display/types/IDisplayObject";
import { AccessibilityImplementation } from "flash/accessibility/AccessibilityImplementation";
import { NativeMenu } from "flash/display/NativeMenu";
import { Rectangle } from "flash/geom/Rectangle";

export interface IInteractiveObject extends IDisplayObject
{
    accessibilityImplementation:AccessibilityImplementation;
    contextMenu:NativeMenu;
    doubleClickEnabled:boolean;
    focusRect:any;
    mouseEnabled:boolean;
    needsSoftKeyboard:boolean;
    softKeyboard:string;
    softKeyboardInputAreaOfInterest:Rectangle;
    tabEnabled:boolean;
    tabIndex:number;
    requestSoftKeyboard():boolean;
}