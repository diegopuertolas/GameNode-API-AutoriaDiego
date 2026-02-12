// Archivo de validacion

const { param } = require('express-validator');
const { validateResult } = require('../middlewares/validateResult');

/**
 * Cadena de validaciones para operaciones que requiren un ID de empresa.
 * Se aplica a rutas dinámicas como GET /:id.
 * * Reglas:
 * 1 el id debe existir en la url
 * 2 el id debe ser numero entro y mayor que 0
 */
const validateCompanyId = [
    param('id')
        .notEmpty().withMessage('ID is required')
        .isInt({ gt: 0 }).withMessage('ID must be a positive integer'),

    validateResult
];

module.exports = {
    validateCompanyId
}