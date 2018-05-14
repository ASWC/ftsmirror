import { ByteArray } from "flash/utils/ByteArray";


export class ApplicationDomain
{
    protected static _domain:ApplicationDomain;
    protected _parentDomain:ApplicationDomain;

    constructor(parentDomain:ApplicationDomain = null)
    {
        this._parentDomain = parentDomain;
    }

    public static get currentDomain():ApplicationDomain
    {
        if(!ApplicationDomain._domain)
        {
            ApplicationDomain._domain = new ApplicationDomain();
        }
        return ApplicationDomain._domain;
    }

    public getDefinition(name:string):any
    {
        return null;
    }

    public getQualifiedDefinitionNames():string[]
    {
        return null;
    }

    public hasDefinition(name:string):boolean
    {
        return false;
    }

    public get domainMemory():ByteArray
    {
        return null;
    }

    public set domainMemory(value:ByteArray)
    {

    }

    public static get MIN_DOMAIN_MEMORY_LENGTH():number
    {
        return 0;
    }

    public get parentDomain():ApplicationDomain
    {
        return null;
    }
}