import { BaseObject } from "flash/system/BaseObject";
import { DisplayObject } from "flash/display/DisplayObject";
import { Error } from "flash/Error";
import { Context3D } from "flash/display3D/Context3D";
import { InteractiveObject } from "flash/display/InteractiveObject";
import { IDisplayObjectContainer } from "flash/display/types/IDisplayObjectContainer";
import { TextSnapshot } from "flash/text/TextSnapshot";
import { IDisplayObject } from "flash/display/types/IDisplayObject";
import { Point } from "flash/geom/Point";

export class DisplayObjectContainer extends InteractiveObject implements IDisplayObjectContainer
{
    protected _mouseChildren:boolean;
    protected _tabChildren:boolean;
    protected _textSnapshot:TextSnapshot;
    protected _children:IDisplayObject[];

    constructor()
    {
        super();
        this._children = [];
        this._mouseChildren = true;
    }

    public get textSnapshot():TextSnapshot
    {
        return this._textSnapshot;
    }

    public get tabChildren():boolean
    {
        return this._tabChildren;
    }

    public get mouseChildren():boolean
    {
        return this._mouseChildren;
    }

    public get numChildren():number
    {
        return this._children.length;
    }

    public addChild(child:IDisplayObject):IDisplayObject
    {
        if(!child)
        {
            return null;
        }
        this._children.push(child);
        DisplayObject.setParent(child, this._parent);
        return child;
    }

    public addChildAt(child:IDisplayObject, index:number):IDisplayObject
    {
        if(!child)
        {
            return null;
        }
        this._children.splice(index, 0, child);
        DisplayObject.setParent(child, this._parent);
        return child;
    }

    public areInaccessibleObjectsUnderPoint(point:Point):boolean
    {
        return null;
    }

    public contains(child:IDisplayObject):boolean
    {
        const index:number = this._children.indexOf(child);
        if(index >= 0)
        {
            return true;
        }
        return false;
    }

    public getChildAt(index:number):IDisplayObject
    {
        if(index >= this._children.length)
        {
            return null;
        }
        if(index < 0)
        {
            return null;
        }
        return this._children[index];
    }

    public getChildByName(name:string):IDisplayObject
    {
        for(var i:number = 0; i < this._children.length; i++)
        {
            if(this._children[i].name == name)
            {
                return this._children[i];
            }
        }
        return null;
    }

    public getChildIndex(child:IDisplayObject):number
    {
        const index = this._children.indexOf(child);
        if (index === -1)
        {
            new Error('The supplied DisplayObject must be a child of the caller');
            return null;
        }
        return index;
    }

    public getObjectsUnderPoint(point:Point):any
    {

    }

    public removeChild(child:IDisplayObject):IDisplayObject
    {
        const index:number = this._children.indexOf(child);
        if (index === -1) 
        {
            return null;
        }
        this._children.splice(index, 1);
        DisplayObject.setParent(child, null);
        return child;
    }

    public removeChildAt(index:number):IDisplayObject
    {
        if(index >= this._children.length)
        {
            return null;
        }
        if(index < 0)
        {
            return null;
        }
        var child:IDisplayObject = this._children[index];
        this._children.splice(index, 1);        
        DisplayObject.setParent(child, null);
        return child;
    }

    public removeChildren(beginIndex:number, endIndex:number):void
    {
        let begin:number = beginIndex;
        let end:number = endIndex;
        if(end > this._children.length)
        {
            end = this._children.length;
        }        
        const range:number = end - begin;
        if (range > 0 && range <= end)
        {
            var removedChildren:IDisplayObject[] = this._children.splice(begin, range);
            for (let i = 0; i < removedChildren.length; ++i)
            {
                DisplayObject.setParent(removedChildren[i], null);
            }
        }
    }

    public setChildIndex(child:IDisplayObject, index:number):void
    {
        if(index >= this._children.length)
        {
            return null;
        }
        if(index < 0)
        {
            return null;
        }
        var currentIndex:number = this._children.indexOf(child);
        if(currentIndex < 0)
        {
            return null;
        }
        this._children.splice(currentIndex, 1);
        this._children.splice(index, 0, child);
    }

    public stopAllMovieClips():void
    {

    }

    public swapChildren(child1:IDisplayObject, child2:IDisplayObject):void
    {
        if (child1 === child2)
        {
            return;
        }
        const index1:number = this.getChildIndex(child1);
        const index2:number = this.getChildIndex(child2);
        this._children[index1] = child2;
        this._children[index2] = child1;
    }

    public swapChildrenAt(index1:number, index2:number):void
    {
        var child1:IDisplayObject = this.getChildAt(index1);
        var child2:IDisplayObject = this.getChildAt(index2);
        if(child1 && child2)
        {
            this.swapChildren(child1, child2);
        }
    }
}