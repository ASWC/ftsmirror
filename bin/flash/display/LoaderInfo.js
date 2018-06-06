define(["require", "exports", "flash/events/EventDispatcher", "flash/events/Event"], function (require, exports, EventDispatcher_1, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LoaderInfo extends EventDispatcher_1.EventDispatcher {
        constructor() {
            super();
            this.handleload = (event) => {
                if (this._image.complete) {
                    this._callBack.call(this._loader, this._image);
                }
                this.dispatchEvent(Event_1.Event.getEvent(Event_1.Event.COMPLETE));
                //this.reveal(event.currentTarget);
            };
            this.handleError = (event) => {
                //this.reveal(event);
            };
            this.handlesuspend = (event) => {
                //this.reveal(event);
            };
            this.handleloadstart = (event) => {
                //this.reveal(event);
            };
            this.handlloadend = (event) => {
                //this.reveal(event);
            };
            this.handleprogress = (event) => {
                //this.reveal(event);
            };
        }
        load() {
            this._image = new Image();
            /*
            image.complete // < boolean if loaded
            image.crossOrigin // anonymous | use-credentials
            image.currentSrc
            image.height
            image.longDesc
            image.lowsrc
            image.name
            image.naturalHeight
            image.naturalWidth
            image.src
            image.sizes
            image.srcset
            image.width*/
            this._image.addEventListener("error", this.handleError);
            this._image.addEventListener("load", this.handleload);
            this._image.addEventListener("loadend", this.handlloadend);
            this._image.addEventListener("loadstart", this.handleloadstart);
            this._image.addEventListener("suspend", this.handlesuspend);
            this._image.addEventListener("progress", this.handleprogress);
            this._image.src = this._request.url;
        }
        static setLoaderInfo(loaderinfo, loader, request, callback) {
            loaderinfo._loader = loader;
            loaderinfo._request = request;
            loaderinfo._callBack = callback;
            loaderinfo.load();
        }
        get actionScriptVersion() {
            return null;
        }
        get applicationDomain() {
            return null;
        }
        get bytes() {
            return null;
        }
        get bytesLoaded() {
            return null;
        }
        get bytesTotal() {
            return null;
        }
        get childAllowsParent() {
            return null;
        }
        get childSandboxBridge() {
            return null;
        }
        set childSandboxBridge(door) {
        }
        get content() {
            return null;
        }
        get contentType() {
            return null;
        }
        get frameRate() {
            return null;
        }
        get height() {
            if (this._image) {
                return this._image.naturalHeight;
            }
            return 0;
        }
        get isURLInaccessible() {
            return null;
        }
        get loader() {
            return this._loader;
        }
        get loaderURL() {
            if (this._request) {
                return this._request.url;
            }
            return null;
        }
        get parameters() {
            return null;
        }
        get parentAllowsChild() {
            return null;
        }
        get parentSandboxBridge() {
            return null;
        }
        set parentSandboxBridge(door) {
        }
        get sameDomain() {
            return null;
        }
        get sharedEvents() {
            return null;
        }
        get swfVersion() {
            return null;
        }
        get uncaughtErrorEvents() {
            return null;
        }
        get url() {
            if (this._request) {
                return this._request.url;
            }
            return null;
        }
        get width() {
            if (this._image) {
                return this._image.naturalWidth;
            }
            return 0;
        }
    }
    exports.LoaderInfo = LoaderInfo;
});
//# sourceMappingURL=LoaderInfo.js.map