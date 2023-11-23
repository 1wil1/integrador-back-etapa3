import mongoose from "mongoose"

// ! CREAMOS EL ESQUEMA

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// ! CREAMOS MODELO
const CarritoModel = mongoose.model('carritos', carritoSchema)

/* ---------------------------------------------------------------- */
/* Métodos que nos va servir de interfaz para interactuar con la DB */
/* ---------------------------------------------------------------- */

// --------------------------------------------- Crear Carrito

const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritoModel({carrito}) // tiene que ser un objeto
        const carritoGuardado = await carritoCreado.save()
        
        return carritoGuardado
    } catch (error) {
        console.log('ERROR[crearCarrito]: Problemas al crear el carrito', error)
    }

}

export default {
    crearCarrito
}


