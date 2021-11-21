const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1c916d2f38375f37807f064fcc377386&units=imperial`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        currentTemp.textContent = jsObject.main.temp.toFixed(0);

        const weatherIcon = document.querySelector('#icon');        
        let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let imgalt = jsObject.weather[0].description;        
        weatherIcon.setAttribute('src', imgsrc);
        weatherIcon.setAttribute('alt', imgalt);
    });