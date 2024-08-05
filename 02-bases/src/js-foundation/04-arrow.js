const users = [{
    id: 1,
    name: 'John Doe',
},
{
    id: 2,
    name: 'Jane Doe'
}
];

const getUserById = (id, callback) => { //funcion de flecha, lo que esta dentro de los parentesis son parametros.
   const user =  users.find((user)=>{
        return user.id ===id;
    }); 

    if(!user){
        return callback(`User not found with id ${id}`);
    }
    return callback(null, user);// null que significa que no hay ningun error definido en la funcion getUserBy Id de app.js
}

module.exports = {
    getUserById: getUserById,
}