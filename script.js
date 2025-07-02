async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "161ac0e5899782d78d7f4531efb64fd1"; // 👈 Add your key here
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (response.status !== 200 || !data.main) {
      document.getElementById("weatherResult").innerHTML = `<p>City not found or invalid API key</p>`;
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <img src="${iconURL}" alt="${weather}" />
      <p><strong>${weather}</strong></p>
      <p>Temperature: ${temp}°C</p>
    `;
  } catch (error) {
    console.log("Error fetching data:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Something went wrong</p>`;
  }
}



