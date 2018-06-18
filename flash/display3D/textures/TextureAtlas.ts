import { BaseObject } from "flash/system/BaseObject";
import { Rectangle } from "flash/geom/Rectangle";
import { Texture } from "flash/display3D/textures/Texture";

export class TextureAtlas extends BaseObject
{
    protected _gl:WebGLRenderingContext;
    protected _size:number;
    protected _id:number;
    protected _canvas2d:CanvasRenderingContext2D;
    protected _freeareas:Rectangle[];
    protected _occupiedareas:Rectangle[];
    protected _texture:Texture;

    constructor(gl:WebGLRenderingContext, size:number)
    {
        super();
        this._gl = gl;
        this._size = size / 2;
        this.show(this._size);
        var canvas:HTMLCanvasElement = document.createElement("canvas");
        canvas.width = this._size;
        canvas.height = this._size;
        this._canvas2d = canvas.getContext('2d');
        this._freeareas = []; 
        this._occupiedareas = []; 
        var area:Rectangle = new Rectangle(0, 0, this._size, this._size);
        this._freeareas.push(area);
        this._texture = new Texture();
        var texturedata:Uint8Array = new Uint8Array(this._size * this._size * 4);        
        var gltexture:WebGLTexture = this._gl.createTexture();
        this._texture.setData(gltexture);
        this._gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        this._gl.bindTexture(this._gl.TEXTURE_2D, gltexture);        
        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._size, this._size, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata);
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
    }

    public set id(value:number)
    {
        this._id = value;
    }

    public get id():number
    {
        return this._id;
    }

}