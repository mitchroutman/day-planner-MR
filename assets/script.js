console.log("JS linked");


//Timer
// var timer = currentTime = moment().format('MMMM Do YYYY, h:mm a');
// $("#timer").text(currentTime);

function date_time() {
    now = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById('timer').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
  }
  date_time();



/* Button is hidden if not in text field --- When user click on text field, show button / 
if button === hidden, turn on
*/

// jQuery('.saveBtn').hide();
// jQuery('.saveBtn').click(function(){
//     var respondControls = jQuery(this).closest('.toggle').next();
//     respondControls.show();
// });

// make questionRespond display:none
{/* <div class="questionRespond" style="display:none"> */}

//this will show the divs on clicking textarea
$('textarea').focus(function(){
    console.log("Save button show")
    jQuery(this).closest('input').find('.saveBtn').show();       
})


// // this function will hide divs when you leave that textarea
// $('textarea').blur(function(){

//       jQuery(this).closest('.question').find('.questionRespond').hide();       
// })