function StudentInfo() {

let students = [
    student1 = {FirstName: "Akhil", LastName: "Reddy", FavoriteFood:"Pizza", HomeTown: "Rochester, Michigan"},
    student2 = {FirstName: "Ganesh", LastName: "Reddy", FavoriteFood: "Hamburger", HomeTown: "Troy, Michigan"}, 
    student3 = {FirstName: "Kevin", LastName: "Durant", FavoriteFood: "Hot Dog", HomeTown: "Brooklyn, New York"}, 
    student4 = {FirstName: "Lebron", LastName: "James", FavoriteFood: "Tacos", HomeTown: "Los Angeles, Calfornia"}, 
]

let search = prompt("Type in students name"); 
for (i = 0; i <= students.length; i++) {
    if(search.toLowerCase() === students[i].FirstName.toLowerCase()) {
        search = students[i]; 
        let more = prompt("What would you like to about " + search.FirstName);
    }
}
let moreInfo = prompt("What else would you like to know about " + search.FirstName + search.LastName + "?");

if(moreInfo.toLowerCase() === "Home Town") {
    console.log(search.FirstName + "is from " + search.HomeTown + "."); 
}

else if(moreInfo.toLowerCase() === "Favorite Food") {
    console.log(search.FirstName + "favorite food is " + search.FavoriteFood);
}
else {
    console.log("Did not understand please try again!!");
}

}

