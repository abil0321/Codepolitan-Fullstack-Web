//? Latihan menggunakan addEventListener dengan mengambil object dengan keyword this - addEventListener('type', operation/listener) --------------------
const generateNewColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
const headings = document.querySelectorAll("h1");

for (const button of buttons) {
  //* SECTION: menggunakan cara biasa -------------------------
  // button.addEventListener("click", () => {
  // button.style.backgroundColor = generateNewColor();
  // button.style.color = generateNewColor();
  // });

  //* SECTION: menggunakan object dari this ------------------------
  button.addEventListener("click", colorize);
}

for (const heading of headings) {
  //* SECTION: menggunakan cara biasa -------------------------
  // heading.addEventListener("click", () => {
  //   heading.style.backgroundColor = generateNewColor();
  //   heading.style.color = generateNewColor();
  // });

  //* SECTION: menggunakan object dari this ------------------------
  heading.addEventListener("click", colorize);
}

//* ANCHOR: menggunakan this untuk membuat object yang akan digunakan pada fungsi dan lainnya -----------------------  
function colorize() {
  this.style.backgroundColor = generateNewColor();
  this.style.color = generateNewColor();
};
