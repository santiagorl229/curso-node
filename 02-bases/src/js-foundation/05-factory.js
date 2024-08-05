

//factory function es una funcion que crear otra funcion

// const { getUUID } = require('../plugins/get-id.plugin.js'); //esto es desestructuracion pero {v: uuidv4} tiene la funcionalidad de renombrarlo
// const { getAge } = require('../plugins/get-age.plugin.js');
// const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {

    return ({name, birthDate}) => {
        return {
            id: getUUID(),
            name: name,
            birthDate: birthDate, 
            age: getAge(birthDate),
        }
    }
}




// const obj = {name: 'John', birthDate: '1995-03-24'};
// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson
}