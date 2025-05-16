const container = document.querySelector('#container')
const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 0; i < 501; i++) {
  const pokemonBall = document.createElement('div');
  pokemonBall.classList.add('pokemon')
  
  const imgPokemon = document.createElement('img')
  imgPokemon.src = `${imgURL}${i}.png`

  const label = document.createElement('span')
  label.innerText = `#${i}`

  container.appendChild(pokemonBall);
  pokemonBall.appendChild(imgPokemon);
  pokemonBall.appendChild(label);
}