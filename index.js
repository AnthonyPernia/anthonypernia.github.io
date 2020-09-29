

var elements_div = document.getElementsByClassName("card-repo");


function get_data(element){
    var title = element.getElementsByTagName("h1").item(0);
    var description = element.getElementsByTagName("h2").item(0);
    var link1 = element.getElementsByTagName("a").item(0);
    var link2 = element.getElementsByTagName("a").item(1);
    var Http = new XMLHttpRequest();
    var name = title.getAttribute('repo');
    var url='https://api.github.com/repos/anthonyperniah/'+name;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    link1.href = result.html_url;
    link2.href = result.html_url;
    title.innerHTML = result.name;
    description.innerHTML = result.description;
    }
};


function set_data(elements_div){
    for (var e=0; e < elements_div.length;e++){
        get_data(elements_div[e])
    }
}



document.addEventListener("DOMContentLoaded", set_data(elements_div));
