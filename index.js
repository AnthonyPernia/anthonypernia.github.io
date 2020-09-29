
var elements_div = document.getElementsByClassName("card-repo");


function get_data(element) {
    var title = element.getElementsByTagName("h1").item(0);
    var description = element.getElementsByTagName("h2").item(0);
    var link1 = element.getElementsByTagName("a").item(0);
    var link2 = element.getElementsByTagName("a").item(1);
    var name = title.getAttribute('repo');
    var url = 'https://api.github.com/repos/anthonyperniah/' + name;
    var Http = new XMLHttpRequest();
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


function set_data(elements_div) {
    for (var e = 0; e < elements_div.length; e++) {
        get_data(elements_div[e])
    }
}



document.addEventListener("DOMContentLoaded", set_data(elements_div));

function create_element_init() {
    //Elements init
    var parent = document.getElementById("projects2");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    //Class
    div1.className = "container col-sm-12 col-lg-12 col-xl-11 mt-4";
    div2.className = 'row';
    //childs
    parent.appendChild(div1);
    div1.appendChild(div2);
    //setting data
    return div2;
}



function create_card(div2,result) {
    var div_card = document.createElement("div");
    var img = document.createElement("img");
    var a = document.createElement("a");
    var div_card_body = document.createElement("div");
    var title = document.createElement("h1");
    var description = document.createElement("h2");
    var button = document.createElement("a");
    /////class
    div_card.className = "card text-center img-fluid col-xl-4 col-lg-4 col-md-6 col-sm-12";
    img.className = "card-img-top image-projects mx-auto";
    div_card_body.className = "card-body card-repo";
    a.className = "link";
    title.className = 'black-text-anthony-h2';
    description.className = " black-text-anthony-h3";
    button.className = "center btn btn-outline-dark";
    //atts
    img.src = "assets/images/portfolio.png";
    a.target = '_blank';
    title.id = 'title_repo';
    title.repo = 'anthonyperniah.github.io';
    description.id = 'desc_repo';
    button.target = "_blank";
    button.innerHTML = 'Repositorio Git';
    //child
    div2.appendChild(div_card);
    div_card.appendChild(img);
    div_card.appendChild(div_card_body);
    div_card_body.appendChild(a);
    a.appendChild(title);
    div_card_body.appendChild(description);
    div_card_body.appendChild(button);
    title.innerHTML='fsgsgsgsg'
    //set data
    title.innerHTML=result.name;
    button.href = result.html_url;
    description.innerHTML=result.description;

}


function get_repos(div2) {
    var Http = new XMLHttpRequest();
    url_repos = "https://api.github.com/users/AnthonyPerniaH/repos";
    Http.open("GET", url_repos);
    Http.send();
    Http.onreadystatechange = (e) => {
        var result = JSON.parse(Http.response);
        for (var i=0; i<result.length;i++){
            create_card(div2,result[i]);
        }
    }
}


div2 = create_element_init();
get_repos(div2);
create_card();

