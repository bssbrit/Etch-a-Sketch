// Criar divs com javascript, criando uma grid para elas com css

/*div

Para criar uma div:
 - Criar um for loop de criação de elementos com create element para div
 - Definir o número de loopings pelo imput do usuário 
*/

// para i = 0 , enquanto "i" for menor ou igual ao númeroDeDivs, aumentar em 1 {

//  iremos rodar talvez uma função de criação de divs em que o nome de cada div é "div + i"

//} após isso eu acho que teremos que sincronizar com o css para que as divs fazem flex wrap ou css grid(que não sabemos usar)

//botões

let botao4 = document.getElementById("botao4");
botao4.addEventListener("click", function () {
  let numeroDeDivs = 4;
  const drawingBoard = document.querySelector(".drawingBoard");
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

let botao8 = document.getElementById("botao8");
botao8.addEventListener("click", function () {
  let numeroDeDivs = 8;
  const drawingBoard = document.querySelector(".drawingBoard");
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

let botao16 = document.getElementById("botao16");
botao16.addEventListener("click", function () {
  let numeroDeDivs = 16;
  const drawingBoard = document.querySelector(".drawingBoard");
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

let botao32 = document.getElementById("botao32");
botao32.addEventListener("click", function () {
  let numeroDeDivs = 16;
  const drawingBoard = document.querySelector(".drawingBoard");
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

let botao64 = document.getElementById("botao64");
botao64.addEventListener("click", function () {
  let numeroDeDivs = 16;
  const drawingBoard = document.querySelector(".drawingBoard");
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

let botao100 = document.getElementById("botao100");
botao100.addEventListener("click", function () {
  let numeroDeDivs = 100;
  const drawingBoard = document.querySelector(".drawingBoard");

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
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  ".drawingBoard".empty();
});
*/
//teste criação de divs
/*
//let numeroDeDivs = 16;
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
*/
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
