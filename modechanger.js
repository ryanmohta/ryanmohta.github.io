var date = new Date();
var hours = date.getHours();
var cssLinkIndex = 2;
if(hours < 7 || hours > 17) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "stylesheets/darkmode.css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
else {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "stylesheets/lightmode.css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

}
