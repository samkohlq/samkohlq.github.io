function getWeatherData() {
  $.get("https://api.data.gov.sg/v1/environment/air-temperature", function (data) {
    console.log(data)
    const temp = data.items['0'].readings['6'].value;
    $('#text-to-change').text("The temperature is..." + temp)
  })
}