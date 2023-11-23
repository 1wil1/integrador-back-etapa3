import handleObjMongoToObjJs from "./handleObjMongoToObjJs.js"

// Transformar los objetos de JS que vienen con el _id en un id
const handleMongoId = (elemento) => { // elemento => Puede ser un array o un boj
    const pk = '_id'

    elemento = handleObjMongoToObjJs(elemento) 
    
    if ( Array.isArray(elemento) ) { // Array.isArray => true o false
        // Array de objs
        // Al array le voy a sacar los _ (guiones a los id de los obj)
        for (let i = 0; i < elemento.length; i++) {
            //console.log(obj[i][pk])
            elemento[i].id = elemento[i][pk] // array[0].id = array[0]["_id"]
            delete elemento[i][pk] // Eliminando el atributo del obj _id
        }

    } else {
        // UN solo obj
       elemento.id = elemento[pk]
       delete elemento[pk]
    }

    return elemento
   
}

export default handleMongoId