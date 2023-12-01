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

  var img = $("<img id=image>");
  $("body").append(img);
  img.attr("src", URL.createObjectURL(blob));
});
