$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '7cab1c8fe64c2e4eb0f59ed7b368dabc147f4179'
  });

  $('#login').click(function(){
    _500px.login();
  });

  _500px.on('authorization_obtained', function() {
    console.log("Authorized Successfully!");
    $('#login').hide();

    navigator.geolocation.getCurrentPosition(function(pos) {

      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;

      var searchOptions = {
        geo: lat + ',' + long + ',' + '25mi',
        // geo: lat + ',' + long + ',' + '25mi',
        only: 'Landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      };

      console.log(searchOptions);

      _500px.api('/photos/search', searchOptions, function(resp){
        $('.image-results-view').show();

        var photos = resp.data.photos;
        for(var i = 0; i < photos.length; i++) {
          // make a new variable called newImg that is assigned
          // to a dynamically made element <img> that has it's src
          // attribute assigned to the photo's url for the current loop iteration
          // using the attr method.
          var newImg = $('<img>').
            attr('src', photos[i].image_url).
            addClass('image');

          console.log(newImg);

          $('.images').append(newImg);
        }
      });
    });
  })
});
