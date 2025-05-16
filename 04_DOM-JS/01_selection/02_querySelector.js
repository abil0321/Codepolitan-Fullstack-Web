//? Bagaimana cara memilih element dengan querySelector (ini lebih muhdah) --------------------------------
// todo: selector id ================
const selectorId = document.querySelector('#banner')
// todo: selector class ================
const selectorClass = document.querySelector('.square')
// todo: selector tag (html) ================
const selectortTag = document.querySelector('h1')
// todo: selector all ================
const links = document.querySelectorAll("a");

// todo: selector item inside ================
const selectorInsideItem = document.querySelectorAll('p a');

// todo: looping selector all ==================
for (let link of selectorInsideItem) {
  console.log(link.href);
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// todo: selector attributes ================
const selectorAttribute1 = document.querySelector('input[type="checkbox"]')
const selectorAttribute2 = document.querySelector('div[lang="en"]')