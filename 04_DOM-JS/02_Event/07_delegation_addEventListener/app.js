//? Bagaimana cara melakukan Event Delegation? ---------------------------
const form = document.querySelector("#form");
const a = document.querySelector("a");
const Ulist = document.querySelector('#notes')
const input = document.querySelector('input')

// TODO: membuat daftar list, yang listnya tampil di halaman yang sama tanpa reload!
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newInput = input.value;

  const newList = document.createElement('li')
  newList.style.marginTop = '10px';
  newList.innerText = newInput;

  Ulist.append(newList);
  input.value = '';
  
  console.log(newInput);
});

// !FIXME: hanya akan menghapus elemen yang sudah ada sedari awal, karena karena hanya mengambil elemen yang tidak dibuat dengan JS/polosan.
// const list = document.querySelector('li')
// for (const li of list) {
//   li.addEventListener('click', (e) => {
//     li.remove();
//   })
// }

Ulist.addEventListener('click', (e) => {
  // !FIXME: akan menghapus semua child yang ada di dalam ul, termasuk p, a, dll yang ada di dalam/child dari UL
  // e.target.remove();
  
  // TODO: - dibuatkan pengkondisian yang dimana property dari nodeName, yang diambi dari eventListener nya
  //* cek property - melihat property target yang didalamnya ada nodeName 
  // console.log(e); //* target: li {...nodeName: "LI"}
   
  // * membuat pengkondisian: jika nodeNamenya 'LI' maka hapus
  e.target.nodeName === 'LI' && e.target.remove();
})


