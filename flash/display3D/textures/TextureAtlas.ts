import { BaseObject } from "flash/system/BaseObject";
import { Rectangle } from "flash/geom/Rectangle";
import { Texture } from "flash/display3D/textures/Texture";

export class TextureAtlas extends BaseObject
{
    protected _gl:WebGLRenderingContext;
    protected _size:number;
    protected _id:number;
    //protected _canvas2d:CanvasRenderingContext2D;
    protected _freeareas:Rectangle[];
    protected _occupiedareas:Rectangle[];
    //protected _texture:Texture;
    protected _temp:boolean;

    constructor(gl:WebGLRenderingContext, size:number, temp:boolean = false)
    {
        super();
        this._gl = gl;
        this._size = size;
        this._temp = temp;

        //this.show("first atlas")


        /*var canvas:HTMLCanvasElement = document.createElement("canvas");
        canvas.width = this._size;
        canvas.height = this._size;
        this._canvas2d = canvas.getContext('2d');*/
        this._freeareas = []; 
        this._occupiedareas = []; 
        /*var area:Rectangle = new Rectangle(0, 0, this._size, this._size);
        this._freeareas.push(area);
        this._texture = new Texture();*/
        var gltexture:WebGLTexture = this._gl.createTexture();
        this._gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        //this._gl.activeTexture(textureid);
        this._gl.bindTexture(this._gl.TEXTURE_2D, gltexture);
        if(this._temp)
        {
            var texturedata:Uint8Array = new Uint8Array(16);  
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, 2, 2, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata); 
        }
        else
        {
            var texturedata:Uint8Array = new Uint8Array(this._size * this._size * 4);   
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._size, this._size, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texturedata);
        }
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST);               
        
        this._gl.generateMipmap(this._gl.TEXTURE_2D);

        //this._gl.uniform1i(u_image0Location, 0);
        

        //this.show("atlas loaded")
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