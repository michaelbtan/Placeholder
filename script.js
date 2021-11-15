const userInput = document.querySelector("#blank");
const searchButton = document.querySelector("#search");
const cardList = document.querySelector(".card-list");
const cardTitle = document.querySelector("#card-title");
const dayNightToggle = document.querySelector("#toggle-button")
const randomPokemon = document.querySelector("#random")

const toggleButton = document.querySelector(".toggle-btn")
const navBarLinks = document.querySelector("navbar-links")

// Hamburger function
toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
})

// Night Mode
dayNightToggle.addEventListener("click", (e) => {
  dayORNight();
});

function dayORNight() {
  let theme = document.querySelector("body");
  theme.classList.toggle("dark-theme");
}

// Click button for random pokemon
randomPokemon.addEventListener("click", (e) => {
  e.preventDefault()
  removeEntries()
  let randomPIndex = Math.floor(Math.random() * 899)
  cardTitle.innerText = `National Pokedex #${randomPIndex}`;
  getPokemonRandom(randomPIndex)
  userInput.innerText = " "
})

//search for random pokemon by number
async function getPokemonRandom(nationalPokedexNumbers) {
  const url = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${nationalPokedexNumbers}`
  try {
    const res = await axios.get(url)
    const cardData = await res.data.data
    renderPokemon(cardData);
  }
  catch (error) {
    console.log(error)
    alert(`${pokemonName} is not a pokemon`)
  }
}


// Search for pokemon by name
async function getPokemon(pokemonName) {
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
  // console.log(url)
  try {
    const res = await axios.get(url)
    const cardData = await res.data.data
    renderPokemon(cardData);
  }
  catch (error) {
    console.log(error)
    alert(`${pokemonName} is not a pokemon`)
  }
}

// Search Functionality
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

// Remove Previous Inputs
function removeEntries() {
  cardList.innerHTML = ''
}

// Render Pokemon Cards
function renderPokemon(pokemonData) {
  pokemonData.forEach((pokemon) => {
    const divContainer = document.createElement("div")
    divContainer.classList.add("flex")
    cardList.appendChild(divContainer)

    const largeCardPic = document.createElement("a");
    const smallCardButton = document.createElement("img");
    largeCardPic.setAttribute('target', '_blank');
    largeCardPic.href = pokemon.images.large;
    smallCardButton.src = pokemon.images.small;
    largeCardPic.appendChild(smallCardButton);
    divContainer.appendChild(largeCardPic);

    const set = document.createElement("h4")
    set.innerText = pokemon.set.name
    divContainer.appendChild(set)

    // const prices = document.createElement("h4")
    // prices.innerText = pokemon.tcgplayer.prices.normal
    // cardList.appendChild(prices)

  }
  )
}

