import { ApplicationDomain } from "flash/system/ApplicationDomain";
import { DisplayObjectContainer } from "flash/display/DisplayObjectContainer";
import { SecurityDomain } from "flash/system/SecurityDomain";

export class LoaderContext
{
    public allowCodeImport:boolean;
    public applicationDomain:ApplicationDomain;
    public parameters:any;
    public imageDecodingPolicy:string;
    public securityDomain:SecurityDomain;
    public requestedContentParent:DisplayObjectContainer;
    public checkPolicyFile:boolean;

    constructor(checkPolicyFile:boolean = false, applicationDomain:ApplicationDomain = null, securityDomain:SecurityDomain = null)
    {
        this.checkPolicyFile = false;
        this.requestedContentParent = null;
    }

    
    public get allowLoadBytesCodeExecution():boolean
    {
        return false;
    }

    public set allowLoadBytesCodeExecution(value:boolean)
    {

    }
    
    
    
    
    
    
}