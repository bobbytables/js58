$(function(){
  var container = $('div.container');
  var counter = 0;

  $('a').click(function(event){
    counter++;
    event.preventDefault();

    var text;
    if(counter % 2 === 0) {
      text = "even";
    } else {
      text = "odd";
    }

    $(this).text("You clicked me " + counter + " times - " + text);
  });
})
