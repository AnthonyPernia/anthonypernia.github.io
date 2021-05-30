//Script de carga de data
var elements_div_projects = document.getElementsByClassName("card_container");
var elements_div_blog = document.getElementsByClassName("card_blog");
var userGit = "anthonyperniah";
var blog_data =
  "https://raw.githubusercontent.com/" +
  userGit +
  "/" +
  userGit +
  ".github.io/master/data/data.json";
function get_data_projects(element) {
  var title = element.getElementsByTagName("h4").item(0);
  var description = element.getElementsByTagName("p").item(0);
  var link1 = element.getElementsByTagName("a").item(0);
  //var link2 = element.getElementsByTagName("a").item(1);
  var img = element.getElementsByTagName("img").item(0);
  var name = title.getAttribute("repo");
  var url = "https://api.github.com/repos/" + userGit + "/" + name;
  var Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    link1.href = result.html_url;
    //link2.href = result.html_url;
    title.innerHTML = result.name.replace(/([A-Z])/g, " $1").trim();
    img.src =
      "https://raw.githubusercontent.com/" +
      userGit +
      "/" +
      result.name +
      "/master/img_preview/preview.png";
    description.innerHTML = result.description;
  };
}

function get_data_blogs() {
  var url = "https://bloganthonyperniah.herokuapp.com/blog/auth/authenticate";
  var data = new FormData();
  data.append("username", "anthony");
  data.append("password", "anthony");
  var Http = new XMLHttpRequest();
  Http.open("POST", url, true);
  Http.onload = function () {
    // do something to response
    console.log(this.responseText);
};
Http.send(data);
  
}

function set_data_blog() {
  console.log("prueba blog");
  get_data_blogs();
}

function set_data(elements_div_projects, elements_div_blog) {
  var data1 = 1;
  for (var e = 0; e < elements_div_projects.length; e++) {
    get_data_projects(elements_div_projects[e]);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  set_data(elements_div_projects, elements_div_blog),
  set_data_blog()
);

//Script de scroll

function scrollFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById("navbar_sign_id").style.visibility = "visible";
  } else {
    document.getElementById("navbar_sign_id").style.visibility = "hidden";
  }
}

window.onscroll = function () {
  scrollFunction();
};
