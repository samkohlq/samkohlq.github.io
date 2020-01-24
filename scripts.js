function insertNavBar() {
  $("#navbar-side").load('navbar.html');
}

$(document).ready(function () {
  $.getJSON("projects.json", function (data) {
    // adds div tag, taking project name from JSON file
    var project = '<div class="text-seconary h2">recreating ' + data[0].name + '</div>';
    // adds para tag, taking project description form JSON file 
    project += '<p class="text-secondary small">' + data[0].description + '</p>';
    // adds img tag, taking image source from JSON file
    project += '<img class="img-fluid" src="' + data[0].img_src + '" alt="' + data[0].name + '">';
    $("#project").append(project);
  })
})