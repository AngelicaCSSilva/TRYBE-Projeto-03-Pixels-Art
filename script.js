const pixelBoard = document.querySelector('#pixel-board');

function createPixelBoard() {
  for (let lines = 0; lines < 5; lines += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'line';
    for (let collums = 0; collums < 5; collums += 1) {
      const colorBox = document.createElement('div');
      colorBox.className = 'pixel';
      boardLine.appendChild(colorBox);
    }
    pixelBoard.appendChild(boardLine);
  }
}

function selectDefaultColor() {
  const blackColor = document.querySelector('#black');
  blackColor.classList.add('selected');
}

createPixelBoard();
selectDefaultColor();
