//? Bagaimana cara mengambil data API dengan menggunakan Fetch? --------------------
//* NOTE - Fetch merupakana cara baru via javasqript untuk mengambil data API
//* NOTE - Dapat menggunakan Promise di implementasinya
//! NOTE - Tidak mendukung di Internet Explorer.

// TODO: Melakukan fetch 1 data menggunakan Promise ====================================== Promise
// fetch("https://swapi.info/api/people/1") //* SECTION - otomatis akan menggunakan method GET
//   .then((res) => {
//     //* NOTE - data ini merupakan data mentah yang diambil dari API, yang dimana masih berisi semua data termasuk fungsi-fungsi bawaan API yang tidak dibutuhkan.
//     if (!res.ok) {
//       throw Error(`Could not fetch the data for that resource`);
//     }
//     console.log(res); //* SECTION - mengecek isi dari data mentah
//     return res.json(); //* SECTION - mengambil data yang dinginkan, dan datanya akan di return lalu diambil oleh .then yang selanjutnya.
//   })
//   .then((data) => {
//     //* SECTION - (data) ini akan mengambil data dari "return res.json();" sebelumnya
//     console.log("json", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// TODO: Melakukan fetch 2 data menggunakan Promise ========================================== Promise
// //* TODO - data 1 --------------
// fetch("https://swapi.info/api/people/1")
//   .then((res) => {
//     console.log("Request 1");

//     if (!res.ok) {
//       throw Error(`Could not fetch the data for that resource`);
//     }
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json", data);
//     return fetch("https://swapi.info/api/people/2"); //* SECTION - datanya akan di return lalu diambil oleh ".then" yang selanjutnya.
//   })
//   //* TODO - data 2 --------------
//   .then((res) => {
//     //* SECTION - (res) ini akan mengambil data dari "return fetch('https://swapi.info/api/people/2');" sebelumnya.
//     console.log("Request 2");
//     if (!res.ok) {
//       throw Error(`Could not fetch the data for that resource`);
//     }
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json", data);
//   })

//   .catch((err) => {
//     console.log("Error", err);
//   });

// TODO: Melakukan fetch 1 data menggunakan Async-await ====================================== Async-await
//* NOTE - menjadi lebih ringkas
const loadPeople = async () => {
  try { //* SECTION - Kondisi Berhasil 
    //* data ke 1
    const res = await fetch("https://swapi.info/api/people/1");
    const data = await res.json();
    console.log('data ke 1', data);

    //* data ke 2
    const res2 = await fetch("https://swapi.info/api/people/2");
    const data2 = await res2.json();
    console.log('data ke 2', data2);
    
    //* NOTE - prosesnya akan menunggu satu sama lain karena dia menggunakan 'await', guna menghindari fungsi selanjutnya (const data;) berjalan sebelum request sebelumnya selesai, biasanya ada latensi data, dsb sehingga requestnya agak lama. 

  } catch (error) { //! SECTION - Kondisi Error
    console.log("Error", error);
  }
};

loadPeople();