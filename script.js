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

// Função que cria o board com as dimensões iniciais de 5x5.
const pixelBoard = document.querySelector('#pixel-board');
let size = 5;

function createPixelBoard() {
  for (let lines = 0; lines < size; lines += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'line';
    for (let collums = 0; collums < size; collums += 1) {
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

// Função que valida o valor do input.
function validateSize(value) {
  if (value === 0 || value === '') {
    return false;
  }
  return true;
}

// Função que deleta o board anterior.
function deleteBoard(children) {
  for (let index = (children.length - 1); index >= 0; index -= 1) {
    children[index].remove();
  }
}

// Função que cria um novo board.
function recreateBoard() {
  deleteBoard(pixelBoard.children);
  createPixelBoard();
}

// Função que calcula o size do board (min. 5 / max. 50).
function doSize(boardSize) {
  if (boardSize > 50) {
    size = 50;
  } else if (boardSize < 5) {
    size = 5;
  } else {
    size = boardSize;
  }
}

// Função que pega o input do usuário e cria um novo board conforme tamanho informado.
function getBoardSize() {
  const queryBoardSize = document.querySelector('#board-size');
  const boardSize = queryBoardSize.value;
  const validate = validateSize(boardSize);
  if (validate === false) {
    alert('Board inválido!');
  } else {
    doSize(boardSize);
  }
  recreateBoard();
}

// Função que adiciona event listener para o botão de gerar um novo board.
function submitSize() {
  const submitBtn = document.querySelector('#generate-board');
  submitBtn.addEventListener('click', getBoardSize);
}

// Função que gera cores aleatórias.
// ref.: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const canBe = '0123456789ABCDEF';
  let color = '#';
  for (let letter = 0; letter < 6; letter += 1) {
    color += canBe[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Função que coloca cores aleatórias na paleta.
function putRandomColor() {
  const rdnColor = document.querySelectorAll('.rdnColor');
  for (let index = 0; index < rdnColor.length; index += 1) {
    rdnColor[index].style.backgroundColor = getRandomColor();
  }
}

putRandomColor();
createPixelBoard();
selectDefaultColor();
buttonClear();
paletteSelection();
submitSize();
