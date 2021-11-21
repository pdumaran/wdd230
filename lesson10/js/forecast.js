const apiURL = `//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=afb145505af3deb5dc4be09503ddb7f9&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const noon = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        noon.forEach(forecast => {
            let thedate = new Date(forecast.dt_txt);
            document.querySelector(`#dayofweek${day + 1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp;
            day++;
        });

        // const currentTemp = document.querySelector('cc-temp');
        // const weathericon = document.querySelector('cc-img');

        // currentTemp.textContent = jsObject.main.temp.toFixed(0);
        // let imgsrc = `//openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        // let imgalt = jsObject.weather[0].description;

        // currentTemp.textContent = jsObject.main.temp.toFixed(0);
        // weathericon.setAttribute('src', imgsrc);
        // weathericon.setAttribute('alt', imgalt);
    });