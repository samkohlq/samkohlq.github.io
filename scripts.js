// inserts navigation bar on every page
function insertNavBar() {
  $("#navbar-side").load("navbar.html");
}

// only execute function to populate page with project details if we are on the project.html page
$(document).ready(function () {
  if ($("body").is(".project")) {
    $.getJSON("projects.json", function (data) {
      var urlParam = location.search;
      var projectId = urlParam.charAt(urlParam.length - 1);
      // adds div tag, taking project name from JSON file
      var project =
        '<div class="text-seconary h2">' + data[projectId].name + "</div>";
      // adds para tag, taking project description form JSON file
      project +=
        '<p class="text-secondary small">' +
        data[projectId].description +
        "</p>";
      // adds opening "a" tag, taking project url from JSON file
      project += '<a href="' + data[projectId].project_url + '">';
      // adds img tag, taking image source from JSON file
      // adds closing "a" tag
      project +=
        '<img class="img-fluid" src="' +
        data[projectId].img_src +
        '" alt="' +
        data[projectId].name +
        '"></a>';
      $("#project").append(project);
    });
  }
});
