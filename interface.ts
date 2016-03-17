interface Shape{
name: string;
width: number;
height: number;
color?: string;
}

function area(shape: Shape){
    var area = shape.width * shape.height;
        if(shape.color)
            return "I'm a "+shape.name+" with an area of "+area+" cm squared and a color of "+shape.color+".";
        else
            return "I'm a "+shape.name+" with an area of "+area+" cm squared.";
}

//creates an error:
//console.log(area({width: 30,height: 44})); 
console.log(area({name: "rectangle", width: 30,height: 44})); 
console.log(area({name: "square",width: 10,height: 10,color:  "blue"})); 
