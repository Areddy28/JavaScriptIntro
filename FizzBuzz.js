function FizzBuzz() {
// console.log("Hello World!"); 

//alert is like Console.Realine in C#
//Creates a pop up window
let num = prompt("Please input a number"); 
console.log(num); 

if(num % 3 === 0) {
    console.log("Fizz")
}

if(num % 5 === 0){
    console.log("buzz");
}

if((num % 3 !== 0 && num % 5 !== 0 )) {
    console.log(num); 
}
}

// function CheckPassword(text) {
//     let passwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
    
//     if(text.value.match(passwd)) {
//         // alert("Correct password!!")
//         console.log(passwd); 
//         return true; 
//     }
//     else {
//         // alert("Wrong please try again!")
//         console.log(text); 
//         return false; 
//     }
// }

