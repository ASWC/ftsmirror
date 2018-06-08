import { BaseObject } from "flash/system/BaseObject";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { IDisplayObject } from "flash/display/types/IDisplayObject";
import { IDisplayObjectContainer } from "flash/display/types/IDisplayObjectContainer";
import { AccessibilityProperties } from "flash/accessibility/AccessibilityProperties";
import { Shader } from "flash/display/Shader";
import { Matrix } from "flash/geom/Matrix";
import { LoaderInfo } from "flash/display/LoaderInfo";
import { IStage } from "flash/display/types/IStage";
import { Rectangle } from "flash/geom/Rectangle";
import { Transform } from "flash/geom/Transform";
import { Point } from "flash/geom/Point";
import { Vector3D } from "flash/geom/Vector3D";
import { Context3D } from "../display3D/Context3D";

export class DisplayObject extends BaseObject implements IDisplayObject
{
    protected _parent:IDisplayObjectContainer;
    protected _blendMode:string;
    protected _cacheAsBitmap:boolean;
    protected _filters:any;
    protected _mask:IDisplayObject;
    protected _root:IDisplayObject;
    protected _stage:IStage;
    protected _transform:Transform;
    protected _visible:boolean;
    protected _mouseX:number;
    protected _mouseY:number;
    protected _rotation:number;
    protected _alpha:number;
    protected _height:number;   
    protected _scaleX:number; 
    protected _scaleY:number;    
    protected _width:number;
    protected _x:number;
    protected _y:number;

    constructor()
    {
        super();
        this._stage = null;
        this._root = null;
        this._mask = null;
        this._cacheAsBitmap = false;
        this._blendMode = '';
        this._transform = new Transform(this);
        this._parent = null;
        this._filters = null;
        this._visible = true;
        this._mouseX = 0;
        this._mouseY = 0;
        this._rotation = 0;
        this._alpha = 1;
        this._height = 0;
        this._scaleX = 1;
        this._scaleY = 1;
        this._width = 0;
        this._x = 0;
        this._y = 0;
    }    

    public present(context:Context3D):void
    {

    }

    protected render(elapsedTime:number):void
    {

    }

    public static setParent(child:IDisplayObject, parent:IDisplayObjectContainer):void
    {
        var childtarget:DisplayObject = <DisplayObject> child;
        childtarget._parent = parent;
    }

    public set y(value:number)
    {
        this._y = value;
    }

    public get y():number
    {
        return this._y;
    }

    public set x(value:number)
    {
        this._x = value;
    }

    public get x():number
    {
        return this._x;
    }

    public set scaleY(value:number)
    {
        this._scaleY = value;
    }

    public get scaleY():number
    {
        return this._scaleY;
    }

    public set width(value:number)
    {
        this._width = value;
    }

    public get width():number
    {
        return this._width;
    }

    public set alpha(value:number)
    {
        this._alpha = value;
    }

    public get alpha():number
    {
        return this._alpha;
    }

    public set scaleX(value:number)
    {
        this._scaleX = value;
    }

    public get scaleX():number
    {
        return this._scaleX;
    }

    public set mask(value:IDisplayObject)
    {
        this._mask = value;
    }

    public get mask():IDisplayObject
    {
        return this._mask;
    }

    public set rotation(value:number)
    {
        this._rotation = value;
    }

    public get rotation():number
    {
        return this._rotation;
    }

    public set mouseX(value:number)
    {
        this._mouseX = value;
    }

    public get mouseX():number
    {
        return this._mouseX;
    }

    public set root(value:IDisplayObject)
    {
        this._root = value;
    }

    public get root():IDisplayObject
    {
        return this._root;
    }

    public set visible(value:boolean)
    {
        this._visible = value;
    }

    public get visible():boolean
    {
        return this._visible;
    }

    public set height(value:number)
    {
        this._height = value;
    }

    public get height():number
    {
        return this._height;
    }

    public set transform(value:Transform)
    {
        this._transform = value;
    }

    public get transform():Transform
    {
        return this._transform;
    }

    public set mouseY(value:number)
    {
        this._mouseY = value;
    }

    public get mouseY():number
    {
        return this._mouseY;
    }

    public set parent(value:IDisplayObjectContainer)
    {
        this._parent = value;
    }

    public get parent():IDisplayObjectContainer
    {
        return this._parent;
    }

    public set stage(value:IStage)
    {
        this._stage = value;
    }

    public get stage():IStage
    {
        return this._stage;
    }

    public getBounds(targetCoordinateSpace:IDisplayObject):Rectangle{return null;}
    public getRect(targetCoordinateSpace:IDisplayObject):Rectangle{return null;}
    public globalToLocal(point:Point):Point{return null;}
    public globalToLocal3D(point:Point):Vector3D{return null;}
    public hitTestObject(obj:IDisplayObject):boolean{return null;}
    public hitTestPoint(x:number, y:number, shapeFlag:boolean):boolean{return null;}
    public local3DToGlobal(point3d:Vector3D):Point{return null;}
    public localToGlobal(point:Point):Point{return null;}

    public get accessibilityProperties():AccessibilityProperties{return null;}
    public get blendShader():Shader{return null;}
    public get blendMode():string{return null;}
    public get cacheAsBitmap():boolean {return null;}
    public get cacheAsBitmapMatrix():Matrix{return null;}
    public get opaqueBackground():any{return null;}
    public get loaderInfo():LoaderInfo{return null;}
    public get metaData():any{return null;}
    public get scale9Grid():Rectangle{return null;}
    public get scrollRect():Rectangle{return null;}
    public get rotationX():number{return null;}
    public get rotationY():number{return null;}
    public get rotationZ():number{return null;}
    public get filters():any{return null;}
    public get scaleZ():number{return null;}
    public get z():number
    {
        return null;
    }





}