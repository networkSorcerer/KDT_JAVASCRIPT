var colorButton = document.getElementById("colorButton");
var colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
var colorIndex = 0;

colorButton.addEventListener("click", function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// $(document).ready(function() {
//   var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
//   var colorIndex = 0;

//   $("#colorButton").click(function() {
//     $("body").css("background-color", colors[colorIndex]);
//     colorIndex = (colorIndex + 1) % colors.length;
//   });
// });
