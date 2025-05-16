//? Latihan menggunakan addEventListener('type', operation/listener) --------------------------- 
const heading = document.querySelector('h1')
const button = document.querySelector('button')

button.addEventListener('dblclick', () => {
  const newColor = generateNewColor();
  heading.innerText = newColor;
  document.body.style.backgroundColor = newColor;
})

const generateNewColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r}, ${g}, ${b})`
}