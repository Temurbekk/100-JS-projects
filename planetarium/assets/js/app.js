let url = "https://api.le-systeme-solaire.net/rest/bodies/mars";
let xhr = new XMLHttpRequest();
xhr.response = "json";
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.response);
        let moons;
        if (response.moons) {
            moons = response.moons.length;
        } else {
            moons = "0";
        };
        document.getElementsByClassName("name")[0].innerHTML = response.englishName;
        document.getElementsByClassName("moons")[0].innerHTML = "Moons " + moons;
        document.getElementsByClassName("gravity")[0].innerHTML = "Gravity " + response.gravity + "m/s";
        switch (response.englishName) {
            case "Venus":
                document.getElementsByClassName("bio")[0].innerHTML = "Venus Bio";
                break;
            case "Earth":
                document.getElementsByClassName("bio")[0].innerHTML = "Earth Bio"
                break;
            case "Mars":
                document.getElementsByClassName("bio")[0].innerHTML = "Mars Bio"
                break;
            case "Jupiter":
                document.getElementsByClassName("bio")[0].innerHTML = "Jupiter Bio"
                break;
            default:
                document.getElementsByClassName("bio")[0].innerHTML = "Saturn Bio"
        };
    };
};

xhr.open('GET', url);
xhr.send();
let planets = document.getElementsByClassName("planet");
let num = 2;

function shift(elem){
    if(elem.classList.contains("arrow-2")){
        planets[num].classList.toggle("large");
        planets[num].style.left = "20%";
        planets[num].style.transform = "rotate(45deg)";
        num++;
        planets[num].classList.toggle("large");
        if(num === 4){
            planets[num].style.left = "35%";
        }else{
            planets[num].style.left = "45%";
        };
        planets[num].style.transform = "rotate(0deg)";
    }else{
        planets[num].classList.toggle("large");
        planets[num].style.left = "70%";
        planets[num].style.transform = "rotate(0deg)";
        num--;
        planets[num].style.left = "45%";
        planets[num].classList.toggle("large");
        planets[num].style.transform = "rotate(0deg)";
    };

    let planet = planets[num].dataset.planet;

    url = "https://api-le-systeme-solaire.net/rest/bodies" + planet;
    xhr.open('GET',url);
    xhr.send();
};