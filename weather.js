document
  .getElementById("weather")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const cityName = document.getElementById("city").value;
    const apiKey = "d93c7e920e92350fdc6c18ae2b6cebed";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      document.getElementById("weatherResult").innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Max Temperature:</strong> ${data.main.temp_max}°C</p>
            <p><strong>Min Temperature:</strong> ${data.main.temp_min}°C</p>
        `;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML =
        "<p style='color:red;'>City not found. Try again!</p>";
    }
  });
