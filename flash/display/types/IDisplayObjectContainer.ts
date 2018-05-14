
import { TextSnapshot } from "flash/text/TextSnapshot";
import { Point } from "flash/geom/Point";
import { IInteractiveObject } from "flash/display/types/IInteractiveObject";
import { IDisplayObject } from "flash/display/types/IDisplayObject";

export interface IDisplayObjectContainer extends IInteractiveObject
{
    mouseChildren:boolean;
    tabChildren:boolean;
    numChildren:number;
    textSnapshot:TextSnapshot;
    addChild(child:IDisplayObject):IDisplayObject;
    addChildAt(child:IDisplayObject, index:number):IDisplayObject;
    areInaccessibleObjectsUnderPoint(point:Point):boolean;
    contains(child:IDisplayObject):boolean;
    getChildAt(index:number):IDisplayObject;
    getChildByName(name:string):IDisplayObject;
    getChildIndex(child:IDisplayObject):number;
    getObjectsUnderPoint(point:Point):any;
    removeChild(child:IDisplayObject):IDisplayObject;
    removeChildAt(index:number):IDisplayObject;
    removeChildren(beginIndex:number, endIndex:number):void;
    setChildIndex(child:IDisplayObject, index:number):void;
    stopAllMovieClips():void;
    swapChildren(child1:IDisplayObject, child2:IDisplayObject):void;
    swapChildrenAt(index1:number, index2:number):void;
}