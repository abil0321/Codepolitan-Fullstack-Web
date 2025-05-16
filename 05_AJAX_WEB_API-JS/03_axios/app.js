//? bagaimana cara melakukan implementasi pada axios? --------------------------
// TODO: menggunakan callback function
// axios //* NOTE - inisiasi/menggunakan axios
//   .get("https://swapi.info/api/people/1") //*NOTE - memanggil dengan menggunakan http "get"
//   .then((res) => { //* NOTE - res akan mengambil data dari "axios.get"
// console.log(res);
// console.log(res.data); //* NOTE - res.data merupakan object yang berada didalam API
//   })
//   .catch((err) => { //* NOTE - err akan mengambil data ketika error dari "axios.get"
//     console.log(err);
//     console.log(err.message); //* NOTE - err.data merupakan object yang berada didalam API
//   });

//

// TODO: menggunakan async await ===================
// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.info/api/people/${id}`)
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// }
// getPeople(1)
// getPeople(11231231)

//? bagaimana cara menambahkan data headers di request menggunakan axios? -------------------------
// TODO: menyertakan data header ketika memanggil api =============
const button = document.querySelector("button");
const jokes = document.querySelector(".jokes");

const getJokes = async () => { //* NOTE - async agar otomatis menjadi promise (cuma menunggu dan menjalankan promise aja)
  try {
    const config = {
      headers: { //* SECTION - membuat object untuk memasukkan header didalam pemanggilan api axios
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config); //* NOTE - memanggil api dengan http "get" dan juga memanggil headernya (config)
    //* NOTE - menggunakan "await" agar prosesnya tidak dilanjutkan, sampai prosesnya selesai
    // const res = await axios.get("https://icanhazdadjoke.com/131231313", config);
    
    // console.log(res.data); //* NOTE - cek data api
    return res.data.joke; 
  } catch (error) {
    console.log(error.message);
    return error.message
  }
};
// getJokes()

const listJokes = async () => {
  const jokeText = await getJokes();
  const newLi = document.createElement('li')

  newLi.append(jokeText)
  jokes.append(newLi)
}

button.addEventListener('click', listJokes)