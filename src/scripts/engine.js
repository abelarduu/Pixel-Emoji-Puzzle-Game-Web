// Lista de emojis com seus pares para permitir duplicatas
const objEmojis = [
    ["sprite_01.png", '🙂'],
    ["sprite_01.png", '🙂'],
    ["sprite_02.png", '😉'],
    ["sprite_02.png", '😉'],
    ["sprite_03.png", '😜'],
    ["sprite_04.png", '🤩'],
    ["sprite_04.png", '🤩'],
    ["sprite_05.png", '😂'],
    ["sprite_05.png", '😂']];

let openCards = [];


function checkMatch(){
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("card-match");
        openCards[1].classList.add("card-match");
    } else {
        openCards[0].classList.remove("card-open");
        openCards[1].classList.remove("card-open");
    }

    openCards = []
}

function handleClick(){
    if (openCards.length < 2){
        this.classList.add("card-open");
        openCards.push(this);
    }
    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);

    if (document.querySelectorAll(".card-match").length === objEmojis.length-1) {
        setTimeout(() => alert("Você Venceu!"), 100); 
    }
}

function addCard(srcImg, altImg){
    // Criando cada elemento card usando imgs dentro de divs
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.onclick = handleClick;

    const newImg = document.createElement("img");
    newImg.src = srcImg;
    newImg.alt = altImg;

    newDiv.appendChild(newImg);
    document.body.appendChild(newDiv);

    const gameDiv = document.querySelector(".game");
    gameDiv.appendChild(newDiv);
}

function main(){
    const pathImg = "./src/images/";
    


    // Embaralhar as entradas
    const shuffledEmojis = objEmojis.sort(() => Math.random() - 0.5);

    // Adicionar cada carta embaralhada
    for (let [file, alt] of shuffledEmojis){
        // Adicionando o caminho completo à imagem
        const fullPath = pathImg + file; 
        addCard(fullPath, alt);
    }
}

main();
