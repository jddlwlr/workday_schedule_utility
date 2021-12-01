
//Current time update and display using moment.js
var update = function() {
    $("#currentDay")
    .html('It is currently ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);



// Setting currentHour as a number
var currentHour = moment().hour();
console.log(currentHour);

// Targeting button Elements
var eightBtn = $('#eightBtn');

//  Targeting text area Elements
var eightText = $('#eightText');



// Color Coding Time blocks

function eight(){
    var hour = 23;
    
    if(currentHour > hour){
        $('#eightText').addClass('past');
    }
    else if(currentHour < hour){
        $(eightText).addClass('future');
    }
    else {
        $(eightText).addClass('present');

    }
};