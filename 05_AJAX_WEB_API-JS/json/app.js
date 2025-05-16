// ? Bagaimana cara untuk melakukan convert JSON agar bisa di baca oleh javascript dan juga melakukan covert JSON-JavaScript agar bisa dibaca oleh server? ------------
// TODO: Melakukan JSON.parse() untuk mengubah string JSON menjadi objek JavaScript/yang bisa dibaca JavaScript =========
//* NOTE - gambaran JSON dari server --------
const data = `{
   "ticker":{
      "base":"BTX",
      "target":"IDR",
      "price":"1000000",
      "volume":"1000",
      "change":"0.5"
   },
   "timestamp":1670000000,
   "success":true,
   "error":""
}`;

const fromServer = JSON.parse(data);
console.log(fromServer);

const base = fromServer.ticker.base;
const target = fromServer.ticker.target;
const price = fromServer.ticker.price;

console.log(price);


// TODO: JSON.stringify() untuk mengubah objek JavaScript menjadi string JSON ===============
const toServer = JSON.stringify(fromServer);
console.log(toServer);
