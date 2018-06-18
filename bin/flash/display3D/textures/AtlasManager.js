define(["require", "exports", "flash/system/BaseObject", "flash/display3D/textures/TextureAtlas", "../Program3D", "../Context3DVertexBufferFormat", "../Context3DDrawTypes"], function (require, exports, BaseObject_1, TextureAtlas_1, Program3D_1, Context3DVertexBufferFormat_1, Context3DDrawTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AtlasManager extends BaseObject_1.BaseObject {
        static init(maxtextures, maxsize, gl) {
            if (AtlasManager.engineStarted) {
                return;
            }
            AtlasManager.engineStarted = true;
            AtlasManager.GL = gl;
            AtlasManager.ATLASES = [];
            AtlasManager._MAX_SIZE = maxsize;
            if (AtlasManager._SIZE_LIMIT < 0) {
                AtlasManager._SIZE_LIMIT = maxsize;
            }
            if (AtlasManager._MAX_SIZE > AtlasManager._SIZE_LIMIT) {
                AtlasManager._MAX_SIZE = AtlasManager._SIZE_LIMIT;
            }
            AtlasManager.MAX_TEXTURES = maxtextures;
            AtlasManager.generateAtlasIds(AtlasManager.MAX_TEXTURES);
            for (var i = 0; i < AtlasManager.MAX_TEXTURES; i++) {
                if (i == 0) {
                    var atlas = new TextureAtlas_1.TextureAtlas(AtlasManager.GL, AtlasManager._MAX_SIZE);
                }
                else {
                    var atlas = new TextureAtlas_1.TextureAtlas(AtlasManager.GL, AtlasManager._MAX_SIZE, true);
                }
                atlas.id = AtlasManager.getNextId();
                AtlasManager.ATLASES.push(atlas);
            }
            var program = new Program3D_1.Program3D(6, "bitmapdata_program");
            program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.MAT3);
            program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addAttribute("a_textureID", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            program.vertexShader.addVarying("v_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addVarying("v_textureID", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.vertexShader.addToMain("v_textureID = a_textureID;");
            program.vertexShader.addToMain("v_texcoord = a_texcoord;");
            program.vertexShader.addToMain("v_color = a_color;");
            program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
            program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);");
            for (var i = 0; i < AtlasManager.MAX_TEXTURES; i++) {
                program.fragmentShader.addUniform("u_texture" + i.toString(), Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.SAMPLER2D);
            }
            program.fragmentShader.addVarying("v_textureID", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.fragmentShader.addVarying("v_texcoord", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC2);
            program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat_1.Context3DVertexBufferFormat.VEC4);
            for (var i = 0; i < AtlasManager.MAX_TEXTURES; i++) {
                program.fragmentShader.addToMain("if(int(v_textureID.x) == " + i + "){gl_FragColor = texture2D(u_texture" + i.toString() + ", v_texcoord);}");
            }
            program.drawType = Context3DDrawTypes_1.Context3DDrawTypes.TRIANGLES;
        }
        static addImage(image) {
        }
        static isPowerOf2(value) {
            return (value & (value - 1)) == 0;
        }
        static set SIZE_LIMIT(value) {
            AtlasManager._SIZE_LIMIT = value;
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
    AtlasManager._SIZE_LIMIT = 4096; // * 2;
    AtlasManager.engineStarted = false;
    exports.AtlasManager = AtlasManager;
});
//# sourceMappingURL=AtlasManager.js.map