
//Current time update and display using moment.js
var update = function() {
    $("#currentDay")
    .html('It is currently ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);



// Setting currentHour as a number
var currentHour = moment().hour();


// Targeting button Elements
var eightBtn = $('#eightBtn');
var nicetn = $('#nineBtn');
var tenBtn = $('#tenBtn');
var elevenBtn = $('#elevenBtn');
var twelveBtn = $('#twelveBtn');
var oneBtn = $('#oneBtn');
var twoBtn = $('#twoBtn');
var threeBtn = $('#threeBtn');
var fourBtn = $('#fourBtn');
var fiveBtn = $('#fiveBtn');

//  Targeting text area Elements
var eightText = $('#eightText');
var nineText = $('#nineText');
var tenText = $('#tenText');
var elevenText = $('#elevenText');
var twelveText = $('#twelveText');
var oneText = $('#oneText');
var twoText = $('#twoText');
var threeText = $('#threeText');
var fourText = $('#fourText');
var fiveText = $('#fiveText');

// Runs color coding functions when called at the end
function innit() {
    eight();
    nine();
    ten();
    eleven();
    twelve();
    one();
    two();
    three();
    four();
    five();
};


// Color Coding Time blocks
function eight(){
    var hour = 8;

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

function nine(){
    var hour = 9;

    if(currentHour > hour){
        $(nineText).addClass('past');
    }
    else if(currentHour < hour){
        $(nineText).addClass('future');
    }
    else {
        $(nineText).addClass('present');

    }
};

function ten(){
    var hour = 10;

    if(currentHour > hour){
        $(tenText).addClass('past');
    }
    else if(currentHour < hour){
        $(tenText).addClass('future');
    }
    else {
        $(tenText).addClass('present');

    }
};

function eleven(){
    var hour = 11;

    if(currentHour > hour){
        $(elevenText).addClass('past');
    }
    else if(currentHour < hour){
        $(elevenText).addClass('future');
    }
    else {
        $(elevenText).addClass('present');

    }
};

function twelve(){
    var hour = 12;

    if(currentHour > hour){
        $(twelveText).addClass('past');
    }
    else if(currentHour < hour){
        $(twelveText).addClass('future');
    }
    else {
        $(twelveText).addClass('present');

    }
};

function one(){
    var hour = 13;

    if(currentHour > hour){
        $(oneText).addClass('past');
    }
    else if(currentHour < hour){
        $(oneText).addClass('future');
    }
    else {
        $(oneText).addClass('present');

    }
};

function two(){
    var hour = 14;

    if(currentHour > hour){
        $(twoText).addClass('past');
    }
    else if(currentHour < hour){
        $(twoText).addClass('future');
    }
    else {
        $(twoText).addClass('present');

    }
};

function three(){
    var hour = 15;

    if(currentHour > hour){
        $(threeText).addClass('past');
    }
    else if(currentHour < hour){
        $(threeText).addClass('future');
    }
    else {
        $(threeText).addClass('present');

    }
};

function four(){
    var hour = 16;

    if(currentHour > hour){
        $(fourText).addClass('past');
    }
    else if(currentHour < hour){
        $(fourText).addClass('future');
    }
    else {
        $(fourText).addClass('present');

    }
};

function five(){
    var hour = 17;

    if(currentHour > hour){
        $(fiveText).addClass('past');
    }
    else if(currentHour < hour){
        $(fiveText).addClass('future');
    }
    else {
        $(fiveText).addClass('present');

    }
};



$(document).ready (function () {
// Text Area saves to local storage by hour (I know... see the theme?)
//  8
    $(eightText).text(localStorage.getItem("eightVal"));
    
    $(eightBtn).on("click", function () {
      localStorage.setItem("eightVal", $(eightText).val());
    })
  
//  9
    $(nineText).text(localStorage.getItem("nineVal"));
    
    $(nineBtn).on("click", function () {
      localStorage.setItem("nineVal", $(nineText).val());
    })
//  10
    $(tenText).text(localStorage.getItem("tenVal"));
    
    $(tenBtn).on("click", function () {
      localStorage.setItem("tenVal", $(tenText).val());
    })
//  11
    $(elevenText).text(localStorage.getItem("elevenVal"));
    
    $(elevenBtn).on("click", function () {
      localStorage.setItem("elevenVal", $(elevenText).val());
    })
//  12
    $(twelveText).text(localStorage.getItem("twelveVal"));
    
    $(twelveBtn).on("click", function () {
      localStorage.setItem("twelveVal", $(twelveText).val());
    })
//  1
    $(oneText).text(localStorage.getItem("oneVal"));
    
    $(oneBtn).on("click", function () {
      localStorage.setItem("oneVal", $(oneText).val());
    })
//  2
    $(twoText).text(localStorage.getItem("twoVal"));
    
    $(twoBtn).on("click", function () {
      localStorage.setItem("twoVal", $(twoText).val());
    })
//  3
    $(threeText).text(localStorage.getItem("threeVal"));
    
    $(threeBtn).on("click", function () {
      localStorage.setItem("threeVal", $(threeText).val());
    })
//  4
    $(fourText).text(localStorage.getItem("fourVal"));
    
    $(fourBtn).on("click", function () {
      localStorage.setItem("fourVal", $(fourText).val());
    })
//  5
    $(fiveText).text(localStorage.getItem("fiveVal"));
    
    $(fiveBtn).on("click", function () {
      localStorage.setItem("fiveVal", $(fiveText).val());
    })
});

innit();
