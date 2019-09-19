var header = document.getElementById("top");
window.onload = typeWriter;


function randomizer(){

}


function typeWriter(){
    let typeW = document.getElementsByClassName("typeW");
    let x=0, y=0;

    let name = "Rafael Tonon";
    let title = "Estudante Front-End";

    typeW[0].innerHTML = "";
    typeW[1].innerHTML = "";

    let typing = setInterval(e => {
        
        if (x < name.length){
            //typeW[0].classList.add("kb-cursor");
            typeW[0].innerHTML += name[x];
            x++;
        
        } else if (y < title.length){
            typeW[0].classList.remove("kb-cursor");
            typeW[1].classList.add("kb-cursor")
            typeW[1].innerHTML += title[y];
            y++;
        
        } else {
            clearInterval(typing);
        }
        
        console.log("x");
    }, 150);
}