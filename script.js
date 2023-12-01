/* 
safety pop up
disabled for development
window.onbeforeunload = function () {
  return "Data will be lost if you leave the page, are you sure?";
};
*/

var yur = () => {
  var img = $("<img>");
  var target = $("#target");
  img.attr("src", "./Sims4Icons/" + target.val() + ".png");
  var cage = $("<div class=imgContainer>");
  cage.draggable();
  cage.resizable();
  cage.append(img);
  $("#box").append(cage);
};

var yike = () => {
  var yike = $("<img src='../yike.jpeg'>");
  yike.draggable();
  $("#box").append(yike);
};
