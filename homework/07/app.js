window.onload = function() {
  var elem = document.getElementById('go');
  var container = document.getElementById('fizzbuzz');
  elem.onclick = function() {
    // retrieve the current number
    var max = document.getElementById('max-number');
    max = parseInt(max.value);

    for(var i = 0; i < max; i++) {
      var text = '' + i

      if(i % 15 === 0) {
        text = 'fizzbuzz';
      } else if(i % 5 === 0) {
        text = 'buzz';
      } else if(i % 3 === 0) {
        text = 'fizz'
      }

      var node = document.createElement('div');
      node.appendChild(document.createTextNode(text));

      container.appendChild(node);
    }
  }
}
