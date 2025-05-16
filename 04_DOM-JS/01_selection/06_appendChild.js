//? Bagaimana cara menambahkan dan menyisipkan elemen ke dalam elemen lain di DOM? - Menggunakan appendChild, append, dan insertAdjacentElement -----------------------
console.log(document.createElement('img')); //* <img>​
const newImage = document.createElement('img')
console.dir(newImage)

newImage.src = 'https://d1bpj0tv6vfxyp.cloudfront.net/articles/253564_20-5-2021_13-2-0.webp'
'https://d1bpj0tv6vfxyp.cloudfront.net/articles/253564_20-5-2021_13-2-0.webp'

// todo: appendChild() - Menambahkan ELEMEN BARU ke dalam elemen yang sudah ada, menambahkan elemen ke dalam body, terletak di paling bawah
document.body.appendChild(newImage)
newImage.classList.add('square')

const para = document.querySelector('p')

// todo: append() - Menambahkan TEKS ke dalam elemen yang sudah ada
para.append('Halo saya kucing baru lahir bang')
para.append('<b>, Ingat baru lahir! </b>')

const h2 = document.createElement('h2')
h2.append('Ini Kucing saya namanya Budi Setiawan 😊')


// todo: insertAdjacentElement() - menyisipkan element baru di lokasi tertentu / yang di inginkan 
//? insertAdjacentElement(position, element) - (position = beforebegin, afterbegin, beforeend, afterend) ------------------
const heading = document.querySelector('h1')
heading.insertAdjacentElement('afterend', h2)


//? Bagaimana cara menghapus elemen di dalam DOM? - Menggunakan removeChild() dan remove() -----------------------
const firstLi = document.querySelector('li')

// todo:removeChild() - Menghapus elemen yang sudah ada di dalam elemen lain (child dari parentnya) ====================
console.log(firstLi.parentElement) //* ul;
firstLi.parentElement.removeChild(firstLi) //? Menghapus elemen li pertama - "1 Etymology and naming"
//* notes: harus dihapus melalui parentnya, karena removeChild()

// todo:remove() - Menghapus elemen yang sudah ada ====================
const img = document.querySelector('img')
img.remove() //? Menghapus elemen img yang paling atas