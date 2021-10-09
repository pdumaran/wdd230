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