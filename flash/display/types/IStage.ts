import { IDisplayObjectContainer } from "flash/display/types/IDisplayObjectContainer";
import { IInteractiveObject } from "./IInteractiveObject";
import { NativeWindow } from "../NativeWindow";
import { Rectangle } from "../../geom/Rectangle";
import { Stage3D } from "../../display3D/Stage3D";
import { StageVideo } from "../../media/StageVideo";
import { TextSnapshot } from "../../text/TextSnapshot";

export interface IStage extends IDisplayObjectContainer
{
    align:string;
    allowsFullScreen:boolean;
    browserZoomFactor:number;
    colorCorrectionSupport:string;
    contentsScaleFactor:number;
    fullScreenHeight:number;
    focus:IInteractiveObject;
    fullScreenWidth:number;
    deviceOrientation:string;
    frameRate:number;
    fullScreenSourceRect:Rectangle;
    stageHeight:number;
    textSnapshot:TextSnapshot;
    stageVideos:StageVideo[];
    width:number;
    vsyncEnabled:boolean;
    supportsOrientationChange:boolean;
    orientation:string;
    wmodeGPU:boolean;
    supportedOrientations:string[];
    showDefaultContextMenu:boolean;
    stage3Ds:Stage3D[];
    stageFocusRect:boolean;
    stageWidth:number;
    softKeyboardRect:Rectangle;
    numChildren:number;
    nativeWindow:NativeWindow;
    mouseLock:boolean;
    quality:string;
    autoOrients:boolean;
    color:number;
    scaleMode:string;
    displayState:string;
    colorCorrection:string;
    height:number;
    mouseChildren:boolean;

    assignFocus(objectToFocus:IInteractiveObject, direction:string):void;
    invalidate():void;
    isFocusInaccessible():boolean;
    setAspectRatio(newAspectRatio:string):void;
    setOrientation(newOrientation:string):void;
}
