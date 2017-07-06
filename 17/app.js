$(function(){
  var database = firebase.database();
  var todoListRef = database.ref('/todo-list-items');

  // add functionality for adding items to firebase when a btn is clicked
  $('#add-item-btn').on('click', function(e){
    e.preventDefault();

    var itemDescription = $('#todo-description').val();
    var itemName = $('#todo-name').val();

    console.log("Values", itemDescription, itemName);

    var newItem = todoListRef.push();
    newItem.set({ name: itemName, description: itemDescription });
  });

  //  load all of the items from firebase on page load and when it changes
  todoListRef.on('value', function(items){
    $('#todo-items').empty();

    items.forEach(function(item){
      var id = item.key;
      var name = item.val().name;
      var description = item.val().description;
      var completedAt = item.val().completedAt;

      var completedText = "";
      if(completedAt !== undefined){
        var parsedDate = new Date(completedAt);
        completedText = parsedDate.toDateString();
      }

      var newElement = '<div class="panel panel-default">' +
        '<div class="panel-heading">' + name + '</div>' +
        '<div class="panel-body">' + description + '</div>' +
        '<div class="panel-footer"><a href="#" data-item-id="' +  id + '" class="mark-completed">Mark as Completed</a> ' + completedText +'</div>' +
      '</div>';

      $('#todo-items').append(newElement);
    });
  });

  // add click event handler to "mark as completed" links
  $('#todo-items').on('click', 'a.mark-completed', function(event) {
    var id = $(this).data('item-id');
    var itemRef = database.ref("/todo-list-items/" + id);

    var now = new Date();

    itemRef.update({ completedAt: now.getTime()})
  })
})
