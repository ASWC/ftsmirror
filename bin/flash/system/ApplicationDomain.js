define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApplicationDomain {
        constructor(parentDomain = null) {
            this._parentDomain = parentDomain;
        }
        static get currentDomain() {
            if (!ApplicationDomain._domain) {
                ApplicationDomain._domain = new ApplicationDomain();
            }
            return ApplicationDomain._domain;
        }
        getDefinition(name) {
            return null;
        }
        getQualifiedDefinitionNames() {
            return null;
        }
        hasDefinition(name) {
            return false;
        }
        get domainMemory() {
            return null;
        }
        set domainMemory(value) {
        }
        static get MIN_DOMAIN_MEMORY_LENGTH() {
            return 0;
        }
        get parentDomain() {
            return null;
        }
    }
    exports.ApplicationDomain = ApplicationDomain;
});
//# sourceMappingURL=ApplicationDomain.js.map