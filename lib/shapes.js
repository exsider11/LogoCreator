class Logo{
    constructor(text,textColor,shape,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor == shapeColor;
        }
        svgShape(shape){
            if(shape == 'circle'){
                return "ellipse";
            }
            else{
                return "polygon";
            }
        }
        svgParameters(shape){
            if(shape == 'square'){
                return "0,0 100,0 100,50 0,50"
            }
            if(shape == 'circle'){
                return "150, 18 244, 182 56, 182"
            }
            if(shape == 'triangle'){
                return "150, 18 244, 182 56, 182"
            }
        }
    }
    module.exports = Logo;