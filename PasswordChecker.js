function Verify() {
    let password = prompt("Please input a valid password"); 
    if(password.length >=5 && password.length <= 10) {
         if(/[a-z]/.test(password)) {
            if(HasVowels(password) === true) {
                if(HasNumbers(password) === true) {
                    console.log("You met all conditions!"); 
                    console.log("Lets go!!!")
                }
                else {
                    console.log("You need a number in your password. Please try again!")
                }
            }
            else {
                console.log("Your password has no vowels. Please try again.")
         }
         }   
    }
    else {
        console.log("Password was not the correct length."); 
        console.log("Length: " + password.length); 
        console.log("The password should be between 5 and 10 characters.")
    }
}

function HasVowels(input){
    let vowels = ["a", "e", "i", "o", "u"]; 
    for(let i = 0; i < vowels.length; i++){
        let v = vowels[i]; 
        if(input.includes(v)){
            return true; 
        }
    }

    return false; 
}

function HasNumbers(input){
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
    for(let i = 0; i < numbers.length; i++){
        let n = numbers[i]; 
        if(input.includes(n)){
            return true; 
        }
    }

    return false; 
}