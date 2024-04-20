const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const searchBox = document.querySelector(".search");
const getResults = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=da23b4430d55685cf1b0045bb1d293d8`
  );

  const result = await response.json();
  console.log(result, "result");
  if(result){
	showInUI(result);
	cityName.innerHTML = `Weather in ${result?.name}`;
  }
  else{
		window.location.reload();
	}
}


const currentCity = async () => {
  let lat, lon;

  if ("geolocation" in navigator) {
    // Get the current position of the user
    navigator.geolocation.getCurrentPosition(function (position) {
      // Extract latitude and longitude from the position object
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      // Do something with the latitude and longitude, such as displaying them on the page
      console.log("Latitude: " + lat + ", Longitude: " + lon);
    });
  }
  console.log(lat, lon, "lat, lon");

  setTimeout(() => {
    getResults(lat, lon);
  }, 2000);
};

window.alert(
  "Please allow location access to get the weather of your location"
);
currentCity();

const fetchWeather = async (city) => {
  city = inputBox.value;
  console.log(window);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da23b4430d55685cf1b0045bb1d293d8`
  );
  const result = await response.json();
  console.log(result);
  if(result){
	showInUI(result);
  }
  
};

const showInUI = (result) => {
  cityName.innerHTML = `Weather in ${inputBox.value}`;
  temp.innerHTML = result.main.temp + " °C";
  cloud.innerHTML = result.weather[0].main;
  humidity.innerHTML = `Humidity: ${result.main.humidity}  %`;
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
};

searchBtn.addEventListener("click", () => {
  fetchWeather();
});
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchWeather();
  }
});





/*const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
 





const coords = (latitude, longitude) => {
	if ("geolocation" in navigator) {
		// Get the current position of the user
		navigator.geolocation.getCurrentPosition(function(position) {
		  // Extract latitude and longitude from the position object
		  var latitude = position.coords.latitude;
		  var longitude = position.coords.longitude;
	  
		  // Do something with the latitude and longitude, such as displaying them on the page
		  console.log("Latitude: " + latitude + ", Longitude: " + longitude);
		  return {latitude, longitude}
		 //currentCity(latitude, longitude);
		}, function(error) {
		  // Handle any errors that occur while retrieving the user's location
		  console.error("Error getting location: ", error);
		});
	  } else {
		// Browser doesn't support Geolocation
		console.error("Geolocation is not supported by this browser.");
	  }
	}
	

	const currentCity = async(lat, lon) => {
		console.log("hi");
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=da23b4430d55685cf1b0045bb1d293d8`)
		const result = response.json();
		console.log(result);
		coords();
	}
	currentCity();
	

	






const fetchWeather = async(city) => {
		city = inputBox.value;
		console.log(window);
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

/*const getCords = async()=>{
		try {
		  const res = await coords();
			console.log(res, "res");
	if(res.latitude){
		currentCity(res.latitude,res.longitude)
}
		} catch (error) {
		  console.log( error )
		}
	}
getCords();*/