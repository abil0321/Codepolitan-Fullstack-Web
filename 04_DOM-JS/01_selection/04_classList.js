//? Bagaimana cara memanfaatkan classList pada element HTML ----------------------------------------
console.log(heading.getAttribute("class"));

//! menambahkan class pada element HTML selain classlist  ========================== (kurang direkomendasikan!)
heading.setAttribute("class", "kucing ayam");
heading.getAttribute("class"); //* kucing ayam
let currentValue = heading.getAttribute("class");
heading.setAttribute("class", `${currentValue} dog`); //* kucing ayam dog

// TODO: menambahkan class pada element HTML ==========================
heading.classList.add("bg-info", "backgound-danger");
heading.classList.add("text-white");

// TODO: menghapus class pada element HTML ==========================
heading.classList.remove("text-white");

// TODO: cek class pada element HTML ==========================
console.log(heading.classList);

// TODO: mengecek keberadaan class pada element HTML - Boolean  ==========================
console.log(heading.classList.contains("bg-info")); //* true
console.log(heading.classList.contains("text-white")); //! false

// TODO: looping classlist pada element HTML ==========================
const toggle1 = document.querySelectorAll("ul .toclevel-1");
for (const toggle of toggle1) {
  toggle.classList.add("bg-info", "text-white");
  console.log(toggle.classList);
}