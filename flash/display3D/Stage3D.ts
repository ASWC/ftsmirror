import { BaseObject } from "flash/system/BaseObject";
import { DisplayObject } from "flash/display/DisplayObject";
import { ObjectUtils } from "flash/webgl/ObjectUtils";
import { Context3D } from "flash/display3D/Context3D";
import { Tracer } from "../system/Tracer";

export class Stage3D extends BaseObject
{
    protected static _instance:Stage3D;
    protected static _stage3ds:Context3D[];
    protected static _stageDictionaries:Context3DDictionary;
    protected static _hasStages:boolean;
    protected static _defaultContext:Context3D;

    public static assignContextByid(id:number):Context3D
    {
        if(Stage3D._stageDictionaries[id] != undefined)
        {
            var context:Context3D = Stage3D._stageDictionaries[id];
            if(context)
            {
                ObjectUtils.setProperty(context.canvas, "contextid", true);
                return context;
            }            
        }
        return null;
    }

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
        var currentContextid:number = 0;
        for(var i:number = 0; i < elements.length; i++)
        {            
            var element = elements[i];
            if(element instanceof HTMLCanvasElement)
            {
                var hasContext:boolean = ObjectUtils.getProperty(element, 'hasContext') || false;
                if(!hasContext)
                {
                    var context:Context3D = new Context3D();
                    context.contextId = currentContextid;
                    context.canvas = element;
                    Stage3D._stage3ds.push(context);
                    var stageid:number = parseInt(ObjectUtils.getParameter(element, "contextid"));                    
                    if(!isNaN(stageid))
                    {
                        context.contextId = stageid;
                        Stage3D._stageDictionaries[stageid] = context;
                    }
                    currentContextid++;
                }
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