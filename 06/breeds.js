var dog1 = { name: "Henry", breed: "Husky", color: "Tan" };
var dog2 = { name: "Butter", breed: "Golden Retriever", color: "Golden" };
var chicken = { name: "Tiger", breed: "Terrier Presbyterian", color: "White" };

function proclaimDog(dog) {
  console.log("The dog by the name of "+ dog.name +
  " is of the colour " + dog.color + " and is the breed " + dog.breed);
}

proclaimDog(dog1);
proclaimDog(dog2);
proclaimDog(chicken);
