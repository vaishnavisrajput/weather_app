const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");

const fetchWeather = async(city) => {
		city = inputBox.value;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da23b4430d55685cf1b0045bb1d293d8`)
		const result = await response.json();
		console.log(result);
		cityName.innerHTML = `Weather in ${inputBox.value}`;
		temp.innerHTML = result.main.temp  + " °C";
		cloud.innerHTML = result.weather[0].main;
		humidity.innerHTML =`Humidity: ${result.main.humidity}  %`; 
		visibility.innerHTML = `Visibility: ${result.visibility}`;
		wind.innerHTML = `Wind Speed: ${result.wind.speed}   km/h`;
		feelsLike.innerHTML = `Feels Like: ${result.main.feels_like}`;
		const sunriseTime = new Date(result.sys.sunrise * 1000);
		const sunriseTimeString = sunriseTime.toLocaleTimeString();
		sunrise.innerHTML = `Sunrise: ${sunriseTimeString}`;
		const sunsetTime = new Date(result.sys.sunset * 1000);
		const sunsetTimeString = sunsetTime.toLocaleTimeString();
		sunset.innerHTML = `Sunset: ${sunsetTimeString}`;
		return result;	
}


searchBtn.addEventListener("click", () => {
    fetchWeather();
});
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchWeather();
    }
});
