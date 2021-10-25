let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("myYear").textContent = myYear;
document.getElementById("lu").textContent = "Last Updated: " +
    document.lastModified;

/* Call Webfont */
WebFont.load({
    google: {
        families: [
            'Roboto', 'Noto Sans JP', 'Open Sans'
        ]
    }
});