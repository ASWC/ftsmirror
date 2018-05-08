

export class ObjectUtils
{
    public static getProperty(target:any, key:string):any
    {
        if(target instanceof HTMLElement)
        {
            if(target.dataset[key] != undefined)
            {
                return target.dataset[key];
            }
        }
        if(target[key] != undefined)
        {
            return target.dataset[key];
        }
        return null;
    }

    public static setProperty(target:any, key:string, value:any):void
    {
        if(target instanceof HTMLElement)
        {
            target.dataset[key] = value;
        }
        else
        {
            target[key] = value;
        }        
    }
}