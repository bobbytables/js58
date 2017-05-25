var Person = function(aName, age) {
  this.name = aName;
  this.age = age
  // this.age = Math.ceil(Math.random() * 1000);
}

Person.prototype.canDrive = function() {
  return this.age >= 16
};

var robert = new Person("Chicken", 5);

console.log("The person is:", robert.name)
console.log("The person's age is:", robert.age)

console.log("Can they drive?", robert.canDrive());
