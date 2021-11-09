const API_KEY = "https://api.pokemontcg.io/v2/cards"

async function getPokemon(pokemonName) {
  const url = `https://api.pokemontcg.io/v2/cards?name=${pokemonName}`
  console.log(url)
  try {
    const result = await axios.get(url)
    console.log(result)
    const cardData = result.data.name
    renderList(cardData);
    console.log(cardData)
  }
  catch (error) {
    console.log(error)
    alert(`${pokemonName} is not a pokemon`)
  }
}

getPokemon(piplup)

const userInput = document.querySelector("#blank");
const searchButton = document.querySelector("#search");
const cardList = document.querySelector(".card-list");

// searchButton.addEventListener("click", (e) => {
//   e.preventDefault()
//   //delete previous
//   let userPokemon = userInput.value
//   renderPokemon(userPokemon)
// })

// function renderPokemon(pokemonData) {
//   pokemonData.forEach((pokemon) => {
//     console.log(pokemon)
//     //     const pokemonName = document.createElement("h2");
//     const cardPic = document.createElement("img");
//     //     const cardYear = document.createElement("h4");
//     //     // listMovies.createElement("div")

//     //     pokemonName.innerText = pokemon.Name;
//     //     listMovies.appendChild(movieTitle);

//     cardPic.src = pokemon.Picture;
//     listMovies.appendChild(cardPic);

    //     cardYear.innerText = pokemon.Year;
    //     listMovies.appendChild(cardYear);

    //     console.log(listMovies)
//   }
//   )
// }