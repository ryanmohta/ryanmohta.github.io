document.addEventListener("DOMContentLoaded", myTimer);

var timerVariable = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  var hours = date.getHours();
  var cssLinkIndex = 2;
  if(hours < 7 || hours > 17) {
    document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/darkmode.css";
  }
  else {
    document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/lightmode.css";
  }
}
