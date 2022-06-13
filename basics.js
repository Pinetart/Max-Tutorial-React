// Primitives: number, string, boolean
// Complex: array, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Type inference
var course = "React - The complete guide";
course = 12345;
//Primitives
var age = 12.5;
var userName = "zbirkett";
var isInstructor = false;
//Complex
var hobbies = ["dog", "cat", "mouse"];
var person = { name: "Zane", age: 24 }; //No alias
var people = [{ name: "Zane", age: 24 }]; //No alias
var personAlias = { name: "Zane", age: 24 }; //alias
var peopleAlias = [{ name: "Zane", age: 24 }]; //alias
//Functions & types
var addNumbers = function (a, b) {
    return a + b;
};
var printValue = function (value) {
    console.log(value);
};
//Generics
var insertAtBeginning = function (array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
};
var demoArray = [1, 2, 3, "dog"];
var updatedArray = insertAtBeginning(demoArray, -20);
console.log(updatedArray);
