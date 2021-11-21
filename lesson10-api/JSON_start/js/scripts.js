//ADD the key and change units to imperial
const apiURL = `//api.openweathermap.org/data/2.5/forecast?zip=6121,ph&id=1729564&appid=afb145505af3deb5dc4be09503ddb7f9&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconCode = weatherInfo.weather[0].icon;    
    const iconPath = `//openweathermap.org/img/w/${iconCode}.png`

    document.getElementById('weather_icon').src = iconPath;

    const myDate = new Date();
    const myDay = myDate.getDay();
    console.log(myDay);

    const myWeekDay = new Array(7);
    myWeekDay[0] = 'Sunday';
    myWeekDay[1] = 'Monday';
    myWeekDay[2] = 'Tuesday';
    myWeekDay[3] = 'Wednesday';
    myWeekDay[4] = 'Thursday';
    myWeekDay[5] = 'Friday';
    myWeekDay[6] = 'Saturday';
    console.log(myWeekDay);

 }); //end of "then" fat arrow function



