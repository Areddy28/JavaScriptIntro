function GetRoomCalculation() {


    let rectangleLength = parseFloat(prompt("Enter length of rectangle:")); 
    let rectangleWidth = parseFloat(prompt("Enter width of rectangle:")); 
    let height = parseFloat(prompt("Enter the height:")); 

    let areaOfRectangle = rectangleLength * rectangleWidth; 
     let perimeterOfRectangle = 2 * (rectangleLength + rectangleWidth); 
     let volume = rectangleLength * rectangleWidth * height; 
     let paint = perimeterOfRectangle / 5; 
     let carpet = areaOfRectangle / 5; 
    console.log("Area of rectangle is: " + areaOfRectangle); 
    console.log("Perimeter of rectangle is: " + perimeterOfRectangle);
    console.log("Volume of room is " + volume); 
    console.log("You will need " + paint + " cans of paint to fill this room.");
    console.log("You will need " + carpet + " squares of carpet to fill this room.");

    }

// function perimeterOfRectangle() {

//     let rectangleLength = parseInt(prompt("Enter length of rectangle:")); 
//     let rectangleWidth = parseInt(prompt("Enter width of rectangle:")); 
    
//     let perimeterOfRectangle = 2 * (rectangleLength + rectangleWidth); 
    
//     console.log("Perimeter of rectangle is: " + perimeterOfRectangle);
// }

// function paint(p) {
//     return p /5;  
    
// }

// function carpet(a) {
//     return a /5; 
// }

// function RoomCalculation() {
// let neededPaint = paint(p);
// let neededCarpet = carpet(a);

// console.log("You will need " + neededPaint + " cans of paint to fill this room.")
// console.log("You will need " + neededCarpet + " squares of carpet to fill this room.")

// }