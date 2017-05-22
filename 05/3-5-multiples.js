var sum = 0;

for(var i = 0; i < 1000; i++) {
  if(i % 5 == 0 || i % 3 == 0) {
    sum += i;
  }
}


console.log("The sum is: ", sum);

var sum2 = 0;
var n = 0;
while(n < 1000) {
  sum2 += validSum(n);
  n++;
}


function validSum(number) {
  if(number % 5 == 0 || number % 3 == 0) {
    return number;
  } else {
    return 0;
  }
}

console.log("The sum2 is:", sum2);
