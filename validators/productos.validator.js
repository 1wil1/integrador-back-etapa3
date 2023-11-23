import { check } from "express-validator";
import productoMiddleware from "../middlewares/productos.middleware.js";

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El campo nombre es requerido')
        .trim(),
    check('foto')
        .notEmpty()
        .withMessage('El campo foto es requerido')
        .trim(),
    check('precio')
        .notEmpty()
        .withMessage('El campo precio es requerido')
        .trim(),
    check('precio').isNumeric()
        .withMessage('El campo precio debe ser un valor numérico')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El campo stock es requerido')
        .trim(),
    check('marca')
        .notEmpty()
        .withMessage('El campo marca es requerido')
        .trim(),
    check('categoria')
        .notEmpty()
        .withMessage('El campo categoria es requerido')
        .trim(),
    check('detalles')
        .notEmpty()
        .withMessage('El campo detalles es requerido')
        .trim(),
    check('envio')
        .notEmpty()
        .withMessage('El campo envio es requerido')
        .trim(),
        
    productoMiddleware
]
const productoUpdateValidator = [
    
    check('id')
        .isMongoId()
        .withMessage('La información del id es incorrecta')
        .trim(),
    ... productoCreateValidator,
    productoMiddleware
]

const productoReadOneValidator =[

    check('id')
        .isMongoId()
        .withMessage('La información del id es incorrecta')
        .trim(),
    productoMiddleware
]
// productoUpdateValidator
// productoReadOneValidator

export default {
    productoCreateValidator,
    productoDeleteValidator,
    productoUpdateValidator,
    productoReadOneValidator
}
