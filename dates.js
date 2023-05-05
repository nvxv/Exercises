function dateFunction() {

let date1 = document.getElementById("dateInput").value;
let date2 = new Date();


let msec_per_day = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = date2.getTime() - date1.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log("The number of days between dates is " + numDays);
}

return document.getElementById("dateOutput").innerHTML = dateFunction;
