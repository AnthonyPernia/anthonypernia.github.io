

var elements_title = document.getElementsByClassName("card-repo-title");
var elements_desc = document.getElementsByClassName("card-repo-desc");



function get_data(){
    var title = document.getElementById('title_repo');
    var description = document.getElementById('desc_repo');
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


function set_data(){
    var elements_title = document.getElementsByClassName("card-repo-title");
    var elements_desc = document.getElementsByClassName("card-repo-desc");
    for (e in elements_title){
        console.log(e.outerHTML)
        console.log('e')
    }
}


console.log('llama a javascript si ')
document.addEventListener("DOMContentLoaded", set_data());
