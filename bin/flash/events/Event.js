define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Event {
        constructor(type, bubbles = false, cancelable = false) {
            this._type = type;
            this._bubbles = bubbles;
            this._cancelable = cancelable;
        }
        stopPropagation() {
        }
        stopImmediatePropagation() {
        }
        preventDefault() {
        }
        clone() {
            return new Event(this._type, this._bubbles, this._cancelable);
        }
        isDefaultPrevented() {
            return false;
        }
        get cancelable() {
            return this._cancelable;
        }
        get type() {
            return this._type;
        }
        get target() {
            return this._target;
        }
        get eventPhase() {
            return this._eventPhase;
        }
        get currentTarget() {
            return this._currentTarget;
        }
        get bubbles() {
            return this._bubbles;
        }
    }
    Event.ACTIVATE = "activate";
    Event.ADDED = "added";
    Event.ADDED_TO_STAGE = "addedToStage";
    Event.BROWSER_ZOOM_CHANGE = "browserZoomChange";
    Event.CANCEL = "cancel";
    Event.CHANGE = "change";
    Event.CLOSE = "close";
    Event.CHANNEL_MESSAGE = "channelMessage";
    Event.CLOSING = "closing";
    Event.COMPLETE = "complete";
    Event.COPY = "copy";
    Event.CUT = "cut";
    Event.CONTEXT3D_CREATE = "context3DCreate";
    Event.DEACTIVATE = "deactivate";
    Event.MOUSE_LEAVE = "mouseLeave";
    Event.RENDER = "render";
    Event.NETWORK_CHANGE = "networkChange";
    Event.EXITING = "exiting";
    Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
    Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
    Event.TEXTURE_READY = "textureReady";
    Event.USER_IDLE = "userIdle";
    Event.USER_PRESENT = "userPresent";
    Event.RESIZE = "resize";
    Event.VIDEO_FRAME = "videoFrame";
    Event.WORKER_STATE = "workerState";
    Event.UNLOAD = "unload";
    Event.SCROLL = "scroll";
    Event.STANDARD_OUTPUT_CLOSE = "standardOutputClose";
    Event.SUSPEND = "suspend";
    Event.SELECT = "select";
    Event.OPEN = "open";
    Event.TAB_INDEX_CHANGE = "tabIndexChange";
    Event.REMOVED_FROM_STAGE = "removedFromStage";
    Event.STANDARD_INPUT_CLOSE = "standardInputClose";
    Event.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
    Event.SELECT_ALL = "selectAll";
    Event.STANDARD_ERROR_CLOSE = "standardErrorClose";
    Event.ID3 = "id3";
    Event.SOUND_COMPLETE = "soundComplete";
    Event.ENTER_FRAME = "enterFrame";
    Event.PASTE = "paste";
    Event.REMOVED = "removed";
    Event.PREPARING = "preparing";
    Event.LOCATION_CHANGE = "locationChange";
    Event.CONNECT = "connect";
    Event.FRAME_LABEL = "frameLabel";
    Event.INIT = "init";
    Event.HTML_RENDER = "htmlRender";
    Event.HTML_DOM_INITIALIZE = "htmlDOMInitialize";
    Event.EXIT_FRAME = "exitFrame";
    Event.FRAME_CONSTRUCTED = "frameConstructed";
    Event.FULLSCREEN = "fullScreen";
    Event.DISPLAYING = "displaying";
    Event.HTML_BOUNDS_CHANGE = "htmlBoundsChange";
    Event.CLEAR = "clear";
    Event.CHANNEL_STATE = "channelState";
    exports.Event = Event;
});
//# sourceMappingURL=Event.js.map