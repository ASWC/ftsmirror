import { BaseObject } from "flash/system/BaseObject";
import { DisplayObject } from "flash/display/DisplayObject";
import { Error } from "flash/Error";
import { Context3D } from "flash/webgl/Context3D";

export class DisplayObjectContainer extends BaseObject
{
    
}

export class InnerContainer extends BaseObject
{
    protected _children:DisplayObject[];
    protected _parent:DisplayObjectContainer;

    constructor()
    {
        super();
        this._children = [];
    }

    public render(context:Context3D):void
    {
        
    }

    public set parent(value:DisplayObjectContainer)
    {
        this._parent = value;
    }

    public addChildAt(child:DisplayObject, index:number):DisplayObject
    {
        if(!child)
        {
            return null;
        }
        this._children.splice(index, 0, child);
        DisplayObject.setParent(child, this._parent);
        return child;
    }

    public addChild(child:DisplayObject):DisplayObject
    {
        if(!child)
        {
            return null;
        }
        this._children.push(child);
        DisplayObject.setParent(child, this._parent);
        return child;
    }

    public get numChildren():number
    {
        return this._children.length;
    }

    public removeChildAt(index:number):DisplayObject
    {
        if(index >= this._children.length)
        {
            return null;
        }
        if(index < 0)
        {
            return null;
        }
        var child:DisplayObject = this._children[index];
        this._children.splice(index, 1);        
        DisplayObject.setParent(child, null);
        return child;
    }

    public setChildIndex(child:DisplayObject, index:number):void
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

    public swapChildrenAt(index1: number, index2: number): void
    {
        var child1:DisplayObject = this.getChildAt(index1);
        var child2:DisplayObject = this.getChildAt(index2);
        if(child1 && child2)
        {
            this.swapChildren(child1, child2);
        }
    }

    public getChildByName(name: string): DisplayObject
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

    public getChildAt(index: number): DisplayObject
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

    public contains(child: DisplayObject): boolean
    {
        const index:number = this._children.indexOf(child);
        if(index >= 0)
        {
            return true;
        }
        return false;
    }

    public removeChildren(beginIndex: number = 0, endIndex: number = 2147483647): void
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
            var removedChildren:DisplayObject[] = this._children.splice(begin, range);
            for (let i = 0; i < removedChildren.length; ++i)
            {
                DisplayObject.setParent(removedChildren[i], null);
            }
        }
    }

    public removeChild(child: DisplayObject): DisplayObject
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

    public getChildIndex(child: DisplayObject): number
    {
        const index = this._children.indexOf(child);
        if (index === -1)
        {
            new Error('The supplied DisplayObject must be a child of the caller');
            return null;
        }
        return index;
    }

    public swapChildren(child1: DisplayObject, child2: DisplayObject): void
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
}