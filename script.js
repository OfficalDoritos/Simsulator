var hit = () => {
  var uh = $("<img>");
  uh.draggable();
  var lunk = $("#thisone").val();
  uh.attr("src", lunk);
  $("#box").append(uh);
};
