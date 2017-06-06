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

  // Click on a box logic
  // $('div.box-container button').click(function(event){
  //   $(this).hide();
  // })

  $('div.box-container button').on('click', function(event){
    // retrieve the value from the number input field
    var chicken = $('#number-input').val();

    // change the text of the button to the value of the number input
    $(this).text(chicken);

    // Set the input value to a blank string
    $('#number-input').val("");
  });

  // $('#a-button').click(function() {
  //   $('body').addClass('single-click');
  //   $('body').removeClass('double-click');
  // })

  // $('#a-button').dblclick(function() {
  //   $('body').addClass('double-click');
  //   $('body').removeClass('single-click');
  // })

  var clickCounter = 0;
  $('#a-button').click(function() {
    if(clickCounter % 2 == 0) {
      $('body').css('background-color', 'purple')
    } else {
      $('body').css('background-color', 'orange')
    }
    clickCounter++
  })
})
