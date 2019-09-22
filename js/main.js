//chama a função ao carregar a página
window.onload = e => {
    typeWriter();
    scrollEffect();
};

//função para simular digitação no começo da página
function typeWriter() {
    
    //declaração dos valores que serão escritos no innerHTML
    const name = "Rafael Tonon";
    const title = "Web Dev";
    //pega a classe dos elementos h1 e p para trocar o innerHTML
    let headerText = document.getElementsByClassName("headerText");

    //x e y = valores auxiliares para arrays e loops
    let x=0, y=0;



    // setTimeou para escrever as letras em um intervalo fixo
    let timeOutLoop = setTimeout(function typing() {
        if (x < name.length){
            headerText[0].innerHTML += name[x];
            x++;
        } else if (y < title.length){
            //remove a border do ::after da tag h1
            headerText[0].classList.remove("kb-cursor");
            //adiciona a border do ::after na tag p
            headerText[1].classList.add("kb-cursor")
            headerText[1].innerHTML += title[y];
            y++;
        } else {
            //após a variavel for escrita remove a border-right fixa e troca por uma animação da border-right piscando
            headerText[1].classList.remove("kb-cursor");
            headerText[1].classList.add("kb-cursor-blinking");
            //fecha o setTimeout
            clearTimeout(timeOutLoop);
        }
        setTimeout(typing, 150);
    }, 150);
}


//funcão para fazer o conteúdo do main aparecer
function scrollEffect(){
    //pegar o valor da axis Y do scroll
    const scrollPosition = window.scrollY;
    

    //pegar os elementos escondidos
    const hidden = document.getElementsByClassName("hidden");
    
    //só ativar este script em aparelhos com width maiores.
    if (screen.width > 1300){

        //requisita para o browser que vc quer fazer uma coisa quando ele foi pintar a pagina
        let requestAnimationFrame = window.requestAnimationFrame(scrollEffect);

        //condições para fazer os elementos aparecerem de acordo com a posição do scrollPosition
        if (scrollPosition >= 250 && scrollPosition < 500){
            hidden[0].classList.add("main-title")
            hidden[1].classList.add("scroll-effect");
        } else if (scrollPosition >= 1000 && scrollPosition < 1200) {
            hidden[2].classList.add("row-reverse", "scroll-effect");
        } else if (scrollPosition >= 1500 && scrollPosition < 1800){
            hidden[3].classList.add("scroll-effect");
        } else if (scrollPosition >= 2150 && scrollPosition < 2500){
            hidden[4].classList.add("scroll-effect", "soon");
        } else if (scrollPosition > 2500){
            //desativa a requisição de animation frames para liberar processamento
            window.cancelAnimationFrame(requestAnimationFrame);
        }
    }
};
