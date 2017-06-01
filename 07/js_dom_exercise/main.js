/* DOM Manipulation: Independent Practice

******FIRST******
First, read this page about something we didn't cover, prompts!
http://www.w3schools.com/jsref/met_win_prompt.asp
*****************

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, display the prompt asking what their favorite things are.
- When they hit enter, take the value they've typed in and add it to the list (remember: appendChild)

Bonus:

What they type in is blank, alert the user "you must type in a value!" if they press enter without adding the empty value to the page.
*/


window.onload = function() {
  var button = document.getElementById('new-thing-button');
  button.onclick = function(event) {
    event.preventDefault();

    var newText = document.getElementById('new-thing').value;
    var newThingTextNode = document.createTextNode(newText);

    var newLi = document.createElement("li");
    var listElement = document.getElementById('fav-list');

    listElement.appendChild(newLi);
    newLi.appendChild(newThingTextNode);
  }
};
