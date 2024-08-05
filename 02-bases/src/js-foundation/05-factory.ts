

//factory function es una funcion que crear otra funcion

// const { getUUID } = require('../plugins/get-id.plugin.js'); //esto es desestructuracion pero {v: uuidv4} tiene la funcionalidad de renombrarlo
// const { getAge } = require('../plugins/get-age.plugin.js');
// const { getAge, getUUID } = require('../plugins');
interface BuildMakePersonOptions {
    getUUID: ()=> string;
    getAge: (birthdate: string)=> number;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {

    return ({name, birthdate}: PersonOptions) => {
        return {
            id: getUUID(),
            name: name,
            birthDate: birthdate, 
            age: getAge(birthdate),
        }
    }
}




// const obj = {name: 'John', birthDate: '1995-03-24'};
// const john = buildPerson(obj);
// console.log(john);

// module.exports = {
//     buildMakePerson
// }