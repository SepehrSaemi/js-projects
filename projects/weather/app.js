const resultBoxEl = document.querySelector("#result");
const inputEl = document.querySelector("#city-input");
const sumbitBtnEl = document.querySelector("#submit");
const WeatherCondImgEl = document.querySelector("#weather-image");

const API_KEY = ""; // Put your own API key from https://openweathermap.org/

sumbitBtnEl.addEventListener("click", getGeographicCoordinates);

async function getGeographicCoordinates() {
    const city = inputEl.value;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;

    try {
        await fetch(url)
            .then((response) => {
                if (!response.ok) throw `Response Status: ${response.status}`;
                return response.json();
            })
            .then((data) => {
                const lon = data[0].lon;
                const lat = data[0].lat;

                getWeatherData(lat, lon);
            });
    } catch (error) {
        resultBoxEl.textContent = error;
    }
}

async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    try {
        await fetch(url)
            .then((response) => {
                if (!response.ok) throw `Response Status: ${response.status}`;
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const weather = data.main.temp - 273.15;
                const icon = data.weather[0].icon;

                resultBoxEl.innerHTML = `
                    <img id="weather-image" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Condition">
                    ${Math.floor(weather)}°C
                `;
            });
    } catch (error) {
        resultBoxEl.textContent = error;
    }
}
