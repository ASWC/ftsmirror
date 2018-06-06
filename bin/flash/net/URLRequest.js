define(["require", "exports", "../system/BaseObject", "./URLRequestMethod"], function (require, exports, BaseObject_1, URLRequestMethod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class URLRequest extends BaseObject_1.BaseObject {
        constructor(url = null) {
            super();
            this._url = url;
            this._headers = [];
            this._method = URLRequestMethod_1.URLRequestMethod.GET;
            this._contentType = "application/x-www-form-urlencoded";
        }
        useRedirectedURL(sourceRequest, wholeURL = false, pattern = null, replace = null) {
        }
        get authenticate() {
            return false;
        }
        set authenticate(value) {
        }
        get cacheResponse() {
            return false;
        }
        set cacheResponse(value) {
        }
        get contentType() {
            return this._contentType;
        }
        set contentType(value) {
            this._contentType = value;
        }
        get data() {
            return this._data;
        }
        set data(value) {
            this._data = value;
        }
        get digest() {
            return 'flashts';
        }
        set digest(value) {
        }
        get followRedirects() {
            return true;
        }
        set followRedirects(value) {
        }
        get idleTimeout() {
            return 0;
        }
        set idleTimeout(value) {
        }
        get manageCookies() {
            return false;
        }
        set manageCookies(value) {
        }
        get useCache() {
            return false;
        }
        set useCache(value) {
        }
        get method() {
            return this._method;
        }
        set method(value) {
            this._method = value;
        }
        get requestHeaders() {
            return this._headers;
        }
        set requestHeaders(value) {
            this._headers = value;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            this._url = value;
        }
        get userAgent() {
            return '';
        }
        set userAgent(value) {
        }
    }
    exports.URLRequest = URLRequest;
});
//# sourceMappingURL=URLRequest.js.map