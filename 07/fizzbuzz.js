for(var i = 0; i < 100; i++) {
  var v = "";
  v += (i % 3 == 0) ? "Fizz" : "";
  v += (i % 5 == 0) ? "Buzz" : "";
  if(v.length == 0) {
    console.log(i)
  } else {
    console.log(v)
  }
}
