function Temperature(){

}

getFahrenheit = function(temp) {
  return parseInt(temp * (9/5) - 459.67);
}

getCelsius = function(temp) {
  return parseInt(temp - 273.15);
}

getWeather = function(response) {
  var weatherArray = [];
  response.list.forEach(function(list_weather){
    weatherArray.push(list_weather);
  });
  return weatherArray;
}



exports.temperatureModule = Temperature;
