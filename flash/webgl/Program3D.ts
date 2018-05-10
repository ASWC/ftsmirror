import { BaseObject } from "flash/system/BaseObject";
import { Error } from "../Error";
import { Rectangle } from "../geom/Rectangle";
import { Matrix } from "../geom/Matrix";

export class Program3D extends BaseObject
{
    public static VEC4:string = "vec4";
    public static VEC2:string = "vec2";
    public static MAT3:string = "mat3";
    

    

    public static PRECISION_MEDIUM:string = "mediump";

    protected _vertexAttributes:ShaderVariable[];
    protected _vertexUniform:ShaderVariable[];
    protected _vertexVarying:ShaderVariable[];


    protected _fragmentUniform:ShaderVariable[];
    protected _fragmentVarying:ShaderVariable[];


    protected _vertexMainLines:string[];
    protected _fragmentMainLines:string[];
    protected _precision:string;
    protected _isProgramBuilt:boolean;
    protected _isUploaded:boolean;
    protected _shaderProgram:WebGLProgram;
    protected _buffer:WebGLBuffer;
    protected _colorbuffer:WebGLBuffer;

    protected _rectangles:Rectangle[];

    constructor()
    {
        super();
        this._isUploaded = false;
        this._isProgramBuilt = false;
        this._fragmentVarying = [];
        this._vertexVarying = [];
        this._fragmentUniform = [];
        this._fragmentMainLines = [];
        this._vertexAttributes = [];
        this._vertexUniform = [];
        this._vertexMainLines = [];
        this._precision = "precision mediump float;";
    }

    public addVaryingToFragment(value:string, type:string):void
    {
        var variable:ShaderVariable = new ShaderVariable();
        variable.modifier = "varying";
        variable.type = type;
        variable.name = value;
        this._fragmentVarying.push(variable);
    }

    public addVaryingToVertex(value:string, type:string):void
    {
        var variable:ShaderVariable = new ShaderVariable();
        variable.modifier = "varying";
        variable.type = type;
        variable.name = value;
        this._vertexVarying.push(variable);
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
        shaderlines += this.extractVariables(this._vertexUniform);
        shaderlines += this.extractVariables(this._vertexVarying);
        shaderlines += "void main()" + this.getLineBreak();
        shaderlines += "{" + this.getLineBreak();
        shaderlines += this.extractLines(this._vertexMainLines);
        shaderlines += "}" + this.getLineBreak();        
        return shaderlines;
    }

    public getLineBreak():string
    {
        return "\n";
    }

    protected buildFragment():string
    {
        var shaderlines:string = '';
        shaderlines += this._precision + this.getLineBreak();        
        shaderlines += this.extractVariables(this._fragmentUniform);     
        shaderlines += this.extractVariables(this._fragmentVarying); 
        shaderlines += "void main()" + this.getLineBreak();
        shaderlines += "{" + this.getLineBreak();      
        shaderlines += this.extractLines(this._fragmentMainLines);
        shaderlines += "}" + this.getLineBreak();        
        return shaderlines;
    }

    public present(context:WebGLRenderingContext):void
    {
        if(!this._shaderProgram)
        {
            return;
        }

        var translation = [200, 150];
        var angleInRadians = 0;
        var scale = [1, 1];

        
        context.useProgram(this._shaderProgram);



        for(var i:number = 0; i < this._vertexAttributes.length; i++)
        {
            context.enableVertexAttribArray(this._vertexAttributes[i].attributeLocation);
        }
        context.bindBuffer(context.ARRAY_BUFFER, this._buffer);    
        // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = context.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        for(var i:number = 0; i < this._vertexAttributes.length; i++)
        {
            context.vertexAttribPointer(this._vertexAttributes[i].attributeLocation, size, type, normalize, stride, offset)
        }
        context.bindBuffer(context.ARRAY_BUFFER, this._colorbuffer);    
        // Tell the color attribute how to get data out of colorBuffer (ARRAY_BUFFER)
        var size = 4;          // 4 components per iteration
        var type = context.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        //context.vertexAttribPointer(colorLocation, size, type, normalize, stride, offset)    
        // Compute the matrix
        var matrix:Matrix = new Matrix(2 / context.canvas.clientWidth, 0, 0, 0, -2 / context.canvas.clientHeight, 0)
        matrix.translate(translation[0], translation[1]);
        matrix.rotate(angleInRadians);
        matrix.scale(scale[0], scale[1]);



    
        // Set the matrix.
        context.uniformMatrix3fv(this._vertexUniform[0].uniformLocation, false, matrix.rawMatrix);
    
        // Draw the geometry.
        var primitiveType = context.TRIANGLES;
        var offset = 0;
        var count = 6;
        context.drawArrays(primitiveType, offset, count);
        
        
    }

    public build(context:WebGLRenderingContext):void
    {
        if(this._isUploaded)
        {
            return;
        }
        var vertexcode:string = this.buildVertex();
        var fragmentcode:string = this.buildFragment();
        var vertexShader:WebGLShader = this.createShader(context, context.VERTEX_SHADER, vertexcode);
        var fragmentShader:WebGLShader = this.createShader(context, context.FRAGMENT_SHADER, fragmentcode);
        if(!vertexShader || !fragmentShader)
        {
            this.reveal(Error.GetLastError())
            return;
        }
        var program:WebGLProgram = this.createProgram(context, vertexShader, fragmentShader);
        if(!program)
        {
            return;
        }
        this._shaderProgram = program;
        this.extractAttributesLocation(context);
        this.extractUniformLocation(context);   
        this._buffer = context.createBuffer(); // < dynamic
        context.bindBuffer(context.ARRAY_BUFFER, this._buffer);
        this.setGeometry(context);
        this._colorbuffer = context.createBuffer();
        context.bindBuffer(context.ARRAY_BUFFER, this._colorbuffer);
        this.setColors(context);
        this._isUploaded = true;
    }

    protected setGeometry(context:WebGLRenderingContext)
    {
        context.bufferData(
            context.ARRAY_BUFFER,
            new Float32Array([
                -150, -100,
                 150, -100,
                -150,  100,
                 150, -100,
                -150,  100,
                 150,  100]),
                 context.STATIC_DRAW);
      }
      
      // Fill the buffer with colors for the 2 triangles
      // that make the rectangle.
      // Note, will put the values in whatever buffer is currently
      // bound to the ARRAY_BUFFER bind point
      protected setColors(context:WebGLRenderingContext) {
        // Make every vertex a different color.
        context.bufferData(
            context.ARRAY_BUFFER,
            new Float32Array(
              [ Math.random(), Math.random(), Math.random(), 1,
                Math.random(), Math.random(), Math.random(), 1,
                Math.random(), Math.random(), Math.random(), 1,
                Math.random(), Math.random(), Math.random(), 1,
                Math.random(), Math.random(), Math.random(), 1,
                Math.random(), Math.random(), Math.random(), 1]),
                context.STATIC_DRAW);
      }

    protected extractUniformLocation(context:WebGLRenderingContext):void
    {
        if(this._vertexUniform && this._vertexUniform.length)
        {
            for(var i:number = 0; i < this._vertexUniform.length; i++)
            {
                var uniformLocation:WebGLUniformLocation = context.getUniformLocation(this._shaderProgram, this._vertexUniform[i].name);
                this._vertexUniform[i].uniformLocation = uniformLocation;
            }
        }
        if(this._fragmentUniform && this._fragmentUniform.length)
            {
                for(var i:number = 0; i < this._fragmentUniform.length; i++)
                {
                    var uniformLocation:WebGLUniformLocation = context.getUniformLocation(this._shaderProgram, this._fragmentUniform[i].name);
                    this._fragmentUniform[i].uniformLocation = uniformLocation;
                }
            }
    }

    protected extractAttributesLocation(context:WebGLRenderingContext):void
    {
        if(this._vertexAttributes && this._vertexAttributes.length)
        {
            for(var i:number = 0; i < this._vertexAttributes.length; i++)
            {
                var positionAttributeLocation:number = context.getAttribLocation(this._shaderProgram, this._vertexAttributes[i].name);
                this._vertexAttributes[i].attributeLocation = positionAttributeLocation;   
            }
        }
    }

   // protected setRectangle(gl, x, y, width, height) 
   // {
       // var x1 = x;
        //var x2 = x + width;
       // var y1 = y;
        //var y2 = y + height;
       
        // NOTE: gl.bufferData(gl.ARRAY_BUFFER, ...) will affect
        // whatever buffer is bound to the `ARRAY_BUFFER` bind point
        // but so far we only have one buffer. If we had more than one
        // buffer we'd want to bind that buffer to `ARRAY_BUFFER` first.
       
        /*gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
           x1, y1,
           x2, y1,
           x1, y2,
           x1, y2,
           x2, y1,
           x2, y2]), gl.STATIC_DRAW);*/
     // }

    protected createProgram(context:WebGLRenderingContext, vertexShader:WebGLShader, fragmentShader:WebGLShader):WebGLProgram
    {
        var program:WebGLProgram = context.createProgram();
        context.attachShader(program, vertexShader);
        context.attachShader(program, fragmentShader);
        context.linkProgram(program);
        var success = context.getProgramParameter(program, context.LINK_STATUS);
        if (success) 
        {
            return program;
        }
        var error:Error = new Error(context.getProgramInfoLog(program));
        context.deleteProgram(program);
        return null;
      }

    protected createShader(context:WebGLRenderingContext, type:number, source:string):WebGLShader
    {
        var shader:WebGLShader = context.createShader(type);
        context.shaderSource(shader, source);
        context.compileShader(shader);
        var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
        if (success) 
        {
          return shader;
        }        
        var error:Error = new Error(context.getShaderInfoLog(shader));
        context.deleteShader(shader);
        return null;
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

    
    public addUniformToFragment(value:string, type:string):void
    {
        var variable:ShaderVariable = new ShaderVariable();
        variable.modifier = "uniform";
        variable.type = type;
        variable.name = value;
        this._fragmentUniform.push(variable);
    }

    public addUniformToVertex(value:string, type:string):void
    {
        var variable:ShaderVariable = new ShaderVariable();
        variable.modifier = "uniform";
        variable.type = type;
        variable.name = value;
        this._vertexUniform.push(variable);
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
    public attributeLocation:number;
    public uniformLocation:WebGLUniformLocation;

    public getLine():string
    {
        return this.modifier + " " + this.type + " " + this.name + ";";
    }
}