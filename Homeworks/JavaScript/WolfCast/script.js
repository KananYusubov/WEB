/* API Key */
// https://home.openweathermap.org/api_keys
const API_KEY = "your_api_key";
const cityName = document.getElementById("city-name-input");
const cityMask = /[a-z A-z]{1,}/;
let WeatherVisibilityStatus = true;

FirstStart();

cityName.onkeydown = function (e) {
  if (cityMask.test(cityName.value) && e.key === "Enter") {
    GetCoordinatesOfCity(cityName.value);
  }
};

function changeVisibility(weatherIsVisible) {
  if (weatherIsVisible === WeatherVisibilityStatus) return;
  WeatherVisibilityStatus = weatherIsVisible;
  let weather = document.getElementById("weather");
  let notfound = document.getElementById("notfound");
  let notfoundText = document.getElementById("not-found-text");
  let notfoundSvg = document.getElementById("not-found-svg");

  if (weatherIsVisible) {
    weather.classList.remove("hidden");
    notfound.classList.add("hidden");
    notfoundSvg.classList.remove("starry-sky");
    notfoundSvg.classList.add("hidden");
    notfoundText.classList.add("hidden");
  } else {
    weather.classList.add("hidden");
    notfound.classList.remove("hidden");
    notfoundSvg.classList.add("starry-sky");
    notfoundSvg.classList.remove("hidden");
    notfoundText.classList.remove("hidden");
  }
}

function GetCoordinatesOfCity(cityName) {
  let coordinates = null;
  if (!cityMask.test(cityName)) return coordinates;

  let request;

  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.responseType = "json";

  request.open(
    "GET",
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`
  );

  request.onload = function () {
    if (request.readyState !== 4 && request.status !== 200) return;

    let response = request.response;

    if (response <= 2) {
      changeVisibility(false);
      return;
    }

    changeVisibility(true);
    response = response[0];

    GetCurrentWeatherForecast(response.lat, response.lon);
    GetHourlyWeatherForecast(response.lat, response.lon);
  };

  request.send();
}

function GetCurrentWeatherForecast(lat, lon) {
  let request;

  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.responseType = "json";

  request.open(
    "POST",
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`
  );

  request.onload = function () {
    if (request.readyState !== 4 && request.status !== 200) return;
    let response = request.response;

    console.log(response);

    let cityName = document.getElementById("city-name");
    let date = document.getElementById("weather-date");
    let humidity = document.getElementById("humidity-text");
    let wind = document.getElementById("wind-text");
    let sunrise = document.getElementById("sunrise-text");
    let sunset = document.getElementById("sunset-text");
    let todayIcon = document.getElementById("today-weather-icon");
    let currentTemp = document.getElementById("current-weather-current-temp");
    let minTemp = document.getElementById("min-value");
    let maxTemp = document.getElementById("max-value");

    cityName.innerText = response.name.replaceAll("ǝ", "ə");
    date.innerText = new Date(response.dt * 1000).toLocaleString();
    sunrise.innerText = GetHourFromDT(response.sys.sunrise);
    sunset.innerText = GetHourFromDT(response.sys.sunset);
    humidity.innerText = response.main.humidity;
    wind.innerText = response.wind.speed;
    console.log(
      "\n\ntoday wather icon: " + GetIconPath(response.weather[0].icon)
    );
    todayIcon.style.backgroundImage = `url('${GetIconPath(
      response.weather[0].icon
    )}')`;
    currentTemp.innerText = `${response.main.temp}℃`;
    minTemp.innerText = response.main.temp_min;
    maxTemp.innerText = response.main.temp_max;
  };

  request.send();
}

function GetHourlyWeatherForecast(lat, lon) {
  let request;

  console.log("Hourly Start");

  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.responseType = "json";
  request.open(
    "POST",
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=3&units=metric&appid=${API_KEY}`
  );

  request.onload = function () {
    if (request.readyState !== 4 && request.status !== 200) return;

    let response = request.response;
    let hourlyWeather = document.getElementById("hourly-weather");
    hourlyWeather.innerHTML = "";
    for (const listKey in response.list) {
      hourlyWeather.append(AddReportCard(response.list[listKey]));
    }
  };

  request.send();
}

function AddReportCard(forecast) {
  //region Create Elements

  let reportCard = document.createElement("div");
  let reportIcon = document.createElement("div");
  let reportTimeInfo = document.createElement("div");
  let reportTimeDescription = document.createElement("div");
  let reportTimeHour = document.createElement("div");
  let reportTempInfo = document.createElement("div");
  let reportMaxTemp = document.createElement("div");
  let reportMinTemp = document.createElement("div");
  let reportAdditionalInfos = document.createElement("div");
  let reportAdditionalInfoWind = document.createElement("div");
  let reportAdditionalInfoWindText = document.createElement("div");
  let reportAdditionalInfoHumidity = document.createElement("div");
  let reportAdditionalInfoHumidityText = document.createElement("div");
  let reportWeatherDescription = document.createElement("div");

  //endregion Create Elements

  //region Initialize Elements

  reportCard.classList.add("report-card");

  reportIcon.classList.add("report-icon");
  reportIcon.style.backgroundImage = `url('${GetIconPath(
    forecast.weather[0].icon
  )}')`;

  reportTimeInfo.classList.add("report-time-info");

  reportTimeDescription.classList.add("report-time-description");
  reportTimeDescription.innerText = forecast.weather[0].main;

  reportTimeHour.classList.add("report-time-hour");
  reportTimeHour.innerText = GetHourFromDT(forecast.dt);

  reportTempInfo.classList.add("report-temp-info");

  reportMaxTemp.innerHTML = `${forecast.main.temp_max}<sup>°</sup>`;
  reportMinTemp.innerHTML = `${forecast.main.temp_max}<sup>°</sup>`;

  reportAdditionalInfos.classList.add("report-additional-infos");

  reportAdditionalInfoWind.classList.add("report-additional-info");
  reportAdditionalInfoWind.innerHTML = GetAdditionalInfoIconSVG("wind");

  reportAdditionalInfoWindText.classList.add("report-additional-text");
  reportAdditionalInfoWindText.innerText = `${forecast.wind.speed} m/s`;

  reportAdditionalInfoHumidity.classList.add("report-additional-info");
  reportAdditionalInfoHumidity.innerHTML = GetAdditionalInfoIconSVG("humidity");

  reportAdditionalInfoHumidityText.classList.add("report-additional-text");
  reportAdditionalInfoHumidityText.innerText = `${forecast.main.humidity} %`;

  reportWeatherDescription.classList.add("report-weather-description");
  reportWeatherDescription.innerText = forecast.weather[0].description;

  //endregion Initialize Elements

  //region Add Child To Elements

  reportTimeInfo.append(reportTimeDescription, reportTimeHour);

  reportTempInfo.append(reportMaxTemp, reportMinTemp);

  reportAdditionalInfoWind.append(reportAdditionalInfoWindText);

  reportAdditionalInfoHumidity.append(reportAdditionalInfoHumidityText);

  reportAdditionalInfos.append(
    reportAdditionalInfoWind,
    reportAdditionalInfoHumidity
  );

  reportCard.append(
    reportIcon,
    reportTimeInfo,
    reportTempInfo,
    reportAdditionalInfos,
    reportWeatherDescription
  );

  //endregion Add Child To Elements

  return reportCard;
}

function GetAdditionalInfoIconSVG(infoType) {
  switch (infoType) {
    case "wind":
      return `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="first_1"
                             x="0px" y="0px" viewBox="0 0 30 30" class="text-[28px] text-[var(--secondary)]"
                             height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"
                             data-darkreader-inline-fill="">
                            <path d="M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3
\tc0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29
\tc-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63
\tc0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2
\tc-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69
\tc0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97
\tc0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67
\tc0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31
\tc0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01
\tc-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z M4.67,20.61c0,0.24,0.08,0.43,0.24,0.58
\tc0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59c0-0.23-0.09-0.43-0.26-0.6
\tc-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C4.75,20.18,4.67,20.38,4.67,20.61z M5.62,10.68
\tc0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.08-0.43-0.25-0.6C6.89,9.92,6.68,9.83,6.45,9.83c-0.22,0-0.42,0.08-0.58,0.25C5.7,10.25,5.62,10.45,5.62,10.68z
\t M8.65,8.37c0,0.24,0.08,0.43,0.24,0.58C9.05,9.12,9.25,9.2,9.47,9.2c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.09-0.43-0.26-0.6C9.92,7.61,9.71,7.53,9.47,7.53c-0.22,0-0.42,0.08-0.58,0.25C8.73,7.94,8.65,8.14,8.65,8.37z M8.74,19.97
\tc0,0.23,0.08,0.43,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C8.82,19.54,8.74,19.74,8.74,19.97z
\t M12.92,10.14c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59
\tc0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C13,9.71,12.92,9.91,12.92,10.14z
\t M13.24,21.13c0,0.23,0.08,0.42,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25S13.24,20.9,13.24,21.13z M17.72,9.98
\tc0,0.23,0.08,0.42,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.41,0.08-0.58,0.25C17.81,9.55,17.72,9.75,17.72,9.98z
\t M22.81,17.04c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59
\tc0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C22.9,16.61,22.81,16.81,22.81,17.04z"></path>
                        </svg>`;
    case "humidity":
      return `       <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="second_2"
                             x="0px" y="0px" viewBox="0 0 30 30" class="text-[28px] text-[var(--secondary)]"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                             data-darkreader-inline-stroke=""
                             style="--darkreader-inline-stroke:currentColor; --darkreader-inline-fill:currentColor;"
                             data-darkreader-inline-fill="">
                            <path d="M4.64,16.95c0-1.16,0.35-2.18,1.06-3.08s1.62-1.48,2.74-1.76c0.31-1.36,1.01-2.48,2.1-3.36s2.34-1.31,3.75-1.31
\tc1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.66c0.76,0.44,1.37,1.04,1.81,1.8
\tc0.44,0.76,0.67,1.59,0.67,2.48c0,1.32-0.46,2.47-1.39,3.42c-0.92,0.96-2.05,1.46-3.38,1.5c-0.13,0-0.2-0.06-0.2-0.17v-1.33
\tc0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.38,0.9-2.23c0-0.89-0.32-1.65-0.97-2.3s-1.42-0.97-2.32-0.97h-1.61
\tc-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.72c-0.82-0.73-1.76-1.1-2.85-1.1c-1.1,0-2.05,0.37-2.86,1.11
\tc-0.81,0.74-1.27,1.65-1.37,2.75l-0.06,0.5c0,0.12-0.07,0.19-0.2,0.19l-0.53,0.07c-0.83,0.07-1.53,0.41-2.1,1.04
\ts-0.85,1.35-0.85,2.19c0,0.85,0.3,1.59,0.9,2.23s1.33,0.97,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17
\tc-1.34-0.04-2.47-0.54-3.4-1.5C5.1,19.42,4.64,18.27,4.64,16.95z M10.14,24.65c0-0.23,0.08-0.43,0.25-0.6
\tc0.16-0.15,0.35-0.23,0.57-0.23c0.23,0,0.43,0.08,0.59,0.23s0.24,0.35,0.24,0.59c0,0.24-0.08,0.43-0.24,0.59
\tc-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.59-0.23C10.22,25.08,10.14,24.88,10.14,24.65z M11,21.02
\tc0-0.22,0.08-0.42,0.24-0.58c0.16-0.16,0.35-0.24,0.59-0.24c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
\tc0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.23,0-0.43-0.08-0.59-0.25C11.08,21.46,11,21.26,11,21.02z
\t M12.9,26.61c0-0.23,0.08-0.43,0.25-0.61c0.16-0.16,0.35-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.37,0.25,0.6
\ts-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C12.99,27.03,12.9,26.84,12.9,26.61z
\t M13.77,22.95c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.36-0.24,0.58-0.24c0.23,0,0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.61
\tc0,0.23-0.08,0.43-0.25,0.6s-0.37,0.25-0.6,0.25c-0.23,0-0.42-0.08-0.58-0.25C13.85,23.38,13.77,23.18,13.77,22.95z M14.19,19.33
\tc0-0.23,0.08-0.43,0.25-0.6c0.18-0.16,0.37-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.36,0.25,0.6
\tc0,0.23-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,19.76,14.19,19.56,14.19,19.33z
\t M16.56,24.65c0-0.23,0.08-0.43,0.24-0.6c0.16-0.15,0.36-0.23,0.6-0.23c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59
\tc0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.44-0.08-0.6-0.24C16.64,25.07,16.56,24.88,16.56,24.65z
\t M17.41,21.02c0-0.22,0.08-0.41,0.25-0.58c0.17-0.17,0.37-0.25,0.6-0.25c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
\tc0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.24,0-0.44-0.08-0.6-0.25C17.5,21.45,17.41,21.25,17.41,21.02z"></path>
                        </svg>`;
  }
}

const GetHourFromDT = (dt) =>
  new Date(dt * 1000).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

function GetIconPath(iconId) {
  let differenceWeatherIcons = ["01", "02", "03", "09"];
  let path = differenceWeatherIcons.includes(iconId.substring(0, 2))
    ? iconId[2] === "d"
      ? "./Images/Weather Icons/Day/"
      : "./Images/Weather Icons/Night/"
    : "./Images/Weather Icons/General Weather/";

  let iconName = GetIconNameFromId(iconId);

  if (iconName === "not found") return "Images/General/weather_icon.png";

  path += iconName;

  return path;
}

function GetIconNameFromId(iconId) {
  iconId = iconId.substring(0, 2);
  switch (iconId) {
    case "01":
      return "clear_sky.png";
    case "02":
      return "few_clouds.png";
    case "03":
      return "scattered_clouds.png";
    case "04":
      return "broken_clouds.png";
    case "09":
      return "shower_rain.png";
    case "10":
      return "rain.png";
    case "11":
      return "thunderstorm.png";
    case "13":
      return "snow.png";
    case "50":
      return "mist.png";
    default:
      return "not found";
  }
}

function FirstStart() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      StartFromUserLocation,
      GetCoordinatesOfCity("shaki")
    );
  } else {
    GetCoordinatesOfCity("shaki");
  }
}

function StartFromUserLocation(position) {
  GetCurrentWeatherForecast(
    position.coords.latitude,
    position.coords.longitude
  );
  GetHourlyWeatherForecast(position.coords.latitude, position.coords.longitude);
}
