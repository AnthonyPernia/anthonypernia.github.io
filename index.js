

var elements_div = document.getElementsByClassName("card-repo");


function get_data(element){
    var title = element.getElementsByTagName("h1").item(0);
    var description = element.getElementsByTagName("h2").item(0);
    var Http = new XMLHttpRequest();
    var name = title.getAttribute('repo');
    var url='https://api.github.com/repos/anthonyperniah/'+name;
    console.log(url)
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    console.log(result.name);
    console.log(result.description);
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
