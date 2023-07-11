var q = new URLSearchParams(location.search);
var titles = ["Modern Laziness"];
document.getElementsByTagName("h1")[1].textContent = titles[parseInt(q.get("id")) - 1];
document.getElementsByTagName("img")[0].src = q.get("id") + ".png";
document.getElementsByTagName("button")[0].onclick = function() { location.href = location.href.split("?")[0] + "?id=" + (parseInt(q.get("id")) - 1); };
document.getElementsByTagName("button")[1].onclick = function() { location.href = location.href.split("?")[0] + "?id=" + (parseInt(q.get("id")) + 1); };
