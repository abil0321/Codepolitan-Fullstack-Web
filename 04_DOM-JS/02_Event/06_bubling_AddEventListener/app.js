//? ANCHOR -  Bagaimana cara mengatasi event bubling? ----------------------------------
//! event bubling - Ketika di klik semua actionnya berjalan bersamaan karena berada di dalam container yang sama!
//* Membatasi proses ketika sudah berjalan agar tidak melanjutkan ke proses yang selanjutnya sebelum di aksikan kembali! (agar hanya menjalankan 1 program saja) --------------------
const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')


button.addEventListener('click', (e) => {
  container.style.backgroundColor = generateNewColor();
  e.stopPropagation(); //* NOTE - melakukan stop pada program ketika sudah di jalankan agar hanya menjalankan 1 program saja
})

container.addEventListener('dblclick', (e) => {
  container.classList.toggle('hide')
})

const generateNewColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r}, ${g}, ${b})`
}