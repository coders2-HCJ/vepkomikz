var qid = new URLSearchParams(location.search).get("id");
var titles = ["Modern Laziness"];
document.getElementsByTagName("h1")[1].textContent = titles[parseInt(qid) - 1];
document.getElementsByTagName("img")[0].src = qid + ".png";
