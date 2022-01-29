console.log("JS linked");
var date = moment().format('h:mm a');
var dateMonthAsWord = moment().format('h:mm a');
console.log(dateMonthAsWord);

//Timer
function date_time() {
    now = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById('timer').innerHTML = now;
    // setTimeout(function () { date_time(); }, 1000);
  }
  setInterval(date_time);


//Timetable color changer

//Change background by time
var checkTheTime = function() {
    var hourBlocks = $(".time-block");
    
    for (var i = 0 ; i < hourBlocks.length ; i++) {
        var elementID = hourBlocks[i].id;
        var changeClass = document.getElementById(hourBlocks[i].id)
        
        $(hourBlocks[i].id).removeClass('.past .present .future');

        if (elementID < date) {
            $(changeClass).addClass("past");
        } else if (elementID > date) {
            $(changeClass).addClass("future")
        } else {
            $(changeClass).addClass("present");
        }
    }
}
//Refresh to update backgroundcolor
setInterval(checkTheTime(), (1000 * 60) * 15);

//


//Show/Hide Save Button
/* On load - button hidden. On click of text area show btn*/
  $(document).ready(function(){
    $("textarea").focus(function(){
        $("button").show();
    });
});

// //
// var saveButton = document.querySelector("#time-container");
// if (window.localStorage["TextEditorData"]) {
//     // console.log("Test")
//       saveButton.value = window.localStorage["TextEditorData"];
// }    
// saveButton.addEventListener("keyup", function() {
// window.localStorage["TextEditorData"] = saveButton.value;
// });