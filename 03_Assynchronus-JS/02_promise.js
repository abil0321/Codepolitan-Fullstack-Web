//? Request menggunakan Promise  ----------------------------------
//! menggunakan Promise masih memungkinkan/bisa memunculkan Callback Hell dalam kode program !=====================================!
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay})`);
      }
    }, delay);
  });
};

// todo: Request menggunakan Promise - Dengan cara yang salah ================================
// ! Contoh kejadian Callback Hell pada kode program dengan Promise !=====================================!
// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);
//     requestPromise("movie.com")
//       .then((response) => {
//         console.log("success", response);
//         requestPromise("movie.com")
//           .then((response) => {
//             console.log("success", response);
//             requestPromise("movie.com")
//               .then((response) => {
//                 console.log("success", response);
//               })
//               .catch((error) => {
//                 console.log("error", error);
//               });
//           })
//           .catch((error) => {
//             console.log("error", error);
//           });
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
//! end of Callback Hell Promise !=====================================!

// todo: Request menggunakan Promise - Dengan cara yang benar ================================
requestPromise('google.com')
.then((result) => {
  console.log('page 1');
  console.log(result);
  return requestPromise('google.com')
})
.then((result) => {
  console.log('page 2');
  console.log(result);
  return requestPromise('google.com')
})
.then((result) => {
  console.log('page 3');
  console.log(result);
  return requestPromise('google.com')
})
.catch((err) => {
  console.log("error", err);
})