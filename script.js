const API_KEY = "https://api.pokemontcg.io/v2/cards"

async function getPokemon(pokemonName) {
  const url = `${BASE_URL}&s=${pokemonName}`
  console.log(url)
  try {
    const result = await axios.get(url)
    // console.log(result)
    const cardData = result.data.Search
    renderList(cardData);
    // console.log(cardData)
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
  renderPokemon(userPokemon)
})

