import { BaseObject } from "flash/system/BaseObject";
import { TextureAtlas } from "flash/display3D/textures/TextureAtlas";
import { Program3D } from "../Program3D";
import { Context3DVertexBufferFormat } from "../Context3DVertexBufferFormat";
import { Context3DDrawTypes } from "../Context3DDrawTypes";

export class AtlasManager extends BaseObject
{
    private static GL:WebGLRenderingContext;
    private static ATLASES:TextureAtlas[];
    private static MAX_TEXTURES:number;
    private static _MAX_SIZE:number;
    private static _SIZE_LIMIT:number = 4096// * 2;
    private static ATLAS_IDS:number[];
    private static engineStarted:boolean = false;

    public static init(maxtextures:number, maxsize:number, gl:WebGLRenderingContext):void
    {
        if(AtlasManager.engineStarted)
        {
            return;
        }
        AtlasManager.engineStarted = true;
        AtlasManager.GL = gl;
        AtlasManager.ATLASES = [];
        AtlasManager._MAX_SIZE = maxsize;
        if(AtlasManager._SIZE_LIMIT < 0)
        {
            AtlasManager._SIZE_LIMIT = maxsize;
        }
        if(AtlasManager._MAX_SIZE > AtlasManager._SIZE_LIMIT)
        {
            AtlasManager._MAX_SIZE = AtlasManager._SIZE_LIMIT;
        }
        AtlasManager.MAX_TEXTURES = maxtextures;
        AtlasManager.generateAtlasIds(AtlasManager.MAX_TEXTURES);
        for(var i:number = 0; i < AtlasManager.MAX_TEXTURES; i++)
        {
            if(i == 0)
            {
                var atlas:TextureAtlas = new TextureAtlas(AtlasManager.GL, AtlasManager._MAX_SIZE);
            }
            else
            {
                var atlas:TextureAtlas = new TextureAtlas(AtlasManager.GL, AtlasManager._MAX_SIZE, true);
            }            
            atlas.id = AtlasManager.getNextId();
            AtlasManager.ATLASES.push(atlas);
        }        
        var program:Program3D = new Program3D(6, "bitmapdata_program");           
        program.vertexShader.addAttribute("a_position", Context3DVertexBufferFormat.VEC2);  
        program.vertexShader.addAttribute("a_color", Context3DVertexBufferFormat.VEC4);     
        program.vertexShader.addAttribute("a_scale", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_projection", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_translation", Context3DVertexBufferFormat.MAT3);
        program.vertexShader.addAttribute("u_rotation", Context3DVertexBufferFormat.MAT3);        
        program.vertexShader.addAttribute("a_texcoord", Context3DVertexBufferFormat.VEC2); 
        program.vertexShader.addAttribute("a_textureID", Context3DVertexBufferFormat.VEC2); 
        program.vertexShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);
        program.vertexShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.vertexShader.addVarying("v_textureID", Context3DVertexBufferFormat.VEC2);
        program.vertexShader.addToMain("v_textureID = a_textureID;");
        program.vertexShader.addToMain("v_texcoord = a_texcoord;");
        program.vertexShader.addToMain("v_color = a_color;");
        program.vertexShader.addToMain("mat3 concatedMatrix = u_projection * u_translation * u_rotation * a_scale;");
        program.vertexShader.addToMain("gl_Position = vec4((concatedMatrix * vec3(a_position, 1)).xy, 0, 1);"); 
        for(var i:number = 0; i < AtlasManager.MAX_TEXTURES; i++)
        {
            program.fragmentShader.addUniform("u_texture" + i.toString(), Context3DVertexBufferFormat.SAMPLER2D);
        }
        program.fragmentShader.addVarying("v_textureID", Context3DVertexBufferFormat.VEC2);
        program.fragmentShader.addVarying("v_texcoord", Context3DVertexBufferFormat.VEC2);
        program.fragmentShader.addVarying("v_color", Context3DVertexBufferFormat.VEC4);        
        for(var i:number = 0; i < AtlasManager.MAX_TEXTURES; i++)
        {
            program.fragmentShader.addToMain("if(int(v_textureID.x) == " + i + "){gl_FragColor = texture2D(u_texture" + i.toString() + ", v_texcoord);}");
        }
        program.drawType = Context3DDrawTypes.TRIANGLES;
    }

    public static addImage(image:HTMLImageElement):void
    {

    }

    public static isPowerOf2(value:number):boolean
    {
        return (value & (value - 1)) == 0;
    }

    public static set SIZE_LIMIT(value:number)
    {
        AtlasManager._SIZE_LIMIT = value;
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