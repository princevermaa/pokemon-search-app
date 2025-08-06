const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImg = document.getElementById("pokemon-img")
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");



let pokemonLists = [];

const findPokemon = async () => {
  try {
    const allPokemons = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`);
    const data = await allPokemons.json();
    console.log(data);
    const { name, id, weight, height, types, stats, sprites } = data;

    pokemonName.innerText = name.toUpperCase();
    pokemonId.innerText = `#${id}`
    pokemonWeight.innerText = `Weight: ${weight}`;
    pokemonHeight.innerText = `Height: ${height}`;
    pokemonImg.innerHTML = `<img id="sprite" src="${sprites.front_default}" />`;
    pokemonTypes.innerHTML = types.map(type => `<span class="type ${type.type.name}">${type.type.name.toUpperCase()}</span>`).join(" ");
    pokemonHp.innerText = stats[0].base_stat;
    pokemonAttack.innerText = stats[1].base_stat;
    pokemonDefense.innerText = stats[2].base_stat;
    specialAttack.innerText = stats[3].base_stat;
    specialDefense.innerText = stats[4].base_stat;
    speed.innerText = stats[5].base_stat;
  }
  catch(err) {
    alert("Pokémon not found")
  }

}

searchBtn.addEventListener("click", findPokemon);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    findPokemon();
  }
});
