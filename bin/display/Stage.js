define(["require", "exports", "flash/geom/Transform", "flash/display/StageAlign"], function (require, exports, Transform_1, StageAlign_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stage {
        constructor() {
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
            this._numChildren = 0;
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
            this._align = StageAlign_1.StageAlign.TOP_LEFT;
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
            this._transform = new Transform_1.Transform();
            this._stage = this;
            this._scrollRect = null;
        }
        set accessibilityImplementation(value) {
            this._accessibilityImplementation = value;
        }
        set accessibilityProperties(value) {
            this._accessibilityProperties = value;
        }
        addChild(child) {
            return null;
        }
        addChildAt(child, index) {
            return null;
        }
        addEventListener(type, listener, useCapture = false, priority = 0, useWeakReference = false) {
        }
        get align() {
            return this._align;
        }
        set align(value) {
            this._align = value;
        }
        get allowsFullScreen() {
            return this._allowsFullScreen;
        }
        get allowsFullScreenInteractive() {
            return this._allowsFullScreenInteractive;
        }
        set alpha(value) {
            this._alpha = value;
        }
        assignFocus(objectToFocus, direction) {
        }
        get autoOrients() {
            return this._autoOrients;
        }
        set autoOrients(value) {
            this._autoOrients = value;
        }
        set blendMode(value) {
            this._blendMode = value;
        }
        get browserZoomFactor() {
            return this._browserZoomFactor;
        }
        set cacheAsBitmap(value) {
            this._cacheAsBitmap = value;
        }
        get color() {
            return this._color;
        }
        set color(color) {
            this._color = color;
        }
        get colorCorrection() {
            return this._colorCorrection;
        }
        set colorCorrection(value) {
            this._colorCorrection = value;
        }
        get colorCorrectionSupport() {
            return this._colorCorrectionSupport;
        }
        get contentsScaleFactor() {
            return this._contentsScaleFactor;
        }
        set contextMenu(value) {
            this._contextMenu = value;
        }
        get deviceOrientation() {
            return this._deviceOrientation;
        }
        dispatchEvent(event) {
            return null;
        }
        get displayContextInfo() {
            return this._displayContextInfo;
        }
        get displayState() {
            return this._displayState;
        }
        set displayState(value) {
            this._displayState = value;
        }
        set filters(value) {
            this._filters = value;
        }
        get focus() {
            return this._focus;
        }
        set focus(newFocus) {
            this._focus = newFocus;
        }
        set focusRect(value) {
            this._focusRect = value;
        }
        get frameRate() {
            return this._frameRate;
        }
        set frameRate(value) {
            this._frameRate = value;
        }
        get fullScreenHeight() {
            return this._fullScreenHeight;
        }
        get fullScreenSourceRect() {
            return this._fullScreenSourceRect;
        }
        set fullScreenSourceRect(value) {
            this._fullScreenSourceRect = value;
        }
        get fullScreenWidth() {
            return this._fullScreenWidth;
        }
        hasEventListener(type) {
            return null;
        }
        get height() {
            return this._height;
        }
        set height(value) {
            this._height = value;
        }
        invalidate() {
        }
        isFocusInaccessible() {
            return null;
        }
        set mask(value) {
            this._mask = value;
        }
        get mouseChildren() {
            return this._mouseChildren;
        }
        set mouseChildren(value) {
            this._mouseChildren = value;
        }
        set mouseEnabled(value) {
            this._mouseEnabled = value;
        }
        get mouseLock() {
            return this._mouseLock;
        }
        set mouseLock(value) {
            this._mouseLock = value;
        }
        set name(value) {
            this._name = value;
        }
        get nativeWindow() {
            return this._nativeWindow;
        }
        get numChildren() {
            return this._numChildren;
        }
        set opaqueBackground(value) {
            this._opaqueBackground = value;
        }
        get orientation() {
            return this._orientation;
        }
        get quality() {
            return this._quality;
        }
        set quality(value) {
            this._quality = value;
        }
        removeChildAt(index) {
            return null;
        }
        set rotation(value) {
            this._rotation = value;
        }
        set rotationX(value) {
            this._rotationX = value;
        }
        set rotationY(value) {
            this._rotationY = value;
        }
        set rotationZ(value) {
            this._rotationZ = value;
        }
        set scale9Grid(value) {
            this._scale9Grid = value;
        }
        get scaleMode() {
            return this._scaleMode;
        }
        set scaleMode(value) {
            this._scaleMode = value;
        }
        set scaleX(value) {
            this._scaleX = value;
        }
        set scaleY(value) {
            this._scaleY = value;
        }
        set scaleZ(value) {
            this._scaleZ = value;
        }
        set scrollRect(value) {
            this._scrollRect = value;
        }
        setAspectRatio(newAspectRatio) {
            null;
        }
        setChildIndex(child, index) {
        }
        setOrientation(newOrientation) {
        }
        get showDefaultContextMenu() {
            return this._showDefaultContextMenu;
        }
        set showDefaultContextMenu(value) {
            this._showDefaultContextMenu = value;
        }
        get softKeyboardRect() {
            return this._softKeyboardRect;
        }
        get stageFocusRect() {
            return this._stageFocusRect;
        }
        set stageFocusRect(on) {
            this._stageFocusRect = on;
        }
        get stageHeight() {
            return this._stageHeight;
        }
        set stageHeight(value) {
            this._stageHeight = value;
        }
        get stageVideos() {
            return this._stageVideos;
        }
        get stageWidth() {
            return this._stageWidth;
        }
        set stageWidth(value) {
            this._stageWidth = value;
        }
        get supportedOrientations() {
            return this._supportedOrientations;
        }
        swapChildrenAt(index1, index2) {
            null;
        }
        get tabChildren() {
            return this._tabChildren;
        }
        set tabChildren(value) {
            this._tabChildren = value;
        }
        set tabEnabled(value) {
            this._tabEnabled = value;
        }
        set tabIndex(value) {
            this._tabIndex = value;
        }
        get textSnapshot() {
            return this._textSnapshot;
        }
        set transform(value) {
            this._transform = value;
        }
        set visible(value) {
            this._visible = value;
        }
        get vsyncEnabled() {
            return this._vsyncEnabled;
        }
        set vsyncEnabled(value) {
            this._vsyncEnabled = value;
        }
        get width() {
            return this._width;
        }
        set width(value) {
            this._width = value;
        }
        willTrigger(type) {
            return false;
        }
        get wmodeGPU() {
            return this._wmodeGPU;
        }
        set x(value) {
            this._x = value;
        }
        set y(value) {
            this._y = value;
        }
        set z(value) {
            this._z = value;
        }
        areInaccessibleObjectsUnderPoint(point) {
            return false;
        }
        contains(child) {
            return null;
        }
        getChildAt(index) {
            return null;
        }
        getChildByName(name) {
            return null;
        }
        getChildIndex(child) {
            return null;
        }
        getObjectsUnderPoint(point) {
            return null;
        }
        removeChild(child) {
            return null;
        }
        removeChildren(beginIndex = 0, endIndex = 2147483647) {
        }
        stopAllMovieClips() {
        }
        swapChildren(child1, child2) {
        }
        get accessibilityImplementation() {
            return this._accessibilityImplementation;
        }
        get contextMenu() {
            return this._contextMenu;
        }
        get doubleClickEnabled() {
            return this._doubleClickEnabled;
        }
        set doubleClickEnabled(enabled) {
            this._doubleClickEnabled = enabled;
        }
        get focusRect() {
            return this._focusRect;
        }
        get mouseEnabled() {
            return this._mouseEnabled;
        }
        get needsSoftKeyboard() {
            return this._needsSoftKeyboard;
        }
        set needsSoftKeyboard(value) {
            this._needsSoftKeyboard = value;
        }
        requestSoftKeyboard() {
            return null;
        }
        set softKeyboard(val) {
            this._softKeyboard = val;
        }
        get softKeyboard() {
            return this._softKeyboard;
        }
        get softKeyboardInputAreaOfInterest() {
            return this._softKeyboardInputAreaOfInterest;
        }
        set softKeyboardInputAreaOfInterest(value) {
            this._softKeyboardInputAreaOfInterest = value;
        }
        get tabEnabled() {
            return this._tabEnabled;
        }
        get tabIndex() {
            return this._tabIndex;
        }
        get accessibilityProperties() {
            return this._accessibilityProperties;
        }
        get alpha() {
            return this._alpha;
        }
        get blendMode() {
            return this._blendMode;
        }
        set blendShader(value) {
            this._blendShader = value;
        }
        get cacheAsBitmap() {
            return this._cacheAsBitmap;
        }
        get cacheAsBitmapMatrix() {
            return this._cacheAsBitmapMatrix;
        }
        set cacheAsBitmapMatrix(value) {
            this._cacheAsBitmapMatrix = value;
        }
        get filters() {
            return this._filters;
        }
        getBounds(targetCoordinateSpace) {
            return null;
        }
        getRect(targetCoordinateSpace) {
            return null;
        }
        globalToLocal(point) {
            return null;
        }
        globalToLocal3D(point) {
            return null;
        }
        hitTestObject(obj) {
            return null;
        }
        hitTestPoint(x, y, shapeFlag = false) {
            return null;
        }
        get loaderInfo() {
            return this._loaderInfo;
        }
        local3DToGlobal(point3d) {
            return null;
        }
        localToGlobal(point) {
            return null;
        }
        get mask() {
            return this._mask;
        }
        get metaData() {
            return this._metaData;
        }
        set metaData(data) {
            this._metaData = data;
        }
        get mouseX() {
            return this._mouseX;
        }
        get mouseY() {
            return this._mouseY;
        }
        get name() {
            return this._name;
        }
        get opaqueBackground() {
            return this._opaqueBackground;
        }
        get parent() {
            return this._parent;
        }
        get root() {
            return this._root;
        }
        get rotation() {
            return this._rotation;
        }
        get rotationX() {
            return this._rotationX;
        }
        get rotationY() {
            return this._rotationY;
        }
        get rotationZ() {
            return this._rotationZ;
        }
        get scale9Grid() {
            return this._scale9Grid;
        }
        get scaleX() {
            return this._scaleX;
        }
        get scaleY() {
            return this._scaleY;
        }
        get scaleZ() {
            return this._scaleZ;
        }
        get scrollRect() {
            return this._scrollRect;
        }
        get stage() {
            return this._stage;
        }
        get transform() {
            return this._transform;
        }
        get visible() {
            return this._visible;
        }
        get x() {
            return this._x;
        }
        get y() {
            return this._y;
        }
        get z() {
            return this._z;
        }
        removeEventListener(type, listener, useCapture = false) {
        }
        toString() {
            return null;
        }
    }
    exports.Stage = Stage;
});
//# sourceMappingURL=Stage.js.map