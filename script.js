async function getPokemon(pokemonName) {
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
  console.log(url)
  try {
    const res = await axios.get(url)
    console.log(res)
    const cardData = await res.data.data
    renderPokemon(cardData);
    console.log(cardData)
  }
  catch (error) {
    console.log(error)
    alert(`${pokemonName} is not a pokemon`)
  }
}

const userInput = document.querySelector("#blank");
const searchButton = document.querySelector("#search");
const cardList = document.querySelector(".card-list");

searchButton.addEventListener("click", (e) => {
  e.preventDefault()
  //delete previous
  let userPokemon = userInput.value
  getPokemon(userPokemon)
})

function renderPokemon(pokemonData) {
  pokemonData.forEach((pokemon) => {
    console.log(pokemon)
    const cardPic = document.createElement("img");
    //     const cardYear = document.createElement("h4");
    //     // listMovies.createElement("div")

    cardPic.src = pokemon.images.small;
    cardList.appendChild(cardPic);

    // cardYear.innerText = pokemon.Year;
    // listMovies.appendChild(cardYear);

  }
  )
}