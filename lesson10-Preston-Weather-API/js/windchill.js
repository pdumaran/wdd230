// Windchill

const temp_Number = parseFloat(document.getElementById("temp").textContent);
// console.log(tempNumber);

const speed_Number = parseFloat(document.getElementById("speed").textContent);
// console.log(speedNumber);

let windchill = 35.74 + (0.6215 * temp_Number) - (35.75 * Math.pow(speed_Number, 0.16)) + (0.4275 * temp_Number * Math.pow(speed_Number, 0.16));
// console.log(windchill);

windchill = Math.round(windchill);
// console.log(windchill);

if (temp_Number <= 50 && speed_Number > 3) {
    document.getElementById("chill").textContent = "Wind Chill is " + windchill + "\xB0F";
} else {
    document.getElementById("chill").textContent = "No Wind Chill Today";
}