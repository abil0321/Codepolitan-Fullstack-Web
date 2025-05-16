//? Request menggunakan Callback Function -------------------------------
// TODO: callback function - membuat fungsi callback =======================
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

//! Hal ini sangat tidak di rekomendasikan karena bisa memunculkan Callback Hell dalam kode program !=====================================!
// ! Contoh kejadian Callback Hell pada kode program !=====================================!
requestCallback(
  "movie.com",
  function (success) {
    console.log("It Worked");
    console.log(success);
    requestCallback(
      "movie.com",
      function (success) {
        console.log("It Worked");
        console.log(success);
        requestCallback(
          "movie.com",
          function (success) {
            console.log("It Worked");
            console.log(success);
            requestCallback(
              "movie.com",
              function (success) {
                console.log("It Worked");
                console.log(success);
              },
              function (error) {
                console.log("Error, it Failed");
                console.log(error);
              }
            );
          },
          function (error) {
            console.log("Error, it Failed");
            console.log(error);
          }
        );
      },
      function (error) {
        console.log("Error, it Failed");
        console.log(error);
      }
    );
  },
  function (error) {
    console.log("Error, it Failed");
    console.log(error);
  }
);
//! end of Callback Hell !=====================================!
