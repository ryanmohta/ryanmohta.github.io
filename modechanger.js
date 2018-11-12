var date = new Date();
var hours = date.getHours();
var cssLinkIndex = 2;
if(hours < 7 || hours > 17) {
  document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/darkmode.css";
}
else {
  document.getElementsByTagName("link")[cssLinkIndex].href = "stylesheets/lightmode.css";
  /*var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "stylesheets/lightmode.css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);*/

}
