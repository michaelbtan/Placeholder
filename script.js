async function getPokemon(pokemonName) {
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
  // console.log(url)
  try {
    const res = await axios.get(url)
    // console.log(res)
    const cardData = await res.data.data
    renderPokemon(cardData);
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
const cardTitle = document.querySelector("#card-title");


searchButton.addEventListener("click", (e) => {
  e.preventDefault()
  removeEntries()
  let userPokemon = userInput.value
  const arr = userPokemon.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const userPokemon2 = arr.join(" ");
  cardTitle.innerText = `${userPokemon2} Cards`;
  getPokemon(userPokemon2)
})

function removeEntries() {
  cardList.innerHTML = ''
}

function renderPokemon(pokemonData) {
  pokemonData.forEach((pokemon) => {
    console.log(pokemon)
    const cardPic = document.createElement("img");
    //     const cardYear = document.createElement("h4");
    //     // cardList.createElement("div")

    cardPic.src = pokemon.images.small;
    cardList.appendChild(cardPic);

    // cardYear.innerText = pokemon.Year;
    // cardList.appendChild(cardYear);

  }
  )
}