import express from 'express'
const routerCarrito = express.Router()

import carritoController from '../controllers/carrito.controller.js'

routerCarrito.post('/', carritoController.guardarCarrito)

export default routerCarrito