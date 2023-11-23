import models from '../models/productos.model.js'
import handleError from '../utils/handleError.js'

const obtenerProductos = async (req, res) => {
    let id = req.params.id

    try {
        console.log("obtenerProductos//,",req.method);
        if ( id ) {
            const producto = await models.leerProducto(id)
            return res.status(200).json(producto)
        } else {
            const productos = await models.leerProductos()
            return res.status(200).json(productos)
        }
    } catch (error) {
        console.log('No se pudo acceder a los productos', error)
        handleError(res, `[obtenerProductos] ${error.message} - No se pudo acceder a los productos`)
    }
}

const guardarProducto = async (req, res) => {

    console.log("guardarProducto//,",req.method);
   try {
    const producto = req.body
    delete producto.id
    const productoGuardado = await models.guardarProducto(producto)
    
    res.status(201).json(productoGuardado)
   } catch (error) {
    console.log('ERROR al guardar una producto', error)
    handleError(res, `[guardarProducto] ${error.message} - Error al guardar un producto`)
   }
}

const actualizarProducto = async (req, res) => {
    console.log("actualizarProducto//,",req.method);
    const { id } = req.params
    const producto = req.body

    try {
        const productoActualizado = await models.modificarProducto(id, producto)
        res.status(200).json(productoActualizado)
    } catch (error) {
        const mensaje = 'No se pudo actualizar el producto'
        console.log(mensaje, error)
        handleError(res, `[actualizarProducto] ${error.message} - ${mensaje}`)
    }

}

const borrarProducto = async (req, res) => {
    console.log("borrarProducto//,",req.method);
    const id = req.params.id // ObjectID

    console.log(id)

    try {
        const productoBorrado = await models.eliminarProducto(id)
        res.status(200).json(productoBorrado)
    } catch (error) {
        const mensaje = 'No se pudo borrar el producto'
        console.log(mensaje, error)
        handleError(res, `[borrarProducto]: ${error.message} - ${mensaje}`)
    }
}

export default {
    obtenerProductos, 
    guardarProducto, 
    actualizarProducto, 
    borrarProducto
}