define(["require", "exports", "flash/display/DisplayObjectContainer", "flash/display/LoaderInfo", "./Bitmap", "./BitmapData"], function (require, exports, DisplayObjectContainer_1, LoaderInfo_1, Bitmap_1, BitmapData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Loader extends DisplayObjectContainer_1.DisplayObjectContainer {
        constructor() {
            super();
            this._loaderInfo = new LoaderInfo_1.LoaderInfo();
        }
        assetLoaded(image) {
            this.show('asset loaded');
            this._bitmapData = BitmapData_1.BitmapData.setTexture(image);
            this._bitmap = new Bitmap_1.Bitmap(this._bitmapData);
        }
        addChild(child) {
            return null;
        }
        addChildAt(child, index) {
            return null;
        }
        close() {
        }
        get content() {
            if (this._bitmap) {
                return this._bitmap;
            }
            return null;
        }
        get contentLoaderInfo() {
            return this._loaderInfo;
        }
        load(request, context = null) {
            this._urlRequest = request;
            LoaderInfo_1.LoaderInfo.setLoaderInfo(this._loaderInfo, this, this._urlRequest, this.assetLoaded);
        }
        loadBytes(bytes, context = null) {
        }
        loadFilePromise(promise, context = null) {
        }
        removeChild(child) {
            return null;
        }
        removeChildAt(index) {
            return null;
        }
        setChildIndex(child, index) {
        }
        get uncaughtErrorEvents() {
            return null;
        }
        unload() {
        }
        unloadAndStop(gc = true) {
        }
    }
    exports.Loader = Loader;
});
//# sourceMappingURL=Loader.js.map