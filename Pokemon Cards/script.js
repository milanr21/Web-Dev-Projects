const poke_container = document.getElementById('poke-container');
const pokemon_count = 200; // number of pokemon we want to load for api
const colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokoemons = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  // pokemon name
  const poke_name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  //pokemon id

  const poke_id = pokemon.id.toString().padStart(3, '0');

  //pokemon types

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);

  const poke_color = colors[type];

  pokemonEl.style.backgroundColor = poke_color;

  const pokemonInnerHTML = `
<div class="img-container">
    <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
    alt=""
    />
</div>
<div class="info">
    <span class="number">#${poke_id}</span>
    <h2 class="name">${poke_name}</h2>
    <small class="type">Type: <span>${type}</span></small>
</div>
`;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

fetchPokoemons();
