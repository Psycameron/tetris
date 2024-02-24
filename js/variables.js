export const PLAYFIELD_COLUMNS = 10;
export const PLAYFIELD_ROWS = 20;
export const TETROMINO_NAMES = ["O", "J", "M", "K", "L", "N", "P"];

export const TETROMINOES = {
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
