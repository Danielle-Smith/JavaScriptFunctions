function hiThere() {
    console.log('Hi there'); // void functions don't return anything
}
hiThere(); // Hi there



function hiThereTwo() {
    return 'Hi there again';
}
hiThereTwo(); // "Hi there again"



var storedText = hiThere(); 
storedText;
var storedTextTwo = hiThereTwo();
storedTextTwo; // "Hi there again"



//  variable scope
var userObj = {
    email: 'sample@example.com',
    fullName: 'Kristine Hudgens'
  }
  
  function dashboardGreeting() {
    var userObj = { // error can occor if you get lazy and you don't label this var/let
      email: 'sample2@example.com',
      fullName: 'Jordan Hudgens'
    }
    console.log("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log(userObj.fullName);



function greeting() {
    return "Hi there!"; // function declaration
}

var greeting = function () {
    return "Hi there again!"; // function expression is strored in a variable
   }; // don't forget a semicolon after a function expression

   var age = 4;
   
if (age <= 10) {
    var buildMenu = function () {
      return "Kids' Menu";
};
   
function wrongMenuBuilder () { // this shouldn't be in code block. That is what function expressions are for
    return "Wrong Kids' Menu";
}
   
console.log(buildMenu());
console.log(wrongMenuBuilder());
}




//  Function arguments

function fullName(firstName, lastName, language) {
    var language = language || 'English'; // defining a default || = or 
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));



// Function Arguments: reference vs value
// when it comes to arguments in Javascript functions you are going to pass in objects and those are going to get treated by reference which mean they're not actually grabbing the values they're grabbing a reference to the original object.
// if you pass in a variable it is simply going to essentially make a copy of that variable or of that variables value

var someUser = {
    name: 'Jordan'
}
function nameFormatter (user) {
    return user.name = 'Oops'; // will change the object but not a variable. To fix that instead of calling the whole object you can put in someUser.name 
}
nameFormatter(someUser); // "Oops"
someUser; // Object {name: "Oops"}


var someName = 'Tiffany';
function someOtherNameFormatter(name) {
    return name = 'Oops';
}
someOtherNameFormatter(someName); // "Oops"     will only return "Oops" when function is called. Other calls to var will return "Tiffany".
someName; // "Tiffany"




var someUser = {
    name: 'Jordan'
}
function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Jordan"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"