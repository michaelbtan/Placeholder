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
const dayNightToggle = document.querySelector("#toggle-button")

dayNightToggle.addEventListener("click", (e) => {
  dayORNight();
});

function dayORNight() {
  let theme = document.querySelector("body");
  theme.classList.toggle("dark-theme");
}


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
    const largeCardPic = document.createElement("a");
    const smallCardButton = document.createElement("img");
    largeCardPic.setAttribute('target', '_blank');
    largeCardPic.href = pokemon.images.large;
    smallCardButton.src = pokemon.images.small;
    largeCardPic.appendChild(smallCardButton);
    cardList.appendChild(largeCardPic);
  }
  )
}

