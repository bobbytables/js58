var listRef = "/my-awesome-list"

$(function(){
  var database = firebase.database();

  // var ref = database.ref("/hello-world")
  // ref.on('value', function(snapshot) {
  //   var value = snapshot.val();
  //   console.log(value.chicken);
  // });

  var myItem = database.ref(listRef).push();
  var itemValues = { dueDate: "today", homework: "hard" }
  myItem.set(itemValues);

  database.ref(listRef).on('value', function(snapshot){
    var listValues = snapshot.val();


    // listValues.forEach(function(itemValue){
    //   console.log(itemValue);
    // });

    // get an array of all of the object keys for listValues that has
    // come from firebase
    var allObjectKeys = Object.keys(listValues);

    // iterate over each of the keys
    for(var i = 0; i < allObjectKeys.length; i++) {
      // get the value for the key dynamically using the [] syntax and log it
      var objectKey = allObjectKeys[i];
      var value = listValues[objectKey];

      var newElement = $("<p></p>").text(value.homework);
      newElement.appendTo('body');
    }
  });
})
