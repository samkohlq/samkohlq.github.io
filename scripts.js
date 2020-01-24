function insertNavBar() {
  $("#navbar-side").load('navbar.html');
}

$(document).ready(function () {
  $.getJSON("projects.json", function (data) {
    var project = '<div>recreating ' + data[0].name + '</div>';
    $("#project").html(project).addClass("text-secondary h2");
  })
})