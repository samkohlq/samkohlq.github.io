// function insertNavBar() {
//   $("#navbar-side").load('navbar.html');
// }

function insertNavBar() {
  if ($("#navbar-side").load('../navbar.html') == true)
    $("#navbar-side").load('../navbar.html');
}

function getWeatherData() {
  $.get("https://api.data.gov.sg/v1/environment/air-temperature", function (data) {
    const temp = data.items['0'].readings['6'].value;
    $('#text-to-change').text("The temperature is..." + temp)
  })
}