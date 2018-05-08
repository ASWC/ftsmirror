import { BaseObject } from "flash/system/BaseObject";
import { DisplayObject } from "flash/display/DisplayObject";
import { ObjectUtils } from "flash/webgl/ObjectUtils";
import { Context3D } from "flash/webgl/Context3D";

export class Stage3D extends BaseObject
{
    protected static _instance:Stage3D;
    protected static _stage3ds:Context3D[];
    protected static _stageDictionaries:Context3DDictionary;
    protected static _hasStages:boolean;
    protected static _defaultContext:Context3D;

    public static createContext():Context3D
    {
        if(Stage3D._defaultContext)
        {
            Stage3D._defaultContext.release();
            Stage3D._defaultContext = null;
        }
        var context3d:Context3D = new Context3D();
        context3d.contextId = Stage3D._stage3ds.length;
        var canvas:HTMLCanvasElement = document.createElement("canvas");
        canvas.className = "stage3D";
        canvas.setAttribute("style", "background-color:black");
        canvas.width = 100;
        canvas.height = 100;
        document.body.appendChild(canvas);
        context3d.canvas = canvas;
        Stage3D._stageDictionaries[Stage3D._stage3ds.length] = context3d;
        Stage3D._stage3ds.push(context3d);
        context3d.validate();
        return context3d;
    }
    
    public static assignContextByName(name:string):Context3D
    {
        if(Stage3D._defaultContext)
        {
            Stage3D._defaultContext.release();
            Stage3D._defaultContext = null;
        }
        if(Stage3D._stage3ds && Stage3D._stage3ds.length)
        {
            for(var i:number = 0; i < Stage3D._stage3ds.length; i++)
            {
                var context3d:Context3D = Stage3D._stage3ds[i];     
                if(context3d.context3DName == name)
                {
                    if(context3d.hasContextAvailable)
                    {
                        context3d.validate();
                        return context3d;
                    }
                }   
            }
        }
        return null;
    }

    public static assignContextByid(id:number):Context3D
    {
        if(Stage3D._defaultContext)
        {
            Stage3D._defaultContext.release();
            Stage3D._defaultContext = null;
        }
        if(Stage3D._stage3ds && Stage3D._stage3ds.length)
        {
            if(id < Stage3D._stage3ds.length)
            {
                var context3d:Context3D = Stage3D._stage3ds[id];                
                var contextid:number = context3d.context3Did;
                if(context3d.hasContextAvailable)
                {
                    context3d.validate();
                    return context3d;
                }
            }
        }
        return null;
    }

    public static assignContext():Context3D
    {
        if(Stage3D._defaultContext)
        {
            Stage3D._defaultContext.release();
            Stage3D._defaultContext = null;
        }
        if(Stage3D._stage3ds && Stage3D._stage3ds.length)
        {
            for(var i:number = 0; i < Stage3D._stage3ds.length; i++)
            {
                var context3d:Context3D = Stage3D._stage3ds[i];                
                var contextid:number = context3d.context3Did;                
                if(context3d.hasContextAvailable)
                {
                    context3d.validate();
                    context3d.defaultContext = true;
                    Stage3D._defaultContext = context3d;
                    return context3d;
                }
            }
        }
        return null;
    }     

    public static getStages():void
    {
        if(Stage3D._stage3ds)
        {
            return;
        }
        Stage3D._hasStages = true;
        var elements:HTMLCollectionOf<Element> = document.getElementsByClassName("Stage3D");        
        Stage3D._stage3ds = [];
        Stage3D._stageDictionaries = {};
        for(var i:number = 0; i < elements.length; i++)
        {
            var element = elements[i];
            if(element instanceof HTMLCanvasElement)
            {
                var context:Context3D = new Context3D();
                context.contextId = i;
                context.canvas = element;
                Stage3D._stage3ds.push(context);
                Stage3D._stageDictionaries[element.id] = context;
            }
        }
        if(!Stage3D._stage3ds.length)
        {
            Stage3D._hasStages = false;
        }
    }

    protected static getInstance():Stage3D
    {
        if(!Stage3D._instance)
        {
            Stage3D._instance = new Stage3D();
        }
        return Stage3D._instance;
    }
}

interface Context3DDictionary
{
    [name: string]: Context3D;
}