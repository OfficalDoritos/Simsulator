/* 
safety pop up
disabled for development
window.onbeforeunload = function () {
  return "Data will be lost if you leave the page, are you sure?";
};
*/

var hit = () => {
  var uh = $("<img>");
  uh.draggable();
  var lunk = $("#thisone").val();
  uh.attr("src", lunk);
  $("#box").append(uh);
};

var yike = () => {
  var yike = $("<img src='../yike.jpeg'>");
  yike.draggable();
  $("#box").append(yike);
};
