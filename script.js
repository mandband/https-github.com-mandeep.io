var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
     if (seconds >0 ) {
         seconds--;
     } else {
         clearInterval(timer);
         
     }
}
document.getElementById("timer").onmousedown = function() {
  if(!timer) {
    timer = window.setInterval(function() {
      myFunction();
    }, 1000);
  }
} 


document.getElementById("timer").innerHTML="Click on the timer to start your minute: 1:00"; 
