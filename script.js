// 1. Додати нові фігури
// 2. Стилізувати нові фігури
// 3. Додати функцію рандому котра буде поветати випадкову фігуру
// 4. Центрувати фігуру незалежно від ширини

const PLAYFIELD_COLUMNS = 10;
const PLAYFIELD_ROWS = 20;
const TETROMINO_NAMES = ["O", "J", "M", "K", "L", "N", "P"];

const TETROMINOES = {
  O: [
    [1, 1],
    [1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  M: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  K: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  L: [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
  N: [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
  P: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
};

let playfield;
let tetromino;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}

function generatePlayField() {
  for (let i = 0; i < PLAYFIELD_ROWS * PLAYFIELD_COLUMNS; i++) {
    const div = document.createElement(`div`);
    document.querySelector(".grid").append(div);
  }

  playfield = new Array(PLAYFIELD_ROWS)
    .fill()
    .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  // console.table(playfield);
}

function generateTetromino() {
  const name = TETROMINO_NAMES[getRandomInt(TETROMINO_NAMES.length)];
  const matrix = TETROMINOES[name];
  let startColumn = Math.round((PLAYFIELD_COLUMNS - matrix.length) / 2);

  tetromino = {
    name,
    matrix,
    row: 0,
    column: startColumn,
  };
}

generatePlayField();
generateTetromino();

const cells = document.querySelectorAll(".grid div");

function drawPlayField() {
  for (let row = 0; row < PLAYFIELD_ROWS; row++) {
    for (let column = 0; column < PLAYFIELD_COLUMNS; column++) {
      if (playfield[row][column] == 0) continue;

      const name = playfield[row][column];
      const cellIndex = convertPositionToIndex(row, column);
      // console.log(cellIndex);
      cells[cellIndex].classList.add(name);
    }
  }
}

function drawTetromino() {
  console.log(`🚀 ~ drawTetromino ~ tetromino:`, tetromino);
  const name = tetromino.name;
  const tetrominoMatrixSize = tetromino.matrix.length;

  for (let row = 0; row < tetrominoMatrixSize; row++) {
    for (let column = 0; column < tetrominoMatrixSize; column++) {
      if (!tetromino.matrix[row][column]) continue;

      const cellIndex = convertPositionToIndex(
        tetromino.row + row,
        tetromino.column + column
      );
      // console.log(cellIndex);
      cells[cellIndex].classList.add(name);
    }
    // column
  }
  // row
}

function draw() {
  cells.forEach((cell) => cell.removeAttribute("class"));
  drawPlayField();
  drawTetromino();
}

draw();

document.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
  switch (e.key) {
    case "ArrowDown":
      moveTetrominoDown();
      break;
    case "ArrowLeft":
      moveTetrominoLeft();
      break;
    case "ArrowRight":
      moveTetrominoRight();
      break;
  }

  draw();
}

function moveTetrominoDown() {
  tetromino.row += 1;
}
function moveTetrominoLeft() {
  tetromino.column -= 1;
}
function moveTetrominoRight() {
  tetromino.column += 1;
}
