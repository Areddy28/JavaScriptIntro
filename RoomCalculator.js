function areaOfRectangle() {


    let rectangleLength = parseInt(prompt("Enter length of rectangle:")); 
    let rectangleWidth = parseInt(prompt("Enter width of rectangle:")); 
    
    let areaOfRectangle = rectangleLength * rectangleWidth; 
    
    console.log("Area of rectangle is: " + areaOfRectangle); 
    }

function perimeterOfRectangle() {

    let rectangleLength = parseInt(prompt("Enter length of rectangle:")); 
    let rectangleWidth = parseInt(prompt("Enter width of rectangle:")); 
    
    let perimeterOfRectangle = 2 * (rectangleLength + rectangleWidth); 
    
    console.log("Perimeter of rectangle is: " + perimeterOfRectangle);
}

function paint(p) {
    return p /5;  
    
}

function carpet(a) {
    return a /5; 
}

function RoomCalculation() {
let neededPaint = paint(p);
let neededCarpet = carpet(a);

console.log("You will need " + neededPaint + " cans of paint to fill this room.")
console.log("You will need " + neededCarpet + " squares of carpet to fill this room.")

}