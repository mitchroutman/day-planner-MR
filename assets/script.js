//console.log("JS linked");
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

//

//Change background by time
var checkTheTime = function() {
    var timeBlock = $("#0800, #0900, #1000, #1100, #1200, #1300, #1400, #1500, #1600, #1700, #1800, #1900");         
    for (var i = 0 ; i < timeBlock.length ; i++) {
        var elementID = timeBlock[i].id;
        var changeClass = document.getElementById(timeBlock[i].id)
        $(timeBlock[i].id).removeClass('.past .present .future');
        if (elementID < date) {
            $(changeClass).addClass("past");
        } else if (elementID > date) {
            $(changeClass).addClass("future")
        } else {
            $(changeClass).addClass("present");
        }
    }
}
setInterval(checkTheTime(), (1000 * 60) * 15);

//


//Show/Hide Save Button
/* On load - button hidden. On click of text area show btn*/
  $(document).ready(function(){
    $("textarea").focus(function(){
        $("button").show();
    });
});

//
var saveButton = document.querySelector(".time-block");
if (window.localStorage["textarea"]) {
    // console.log("Test")
      saveButton.value = window.localStorage["textarea"];
}    
saveButton.addEventListener("keyup", function() {
window.localStorage["textarea"] = saveButton.value;
});