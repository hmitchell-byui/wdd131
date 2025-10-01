document.addEventListener("DOMContentLoaded", () => {
  // Footer logic
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

  // Static place data: United States
  const place = {
    name: "United States",
    area: "9,629,091 km²",
    population: "327,167,434",
    capital: "Washington, D.C.",
    language: "English, Spanish, Hawaiian, French",
    currency: "United States Dollar (USD)",
    timezone: "UTC−4 to UTC−12",
    calling: "+1",
    tld: ".us"
  };

  // Populate place data
  document.getElementById("area").textContent = place.area;
  document.getElementById("population").textContent = place.population;
  document.getElementById("capital").textContent = place.capital;
  document.getElementById("language").textContent = place.language;
  document.getElementById("currency").textContent = place.currency;
  document.getElementById("timezone").textContent = place.timezone;
  document.getElementById("calling").textContent = place.calling;
  document.getElementById("tld").textContent = place.tld;

  // Static weather data: Nashville, TN on Feb 15, 2025
  const weather = {
    temp: 57, // Fahrenheit
    conditions: "Partly Cloudy",
    wind: 5 // mph
  };

  // Populate weather data
  document.getElementById("temp").textContent = `${weather.temp} °F`;
  document.getElementById("conditions").textContent = weather.conditions;
  document.getElementById("wind").textContent = `${weather.wind} mph`;

  // Wind chill calculation
  const windChillSpan = document.getElementById("windchill");

  function calculateWindChill(t, s) {
    return (
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  }

  if (weather.temp <= 50 && weather.wind > 3) {
    const chill = calculateWindChill(weather.temp, weather.wind);
    windChillSpan.textContent = `${chill} °F`;
  } else {
    windChillSpan.textContent = "N/A";
  }
});
