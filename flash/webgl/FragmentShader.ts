
import { VertexUniform, VertexUniformDictionary } from "flash/webgl/shadertypes/VertexUniform";
import { VertexVarying, VertexVaryingDictionary } from "flash/webgl/shadertypes/VertexVarying";
import { VertexAttribute, VertexAttributeDictionary } from "flash/webgl/shadertypes/VertexAttribute";
import { ProgramShader } from "flash/webgl/ProgramShader";

export class FragmentShader extends ProgramShader
{
    protected _precision:string;

    constructor()
    {
        super();
    }

    public buildShader(context:WebGLRenderingContext):void
    {
        var vertexcode:string = this.buildSource();
        this.show(vertexcode)
        this._programShader = this.createShader(context, context.FRAGMENT_SHADER, vertexcode);
        if(!this._programShader)
        {
            var error:Error = new Error(context.getShaderInfoLog(this._programShader));
            return;
        }
        this._shaderValid = true;
    }

    protected buildSource():string
    {
        var shaderlines:string = '';
        shaderlines += this._precision + this.lineBreak;    
        shaderlines += this.extractAttributes(this._attributes);    
        shaderlines += this.extractUniforms(this._uniform);     
        shaderlines += this.extractVarying(this._varying); 
        shaderlines += "void main()" + this.lineBreak;
        shaderlines += "{" + this.lineBreak;      
        shaderlines += this.extractLines(this._mainLines);
        shaderlines += "}" + this.lineBreak;        
        return shaderlines;
    }

    public set precision(value:string)
    {
        this._precision = value;
    }

    public addVarying(value:string, type:string):void
    {
        var variable:VertexVarying = new VertexVarying(value, type);   
        this._varying.push(variable);
        this._varyingDic[variable.name] = variable;
    }

    public addUniform(value:string, type:string):void
    {
        var variable:VertexUniform = new VertexUniform(value, type);     
        this._uniform.push(variable);
        this._uniformDic[variable.name] = variable;
    }

    public addAttribute(value:string, type:string):void
    {
        var variable:VertexAttribute = new VertexAttribute(value, type);
        this._attributes.push(variable);
        this._attributesDic[value] = variable;
    }

    public addToMain(value:string):void
    {
        this._mainLines.push(value);
    }
}