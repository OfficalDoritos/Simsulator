/* 
safety pop up
disabled for development
*/
window.onbeforeunload = function () {
  return "Data will be lost if you leave the page, are you sure?";
};

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("paste", function (evt) {
    const clipboardItems = evt.clipboardData.items;
    const items = [].slice.call(clipboardItems).filter(function (item) {
      // Filter the image items only
      return item.type.indexOf("image") !== -1;
    });
    if (items.length === 0) {
      return;
    }

    const item = items[0];
    const blob = item.getAsFile();
    var link = URL.createObjectURL(blob);

    newImg(link);
  });
});

var newImgByText = () => {
  newImgByPath($("#urls").val());
};

var newImgByPath = (a) => {
  var src = "./Sims4Icons/" + a + ".png";
  newImg(src);
};

var newImg = (src) => {
  var img = $("<img>");
  img.attr("src", src);
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
