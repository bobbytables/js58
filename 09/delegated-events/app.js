$(function(){

  var $favList = $('#fav-list')

  $favList.on('mouseenter', 'li', function(e){
    console.log(e.pageX, e.pageY);
    $(this).addClass('hover');
  })


  // $('#fav-list li a').on('click', function(e){
  $favList.on('click', 'li a', function(e){
    console.log(e.pageX, e.pageY);
    $(this).removeClass('hover');

    // travel to the LI parent to remove it
    $(this).parent().css("text-decoration", "line-through");
  })

  var $elem = $('<li><a href="#">Hurfdurf</a></li>');
  $favList.append($elem)
})
