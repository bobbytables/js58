window.onload = function() {
  var elem = document.getElementById("pig");
  console.log(elem);

  var elem2 = document.createElement("marquee");
  elem.appendChild(elem2);

  var btn = document.getElementById("my-button");
  btn.onclick = function(event) {
    var newElem = document.createElement('img');
    newElem.src = "http://placekitten.com/200/" + parseInt(Math.random() * 1000)

    elem.appendChild(newElem);
  }

  var form = document.getElementById("my-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    alert("you submitted the form");
  }
}
