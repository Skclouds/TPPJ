document.getElementById("get-weather-btn").addEventListener("click", () => {
    const location = document.getElementById("location").value;
  
    if (!location) {
      alert("Please select a location.");
      return;
    }
  
    // Use OpenWeatherMap API (replace `YOUR_API_KEY` with your actual API key)
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error("Weather data not found.");
        return response.json();
      })
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        document.getElementById(
          "weather-output"
        ).textContent = `The current temperature in ${location} is ${temperature}°C with ${description}.`;
      })
      .catch(error => {
        document.getElementById("weather-output").textContent =
          "Unable to fetch weather data. Please try again later.";
        console.error(error);
      });
  });
  