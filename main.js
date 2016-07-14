/***
 * Imagery class to configure, render image and text into canvas
 * and to output data src in base64 format
 * 
 * config parameter is a literal object format:
 *  {
 *      canvas: {
 *          id: '',       //required
 *          h: '',  //integer
 *          w: ''    //integer
 *      },
 *  
 *      img: {
 *          src: '',
 *          height: '',
 *          width: '',
 *          
 *      },
 * 
 *      text: {
 *          content: '',
 *          top: '',   // integer
 *          left: ''   // integer  
 *          size: ''
 *          font: ''
 *      }
 * 
 *  }
 * 
 */

(function(){

    function Imagery(conf)
    {
        var canvas, ctx;    //canvas and context
        init();             //set up the config

        this.draw = function()
        {

            //set the formatting        
            if( 
                    typeof conf.text.size !== "undefined" &&
                    typeof conf.text.face !== "undefined"
                )
            {
                ctx.font = conf.text.size + "px " + conf.text.face;
            }
            else
            {
                //set a default value here
                ctx.font = "20px serif";
            }

            if(
                    typeof conf.text.content !== "undefined" &&
                    typeof conf.text.top !== "undefined" &&
                    typeof conf.text.left !== "undefined" &&

                )
            {
                ctx.fillText(conf.text.content, conf.text.top, conf.text.left);
            }
            else
            {
                //set default if above are undefined
                ctx.fillText("hello", 20, 20);
            }

            console.log(canvas.toDataURL());

            try
            {

                ctx.textBaseline = conf.text.base;
                
                
            }
            catch (e)
            {
                console.log(e);
            }
        }

        function init()
        {
            try
            {

                if(typeof conf.canvas.id === "string" && conf.canvas.id.length > 0)
                {
                    canvas = document.querySelector('#canvas');   
                    canvas.hidden = conf.canvas.hidden; 

                    //set canvas dimension if defined, otherwise gracefully set to default
                    canvas.height = typeof conf.canvas.h === "number" ? conf.canvas.h : 150 ;
                    canvas.width = typeof conf.canvas.w === "number" ? conf.canvas.w : 300 ;


                    ctx = canvas.getContext("2d");
                }
                else
                {
                    throw "canvas id is undefined";
                }

            }
            catch (e)
            {
                console.log(e);
            }
//something here. 

        }



    }


    var c = {
        canvas: {
            id: 'canvas',
            h: 400,
            w: 350, 
            hidden: false
        },
        text: {
            content: "hello",
            top: 10,
            left: 40, 
            size: 30,
            base: "bottom"
        }
    };

    var img = new Imagery(c);   
    img.draw();
    

})();

