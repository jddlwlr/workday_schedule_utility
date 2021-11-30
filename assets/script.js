
//Current time update and display using moment.js
var update = function() {
    $("#currentDay")
    .html('It is currently ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);

