const API_KEY = "e907972db141b3a5306c425df6d0295b";


function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name.toUpperCase();
      weather.innerText = `${data.weather[0].main} | ${data.main.temp}℃`;
    });
}

function onGeoError(){
  alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);