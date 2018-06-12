define(["require", "exports", "flash/system/BaseObject", "flash/geom/Rectangle", "flash/geom/Transform", "../webgl/geom/IndexedVertice", "../display3D/Context3DVertexBufferFormat"], function (require, exports, BaseObject_1, Rectangle_1, Transform_1, IndexedVertice_1, Context3DVertexBufferFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DisplayObject extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._position = new IndexedVertice_1.IndexedVertice(2, Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.FLOAT);
            this._position.rawVertices[0] = 0;
            this._position.rawVertices[1] = 0;
            this._bounds = new Rectangle_1.Rectangle();
            this._stage = null;
            this._root = null;
            this._mask = null;
            this._cacheAsBitmap = false;
            this._blendMode = '';
            this._transform = new Transform_1.Transform(this);
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
            //this._x = 0;
            //this._y = 0;
        }
        present(context) {
        }
        render(elapsedTime) {
        }
        static setParent(child, parent) {
            var childtarget = child;
            childtarget._parent = parent;
        }
        set y(value) {
            this._position.rawVertices[1] = value;
        }
        get y() {
            return this._position.rawVertices[1];
        }
        set x(value) {
            this._position.rawVertices[0] = value;
        }
        get x() {
            return this._position.rawVertices[0];
        }
        set scaleY(value) {
            this._scaleY = value;
        }
        get scaleY() {
            return this._scaleY;
        }
        set width(value) {
            this._width = value;
        }
        get width() {
            return this._width;
        }
        set alpha(value) {
            this._alpha = value;
        }
        get alpha() {
            return this._alpha;
        }
        set scaleX(value) {
            this._scaleX = value;
        }
        get scaleX() {
            return this._scaleX;
        }
        set mask(value) {
            this._mask = value;
        }
        get mask() {
            return this._mask;
        }
        set rotation(value) {
            this._rotation = value;
        }
        get rotation() {
            return this._rotation;
        }
        set mouseX(value) {
            this._mouseX = value;
        }
        get mouseX() {
            return this._mouseX;
        }
        set root(value) {
            this._root = value;
        }
        get root() {
            return this._root;
        }
        set visible(value) {
            this._visible = value;
        }
        get visible() {
            return this._visible;
        }
        set height(value) {
            this._height = value;
        }
        get height() {
            return this._height;
        }
        set transform(value) {
            this._transform = value;
        }
        get transform() {
            return this._transform;
        }
        set mouseY(value) {
            this._mouseY = value;
        }
        get mouseY() {
            return this._mouseY;
        }
        set parent(value) {
            this._parent = value;
        }
        get parent() {
            return this._parent;
        }
        set stage(value) {
            this._stage = value;
        }
        get stage() {
            return this._stage;
        }
        getBounds(targetCoordinateSpace) { return null; }
        getRect(targetCoordinateSpace) { return null; }
        globalToLocal(point) { return null; }
        globalToLocal3D(point) { return null; }
        hitTestObject(obj) { return null; }
        hitTestPoint(x, y, shapeFlag) { return null; }
        local3DToGlobal(point3d) { return null; }
        localToGlobal(point) { return null; }
        get accessibilityProperties() { return null; }
        get blendShader() { return null; }
        get blendMode() { return null; }
        get cacheAsBitmap() { return null; }
        get cacheAsBitmapMatrix() { return null; }
        get opaqueBackground() { return null; }
        get loaderInfo() { return null; }
        get metaData() { return null; }
        get scale9Grid() { return null; }
        get scrollRect() { return null; }
        get rotationX() { return null; }
        get rotationY() { return null; }
        get rotationZ() { return null; }
        get filters() { return null; }
        get scaleZ() { return null; }
        get z() {
            return null;
        }
    }
    exports.DisplayObject = DisplayObject;
});
//# sourceMappingURL=DisplayObject.js.map