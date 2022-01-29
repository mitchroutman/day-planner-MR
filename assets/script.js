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


/* On load - button hidden. On click of text area show btn*/
  $(document).ready(function(){
    $("textarea").focus(function(){
        $("button").show();
    });
});