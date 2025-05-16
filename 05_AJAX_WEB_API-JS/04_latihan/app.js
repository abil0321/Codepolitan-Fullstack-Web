const form = document.querySelector("#search-form");

form.addEventListener("click", async (e) => {
  try {
    e.preventDefault(); //* agar tidak pindah halaman
    const keyword = form.elements.query.value; //* NOTE - Mengambil data value berdasarkan attribute name dari element input yaitu "query" (<input type="text" name="query">)

    document.querySelectorAll("img").forEach((img) => img.remove()); //* NOTE - Menghapus/mengosongkan element yang ada ketika submit data baru

    const config = {
      params: {
        //* NOTE - menambahkan parameter string untuk search data pada url (?query=keyword)
        q: keyword,
      },
    };

    const getFilm = await axios.get(
      "https://api.tvmaze.com/search/shows",
      config
    );
    // console.log(getFilm.data); //* cek data
    ShowsFilm(getFilm.data); //* NOTE - Mengambil data dan menampilkannya (poster gambarnya) menggunakan function Showfilm

    form.elements.query.value = ""; //*NOTE - Mengosongkan kembali formnya
  } catch (error) {
    const h3 = document.createElement("h3");
    h3.append("Error: ", error.message);
    document.body.append(h3);
    form.elements.query.value = ""; 
  }
});

const ShowsFilm = (res) => {
  for (const element of res) {
    if (element.show.image) {
      const img = document.createElement("img");
      img.src = element.show.image.medium;
      document.body.append(img);
    }
  }
};
