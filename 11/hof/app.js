var launch = function() {
  console.log("Launched!");
}

var launchTwo = function() {
  console.log("Launched a different rkt!");
}


// A higher order function because
// we pass in a function
function rocketLaunch(chicken) {
  for(var i = 10; i > 0; i--) {
    console.log(i, "...");
  }

  chicken();

}

// rocketLaunch(launch);
// rocketLaunch(launchTwo);

setTimeout(launch, 5000);

// setInterval(function() {
//   rocketLaunch(launch);
// }, 1000);

// jQuery might look something like this
function on(eventType, callbackFn) {
  if(eventType == 'click') {
    callbackFn();
  }
}

on('click', launch);
