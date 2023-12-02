/* 
safety pop up
disabled for development
window.onbeforeunload = function () {
  return "Data will be lost if you leave the page, are you sure?";
};
*/

var newImg = (type) => {
  var img = $("<img src='./Sims4Icons/" + type + ".png'>");
  var cage = $("<div class=imgContainer>");
  cage.append(img);
  cage.draggable({
    snap: true,
    snapMode: "outter",
  });
  cage.resizable();
  $("#box").append(cage);
};

var newArrow = () => {
  var arrow = $("<img src='./arrow.png'>");
  var quiver = $("<div class=quiver>");
  //suck my ass bitch I absolutely named the container for my arrows "quiver"
  //and YES I did steal this idea from a joke Harley Quinn made in Injustice year one
  //AND YES I could have just passed the word "arrow" to the newImg function
  //but fuck you
  quiver.append(arrow);
  quiver.draggable({
    snap: true,
    snapMode: "outter",
  });
  quiver.resizable();
  $("#box").append(quiver);
};
