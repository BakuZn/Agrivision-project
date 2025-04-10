function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "948be06921dc1d1d744418924cd429f5";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const output = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
        document.getElementById("weatherResult").innerHTML = output;
      })
      .catch(() => {
        document.getElementById("weatherResult").innerHTML = "<p style='color:red;'>City not found.</p>";
      });
  }
  