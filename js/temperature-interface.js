var Temperature = require('./../js/temperature.js').temperatureModule;

var apiKey = "cfc5986253d0c02d1efab5da3c83aa37";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%" + "The temperature in " + city + " is " + getCelsius(response.main.temp) + "degrees fahrenheit");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
  $('#forecastLocation').click(function() {
    var city = $('#locationForecast').val();
    $('#locationForecast').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us' + '&appid=' + apiKey).then(function(response){
      //http://api.openweathermap.org/data/2.5/forecast?q=Portland,us&mode=json&appid=cfc5986253d0c02d1efab5da3c83aa37
      console.log(response);
      var weatherReturned = getWeather(response);
      i = 0;
      var text_stuff = " ";
      weatherReturned.forEach(function(each) {
        console.log(i);
        console.log('each');
        // if (i % 6 === 0 && i !== 0) {
        //   text_stuff += '<div class="row">';
        // }
        text_stuff += "<div class='col-md-2'> <h3>Date and time: " + each.dt_txt + "</h3>" +
                                    "<p>Hi: " + getFahrenheit(each.main.temp_max) + "°</p>" +
                                    "<p>Low: " + getFahrenheit(each.main.temp_min) + "°</p>" +
                                    "<p>" + each.weather.main + "</p><hr></div>";
        // i += 1;
        // if (i !== 0 && i % 6 === 0) {
        //   text_stuff += "</div>";
        //   console.log(text_stuff);
        // }
      })
      $('.showForecast').append(text_stuff);
    }).fail(function(error) {
      console.log('error');
      // $('.showForecast').text(error.responseJSON.message);
    });
  });
});
