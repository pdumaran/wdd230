const date = new Date();
const todayDayNumber = date.getDay();

const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

//ADD the key and change units to imperial
const apiURL = `//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=afb145505af3deb5dc4be09503ddb7f9&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('desc').innerHTML = weatherInfo.list[0].weather[0].description;
    document.getElementById('temp').innerHTML = weatherInfo.list[0].main.temp.toFixed(0);
    document.getElementById('speed').innerHTML = weatherInfo.list[0].wind.speed.toFixed(0);
    document.getElementById('hum').innerHTML = weatherInfo.list[0].main.humidity;

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {

      let time = mylist[i].dt_txt;

      if (time.includes('21:00:00')) {
        console.log(`Found an entry with 21:00:00 in the time. It was report ${i} from the mylist of 40`);

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("h5");
        theDayName.textContent = weekday[forecastDayNumber];        

        let iconCode = weatherInfo.list[i].weather[0].icon;
        let iconPath = `//openweathermap.org/img/w/${iconCode}.png`;
        let theIcon = document.createElement("img")
        theIcon.src = iconPath;

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp.toFixed(0) + "\xB0F";

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theIcon);
        theDay.appendChild(theTemp);        

        document.getElementById('weatherforecast').appendChild(theDay);
      }

    }

  }); //end of "then" fat arrow function