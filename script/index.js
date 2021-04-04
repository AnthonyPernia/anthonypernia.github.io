var elements_div = document.getElementsByClassName("card");

function get_data(element) {
  var title = element.getElementsByTagName("h4").item(0);
  var description = element.getElementsByTagName("p").item(0);
  var link1 = element.getElementsByTagName("a").item(0);
  //var link2 = element.getElementsByTagName("a").item(1);
  var img = element.getElementsByTagName("img").item(0);
  var name = title.getAttribute("repo");
  var url = "https://api.github.com/repos/AnthonyPerniah/" + name;
  var Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    link1.href = result.html_url;
    //link2.href = result.html_url;
    title.innerHTML = result.name.replace(/([A-Z])/g, " $1").trim();
    img.src =
      "https://raw.githubusercontent.com/AnthonyPerniah/" +
      result.name +
      "/master/img_preview/preview.png";
    description.innerHTML = result.description;
  };
}

function set_data(elements_div) {
  for (var e = 0; e < elements_div.length; e++) {
    get_data(elements_div[e]);
  }
}

document.addEventListener("DOMContentLoaded", set_data(elements_div));

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("navbar_sign_id").style.visibility='visible';
  } else {
    document.getElementById("navbar_sign_id").style.visibility='hidden';
  }
}
