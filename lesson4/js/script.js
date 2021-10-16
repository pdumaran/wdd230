let myDate = new Date();
let myYear = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let year = myDate.getFullYear();
document.getElementById("myYear").textContent = myYear;
document.getElementById("month").textContent = month;
document.getElementById("day").textContent = day;
document.getElementById("year").textContent = year;
document.getElementById("lu").textContent = "Last Updated: " +
    document.lastModified;

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

    if (dayNumber == 6) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }