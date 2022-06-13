// Primitives: number, string, boolean
// Complex: array, objects
// Function types, parameters

// Type alias

type Person = { name: string; age: number };
type People = { name: string; age: number }[];

//Primitives

let age: number = 12.5;
let userName: string = "zbirkett";
let isInstructor: boolean = false;

//Complex

let hobbies: string[] = ["dog", "cat", "mouse"];
let person: { name: string; age: number } = { name: "Zane", age: 24 }; //No alias
let people: { name: string; age: number }[] = [{ name: "Zane", age: 24 }]; //No alias

let personAlias: Person = { name: "Zane", age: 24 }; //alias
let peopleAlias: People = [{ name: "Zane", age: 24 }]; //alias

// Type inference

let course: string | number = "React - The complete guide";
course = 12345;
