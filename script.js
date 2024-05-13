let temp = document.querySelector(".temprature");
let weather = document.querySelector(".wheather");
let cityname = document.querySelector(".cityname");
let humidity = document.querySelector(".humvalue");
let windspeed = document.querySelector(".windspeedvalue");
let submitform = document.querySelector("#submitform");
let search = document.querySelector("#search");
let whetherimage = document.querySelector("#wimage");

let clouds_image = {
  Clouds :"img/cloudy.png",
  Haze : "img/haze.png",
  Clear : "img/sunny.png",
  Rain : "img/heavy-rain.png",
  Snow : "img/snowflake.png"

}


let whether_api = async (city) => {
  let API_KEY = "bc72ec1062024dbcaf91d237ed9e1c0c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();

  temp.innerHTML = `${data.main.temp}°C`;
  weather.innerHTML = `${data.weather[0].main}`;
  cityname.innerHTML = data.name;
  windspeed.innerHTML = `${data.wind.speed} Km/h`;
  humidity.innerHTML = `${data.main.humidity} %`;

  if(data.weather[0].main == "Clouds"){
    whetherimage.src=clouds_image.Clouds;
  }else if(data.weather[0].main == "Haze"){
    whetherimage.src=clouds_image.Haze;
  }else if(data.weather[0].main == "Clear"){
    whetherimage.src=clouds_image.Clear;
  }else if(data.weather[0].main == "Rain"){
    whetherimage.src=clouds_image.Rain;
  }else if(data.weather[0].main == "Snow"){
    whetherimage.src=clouds_image.Snow;
  }

};



window.addEventListener("load", () => {
  whether_api("indore");
});

submitform.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchdata = search.value;
  whether_api(searchdata);
});
