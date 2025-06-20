const jsObject = {
  name: "John Doe",
  age: 25,
  display: function () {
    console.log("Hello");
  },
};

// JavaScript Object Notation - JSON
let jsonObject = {
  "name": "John Doe",
  "age": 25,
};
// methods(function inside objects) are not supported


// JSON Methods
let stringJSON =JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);