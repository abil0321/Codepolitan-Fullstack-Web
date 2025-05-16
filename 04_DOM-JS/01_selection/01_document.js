//? Bagaimana cara memilih element dengan document selector  -------------------------------
// todo: berdasarkan id ======================
const getElementId = document.getElementById('banner');

// todo: berdasarkan class ======================
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}

// todo: berdasarkan tag (html) ======================
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
	// console.log(img.src);
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
}