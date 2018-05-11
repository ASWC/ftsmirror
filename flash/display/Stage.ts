
import { Transform } from "flash/geom/Transform";
import { Rectangle } from "flash/geom/Rectangle";
import { Point } from "flash/geom/Point";
import { Matrix } from "flash/geom/Matrix";
import { NativeWindow } from "flash/display/NativeWindow";
import { StageVideo } from "flash/media/StageVideo";
import { TextSnapshot } from "flash/text/TextSnapshot";
import { NativeMenu } from "flash/display/NativeMenu";
import { Shader } from "flash/display/Shader";
import { LoaderInfo } from "flash/display/LoaderInfo";
import { DisplayObject } from "flash/display/DisplayObject";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { AccessibilityImplementation } from "flash/accessibility/AccessibilityImplementation";
import { AccessibilityProperties } from "flash/accessibility/AccessibilityProperties";
import { StageAlign } from "flash/display/StageAlign";
import { InteractiveObject } from "flash/display/InteractiveObject";
import { BaseObject } from "flash/system/BaseObject";
import { Stage3D } from "flash/display3D/Stage3D";
import { Context3D } from "flash/display3D/Context3D";
import { Timer } from "flash/utils/Timer";
import { InnerContainer } from "flash/display/DisplayObjectContainer"

export class Stage extends BaseObject
{
    protected _z:number;
    protected _y:number;
    protected _x:number;
    protected _innerContainer:InnerContainer;
    protected _scaleY:number;
    protected _visible:boolean;
    protected _transform:Transform;
    protected _stage:Stage;
    protected _scrollRect:Rectangle;
    protected _scaleZ:number;
    protected _scaleX:number;
    protected _scale9Grid:Rectangle;
    protected _rotationZ:number;
    protected _rotationY:number;
    protected _rotationX:number;
    protected _rotation:number;
    protected _root:DisplayObject;
    protected _parent:DisplayObjectContainer;
    protected _opaqueBackground:boolean;
    protected _mouseY:number;
    protected _mouseX:number;
    protected _mask:DisplayObject;
    protected _accessibilityImplementation:AccessibilityImplementation;
    protected _accessibilityProperties:AccessibilityProperties;
    protected _align:string;
    protected _allowsFullScreen:boolean;
    protected _allowsFullScreenInteractive:boolean;
    protected _alpha:number;
    protected _autoOrients:boolean;
    protected _metaData:any;
    protected _loaderInfo:LoaderInfo;
    protected _filters:any[];
    protected _cacheAsBitmapMatrix:Matrix;
    protected _cacheAsBitmap:boolean;
    protected _blendShader:Shader;
    protected _blendMode:string;
    protected _tabIndex:number;
    protected _tabEnabled:boolean;
    protected _softKeyboardInputAreaOfInterest:Rectangle;
    protected _softKeyboard:string;
    protected _needsSoftKeyboard:boolean;
    protected _mouseEnabled:boolean;
    protected _focusRect:any;
    protected _doubleClickEnabled:boolean;
    protected _contextMenu:NativeMenu;
    protected _wmodeGPU:boolean;
    protected _width:number;
    protected _vsyncEnabled:boolean;
    protected _textSnapshot:TextSnapshot;
    protected _tabChildren:boolean;
    protected _supportedOrientations:string[];
    protected _stageWidth:number;
    protected _stageVideos:StageVideo[];
    protected _stageHeight:number;
    protected _stageFocusRect:boolean;
    protected _softKeyboardRect:Rectangle;
    protected _showDefaultContextMenu:boolean;
    protected _scaleMode:string;
    protected _quality:string;
    protected _orientation:string;
    protected _nativeWindow:NativeWindow;
    protected _mouseLock:boolean;
    protected _mouseChildren:boolean;
    protected _height:number;
    protected _fullScreenWidth:number;
    protected _fullScreenSourceRect:Rectangle;
    protected _fullScreenHeight:number;
    protected _frameRate:number;
    protected _focus:InteractiveObject;
    protected _displayState:string;
    protected _displayContextInfo:string;
    protected _deviceOrientation:string;
    protected _contentsScaleFactor:number;
    protected _colorCorrectionSupport:string;
    protected _colorCorrection:string;
    protected _color:number;
    protected _browserZoomFactor:number;
    protected _context3D:Context3D;

    constructor()
    {
        super();
        Stage3D.getStages();
        this._context3D = Stage3D.assignContext();
        Timer.getGlobalTimer().push(this);
        this._innerContainer = new InnerContainer();
        this._innerContainer.parent = this;

        

        

        // auto assign stage
        // auto check support < no support < no stage available
        // let user change



        this._browserZoomFactor = 1;
        this._color = 0;
        this._colorCorrection = null;
        this._colorCorrectionSupport = null;
        this._contentsScaleFactor = 1;
        this._deviceOrientation = null;
        this._displayContextInfo = null;
        this._displayState = null;
        this._focus = null;
        this._frameRate = 60;
        this._fullScreenHeight = 0;
        this._fullScreenSourceRect = null;
        this._fullScreenWidth = 0;
        this._height = 0;
        this._mouseChildren = true;
        this._mouseLock = false;
        this._nativeWindow = null;
        this._orientation = null;
        this._quality = null;
        this._scaleMode = null;
        this._showDefaultContextMenu = false;
        this._softKeyboardRect = null;
        this._stageFocusRect = false;
        this._stageHeight = 0;
        this._stageVideos = null;
        this._stageWidth = 0;
        this._supportedOrientations = null;
        this._tabChildren = false;
        this._textSnapshot = null;
        this._vsyncEnabled = false;
        this._width = 0;
        this._wmodeGPU = true;
        this._contextMenu = null;
        this._doubleClickEnabled = false;
        this._focusRect = null;
        this._mouseEnabled = true;
        this._needsSoftKeyboard = false;
        this._softKeyboard = null;
        this._softKeyboardInputAreaOfInterest = null;
        this._tabEnabled = false;
        this._tabIndex = 0;
        this._blendMode = null;
        this._blendShader = null;
        this._cacheAsBitmap = false;
        this._cacheAsBitmapMatrix = null;
        this._filters = null;
        this._loaderInfo = null;
        this._metaData = null;
        this._autoOrients = false;
        this._alpha = 1;
        this._allowsFullScreenInteractive = true;
        this._allowsFullScreen = true;
        this._align = StageAlign.TOP_LEFT;
        this._accessibilityProperties = null;
        this._accessibilityImplementation = null;
        this._mask = null;
        this._mouseX = 0;
        this._mouseY = 0;
        this._name = "stage";
        this._opaqueBackground = true;
        this._parent = this;
        this._root = null;
        this._rotationY = 0;
        this._rotationX = 0;
        this._rotation = 0;
        this._rotationZ = 0;
        this._scale9Grid = null;
        this._scaleX = 1;
        this._scaleZ = 1;
        this._scaleY = 1;
        this._z = 0;
        this._y = 0;
        this._x = 0;
        this._visible = true;
        this._transform = new Transform(this);
        this._stage = this;
        this._scrollRect = null;
    }

    public tickUpdate(time:number):void
    {        
        if(this._context3D)
        {            
            //this._context3D.resize();
            this._context3D.render(this);
            //this._innerContainer.render(this._context3D);
        }
        // TICKER
    }

    public get parent(): DisplayObjectContainer
    {
        return this._parent;
    }

    public getChildIndex(child: DisplayObject): number
    {
        return this._innerContainer.getChildIndex(child);
    }

    public swapChildren(child1: DisplayObject, child2: DisplayObject): void
    {
        this._innerContainer.swapChildren(child1, child2);
    }

    public removeChild(child: DisplayObject): DisplayObject
    {
        return this._innerContainer.removeChild(child);
    }
        
    public removeChildren(beginIndex: number = 0, endIndex: number = 2147483647): void
    {
        this._innerContainer.removeChildren(beginIndex, endIndex);
    }

    public contains(child: DisplayObject): boolean
    {
        return this._innerContainer.contains(child);
    }
        
    public getChildAt(index: number): DisplayObject
    {
        return this._innerContainer.getChildAt(index);
    }
        
    public getChildByName(name: string): DisplayObject
    {
        return this._innerContainer.getChildByName(name);
    }

    public swapChildrenAt(index1: number, index2: number): void
    {
        this._innerContainer.swapChildrenAt(index1, index2);
    }

    public setChildIndex(child:DisplayObject, index:number):void
    {
        this._innerContainer.setChildIndex(child, index);
    }

    public removeChildAt(index:number):DisplayObject
    {
        return this._innerContainer.removeChildAt(index);
    }

    public get numChildren():number
    {
        return this._innerContainer.numChildren;
    }

    public addChild(child:DisplayObject):DisplayObject
    {
        return this._innerContainer.addChild(child);
    }
    
    public addChildAt(child:DisplayObject, index:number):DisplayObject
    {
        return this._innerContainer.addChildAt(child, index);
    }



    public set accessibilityImplementation(value:AccessibilityImplementation)
    {
        this._accessibilityImplementation = value;
    }
    
    public set accessibilityProperties(value:AccessibilityProperties)
    {
        this._accessibilityProperties = value;
    }
    

    
    public addEventListener(type:string, listener:Function, useCapture:boolean=false, priority:number=0, useWeakReference:boolean=false):void
    {
        
    }
    
    public get align():string
    {
        return this._align;
    }
    
    public set align(value:string)
    {
        this._align = value;
    }
    
    public get allowsFullScreen():boolean
    {
        return this._allowsFullScreen;
    }
    
    public get allowsFullScreenInteractive():boolean
    {
        return this._allowsFullScreenInteractive;
    }
    
    public set alpha(value:number)
    {
        this._alpha = value;
    }
    
    public assignFocus(objectToFocus:InteractiveObject, direction:string):void
    {
        
    }
    
    public get autoOrients():boolean
    {
        return this._autoOrients;
    }
    
    public set autoOrients(value:boolean)
    {
        this._autoOrients = value;
    }
    
    public set blendMode(value:string)
    {
        this._blendMode = value;
    }
    
    public get browserZoomFactor():number
    {
        return this._browserZoomFactor;
    }
    
    public set cacheAsBitmap(value:boolean)
    {
        this._cacheAsBitmap = value;
    }
    
    public get color():number
    {
        return this._color;
    }
    
    public set color(color:number)
    {
        this._color = color;
    }
    
    public get colorCorrection():string
    {
        return this._colorCorrection;
    }
    
    public set colorCorrection(value:string)
    {
        this._colorCorrection = value;
    }
    
    public get colorCorrectionSupport():string
    {
        return this._colorCorrectionSupport;
    }
        
    public get contentsScaleFactor():number
    {
        return this._contentsScaleFactor;
    }
    
    public set contextMenu(value:NativeMenu)
    {
        this._contextMenu = value;
    }
    
    public get deviceOrientation():string
    {
        return this._deviceOrientation;
    }
    
    public dispatchEvent(event:Event):boolean
    {
        return null;
    }
    
    public get displayContextInfo():string
    {
        return this._displayContextInfo;
    }
    
    public get displayState():string
    {
        return this._displayState;
    }
    
    public set displayState(value:string)
    {
        this._displayState = value;
    }
    
    public set filters(value:any[])
    {
        this._filters = value;
    }
    
    public get focus():InteractiveObject
    {
        return this._focus;
    }
    
    public set focus(newFocus:InteractiveObject)
    {
        this._focus = newFocus;
    }
    
    public set focusRect(value:any)
    {
        this._focusRect = value;
    }
    
    public get frameRate():number
    {
        return this._frameRate;
    }
    
    public set frameRate(value:number)
    {
        this._frameRate = value;
    }
    
    public get fullScreenHeight():number
    {
        return this._fullScreenHeight;
    }
    
    public get fullScreenSourceRect():Rectangle
    {
        return this._fullScreenSourceRect;
    }
    
    public set fullScreenSourceRect(value:Rectangle)
    {
        this._fullScreenSourceRect = value;
    }
    
    public get fullScreenWidth():number
    {
        return this._fullScreenWidth;
    }
    
    public hasEventListener(type:string):boolean
    {
        return null;
    }
    
    public get height():number
    {
        return this._height;
    }
    
    public set height(value:number)
    {
        this._height = value;
    }
    
    public invalidate():void
    {
        
    }
    
    public isFocusInaccessible():boolean
    {
        return null
    }
    
    public set mask(value:DisplayObject)
    {
        this._mask = value;
    }
    
    public get mouseChildren():boolean
    {
        return this._mouseChildren;
    }
    
    public set mouseChildren(value:boolean)
    {
        this._mouseChildren = value;
    }
    
    public set mouseEnabled(value:boolean)
    {
        this._mouseEnabled = value;
    }
    
    public get mouseLock():boolean
    {
        return this._mouseLock;
    }
    
    public set mouseLock(value:boolean)
    {
        this._mouseLock = value;
    }
    
    public set name(value:string)
    {
        this._name = value;
    }
    
    public get nativeWindow():NativeWindow
    {
        return this._nativeWindow;
    }
    

    
    public set opaqueBackground(value:boolean)
    {
        this._opaqueBackground = value;
    }
    
    public get orientation():string
    {
        return this._orientation;
    }
    
    public get quality():string
    {
        return this._quality;
    }
    
    public set quality(value:string)
    {
        this._quality = value;
    }
    

    
    public set rotation(value:number)
    {
        this._rotation = value;
    }
    
    public set rotationX(value:number)
    {
        this._rotationX = value;
    }
    
    public set rotationY(value:number)
    {
        this._rotationY = value;
    }
    
    public set rotationZ(value:number)
    {
        this._rotationZ = value;
    }
    
    public set scale9Grid(value:Rectangle)
    {
        this._scale9Grid = value;
    }
    
    public get scaleMode():string
    {
        return this._scaleMode;
    }
    
    public set scaleMode(value:string)
    {
        this._scaleMode = value;
    }
    
    public set scaleX(value:number)
    {
        this._scaleX = value;
    }
    
    public set scaleY(value:number)
    {
        this._scaleY = value;
    }
    
    public set scaleZ(value:number)
    {
        this._scaleZ = value;
    }
    
    public set scrollRect(value:Rectangle)
    {
        this._scrollRect = value;
    }
    
    public setAspectRatio(newAspectRatio:string):void
    {
        null;
    }
    

    
    public setOrientation(newOrientation:string):void
    {
        
    }
    
    public get showDefaultContextMenu():boolean
    {
        return this._showDefaultContextMenu;
    }
    
    public set showDefaultContextMenu(value:boolean)
    {
        this._showDefaultContextMenu = value;
    }
    
    public get softKeyboardRect():Rectangle
    {
        return this._softKeyboardRect;
    }
        
    public get stageFocusRect(): boolean 
    {
        return this._stageFocusRect;
    }
        
    public set stageFocusRect(on: boolean) 
    {
        this._stageFocusRect = on;
    }

    public get stageHeight(): number 
    {
        return this._stageHeight;
    }

    public set stageHeight(value: number)
    {
        this._stageHeight = value;
    }

    public get stageVideos(): StageVideo[]
    {
        return this._stageVideos;
    }
        
    public get stageWidth(): number
    {
        return this._stageWidth;
    }
        
    public set stageWidth(value: number)
    {
        this._stageWidth = value;
    }
        
    public get supportedOrientations(): string[]
    {
        return this._supportedOrientations;
    }
        

        
    public get tabChildren(): boolean
    {
        return this._tabChildren;
    }
        
    public set tabChildren(value: boolean)
    {
        this._tabChildren = value;
    }
        
    public set tabEnabled(value: boolean)
    {
        this._tabEnabled = value;
    }
        
    public set tabIndex(value: number)
    {
        this._tabIndex = value;
    }
        
    public get textSnapshot(): TextSnapshot
    {
        return this._textSnapshot;
    }
        
    public set transform(value: Transform)
    {
        this._transform = value;
    }
        
    public set visible(value: boolean)
    {
        this._visible = value;
    }
        
    public get vsyncEnabled(): boolean
    {
        return this._vsyncEnabled;
    }
        
    public set vsyncEnabled(value: boolean)
    {
        this._vsyncEnabled = value;
    }
        
    public get width(): number
    {
        return this._width;
    }
        
    public set width(value: number)
    {
        this._width = value;
    }
        
    public willTrigger(type: string): boolean
    {
        return false;
    }
        
    public get wmodeGPU(): boolean
    {
        return this._wmodeGPU;
    }
        
    public set x(value: number)
    {
        this._x = value;
    }
        
    public set y(value: number)
    {
        this._y = value;
    }
        
    public set z(value: number)
    {
        this._z = value;
    }
        
    public areInaccessibleObjectsUnderPoint(point: Point): boolean
    {
        return false;
    }
        

        
    public getObjectsUnderPoint(point: Point): DisplayObject[]
    {
        return null;
    }
        

        
    public stopAllMovieClips(): void
    {
        
    }
        

        
    public get accessibilityImplementation(): AccessibilityImplementation
    {
        return this._accessibilityImplementation;
    }
        
    public get contextMenu(): NativeMenu
    {
        return this._contextMenu;
    }
        
    public get doubleClickEnabled(): boolean
    {
        return this._doubleClickEnabled;
    }
        
    public set doubleClickEnabled(enabled: boolean)
    {
        this._doubleClickEnabled = enabled;
    }
        
    public get focusRect(): any
    {
        return this._focusRect;
    }
        
    public get mouseEnabled(): boolean
    {
        return this._mouseEnabled;
    }
        
    public get needsSoftKeyboard(): boolean
    {
        return this._needsSoftKeyboard;
    }
        
    public set needsSoftKeyboard(value: boolean)
    {
        this._needsSoftKeyboard = value;
    }
        
    public requestSoftKeyboard(): boolean
    {
        return null
    }
        
    public set softKeyboard(val: string)
    {
        this._softKeyboard = val;
    }
        
    public get softKeyboard(): string
    {
        return this._softKeyboard;
    }
        
    public get softKeyboardInputAreaOfInterest(): Rectangle
    {
        return this._softKeyboardInputAreaOfInterest;
    }
        
    public set softKeyboardInputAreaOfInterest(value: Rectangle)
    {
        this._softKeyboardInputAreaOfInterest = value;
    }
        
    public get tabEnabled(): boolean
    {
        return this._tabEnabled;
    }
        
    public get tabIndex(): number
    {
        return this._tabIndex;
    }
        
    public get accessibilityProperties(): AccessibilityProperties
    {
        return this._accessibilityProperties;
    }
        
    public get alpha(): number
    {
        return this._alpha;
    }
        
    public get blendMode(): string
    {
        return this._blendMode;
    }
        
    public set blendShader(value: Shader)
    {
        this._blendShader = value;
    }
        
    public get cacheAsBitmap(): boolean
    {
        return this._cacheAsBitmap;
    }
        
    public get cacheAsBitmapMatrix(): Matrix
    {
        return this._cacheAsBitmapMatrix;
    }
        
    public set cacheAsBitmapMatrix(value: Matrix)
    {
        this._cacheAsBitmapMatrix = value;
    }
        
    public get filters(): any[]
    {
        return this._filters;
    }
        
    public getBounds(targetCoordinateSpace: DisplayObject): Rectangle
    {
        return null
    }
        
    public getRect(targetCoordinateSpace: DisplayObject): Rectangle
    {
        return null;
    }
        
    public globalToLocal(point: Point): Point
    {
        return null
    }
        
    public hitTestObject(obj: DisplayObject): boolean
    {
        return null
    }
        
    public hitTestPoint(x: number, y: number, shapeFlag: boolean = false): boolean
    {
        return null
    }
        
    public get loaderInfo(): LoaderInfo
    {
        return this._loaderInfo;
    }
        
    public localToGlobal(point: Point): Point
    {
        return null
    }
        
    public get mask(): DisplayObject
    {
        return this._mask;
    }
        
    public get metaData(): any
    {
        return this._metaData;
    }
        
    public set metaData(data: any)
    {
        this._metaData = data;
    }
        
    public get mouseX(): number
    {
        return this._mouseX;
    }
        
    public get mouseY(): number
    {
        return this._mouseY;
    }
            
    public get name(): string
    {
        return this._name;
    }
        
    public get opaqueBackground(): boolean
    {
        return this._opaqueBackground;
    }
        

        
    public get root(): DisplayObject
    {
        return this._root;
    }
        
    public get rotation(): number
    {
        return this._rotation;
    }
        
    public get rotationX(): number
    {
        return this._rotationX;
    }
        
    public get rotationY(): number
    {
        return this._rotationY;
    }
        
    public get rotationZ(): number
    {
        return this._rotationZ;
    }
        
    public get scale9Grid(): Rectangle
    {
        return this._scale9Grid;
    }
        
    public get scaleX(): number
    {
        return this._scaleX;
    }
        
    public get scaleY(): number
    {
        return this._scaleY;
    }
        
    public get scaleZ(): number
    {
        return this._scaleZ;
    }
        
    public get scrollRect(): Rectangle
    {
        return this._scrollRect;
    }
        
    public get stage(): Stage
    {
        return this._stage;
    }
        
    public get transform():Transform
    {
        return this._transform;
    }
        
    public get visible(): boolean
    {
        return this._visible;
    }
        
    public get x(): number
    {
        return this._x;
    }
        
    public get y(): number
    {
        return this._y;
    }
        
    public get z(): number
    {
        return this._z;
    }
        
    public removeEventListener(type: string, listener: Function, useCapture: boolean = false): void
    {
        
    }
        
    public toString(): string
    {
        return null;
    }
}