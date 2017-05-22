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
  if(n % 5 == 0 || n % 3 == 0) {
    sum2 += n
  }

  n++;
}

console.log("The sum2 is: ", sum2);
