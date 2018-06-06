

export class Tracer
{
	public static DUMP:string[] = [];

	public static revealMethods(value:Object):string
	{
		var result:string = 'reveal';
		try
		{
			if(!value)
			{
				var result:string = "reveal methods: null";
			}
			else
			{
				var result:string = "reveal methods: ";
			}
			for(var key in value)
			{
				var instanceItem:any = value[key];
				if(instanceItem instanceof Function)
				{
					result += 'method: ' + key + ' : ' + value[key] + "\n";
					
				}       	
			}
			Tracer.DUMP.push(result);
			console.log(result);
		}
		catch(e)
		{

		}	
		return result;	
	}

	public static reveal(value:any):string
	{
		var result:string = 'reveal';
		if(!value)
		{
			var result:string = "reveal: null";
			console.log(result);
			return;
		}
		if(value === undefined)
		{
			var result:string = "reveal: undefined";
			console.log(result);
			return;
		}
		var result:string = "reveal: ";			
		for(var key in value)
		{
			//console.log(key)
			var instanceItem:any = Tracer.getValue(key, value);
			if(instanceItem)
			{
				if(instanceItem instanceof Function)
				{
					result += 'method: ' + key + "\n";				
				}
				else
				{
					try
					{
						result += key + ' : ' + instanceItem + "\n";
					}
					catch(e)
					{

					}
														
				} 
			}	
		}
		Tracer.DUMP.push(result);
		console.log(result);	
		return result;				
	}

	private static getValue(key:string, value:any):any
	{
		var valueResult:any = null;
		try
		{
			valueResult = value[key];
		}
		catch(e)
		{

		}
		return valueResult;
	}

	public static show(value:any):string
	{
		var result:string = 'show';
		try
		{
			if(!value)
			{
				var result:string = "show: null";
			}
			else
			{
				var result:string = "show: " + value.toString();
			}	
			Tracer.DUMP.push(result);
			console.log(result);
		}
		catch(e)
		{

		}		
		return result;	
	}

	public static clear():void
	{
		Tracer.DUMP = [];
	}

}

