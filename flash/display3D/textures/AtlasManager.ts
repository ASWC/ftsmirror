import { BaseObject } from "../../system/BaseObject";
import { TextureAtlas } from "./TextureAtlas";

export class AtlasManager extends BaseObject
{
    private static GL:WebGLRenderingContext;
    private static ATLASES:TextureAtlas[];
    private static MAX_TEXTURES:number;
    private static MAX_SIZE:number;
    private static ATLAS_IDS:number[];

    public static init(maxtextures:number, maxsize:number, gl:WebGLRenderingContext):void
    {
        AtlasManager.GL = gl;
        AtlasManager.ATLASES = [];
        AtlasManager.MAX_SIZE = maxsize;
        AtlasManager.MAX_TEXTURES = maxtextures;
        AtlasManager.generateAtlasIds(AtlasManager.MAX_TEXTURES);
        var atlas:TextureAtlas = new TextureAtlas(AtlasManager.GL, AtlasManager.MAX_SIZE);
        atlas.id = AtlasManager.getNextId();
        AtlasManager.ATLASES.push(atlas);
    }

    public static getNextId():number
    {
        if(!AtlasManager.ATLAS_IDS.length)
        {
            return -1;
        }
        return AtlasManager.ATLAS_IDS.shift();
    }

    public static generateAtlasIds(maxtextures:number):void
    {
        AtlasManager.ATLAS_IDS = [];        
        for(var i:number = 0; i < maxtextures; i++)
        {
            AtlasManager.ATLAS_IDS.push(i);
        }
    }
}