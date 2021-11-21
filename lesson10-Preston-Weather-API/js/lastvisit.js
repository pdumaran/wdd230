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

/* User Last Visit */

// Testing Abigail Taylor's code
localStorage.setItem("lastDate", day);
let lastDate = localStorage.getItem("lastDate");
let lastVisit = day - lastDate;
document.getElementById("last-visit").textContent = `Last visited ${lastVisit} days ago`;

// Testing Elie's code
function visitCount() {
    var numberOfvisits = document.getElementById('numberOfvisits');
    var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
    
    if (!current) {
        visits++;
    }

    numberOfvisits.innerHTML = `You have visited this page ${visits} time(s)`;
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', false);    
}

visitCount()