// var sequence = [ 1, 2 ];
//               // 0  1
// var nextNumber;
// var i = 1;

// do {
//   nextNumber = sequence[i] + sequence[i - 1];
//   console.log("Number is:", nextNumber)
//   sequence.push(nextNumber);
//   i++
// } while(nextNumber < 4000000);


// while((sequence[i] + sequence[i - 1]) < 4000000) {
//   nextNumber = sequence[i] + sequence[i - 1];
//   console.log("Number is:", nextNumber)
//   sequence.push(nextNumber);
// }

var fib = [ 1, 2 ];
for(var i = 0; i < 4000000; i++) {
  i = fib[fib.length - 1] + fib[fib.length - 2];
  console.log(i);
  fib.push(i);
}
