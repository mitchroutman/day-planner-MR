console.log("Linked");

//Timer
// var timer = currentTime = moment().format('MMMM Do YYYY, h:mm a');
// $("#timer").text(currentTime);

function date_time() {
    now = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById('timer').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
  }
  date_time();


// function updateTime() {
//     var currentTime = moment().format('MMMM Do YYYY, h:mm a');
//     $("#timer").html("Current time and date: " + currentTime);
// };
//     updateTime();
//     setInterval(() => {
//       updateTime() 
      
//     },60000);

// console.log(currentTime);