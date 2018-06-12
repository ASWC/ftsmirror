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
                var currentRate = time - this._lastUpdate;
                if (currentRate > this._rateIncrement) {
                    this._lastUpdate = time;
                    this.render(currentRate);
                    // dispatch enterframe event
                }
            };
            Stage3D_1.Stage3D.getStages();
            this._canvasColor = new Color_1.Color(0xFFFFFFFF);
            this._name = "stage";
            this.isPaused = false;
            this.frameRate = 60;
            this._lastUpdate = 0;
        }
        get children() {
            var currentChildren = [];
            for (var i = 0; i < this._children.length; i++) {
                currentChildren.push(this._children[i]);
            }
            return currentChildren;
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
        render(elapsedTime) {
            if (this._context3D) {
                this._context3D.render(elapsedTime);
            }
            for (var i = 0; i < Stage.runnables.length; i++) {
                Stage.runnables[i].run(elapsedTime);
            }
        }
        validateContext() {
            this._context3D.validate();
            if (this._context3D.isValid()) {
                this._context3D.color = this._canvasColor;
                this._context3D.initRendering();
                this._context3D.stage = this;
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
            this._rateIncrement = 1000 / this._frameRate;
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
        get stageHeight() {
            if (this._context3D) {
                return this._context3D.canvasHeight;
            }
            return 0;
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
        get stageWidth() {
            if (this._context3D) {
                return this._context3D.canvasWidth;
            }
            return 0;
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
        static registerRunnable(value) {
            var index = Stage.runnables.indexOf(value);
            if (index < 0) {
                Stage.runnables.push(value);
            }
        }
        static unRegisterRunnable(value) {
            var index = Stage.runnables.indexOf(value);
            if (index >= 0) {
                Stage.runnables.splice(index, 1);
            }
        }
    }
    Stage.runnables = [];
    exports.Stage = Stage;
});
//# sourceMappingURL=Stage.js.map