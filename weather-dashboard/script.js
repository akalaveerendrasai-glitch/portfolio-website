const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");

const weather = document.getElementById("weather");

const loading = document.getElementById("loading");

const error = document.getElementById("error");

searchBtn.addEventListener("click",getWeather);

cityInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

getWeather();

}

});

async function getWeather(){

const city=cityInput.value.trim();

if(city===""){

error.innerHTML="Please enter a city name.";

weather.style.display="none";

return;

}

loading.style.display="block";

weather.style.display="none";

error.innerHTML="";

try{

const response=await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

);

if(!response.ok){

throw new Error("City not found");

}

const data=await response.json();

document.getElementById("cityName").innerHTML=data.name;

document.getElementById("temp").innerHTML=data.main.temp+" °C";

document.getElementById("humidity").innerHTML=data.main.humidity+" %";

document.getElementById("wind").innerHTML=data.wind.speed+" m/s";

document.getElementById("condition").innerHTML=data.weather[0].description;

document.getElementById("country").innerHTML=data.sys.country;

weather.style.display="block";

}

catch(err){

error.innerHTML=err.message;

}

finally{

loading.style.display="none";

}

}