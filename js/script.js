// Criar divs com javascript, criando uma grid para elas com css

/*div

Para criar uma div:
 - Criar um for loop de criação de elementos com create element para div
 - Definir o número de loopings pelo imput do usuário 
*/

// para i = 0 , enquanto "i" for menor ou igual ao númeroDeDivs, aumentar em 1 {

//  iremos rodar talvez uma função de criação de divs em que o nome de cada div é "div + i"

//} após isso eu acho que teremos que sincronizar com o css para que as divs fazem flex wrap ou css grid(que não sabemos usar)

//teste criação de divs

//const drawingBoard = document.querySelector(".drawingBoard");
let numeroDeDivs = 50;
const drawingBoard = document.querySelector(".drawingBoard");
document.addEventListener("DOMContentLoaded", function () {
  drawingBoard.style.gridTemplateColumns = `repeat(${numeroDeDivs}, 1fr)`;
  drawingBoard.style.gridTemplateRows = `repeat(${numeroDeDivs}, 1fr)`;
  console.log("hi");
  for (let i = 0; i < numeroDeDivs ** 2; i++) {
    const divDesenho = document.createElement("div");
    divDesenho.classList.add("divDeDesenhar");
    //divDesenho.textContent = "div";
    divDesenho.style.color = "white";

    drawingBoard.appendChild(divDesenho);
    divDesenho.addEventListener("mouseover", function () {
      divDesenho.style.backgroundColor = "black";
    });
  }
});

/*
Para mudar a cor
   - Acho que um eventlistener para que sempre que passar por cima da div mudar a backgroundcolour para preta permanentemente
*/
/*
divDesenho.addEventListener("mouseover", function () {
  divDesenho.style.backgroundColor = "black";
});
*/
/* 
Para criar botões

  -botão de imput para definiri número de Divs
  -botões de mudar a cor 
  -de reiniciar tudo 
*/
