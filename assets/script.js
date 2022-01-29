console.log("JS linked");
var date = moment().format('h:mm a');
var dateMonthAsWord = moment().format('h:mm a');
console.log(dateMonthAsWord);

//Timer
function date_time() {
    now = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById('timer').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
  }
  date_time();  

//Timetable color changer
//Adding css class to element
var addPast = document.getElementById('timetable');
addPast.className += " past";

var addPresent = document.getElementById('timetable');
addPresent.className += " present";

var addFuture = document.getElementById('timetable');
addFuture.className += " future";

if (dateMonthAsWord == date) {
    addPresent;
}
//



//Show/Hide Save Button
/* On load - button hidden. On click of text area show btn*/
  $(document).ready(function(){
    $("textarea").focus(function(){
        $("button").show();
    });
});