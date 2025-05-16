const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const p1Btn = document.querySelector("#p1-button");
const p2Btn = document.querySelector("#p2-button");
const resetBtn = document.querySelector("#reset");
const winPointSelect = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winPoint = 0;
let gameOver = false;

p1Btn.addEventListener("click", () => {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", () => {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

function disableButton() {
  if (winPoint == 0) {
    p1Btn.setAttribute("disabled", "");
    p2Btn.setAttribute("disabled", "");
  } else {
    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
  }
}

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
}
resetBtn.addEventListener("click", reset);

winPointSelect.addEventListener("change", function (e) {
  winPoint = parseInt(this.value);
  disableButton();
  reset();
});

disableButton();
