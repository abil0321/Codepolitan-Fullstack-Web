//? Bagaimana cara membuat object dengan factory function ------------------------------------------
// todo: sample dengan function biasa =======================
const hex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const rgb = (r, g, b) => {
  return `rgb(${r}, ${g}, ${b})`;
};

console.log(hex(111, 123, 11));
console.log(rgb(111, 123, 11));

// todo: menggunakan factory function =======================
function covertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`; //* tanpa menggunakan destruct ("this" tetap dituliskan untuk mengambil data didalam object yang sama)
  };

  color.hex = function () {
    const { r, g, b } = this; //* menggunakan destruct untuk mempersingkat (melakukan destruct pada "this", dan sama mengambil data didalam object yang sama )
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}

const color = covertColor(123, 213, 232);
console.log(color); //* { r: 123, g: 213, b: 232, rgb: λ, hex: λ }

console.log(color.r); //* 123
console.log(color.g);
console.log(color.b);

console.log(color.rgb()); //* 'rgb(123, 213, 232)'
console.log(color.hex()); //* '#7bd5e8'

//? Bagaimana cara membuat object dengan constructor function - membuat/memasukkan function kedalam prototype js ---------------------------------
function Color(r, g, b) {
  //* constructor
  this.r = r;
  this.g = g;
  this.b = b;
}
console.log(Color(11, 122, 221)); //! undefined
console.log(new Color(11, 122, 221)); //* Color { r: 11, g: 122, b: 221 } (hasilnya menjadi object)

// todo: 1 ========================
Color.prototype.rgb = function () {
  return `rgb(${this.r}, ${this.g}, ${this.b})`; //* this akan merefer pada semua property yang ada didalam constructor nya
};
console.log(new Color(12, 221, 231).rgb());

const objColor = new Color(123, 223, 233);
console.log(objColor.rgb());
console.log(objColor);

// todo: 2 =============================
Color.prototype.hex = function () {
  const { r, g, b } = this; //* merefer pada semua property yang ada didalam constructor nya
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
console.log(objColor.hex());

// todo: 3 mengisi parameter baru dengan default value ===================
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b}, ${a})`;
};
//* implementasi (tulis di console web): document.body.style.backgroundColor = new Color(19,200,30).rgba(1)

//* notes: Untuk implementasi lebih disarnkan memnggunakan constructor function di bandingkan factory function:
//* 1. function itu bisa di gunakan berkali-kali dengan menggunakan sumber object yang sama
//* 2. Lebih terstruktur
//* 3. Function nya dituliskan secara terpisah, sehingga lebih memudahkan dalam penulisannya

//? Bagaimana cara embuat Object dengan Class - Membuat function nya lebih simple lagi -----------------------------
class Color1 {
  // todo: method constructor =============
  constructor(r, g, b, name) {
    //* fungsi yang pertama kali berjalan didalam class
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }

  nameColor() {
    console.log("Nama dari warna ini adalah" + this.name);
  }

  // todo: method rgb =====================
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  hex() {
    const { r, g, b } = this; //* merefer pada semua property yang ada didalam constructor nya
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  // todo: method hsl =====================
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  fullySaturated() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
}

const skyColor = new Color1(185, 243, 252, "Sky");
console.log(skyColor); //* Color1 { r: 185, g: 243, b: 252, name: 'Sky', h: 188, s: 91.8, l: 85.7 }

// todo: format rgb =====================
console.log(skyColor.hex());
console.log(skyColor.rgb());
console.log(skyColor.rgba(0.5));

// todo: format HSL ========================
console.log(skyColor.hsl());
console.log(skyColor.fullySaturated());
console.log(skyColor.opposite());
//* implementasi (tulis di console web): document.body.style.backgroundColor = skyColor.hex()
//* implementasi (tulis di console web): document.body.style.backgroundColor = skyColor.hsl()

//? Penjelasan tentang inti dari OOP, apa itu extends dan fungsi super() ----------------------------------------
class Peliharaan {
  constructor(name,age){
    console.log('parent executed');
    this.name = name;
    this.age = age;
  }

  makan(){
    return `${this.name} lagi makan`
  }
}

class Kucing extends Peliharaan {
  constructor (name, age, lives){
    console.log('child executed');
    super(name, age);
    this.lives = lives;
  }
  meong(){
    return 'Meeeooonggg!'
  }
}
const kucing = new Kucing('mbull', 4, 9)
console.log(kucing); //* Kucing { name: 'mbull', age: 4, lives: 9 }
console.log(kucing.meong()); //* 'Meeeooonggg!'

class Anjing extends Peliharaan{
  gonggong(){
    return 'guk guk, auuuuuuu!'
  }
}
const anjing = new Anjing('dwight', 10)
console.log(anjing); //* Anjing { name: 'dwight', age: 10 }
console.log(anjing.gonggong()); //* 'guk guk, auuuuuuu!'