// Função que limpa o board.
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// Função que adiciona a funcionalidade de limpar o board ao botão.
function buttonClear() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clearBoard);
}

// Função que preenche o pixel selecionado com a cor desejada.
function fillPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const getBackgroundColor = getComputedStyle(selectedColor).backgroundColor;

  const clickedPixel = event.target;
  clickedPixel.style.backgroundColor = getBackgroundColor;
}

// Função que cria o board com as dimensões de 5x5.
const pixelBoard = document.querySelector('#pixel-board');

function createPixelBoard() {
  for (let lines = 0; lines < 5; lines += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'line';
    for (let collums = 0; collums < 5; collums += 1) {
      const colorBox = document.createElement('div');
      colorBox.className = 'pixel';
      boardLine.addEventListener('click', fillPixel);
      boardLine.appendChild(colorBox);
    }
    pixelBoard.appendChild(boardLine);
  }
}

// Função que coloca black como a cor default.
function selectDefaultColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

// Função que apaga a cor selecionada anteriormente.
function wipePreviousColor() {
  const previousColor = document.querySelector('.selected');
  previousColor.classList.remove('selected');
}

// Função que seleciona uma nova cor.
function changeColor(event) {
  wipePreviousColor();
  event.target.classList.add('selected');
}

// Função que adiciona o Event Listener à color palette.
function paletteSelection() {
  const colors = document.getElementById('color-palette');
  colors.addEventListener('click', changeColor);
}

createPixelBoard();
selectDefaultColor();
buttonClear();
paletteSelection();
