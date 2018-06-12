
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
import { Program3D } from "flash/display3D/Program3D";
import { IStage } from "flash/display/types/IStage";
import { IInteractiveObject } from "flash/display/types/IInteractiveObject";
import { Color } from "flash/geom/Color";
import { IDisplayObject } from "flash/display/types/IDisplayObject";
import { IRunnable } from "flash/display/types/IRunnable";

export class Stage extends DisplayObjectContainer implements IStage
{
    private static runnables:IRunnable[] = [];
    protected _align:string;
    protected _allowsFullScreen:boolean;
    protected _browserZoomFactor:number;
    protected _colorCorrectionSupport:string;
    protected _contentsScaleFactor:number;
    protected _fullScreenHeight:number;
    protected _focus:IInteractiveObject;
    protected _fullScreenWidth:number;
    protected _deviceOrientation:string;
    protected _frameRate:number;
    protected _fullScreenSourceRect:Rectangle;
    //protected _stageHeight:number;
    protected _textSnapshot:TextSnapshot;
    protected _stageVideos:StageVideo[];
    protected _width:number;
    protected _vsyncEnabled:boolean;
    protected _supportsOrientationChange:boolean;
    protected _orientation:string;
    protected _wmodeGPU:boolean;
    protected _tabChildren:boolean;
    protected _supportedOrientations:string[];
    protected _showDefaultContextMenu:boolean;
    protected _stage3Ds:Stage3D[];
    protected _stageFocusRect:boolean;
    //protected _stageWidth:number;
    protected _softKeyboardRect:Rectangle;
    protected _numChildren:number;
    protected _nativeWindow:NativeWindow;
    protected _mouseLock:boolean;
    protected _quality:string;
    protected _autoOrients:boolean;
    protected _scaleMode:string;    
    protected _displayState:string;
    protected _colorCorrection:string;
    protected _height:number;
    protected _mouseChildren:boolean;
    protected _context3D:Context3D;
    protected _canvasColor:Color;
    protected _enterFrameID:number;
    protected isPaused:boolean;
    protected _rateIncrement:number;
    protected _lastUpdate:number;

    constructor()
    {
        super();
        Stage3D.getStages();
        this._canvasColor = new Color(0xFFFFFFFF);
        this._name = "stage";
        this.isPaused = false;
        this.frameRate = 60;   
        this._lastUpdate = 0;     
    }

    public get children():DisplayObject[]
    {
        var currentChildren:DisplayObject[] = [];
        for(var i:number = 0; i < this._children.length; i++)
        {
            currentChildren.push(<DisplayObject> this._children[i]);
        }
        return currentChildren;
    }

    public set color(value:number)
    {
        this._canvasColor.color = value;
    }

    public get color():number
    {
        return this._canvasColor.color;
    }

    public start():void
    {
        this._enterFrameID = requestAnimationFrame(this._enterFrame);
    }

    public stop():void
    {
        this.isPaused = true;
    }

    protected render(elapsedTime:number):void
    {
        if(this._context3D)
        {
            this._context3D.render(elapsedTime)
        }
        for(var i:number = 0; i < Stage.runnables.length; i++)
        {
            Stage.runnables[i].run(elapsedTime);
        }
    }

    private _enterFrame = (time:number) =>
    {
        if(this.isPaused)
        {
            return;
        }
        this._enterFrameID = requestAnimationFrame(this._enterFrame);
        var currentRate:number = time - this._lastUpdate;
        if(currentRate > this._rateIncrement)
        {
            this._lastUpdate = time;
            this.render(currentRate);

            // dispatch enterframe event
        }
    }

    public validateContext():void
    {
        this._context3D.validate();
        if(this._context3D.isValid())
        {
            this._context3D.color = this._canvasColor;
            this._context3D.initRendering();
            this._context3D.stage = this;
            this.start();
        }
    }

    public createContextById(id:number):void
    {
        this._context3D = Stage3D.assignContextByid(id);
        if(this._context3D)
        {
            this.validateContext();
        }
    }

    public createContextAtIndex(index:number):void
    {

    }

    public createContext():void
    {
        
    }





    public set align(value:string)
    {
        this._align = value;
    }

    public get align():string
    {
        return this._align;
    }

    public set allowsFullScreen(value:boolean)
    {
        this._allowsFullScreen = value;
    }

    public get allowsFullScreen():boolean
    {
        return this._allowsFullScreen;
    }

    public set browserZoomFactor(value:number)
    {
        this._browserZoomFactor = value;
    }

    public get browserZoomFactor():number
    {
        return this._browserZoomFactor;
    }

    public set colorCorrectionSupport(value:string)
    {
        this._colorCorrectionSupport = value;
    }

    public get colorCorrectionSupport():string
    {
        return this._colorCorrectionSupport;
    }

    public set contentsScaleFactor(value:number)
    {
        this._contentsScaleFactor = value;
    }

    public get contentsScaleFactor():number
    {
        return this._contentsScaleFactor;
    }

    public set fullScreenHeight(value:number)
    {
        this._fullScreenHeight = value;
    }

    public get fullScreenHeight():number
    {
        return this._fullScreenHeight;
    }

    public set focus(value:IInteractiveObject)
    {
        this._focus = value;
    }

    public get focus():IInteractiveObject
    {
        return this._focus;
    }

    public set fullScreenWidth(value:number)
    {
        this._fullScreenWidth = value;
    }

    public get fullScreenWidth():number
    {
        return this._fullScreenWidth;
    }

    public set deviceOrientation(value:string)
    {
        this._deviceOrientation = value;
    }

    public get deviceOrientation():string
    {
        return this._deviceOrientation;
    }

    public set frameRate(value:number)
    {
        this._frameRate = value;
        this._rateIncrement = 1000 / this._frameRate;
    }

    public get frameRate():number
    {
        return this._frameRate;
    }

    public set fullScreenSourceRect(value:Rectangle)
    {
        this._fullScreenSourceRect = value;
    }

    public get fullScreenSourceRect():Rectangle
    {
        return this._fullScreenSourceRect;
    }

    public get stageHeight():number
    {
        if(this._context3D)
        {
            return this._context3D.canvasHeight;
        }
        return 0;
    }

    public set textSnapshot(value:TextSnapshot)
    {
        this._textSnapshot = value;
    }

    public get textSnapshot():TextSnapshot
    {
        return this._textSnapshot;
    }

    public set stageVideos(value:StageVideo[])
    {
        this._stageVideos = value;
    }

    public get stageVideos():StageVideo[]
    {
        return this._stageVideos;
    }

    public set width(value:number)
    {
        this._width = value;
    }

    public get width():number
    {
        return this._width;
    }

    public set vsyncEnabled(value:boolean)
    {
        this._vsyncEnabled = value;
    }

    public get vsyncEnabled():boolean
    {
        return this._vsyncEnabled;
    }

    public set supportsOrientationChange(value:boolean)
    {
        this._supportsOrientationChange = value;
    }

    public get supportsOrientationChange():boolean
    {
        return this._supportsOrientationChange;
    }

    public set orientation(value:string)
    {
        this._orientation = value;
    }

    public get orientation():string
    {
        return this._orientation;
    }

    public set wmodeGPU(value:boolean)
    {
        this._wmodeGPU = value;
    }

    public get wmodeGPU():boolean
    {
        return this._wmodeGPU;
    }

    public set supportedOrientations(value:string[])
    {
        this._supportedOrientations = value;
    }

    public get supportedOrientations():string[]
    {
        return this._supportedOrientations;
    }

    public set showDefaultContextMenu(value:boolean)
    {
        this._showDefaultContextMenu = value;
    }

    public get showDefaultContextMenu():boolean
    {
        return this._showDefaultContextMenu;
    }

    public get stage3Ds():Stage3D[]
    {
        return this._stage3Ds;
    }

    public set stageFocusRect(value:boolean)
    {
        this._stageFocusRect = value;
    }

    public get stageFocusRect():boolean
    {
        return this._stageFocusRect;
    }

    public get stageWidth():number
    {
        if(this._context3D)
        {
            return this._context3D.canvasWidth
        }
        return 0;
    }

    public set softKeyboardRect(value:Rectangle)
    {
        this._softKeyboardRect = value;
    }

    public get softKeyboardRect():Rectangle
    {
        return this._softKeyboardRect;
    }

    public set nativeWindow(value:NativeWindow)
    {
        this._nativeWindow = value;
    }

    public get nativeWindow():NativeWindow
    {
        return this._nativeWindow;
    }

    public set mouseLock(value:boolean)
    {
        this._mouseLock = value;
    }

    public get mouseLock():boolean
    {
        return this._mouseLock;
    }

    public set quality(value:string)
    {
        this._quality = value;
    }

    public get quality():string
    {
        return this._quality;
    }

    public set autoOrients(value:boolean)
    {
        this._autoOrients = value;
    }

    public get autoOrients():boolean
    {
        return this._autoOrients;
    }



    public set scaleMode(value:string)
    {
        this._scaleMode = value;
    }

    public get scaleMode():string
    {
        return this._scaleMode;
    }

    public set displayState(value:string)
    {
        this._displayState = value;
    }

    public get displayState():string
    {
        return this._displayState;
    }

    public set colorCorrection(value:string)
    {
        this._colorCorrection = value;
    }

    public get colorCorrection():string
    {
        return this._colorCorrection;
    }

    public set height(value:number)
    {
        this._height = value;
    }

    public get height():number
    {
        return this._height;
    }

    public set mouseChildren(value:boolean)
    {
        this._mouseChildren = value;
    }

    public get mouseChildren():boolean
    {
        return this._mouseChildren;
    }

    public assignFocus(objectToFocus:IInteractiveObject, direction:string):void
    {

    }

    public invalidate():void
    {

    }

    public isFocusInaccessible():boolean
    {
        return false;
    }

    public setAspectRatio(newAspectRatio:string):void
    {

    }

    public setOrientation(newOrientation:string):void
    {

    }

    public static registerRunnable(value:IRunnable):void
    {
        var index:number = Stage.runnables.indexOf(value);
        if(index < 0)
        {
            Stage.runnables.push(value);
        }
    }

    public static unRegisterRunnable(value:IRunnable):void
    {
        var index:number = Stage.runnables.indexOf(value);
        if(index >= 0)
        {
            Stage.runnables.splice(index, 1);
        }
    }
  
    
   
}