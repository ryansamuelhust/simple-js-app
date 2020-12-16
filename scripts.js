let pokemonList = [
  { Name: 'Bulbasaur', height: 2, types: ['grass', 'poison']
  },
  { Name: 'Charmander', height: 2, types: ['fire']
  },
  { Name: 'Squirtle', height: 1.5, types: ['water']
  },
];

for (let i=0; i < pokemonList.height; i++){
  if (pokemonList[i].height <3) && pokemonList[i].height >1)
  console.log(pokemonList[i].name + " is big")
}
