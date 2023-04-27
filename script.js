var x=document.getElementById('lat');
var y=document.getElementById('long');
let API_KEY="84c4d9d6b951823e7cd0f3f36173049a";

document.getElementById('btn').addEventListener('click',geolocation);
// document.getElementById('cont').style.display='none';
document.getElementById('cont2').style.display='flex';
function geolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}


function showPosition(position) {
    document.getElementById('cont').style.display='none';
    var lat=position.coords.latitude;
    var long=position.coords.longitude;
    x.innerHTML = `Lat: ${position.coords.latitude} `
    y.innerHTML = `Long:${position.coords.longitude}`
    var map_ara=document.getElementById('mapar');
    map_ara.innerHTML+=`<br/><br/><iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById('weather_data').style.display='block';
        var inner=document.getElementById('weather_data');
        inner.innerHTML+=`<div class=wethr>
                   <h4>weather Data</h4>
                   <div id="inner_info">
                   <p>Location: ${data.name}</p>
                   <p>Lat:${lat}   &nbsp;&nbsp  Long: ${long}</p>
                   <p>Timezone:${data.timezone}</p>
                   <p>windspeed:${data.wind.speed}</p>
                   <p>humidity:${data.main.humidity}</p>
                   <p>pressure:${data.main.pressure}</p>
                   <p>windspeed:${data.wind.speed}</p>
                   <p>wind direction(in deg): ${data.wind.deg}</p>
                   <p>Feels like: ${data.main.feels_like}</p>
                   </div>
                    </div>`
                } );

}

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = `User denied the request for Geolocation.`
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = `Location information is unavailable.`
        break;
      case error.TIMEOUT:
        x.innerHTML = `The request to get user location timed out.`
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = `An unknown error occurred.`
        break;
    }
  }
  
  
