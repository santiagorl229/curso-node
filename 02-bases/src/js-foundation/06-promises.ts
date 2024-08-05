import { httpClientPlugin as http} from "../plugins/http-client.plugin"; 

export const getPokemonById = async (id: string | number): Promise<string> => {
    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    // throw new Error('Pokemon no existe');

    try {        
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await http.get(url);
        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }


//    return fetch(url)
//     .then((response) =>  response.json())
//     .then( () =>{ throw new Error('Pokemon no encontrado')})
//     .then((pokemon)=> pokemon.name)
    
}

