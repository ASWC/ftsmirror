import { IBitmapDrawable } from "flash/display/IBitmapDrawable";
import { AccessibilityProperties } from "flash/accessibility/AccessibilityProperties";
import { Shader } from "flash/display/Shader";
import { Matrix } from "flash/geom/Matrix";
import { LoaderInfo } from "flash/display/LoaderInfo";
import { Rectangle } from "flash/geom/Rectangle";
import { Transform } from "flash/geom/Transform";
import { Point } from "flash/geom/Point";
import { Vector3D } from "flash/geom/Vector3D";
import { IDisplayObjectContainer } from "flash/display/types/IDisplayObjectContainer";
import { IStage } from "flash/display/types/IStage";

export interface IDisplayObject extends IBitmapDrawable
{
    accessibilityProperties:AccessibilityProperties;
    blendShader:Shader;    
    blendMode:string;
    name:string;
    cacheAsBitmap:boolean;
    cacheAsBitmapMatrix:Matrix;
    filters:any;
    opaqueBackground:any;
    loaderInfo:LoaderInfo;
    mask:IDisplayObject;
    root:IDisplayObject;
    parent:IDisplayObjectContainer;
    stage:IStage;
    metaData:any;
    scale9Grid:Rectangle;
    scrollRect:Rectangle;
    transform:Transform;
    visible:boolean;
    mouseX:number;
    mouseY:number;
    rotation:number;
    alpha:number;
    height:number;
    rotationX:number;
    rotationY:number;
    rotationZ:number;
    scaleX:number;
    scaleY:number;
    scaleZ:number;
    width:number;
    x:number;
    y:number;
    z:number;

    getBounds(targetCoordinateSpace:IDisplayObject):Rectangle;
    getRect(targetCoordinateSpace:IDisplayObject):Rectangle;
    globalToLocal(point:Point):Point;
    globalToLocal3D(point:Point):Vector3D;
    hitTestObject(obj:IDisplayObject):boolean;
    hitTestPoint(x:number, y:number, shapeFlag:boolean):boolean;
    local3DToGlobal(point3d:Vector3D):Point;
    localToGlobal(point:Point):Point;
}
