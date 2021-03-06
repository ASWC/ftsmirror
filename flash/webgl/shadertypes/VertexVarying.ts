import { BaseObject } from "flash/system/BaseObject";

export class VertexVarying extends BaseObject
{
    public dataType:string;
    public varyingLocation:number;
    public size:number = 0;

    constructor(name:string, type:string)
    {
        super();
        this.name = name;
        this.dataType = type;
    }

    public getLine():string
    {
        return "varying " + this.dataType + " " + this.name + ";";        
    }
}

export interface VertexVaryingDictionary
{
    [name:string]:VertexVarying;
}