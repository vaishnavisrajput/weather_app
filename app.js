const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");

const fetchWeather = async(city) => {
		city = inputBox.value;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da23b4430d55685cf1b0045bb1d293d8`)
		const result = await response.json();
		console.log(result);
		cityName.innerHTML = inputBox.value;
		temp.innerHTML = result.main.temp  + " °C";
		cloud.innerHTML = result.weather[0].main;
		humidity.innerHTML = result.main.humidity + "%";
		visibility.innerHTML = result.visibility;
		wind.innerHTML = result.wind.speed + " km/h";
		feelsLike.innerHTML = result.main.feels_like;
		//displayWeather();
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
