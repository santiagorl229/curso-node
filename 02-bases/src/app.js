
const { getAge, getUUID } = require('./plugins');
// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring.js')
// console.log(emailTemplate)
// const {getUserById}= require('./js-foundation/04-arrow.js');
// const id = 2;
// getUserById( id, (error, user)=>{
//     if(error) {
//         throw new Error(error);
//     }
//     console.log(user)
// });

const getPokemonById = require('./js-foundation/06-promises');
 getPokemonById(1)
    .then((pokemon) => console.log({ pokemon }) )
    .catch((err) => console.log('Por favor intente de nuevo'))
    .finally(()=> console.log('Finalmente'));

    // token de acceso
    //








// ! Referencia a la funcion Factory y uso
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const makePerson = buildMakePerson({ getUUID, getAge }) Aqui se esta aplicacndo inyeccion de dependencia
// const obj = {name: 'John', birthDate: '1995-03-24'};
// const john = makePerson(obj);
// console.log(john);