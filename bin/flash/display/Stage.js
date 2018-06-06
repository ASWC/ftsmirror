define(["require", "exports", "flash/display/DisplayObjectContainer", "flash/display3D/Stage3D", "flash/geom/Color"], function (require, exports, DisplayObjectContainer_1, Stage3D_1, Color_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stage extends DisplayObjectContainer_1.DisplayObjectContainer {
        constructor() {
            super();
            this._enterFrame = (time) => {
                if (this.isPaused) {
                    return;
                }
                this._enterFrameID = requestAnimationFrame(this._enterFrame);
                // framerate control
                this.show(time);
                if (time > 20000) {
                    this.stop();
                }
            };
            Stage3D_1.Stage3D.getStages();
            this._canvasColor = new Color_1.Color(0xFFFFFFFF);
            this._name = "stage";
            this.isPaused = false;
        }
        set color(value) {
            this._canvasColor.color = value;
        }
        get color() {
            return this._canvasColor.color;
        }
        start() {
            this._enterFrameID = requestAnimationFrame(this._enterFrame);
        }
        stop() {
            this.isPaused = true;
        }
        validateContext() {
            this._context3D.validate();
            if (this._context3D.isValid()) {
                this._context3D.color = this._canvasColor;
                this._context3D.initRendering();
                this.start();
            }
        }
        createContextById(id) {
            this._context3D = Stage3D_1.Stage3D.assignContextByid(id);
            if (this._context3D) {
                this.validateContext();
            }
        }
        createContextAtIndex(index) {
        }
        createContext() {
        }
        tickUpdate(time) {
            if (this._context3D) {
                //this._context3D.resize();
                this._context3D.render(this);
                //this._innerContainer.render(this._context3D);
            }
            // TICKER
        }
        set align(value) {
            this._align = value;
        }
        get align() {
            return this._align;
        }
        set allowsFullScreen(value) {
            this._allowsFullScreen = value;
        }
        get allowsFullScreen() {
            return this._allowsFullScreen;
        }
        set browserZoomFactor(value) {
            this._browserZoomFactor = value;
        }
        get browserZoomFactor() {
            return this._browserZoomFactor;
        }
        set colorCorrectionSupport(value) {
            this._colorCorrectionSupport = value;
        }
        get colorCorrectionSupport() {
            return this._colorCorrectionSupport;
        }
        set contentsScaleFactor(value) {
            this._contentsScaleFactor = value;
        }
        get contentsScaleFactor() {
            return this._contentsScaleFactor;
        }
        set fullScreenHeight(value) {
            this._fullScreenHeight = value;
        }
        get fullScreenHeight() {
            return this._fullScreenHeight;
        }
        set focus(value) {
            this._focus = value;
        }
        get focus() {
            return this._focus;
        }
        set fullScreenWidth(value) {
            this._fullScreenWidth = value;
        }
        get fullScreenWidth() {
            return this._fullScreenWidth;
        }
        set deviceOrientation(value) {
            this._deviceOrientation = value;
        }
        get deviceOrientation() {
            return this._deviceOrientation;
        }
        set frameRate(value) {
            this._frameRate = value;
        }
        get frameRate() {
            return this._frameRate;
        }
        set fullScreenSourceRect(value) {
            this._fullScreenSourceRect = value;
        }
        get fullScreenSourceRect() {
            return this._fullScreenSourceRect;
        }
        set stageHeight(value) {
            this._stageHeight = value;
        }
        get stageHeight() {
            return this._stageHeight;
        }
        set textSnapshot(value) {
            this._textSnapshot = value;
        }
        get textSnapshot() {
            return this._textSnapshot;
        }
        set stageVideos(value) {
            this._stageVideos = value;
        }
        get stageVideos() {
            return this._stageVideos;
        }
        set width(value) {
            this._width = value;
        }
        get width() {
            return this._width;
        }
        set vsyncEnabled(value) {
            this._vsyncEnabled = value;
        }
        get vsyncEnabled() {
            return this._vsyncEnabled;
        }
        set supportsOrientationChange(value) {
            this._supportsOrientationChange = value;
        }
        get supportsOrientationChange() {
            return this._supportsOrientationChange;
        }
        set orientation(value) {
            this._orientation = value;
        }
        get orientation() {
            return this._orientation;
        }
        set wmodeGPU(value) {
            this._wmodeGPU = value;
        }
        get wmodeGPU() {
            return this._wmodeGPU;
        }
        set supportedOrientations(value) {
            this._supportedOrientations = value;
        }
        get supportedOrientations() {
            return this._supportedOrientations;
        }
        set showDefaultContextMenu(value) {
            this._showDefaultContextMenu = value;
        }
        get showDefaultContextMenu() {
            return this._showDefaultContextMenu;
        }
        get stage3Ds() {
            return this._stage3Ds;
        }
        set stageFocusRect(value) {
            this._stageFocusRect = value;
        }
        get stageFocusRect() {
            return this._stageFocusRect;
        }
        set stageWidth(value) {
            this._stageWidth = value;
        }
        get stageWidth() {
            return this._stageWidth;
        }
        set softKeyboardRect(value) {
            this._softKeyboardRect = value;
        }
        get softKeyboardRect() {
            return this._softKeyboardRect;
        }
        set nativeWindow(value) {
            this._nativeWindow = value;
        }
        get nativeWindow() {
            return this._nativeWindow;
        }
        set mouseLock(value) {
            this._mouseLock = value;
        }
        get mouseLock() {
            return this._mouseLock;
        }
        set quality(value) {
            this._quality = value;
        }
        get quality() {
            return this._quality;
        }
        set autoOrients(value) {
            this._autoOrients = value;
        }
        get autoOrients() {
            return this._autoOrients;
        }
        set scaleMode(value) {
            this._scaleMode = value;
        }
        get scaleMode() {
            return this._scaleMode;
        }
        set displayState(value) {
            this._displayState = value;
        }
        get displayState() {
            return this._displayState;
        }
        set colorCorrection(value) {
            this._colorCorrection = value;
        }
        get colorCorrection() {
            return this._colorCorrection;
        }
        set height(value) {
            this._height = value;
        }
        get height() {
            return this._height;
        }
        set mouseChildren(value) {
            this._mouseChildren = value;
        }
        get mouseChildren() {
            return this._mouseChildren;
        }
        assignFocus(objectToFocus, direction) {
        }
        invalidate() {
        }
        isFocusInaccessible() {
            return false;
        }
        setAspectRatio(newAspectRatio) {
        }
        setOrientation(newOrientation) {
        }
    }
    exports.Stage = Stage;
});
//# sourceMappingURL=Stage.js.map