import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.ts', ()=>{
    const getUUID = () =>'1234';
    const getAge = (birthdate: string) => 35;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        expect(typeof makePerson).toBe('function');

    });
   
    test('buildMakePerson should return', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({name: 'John doe', birthdate: '1985-10-21'});    
        
        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John doe',
            birthDate: '1985-10-21',
            age: 35,
        });
   });
});