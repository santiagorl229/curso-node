import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring', ()=>{
    
    test('characters should containt Flash, Superman',()=>{
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
        console.log(characters);    
    });

    test('first character should be flash, and secord Superman',()=>{
        const [flash, Superman] = characters;
        expect(flash).toBe('Flash');
        expect(Superman).toBe('Superman');
    });

});