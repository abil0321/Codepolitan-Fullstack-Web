//? Bagaimana cara melakukan input realtime dengan event dan DOM? - Untuk melakukan validasi form! ---------------------------
const form = document.querySelector("#form");
const a = document.querySelector("a");
const Ulist = document.querySelector('#notes')
const input = document.querySelector('input')

// TODO: mencoba e.preventDefault()
//* NOTE - Ketika melakukan submit halamannya tidak akan berpindah dan proses selanjutnya akan di jalankan di halamannya ------------------
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submitted form"); //* submitted form
// });

//*NOTE - yang ini juga sama ------------------- 
a.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("dikerjakan di sini ga sih mas!");
});

// TODO: membuat daftar list, yang listnya tampil di halaman yang sama tanpa reload!
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newInput = input.value;
  const newList = document.createElement('li')
  newList.innerText = newInput;

  Ulist.append(newList);
  input.value = '';
  
  console.log(newInput);
});

//? Bagaimana cara melakukan event input dan change? - ketika formnya di submit dalam keadaan kosong dia tetap membuat list baru! -------------------
// TODO: melakukan addEventListener change pada form input ===================
//* ketika di submit dengan value yang sama maka dia tidak menambah responnya di console.log() -------------------
// input.addEventListener('change', (e) => {
//   console.log('inputannya berubah guys! - mode change');
// })

// TODO: melakukan addEventListener input pada form input ===================
//* ketika di ketik/input didalam form input (tanpa submit), maka dia akan merespon perubahannya di console.log() -------------------- 
input.addEventListener('input', (e) => {
  console.log('inputannya berubah guys! - mode input');
  document.querySelector('h2').innerText = input.value 
})

