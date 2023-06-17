function searchplace() {
  place = s1.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data => data.json()).then(out => displayData(out))

  function displayData(obj) {
    locname = obj.name
    weather = obj.weather[0].description
    country = obj.sys.country
    icon = obj.weather[0].icon
    temp = Math.round(obj.main.temp - 273.15);
    pressure = obj.main.pressure
    humidity = obj.main.humidity
    windspeed = Math.round(obj.wind.speed * 35)


    result.innerHTML = `
<h2>${locname},${country}</h2>
<h4>Weather Detail:${weather}</h4>
<img src="https://openweathermap.org/img/w/${icon}.png" style="width:110px;">
<h1>${temp}°C</h1>
<div class="container">
<div  style="    margin-left: 103px;
margin-top: 39px;" id="s7">
<h5>Pressure</h5>
<h5>${pressure}hpa</h5>
</div>

<div style="margin-top: -65px;
margin-left: -17px;" id="s6">

<h5>Humidity</h5>
<h5>${humidity}%</h5>
</div>
<div style="         margin-left: 224px;
margin-top: -62px;
}" id="s8">
<h5>Wind speed</h5>
<h5>${windspeed
      }Km/hr</h5>
</div>
</div>


`
  }
}