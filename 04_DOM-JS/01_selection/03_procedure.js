//? Bermain-main dengan innerHTML, innerText, dan textContent ------------------------------
const selectorInsideItem = document.querySelectorAll("p a");

// todo: looping selector all ==================
for (let link of selectorInsideItem) {
  // link.innerText = 'Saya adalah <b>link!</b>'
  // link.textContent = 'Saya adalah <b>link!</b>'
  // link.innerHTML = 'Saya adalah <b>link!</b>'
}

//? Bagaimana cara mendapatkan attribute yang dimiliki element HTML ---------------------------
const banner = document.querySelector("#banner");

// todo: mengambil data attribute yang ada sedari awal pada tag =============== (ada)
console.log(banner.id);
console.log(banner.src);
console.log(banner.alt);

//* mengubah data attribute --------------------
// banner.id = 'kucing' //* id="kucing"
banner.src =
  "https://www.purina.co.id/sites/default/files/2022-01/Desain%20tanpa%20judul%20%2860%29.png";
banner.alt = "Gambar Kucing";
console.log(banner.alt);

// todo: mengubah data attribute yang tidak ada sedari awal pada tag ================= (tidak ada!)
banner.setAttribute("class", "class-kucing");
console.log(banner);

//* mengambil data attribute ------------------
console.log(banner.getAttribute("class")); //* class-kucing - bisa mengambil attribute yang ada dan tidak ada sedari awal pada tag

//? Bagaimana cara menambahkan style pada element HTML -----------------------------------
const heading = document.querySelector("h1");

// todo: cek style yang ada pada element HTML ================
console.log(heading.style.color); //* dom style hanya berlaku untuk style yang ditulis di dalam tag HTML / inline style

// todo: melakukan style pada element HTML ----------------
for (let link of selectorInsideItem) {
  link.style.color = "rgb(72, 255, 0)";
  link.style.textDecorationColor = "red";
  link.style.fontSize = "20px";
}




