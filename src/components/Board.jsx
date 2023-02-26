import "./Board.css";

const h = ["A", "B", "C", "D", "E", "F", "G", "H"];
const v = [1, 2, 3, 4, 5, 6, 7, 8];

export const Board = () => {
  let board = [];
  let prevTarget = null;

  const handleClick = (x, y, e) => {
    if (!prevTarget) prevTarget = e.target;
    const node = document.createElement("span");
    node.classList.add("valid");

    let allTiles = document.querySelectorAll(".valid");
    allTiles.forEach((tile) => {
      tile.remove();
    });

    if (e.target !== prevTarget || allTiles.length === 0) {
      x - 2 >= 0 &&
        y - 1 >= 0 &&
        document
          .getElementById(`${h[x - 2]}${v[y - 1]}`)
          .appendChild(node.cloneNode(true));
      x - 2 >= 0 &&
        y + 1 <= 7 &&
        document
          .getElementById(`${h[x - 2]}${v[y + 1]}`)
          .appendChild(node.cloneNode(true));
      x - 1 >= 0 &&
        y - 2 >= 0 &&
        document
          .getElementById(`${h[x - 1]}${v[y - 2]}`)
          .appendChild(node.cloneNode(true));
      x - 1 >= 0 &&
        y + 2 <= 7 &&
        document
          .getElementById(`${h[x - 1]}${v[y + 2]}`)
          .appendChild(node.cloneNode(true));
      x + 1 <= 7 &&
        y - 2 >= 0 &&
        document
          .getElementById(`${h[x + 1]}${v[y - 2]}`)
          .appendChild(node.cloneNode(true));
      x + 1 <= 7 &&
        y + 2 <= 7 &&
        document
          .getElementById(`${h[x + 1]}${v[y + 2]}`)
          .appendChild(node.cloneNode(true));
      x + 2 <= 7 &&
        y - 1 >= 0 &&
        document
          .getElementById(`${h[x + 2]}${v[y - 1]}`)
          .appendChild(node.cloneNode(true));
      x + 2 <= 7 &&
        y + 1 <= 7 &&
        document
          .getElementById(`${h[x + 2]}${v[y + 1]}`)
          .appendChild(node.cloneNode(true));
    }
    prevTarget = e.target;
  };

  for (let i = 0; i < h.length; i++) {
    for (let j = 0; j < v.length; j++) {
      board.push(
        <div
          key={`${h[i]}${v[j]}`}
          className={`tile ${(i + j + 2) % 2 ? "light" : "dark"}`}
          id={`${h[i]}${v[j]}`}
          onClick={(e) => handleClick(i, j, e)}
        ></div>
      );
    }
  }
  return <div className="board">{board}</div>;
};
