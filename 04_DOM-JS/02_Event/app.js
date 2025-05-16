//? Bagaimana cara menggunakan event melalui property DOM ---------------------
const bClickme = document.querySelector("#clickme");

// TODO: menggunakan event click ==============
bClickme.onclick = () => {
  console.log("You click me guys!");
};

// TODO: menggunakan event onmouseover (mirip kayak :hover) ==============
const scream = function () {
  console.log("dont touch me too much");
};

bClickme.onmouseover = scream;

//? Mengenal fungsi Addeventlistener - addEventListener('type', operation/listener) ---------------------------------------------------
// todo: Syntax
//* addEventListener(type, listener)
//* addEventListener(type, listener, options)
//* addEventListener(type, listener, useCapture)

const btnevent = document.querySelector("#eventbtn");

// TODO: melakukan addEventListener click ===========================
// btnevent.addEventListener("click", () => {
//   console.log("event button nih bos!"); 
// });

// TODO: perbedaan antar AddEventListener dan event pada property DOM langsung ==========
function stepSatu() {
  console.log("Step 1");
}
function stepDua() {
  console.log("Step 2");
}

//* Event pada property DOM akan menimpa program yang lama dengan yang baru -----------------------
// btnevent.onclick = stepSatu;
// btnevent.onclick = stepDua;

//* AddEventListener akan langsung melakukan eksekusi pada kedua program satu-satu
btnevent.addEventListener('click', stepSatu) 
btnevent.addEventListener('click', stepDua)
//*NOTE notes: hal ini dilakukan jika ingin menjalankan lebih dari 1 fungsi yang berbeda dalam 1 tombol/action  

