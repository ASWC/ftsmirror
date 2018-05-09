import { BaseObject } from "flash/system/BaseObject";

export class Program3D extends BaseObject
{
    public static VEC4:string = "vec4";

    public static PRECISION_MEDIUM:string = "mediump";

    protected _vertexAttributes:ShaderVariable[];
    protected _vertexMainLines:string[];
    protected _fragmentMainLines:string[];
    protected _precision:string;
    protected _isProgramBuilt:boolean;
    protected _isUploaded:boolean;

    constructor()
    {
        super();
        this._isUploaded = false;
        this._isProgramBuilt = false;
        this._fragmentMainLines = [];
        this._vertexAttributes = [];
        this._vertexMainLines = [];
        this._precision = "precision mediump float;";
    }

    protected extractVariables(variables:ShaderVariable[]):string
    {
        var lines:string = '';
        for(var i:number = 0; i < variables.length; i++)        
        {
            lines += variables[i].getLine() + this.getLineBreak();
        }
        return lines;
    }

    protected extractLines(mainlines:string[]):string
    {
        var lines:string = '';
        for(var i:number = 0; i < mainlines.length; i++)        
        {
            lines += mainlines[i] + this.getLineBreak();
        }
        return lines;
    }

    protected buildVertex():string
    {
        var shaderlines:string = '';
        shaderlines += this.extractVariables(this._vertexAttributes);
        shaderlines += "void main(void)" + this.getLineBreak();
        shaderlines += "{" + this.getLineBreak();
        shaderlines += this.extractLines(this._vertexMainLines);
        shaderlines += "}" + this.getLineBreak();        
        return shaderlines;
    }

    public getLineBreak():string
    {
        return "\n";
    }

    public build(context:WebGLRenderingContext):void
    {
        if(this._isUploaded)
        {
            return;
        }

        var vertexcode:string = this.buildVertex();
       // var fragmentcode:string = this.buildFragment();

        this.show(vertexcode);

        this._isUploaded = true;

        /*
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
                }
            
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);*/
    }

    public get isUploaded():boolean
    {
        return this._isUploaded;
    }

    public addToFragmentMain(value:string):void
    {
        this._fragmentMainLines.push(value);
    }

    public setPrecision(value:string):void
    {
        this._precision = "precision " + value + " float;";
    }

    public addAttributeToVertex(value:string, type:string):void
    {
        var variable:ShaderVariable = new ShaderVariable();
        variable.modifier = "attribute";
        variable.type = type;
        variable.name = value;
        this._vertexAttributes.push(variable);
    }

    public addToVertexMain(value:string):void
    {
        this._vertexMainLines.push(value);
    }

}

class ShaderVariable
{
    public type:string;
    public name:string;
    public modifier:string;

    public getLine():string
    {
        return this.modifier + " " + this.type + " " + this.name;
    }
}