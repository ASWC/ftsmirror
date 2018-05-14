

export class SecurityDomain
{
    protected static _instance:SecurityDomain;

    public static get currentDomain():SecurityDomain
    {
        if(!SecurityDomain._instance)
        {
            SecurityDomain._instance = new SecurityDomain();
        }
        return SecurityDomain._instance;
    }
}