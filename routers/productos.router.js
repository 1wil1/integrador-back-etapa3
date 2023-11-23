import express from 'express'
const routerProductos = express.Router()

import controller from '../controllers/productos.controller.js'
import validator from '../validators/productos.validator.js'

/* ------------------------------------------------ */
/* CRUD -> CREATE | READ | UPDATE | DELETE          */
/* ------------------------------------------------ */

// ! GET ALL / ONE (READ) - request de todos los productos
// http://localhost:8080/api/productos/ | GET
routerProductos.get('/', controller.obtenerProductos) 
routerProductos.get('/:id',validator.productoReadOneValidator, controller.obtenerProductos)
// ! POST (CREATE) - request para agregar un producto
// http://localhost:8080/api/productos/ | POST

routerProductos.post('/', validator.productoCreateValidator, controller.guardarProducto)
// ! PUT (UPDATE) - request para actualizar un producto
// http://localhost:8080/api/productos/id | PUT

routerProductos.put('/:id', validator.productoUpdateValidator, controller.actualizarProducto)
// ! DELETE (DELETE) - request para eliminar un producto
// http://localhost:8080/api/productos/id | DELETE

routerProductos.delete('/:id', validator.productoDeleteValidator, controller.borrarProducto)

export default routerProductos

