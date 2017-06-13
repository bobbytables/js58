// var myJSON = '{ "hello": "world", "class": { "students": ["Robert", "Steph"] }, "foods": [ { "name": "burger" }, { "name": "fries" } ] }';

// var parsedJSON = JSON.parse(myJSON);
// console.log(typeof myJSON);
// console.log(typeof parsedJSON);
// console.log(parsedJSON);

// console.log(parsedJSON.hello);
// // console.log(parsedJSON.class.students[0]);

// console.log("All Keys: ", Object.keys(parsedJSON));

// for(var i = 0; i < parsedJSON.class.students.length; i++) {
//   console.log(parsedJSON.class.students[i]);
// }


var inClass = {
  "address1": "Some address",
  "address2": "please dont send anthrax",
  "rooms": ["Foier"]
}

console.log(JSON.stringify(inClass));
