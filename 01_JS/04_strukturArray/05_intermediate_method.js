// todo: concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// console.log(array3);

// todo: sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const arraynum1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(arraynum1);

// todo: splice()
const months1 = ["Jan", "March", "April", "June"];
months1.splice(1, 0, "Feb");
console.log(months1);

months1.splice(4, 1, "May");
console.log(months1);

// todo: slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("animals: " + animals + "\n");

console.log("animals.slice(2)): " + animals.slice(2));
console.log("animals.slice(2, 4)): " + animals.slice(2, 4));
console.log("animals.slice(1, 5)): " + animals.slice(1, 5));
console.log("animals.slice(-2)): " + animals.slice(-2));
console.log("animals.slice(2, -1)): " + animals.slice(2, -1));
console.log("animals.slice()): " + animals.slice());

// todo: join()
const elements = ["Fire", "Air", "Water"];
console.log(elements + "\n");

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));