//chama a função ao carregar a página
window.onload = e => {
    typeWriter();
    scrollEffect();
};

//função para simular digitação no começo da página
function typeWriter(){
    //pega a classe dos elementos h1 e p para trocar o innerHTML
    let typeW = document.getElementsByClassName("typeW");

    //x e y = valores auxiliares para arrays e loops
    let x=0, y=0;

    //declaração dos novos valores que serão substituidos no innerHTML
    let name = "Rafael Tonon";
    //let title = "Estudante Front-End";
    let title = "Web Dev";

    // setInterval para escrever as letras em um intervalo fixo
    let typing = setInterval(e => {
        if (x < name.length){
            typeW[0].innerHTML += name[x];
            x++;

        } else if (y < title.length){
            //remove a border do ::after da tag h1
            typeW[0].classList.remove("kb-cursor");
            //adiciona a border do ::after na tag p
            typeW[1].classList.add("kb-cursor")
            typeW[1].innerHTML += title[y];
            y++;

        } else {
            //quando toda a váriavel é escrita então remove a border fixa e troca por uma animação da border piscando
            typeW[1].classList.remove("kb-cursor");
            typeW[1].classList.add("kb-cursor-animation");
            //fecha o setInterval
            clearInterval(typing);
        }
    }, 150);
}


//funcão para fazer o conteúdo do main aparecer
function scrollEffect(){
    //pegar o valor da axis Y do scroll
    const scrollPosition = window.scrollY;

    //pega os elementos escondidos
    let hidden = document.getElementsByClassName("hidden");

    //só ativar este script em aparelhos com width maiores. Pesquisar para ver se tem como detectar qual o tipo de aparelho para melhor customização de performance
    if (screen.width > 1200){

        //requisita para o browser que vc quer fazer uma coisa quando ele foi pintar a pagina
        let requestAnimationFrame = window.requestAnimationFrame(scrollEffect);
        console.log(scrollPosition);
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
