import { IndexedVertice } from "flash/webgl/geom/IndexedVertice";
import { ArrayTypes } from "flash/webgl/data/ArrayTypes";

export class IndexedMatrix extends IndexedVertice
{
    constructor(a:number=1, b:number=0, c:number=0, d:number=1, tx:number=0, ty:number=0, totalDuplicate:number = 1)
    {
        super(9, ArrayTypes.FLOAT32ARRAY, 3, totalDuplicate);
    }

    public setProjection(width:number, height:number):void
    {
        this.identity();
        this.setData(0, 2 / width);
        this.setData(1, 0);
        this.setData(2, 0);
        this.setData(3, 0);
        this.setData(4, -2 / height);
        this.setData(5, 0);
        this.setData(6, -1);
        this.setData(7, 1);
        this.setData(8, 1);
    }

    public rotate(angle:number):void
	{
        const sin:number = Math.sin(angle);
        const cos:number = Math.cos(angle);  
        this.setData(0, cos);
        this.setData(1, -sin);
        this.setData(2, 0);
        this.setData(3, sin);
        this.setData(4, cos);
        this.setData(5, 0);
        this.setData(6, 0);
        this.setData(7, 0);
        this.setData(8, 1);
    }

    public translate(dx:number, dy:number):void
	{        
        this.setData(0, 1);
        this.setData(1, 0);
        this.setData(2, 0);
        this.setData(3, 0);
        this.setData(4, 1);
        this.setData(5, 0);
        this.setData(6, dx);
        this.setData(7, dy);
        this.setData(8, 1);
    }

    public scale(sx:number, sy:number):void
	{
        this.setData(0, sx * this.getData(0));
        this.setData(1, sx * this.getData(1));
        this.setData(2, sx * this.getData(2));
        this.setData(3, sy * this.getData(3));
        this.setData(4, sy * this.getData(4));
        this.setData(5, sy * this.getData(5));
    }

    public identity():void
	{
        this.setData(0, 1);
        this.setData(1, 0);
        this.setData(2, 0);
        this.setData(3, 0);
        this.setData(4, 1);
        this.setData(5, 0);
        this.setData(6, 0);
        this.setData(7, 0);
        this.setData(8, 1);
    }
}