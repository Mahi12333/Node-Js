// 1)Object Literal:
const person = {
    name: "John",
    age: 30,
  };

//2)Array
const fruits = ["apple", "banana", "cherry"];

//3)funtion

function greet(name) {
    return `Hello, ${name}!`;
  }

//4)Date
const today = new Date();

//5)RegExp (Regular Expression):
const regex = /[A-Z]/;

//6)Math
const pi = Math.PI;

//7)DOM Objects  (Document Object Model):

const element = document.getElementById("myElement");

//8)Error Objects:
try {
    // Some code that might throw an error
  } catch (error) {
    console.error(error.message);
  }

//9)Map and Set Objects:
const myMap = new Map();
myMap.set("key1", "value1");

const mySet = new Set();
mySet.add("item1");

//10)JSON Objects:
const jsonText = '{"name": "Alice", "age": 25}';
const jsonObject = JSON.parse(jsonText);

