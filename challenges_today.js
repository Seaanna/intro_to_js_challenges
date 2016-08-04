
// challenge number 1
function ourFunction(name, i) {
  var name = prompt("name?");
  var i = name.length;
  return name.charAt(i-2);
}


function reverseCharAt(a,b){
  return a.charAt(a.length-b-1);
}



// challenge number 2
function supply (a,b,c) {
  (b-a)*365*c;
}

// var age = a
// var maxAge = b
// var perDay = c
function supply (a,b,c) {
  var a = prompt("How old are you?");
  var b = prompt("What age will you die?")
  var c = prompt("How many snacks do you eat in one day?")
  return alert("You will need " + (b-a)*365*c + " snacks for a lifetime supply.");
}


// challenge number 3









// Password challenge


// isUserIdValid(String) -> Boolean
// isUserIdValid returns true if the string is a valid user ID, and false if not.
// Examples:
//  isUserIdValid("123456")  -> false
//  isUserIdValid("1234567") -> true
//  isUserIdValid("$234567") -> false
//  isUserIdValid("#234567") -> false

var id = "sdlearn!"
var password1 = "codemonkey"


// onward!

function isUserIdValid(id) {
  return (id.length >=6 && (!id.includes("!") && !id.includes("#") && !id.includes("$")));
};

function isPasswordValid(password1) {
  return password1.length >=6 && (password1.includes("!") || password1.includes("#")||password1.includes("$")) && ((password1.toUpperCase() != password1) && (password1.toLowerCase() != password1)) && (password1.includes("0") || password1.includes("1") || password1.includes("2") || password1.includes("3")|| password1.includes("4") || password1.includes("5") || password1.includes("6") || password1.includes("7") || password1.includes("8") || password1.includes("9"));
};


// call the function isUserIdValid(password); and function isUserIdValid(id); to see if they are true or false

// onward


function credentialsValid() {
  var id = prompt("What be your username, young warrior?");
  var password1 = prompt("And your password be?");

  alert("your password is valid" + (isPasswordValid(password1) && isUserIdValid(id)));
}


// temperature challenge 

    function cToF(celsius)   
    {  
      var cTemp = celsius;  
      var cToFahr = cTemp * 9 / 5 + 32;  
      var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
        console.log(message);  
    }  
      
    function fToC(fahrenheit)   
    {  
      var fTemp = fahrenheit;  
      var fToCel = (fTemp - 32) * 5 / 9;  
      var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';  
        console.log(message);  
    }   
    cToF(60);  
    fToC(45);  