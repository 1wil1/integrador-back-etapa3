import models from '../models/carrito.model.js'

const guardarCarrito = async (req, res) => {
    const carrito = req.body

    try {
        const carritoGuardado = await models.crearCarrito(carrito)
        res.status(200).json(carritoGuardado)
    } catch (error) {
        console.log('No se pudo guardar el carrito', error)
        res.status(500).send('No se pudo guardar el carrito')
    }
}

export default {
    guardarCarrito
}