var url = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/32.72,-40.00';

$.get(url, function(r) {
  $('body').html(r.currently.temperature);
})
