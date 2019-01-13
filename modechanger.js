document.addEventListener("DOMContentLoaded", myTimer);

var timerVariable = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var cssLinkIndex = 2;
  if(hour < 7 || (hour > 16 && minute > 29) || hour > 17) {
    document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/darkmode.css";
  }
  else {
    document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/lightmode.css";
  }
}
