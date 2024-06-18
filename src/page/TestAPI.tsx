import { useQuery } from "react-query";

interface Pokemon {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    sprites: { front_default: string };
  }
  
  const PokemonList: React.FC = () => {
    const { isLoading, error, data } : {isLoading : boolean , error : any , data : any } = useQuery<Pokemon[]>(
      'pokemon',
      async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { results } = await response.json();
  
        // ดึงข้อมูล Pokemon แต่ละตัว
        const pokemonData = await Promise.all(results.map(async (result: { url: string }) => {
          const pokemonResponse = await fetch(result.url);
          if (!pokemonResponse.ok) {
            throw new Error('Network response was not ok');
          }
          return pokemonResponse.json();
        }));
  
        return pokemonData;
      }
    );
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div>
        {data?.map((pokemon: Pokemon) => (
          <div key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <div>ID: {pokemon.id}</div>
            <div>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</div>
            <div>Total: {pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}</div>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    );
  };
  
  export default PokemonList