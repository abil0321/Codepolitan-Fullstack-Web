//?  Menjelajahi Element Parent, Child, dan Sibling -----------------------------------
const textBold = document.querySelector("b");

// todo: parent element ==========================
console.log(textBold.parentElement); //* p
console.log(textBold.parentElement.parentElement); //* body

const para = document.querySelector("p");

// todo: child element ==========================
console.log(para.children); //* banyak

console.log(para.children[6].childElementCount);
console.log(para.children[6].children);
console.log(para.children[6].parentElement); //* p

// todo: sibling element ==========================
const squareImg = document.querySelector(".square");

//* Merepresentasikan posisi kodingan di vscode ----------
console.log(squareImg.previousSibling);
console.log(squareImg.nextSibling);

//* Merepresentasikan posisi element di browser ----------
console.log(squareImg.previousElementSibling); //* p
console.log(squareImg.nextElementSibling); //* img


