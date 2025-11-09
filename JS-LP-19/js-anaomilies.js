let myObject = {};
let objString = myObject.toString();

console.log(objString); //Output: ("[object Object]");

JSON.stringify({}); // Outputs ("{}"); --> Converts JSON or object to string

JSON.parse("{}"); // Outputs {} ---> Converts String Object(stringifyed Object) to Normal Object
