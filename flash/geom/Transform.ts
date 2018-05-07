import { BaseObject } from "flash/system/BaseObject";
import { DisplayObject } from "flash/display/DisplayObject";
import { ColorTransform } from "flash/geom/ColorTransform";
import { Matrix } from "flash/geom/Matrix";
import { Rectangle } from "flash/geom/Rectangle";

export class Transform extends BaseObject
{
    protected _displayObject:DisplayObject;
    protected _colorTransform:ColorTransform;
    protected _matrix:Matrix;

    constructor(displayObject:DisplayObject)
	{
        super();
        this._displayObject = displayObject;
    }

    public get concatenatedMatrix():Matrix
    {
         // GET ALL matrix OBJECT FROM PARENTS
        return null;
    }
    
    public get concatenatedColorTransform():ColorTransform
    {
        // GET ALL COLORTRANSFORM OBJECT FROM PARENTS
        return null//this._colorTransform;
    }

    public get pixelBounds():Rectangle
	{
		// calculate bounds
		return null;
	}

    public get matrix():Matrix
    {
        if(!this._matrix)
        {
            this._matrix = new Matrix();
        }
        return this._matrix;
    }
    
    public set matrix(value:Matrix)
    {
        this._matrix = value;
    }
        
    public get colorTransform():ColorTransform
    {
        if(!this._colorTransform)
        {
            this._colorTransform = new ColorTransform();
        }
        return this._colorTransform;
    }
    
    public set colorTransform(value:ColorTransform)
    {
        this._colorTransform = value;
    } 
}