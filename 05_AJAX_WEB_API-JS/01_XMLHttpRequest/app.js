document.body.appendChild(document.createElement("h1")).innerText = "XMLHttpRequest Example";

//? Bagaimana cara melakuka request data API menggunakan XMLHttpRequest? -------------
//! Hal ini tidak direkomendasikan karena tidak mendukung promises, jadi ada kemungkinan callback-hell
//! Penulisannya juga lumayan panjang dan ribet untuk di implementasikan.
//* cara ini original dari javascript untuk melakukan request data.

//* membuat object -------
const req = new XMLHttpRequest();
let data;

//* membuat callback function (berhasil dan error) -------
req.onload = function() {
  data = JSON.parse(this.responseText)
  console.log(data);
  console.log(data.name);
}

req.onerror = function() {
  console.log('error', this);
}

//* mempersiapkan request -------
req.open('GET', 'https://swapi.info/api/people/1');

//* mempersiapkan header -------
req.setRequestHeader('Accept', 'application/json')

//* mengirimkan melalui method send() -------
req.send();