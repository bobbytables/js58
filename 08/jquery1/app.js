// window.onload = function() {
// $(
//   function(){
//     var container = $('div.container');
//     console.log(container);
//   }
// );

// another solution -
var onLoad = function(){
  console.log("Loaded!");
  var container = $('.container');

  var helloText = $('<strong></strong>');
  helloText.text('This page is awesome');
  helloText.appendTo(container);

  $('.container h1').text('My new text');

  console.log("Current Text", $('div.container h1').text());
}

$(onLoad);
