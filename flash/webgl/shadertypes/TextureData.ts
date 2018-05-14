

export class TextureData
{
    public image:HTMLImageElement;
    public webgltexture:WebGLTexture;
}

export interface TextureDataDictionary
{
    [name:string]:TextureData;
}