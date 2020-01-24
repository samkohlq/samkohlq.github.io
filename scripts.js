function insertNavBar() {
  $("#navbar-side").load('navbar.html');
}

$(document).ready(function () {
  $.getJSON("projects.json", function (data) {
    var urlParam = location.search;
    var projectId = urlParam.charAt(urlParam.length - 1);
    // adds div tag, taking project name from JSON file
    var project = '<div class="text-seconary h2">recreating ' + data[projectId].name + '</div>';
    // adds para tag, taking project description form JSON file 
    project += '<p class="text-secondary small">' + data[projectId].description + '</p>';
    // adds img tag, taking image source from JSON file
    project += '<img class="img-fluid" src="' + data[projectId].img_src + '" alt="' + data[projectId].name + '">';
    $("#project").append(project);
  })
})