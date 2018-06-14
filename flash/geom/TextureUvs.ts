import { Rectangle } from "flash/geom/Rectangle";


export class TextureUvs extends Rectangle
{
    constructor(x:number=0, y:number=0, width:number=1, height:number=1)
    {
        super(0, 0, 1, 1)
    }

    public get vertices():Float32Array
    {
        if(!this._vertices)
        {
            this._vertices = new Float32Array(12);            
        }
        return this._vertices;
    }

    public duplicate(totalDuplicates:number):void
    {

    }

    public setUv(index:number, value:number):void
    {
        if(!this._vertices)
        {
            this._vertices = new Float32Array(12);            
        }
        this._vertices[index] = value;
    }
}