define(["require", "exports", "../../system/BaseObject", "./TextureAtlas"], function (require, exports, BaseObject_1, TextureAtlas_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AtlasManager extends BaseObject_1.BaseObject {
        static init(maxtextures, maxsize, gl) {
            AtlasManager.GL = gl;
            AtlasManager.ATLASES = [];
            AtlasManager.MAX_SIZE = maxsize;
            AtlasManager.MAX_TEXTURES = maxtextures;
            AtlasManager.generateAtlasIds(AtlasManager.MAX_TEXTURES);
            var atlas = new TextureAtlas_1.TextureAtlas(AtlasManager.GL, AtlasManager.MAX_SIZE);
            atlas.id = AtlasManager.getNextId();
            AtlasManager.ATLASES.push(atlas);
        }
        static getNextId() {
            if (!AtlasManager.ATLAS_IDS.length) {
                return -1;
            }
            return AtlasManager.ATLAS_IDS.shift();
        }
        static generateAtlasIds(maxtextures) {
            AtlasManager.ATLAS_IDS = [];
            for (var i = 0; i < maxtextures; i++) {
                AtlasManager.ATLAS_IDS.push(i);
            }
        }
    }
    exports.AtlasManager = AtlasManager;
});
//# sourceMappingURL=AtlasManager.js.map