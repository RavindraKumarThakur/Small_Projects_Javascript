const searchBtn = document.querySelector('.search');
const input_city = document.querySelector('.search_place input');
const tempDisplay = document.querySelector('.temp h1');
const cityDisplay = document.querySelector('.temp h2');
const weather_iconDisplay = document.querySelector('.temp img');
const humidityDisplay = document.querySelector('.humidity div h1');
const wind_speedDisplay = document.querySelector('.wind div h1');

const API_key = '&appid=5a999eb812b863356bf7b951d27c2aa9'
const API_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
let temperature;
let city_api;
let Humidity;
let wind_speed;
let main_weather;
let city;




async function fetch_data(place){
    try{
        const response = await fetch(API_url + `&q=${place}` + API_key);
        let data = await response.json();
        temperature = data.main.temp.toFixed(1) + '°c';
        city_api = data.name;
        Humidity = data.main.humidity + '%';
        wind_speed = data.wind.speed + 'km/h';
        main_weather = data.weather[0].main;
        console.log(data)
        console.log(`${main_weather.charAt(0).toLowerCase()}${main_weather.slice(1)}`);
        setIcon(`${main_weather.charAt(0).toLowerCase()}${main_weather.slice(1)}`);
        cityDisplay.innerHTML = city_api;
        tempDisplay.innerHTML = temperature;
        humidityDisplay.innerHTML = Humidity;
        wind_speedDisplay.innerHTML = wind_speed;
    }catch{
        alert('Wrong city name.')
    }
}

searchBtn.addEventListener('click',function(){
    if(input_city.value){
        city = input_city.value;
        fetch_data(city);
    }else{
        alert('City can not empty')
    }
    input_city.value = ''
});

function setIcon(weather){
    let newImage = document.createElement('img')

    switch(weather){
        case 'clear':
            weather_iconDisplay.src = 'images/clear.png';
            break;
        case 'clouds':
            weather_iconDisplay.src = 'images/clouds.png';
            break;
        case 'haze':
            weather_iconDisplay.src = 'images/mist.png';
            break;
        case 'drizzle':
            weather_iconDisplay.src = 'images/drizzle.png';
            break;
        case 'snow':
            weather_iconDisplay.src = 'images/snow.png';
            break;
    }
}

fetch_data("Hazaribagh");