const btnEscape = document.getElementById("btn-escape")
let condicao = -1

btnEscape.addEventListener("mouseover", fugir);
function fugir(){
    condicao++

    switch(condicao){

        case 0:
        btnEscape.style.transform = "translate(190px)"
        break;

        case 1:
        btnEscape.style.transform = "translate(190px, -290px)"
        break;

        case 2:
        btnEscape.style.transform = "translate(-150px, -170px)"
        break;

        case 3:
        btnEscape.style.transform = "translate(-280px, -380px)"
        break;

        case 4:
        btnEscape.style.transform = "translate(-260px, -180px)"

        case 5:
            btnEscape.style.transform = "translate(50px, 70px)"

        condicao = 0
        break;
    }

}

function a(){
    document.getElementById("video").onclick = function() {
        window.location.href = "https://www.tiktok.com/@caaio.liima/video/7222679783694535942?is_from_webapp=1&sender_device=pc";
    };
}