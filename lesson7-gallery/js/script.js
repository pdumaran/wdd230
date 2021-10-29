let myDate = new Date();
let myYear = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let year = myDate.getFullYear();
document.getElementById("myYear").textContent = myYear;
document.getElementById("month").textContent = month;
document.getElementById("day").textContent = day;
document.getElementById("year").textContent = year;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

/* JS-Message Based on Week Day */
/* Watch Paul Cheney tutorial at https://video.byui.edu/media/JS-Message+Based+on+Week+Day/0_8im2g4rm */

const today = new Date();
console.log(today);

const dayNumber = today.getDay(); /* dayNumber means Monday is day 1, Tues is day 2, etc. */
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

// Windchill

const tempNumber = parseFloat(document.getElementById("temp").textContent);
// console.log(tempNumber);

const speedNumber = parseFloat(document.getElementById("speed").textContent);
// console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
// console.log(windchill);

windchill = Math.round(windchill);
// console.log(windchill);

if (tempNumber <= 50 && speedNumber > 3){
    document.getElementById("chill").textContent = "Wind Chill is "+windchill+"\xB0F";
} else {
    document.getElementById("chill").textContent = "No Wind Chill Today";
}

/* Progressive/Lazy Loading */

