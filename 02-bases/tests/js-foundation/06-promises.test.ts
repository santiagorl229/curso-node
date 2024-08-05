import { getPokemonById } from "../../src/js-foundation/06-promises"

describe("js-foundation/06-promises.ts", () => {
    test('getPokemonById returns a pokemon object', async() => {
        
        const pokemonId = 1;
        const getPokemonName = await getPokemonById(pokemonId);
        expect(getPokemonName).toBe('bulbasaur!');

    });

    test('should return a error if pokemon does not exist', async() => {
        const pokemonId = 10000000;
        try {
            await getPokemonById(pokemonId);            
            expect(true).toBe(false);
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
        
    })



});

