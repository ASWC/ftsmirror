import { BaseObject } from "flash/system/BaseObject";

export class VertexUniform extends BaseObject
{
    public dataType:string;
    public location:WebGLUniformLocation;

    public getLine():string
    {
        return "uniform " + this.dataType + " " + this.name + ";";
    }

    public bind(context:WebGLRenderingContext, data:number[]):void
    {
        if(this.dataType == "vec2")
        {
            context.uniform2f(this.location, data[0], data[1]);
        }
        
    }
}


export interface VertexUniformDictionary
{
    [name:string]:VertexUniform;
}