const form = document.querySelector("form");
const myInput = document.querySelector(".city");
const searchCity = document.querySelector("button");
const searchResults = document.querySelector("#searchResults");
//const hourInput = document.querySelector("#timeResults");

//const keyAPI = "f6211bc24c258c57f7a7fba887afdd17";


const url_API = `https://api.openweathermap.org/data/2.5/weather?q=Antwerpen&appid=f6211bc24c258c57f7a7fba887afdd17`
//const urlHour = "https://api.openweathermap.org/data/2.5/forecast?q=Halle&appid=f6211bc24c258c57f7a7fba887afdd17"

form.addEventListener("submit", formDone);

function formDone(e) {
  e.preventDefault();
  cityInputValue = myInput.value;
  //timeInputValue = hourInput.value;
  getResults(cityInputValue);
  //getTimeResults(timeInputValue);
};

const getResults = () => {
  const url = url_API
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then(weatherInfo => {
      date = new Date();

      searchResults.innerHTML = `

       <p class="description">${weatherInfo.weather[0].main}: ${weatherInfo.weather[0].description}</p>
       <p>${date}</p>
     
       <div class="numbers">
         <div class="temp">
           <span></span><sup class="unit">${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
         </div>
     
         <div class="icon">
           <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="">
         </div>
     
         <div id="results">
           <table class="measurements">
             <tr>
               <td class="label">Pressure</td>
               <td class="value">${weatherInfo.main.pressure}hPa</td>
             </tr>
             <tr>
               <td class="label">Humidity</td>
               <td class="value">${weatherInfo.main.humidity}%</td>
             </tr>
             <tr>
               <td class="label">Wind speed</td>
               <td class="value">${weatherInfo.wind.speed}meters / sec</td>
             </tr>
           </table>
         </div>
       </div>

       <hr>
       
       <div class="numbers">
       <div class="hours">
         <span></span><sup class="unit"> 9 AM: ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
           <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="">
       </div>

       <div class="hours">
       <span></span><sup class="unit"> 12 AM: ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
           <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="">
       </div>

       <div class="hours">
       <span></span><sup class="unit"> 15 AM: ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
       <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="">
       </div>

       <div class="hours">
       <span></span><sup class="unit"> 18 AM: ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
       <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="">
       </div>

       <div class="hours">
       <span></span><sup class="unit"> 21 AM: ${(weatherInfo.main.temp - 273.15).toFixed(2)}°C</sup>
       <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png" alt="">
       </div>
     </div>
 
       `
    })
};

/*
const getTimeResults = () => {
  const urlTime = urlHour
  console.log(urlTime);

  fetch(urlTime)
    .then(response => response.json())
    .then(weatherInfo => {

      searchResults.innerHTML = `

    })
};*/
