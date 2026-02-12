// Archivo que implementa las operaciones que se deficen en /router/companiesRouter.js

const { findAllCompanies, findCompanyById } = require('../service/companiesService');

/**
 * Obtien el listado de todas las empresas.
 * Devuelve un JSON estandarizado con el array de empresas.
 * @param {Object} req - Objeto de petición de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función middleware para manejo de errores.
 * @returns {Promise<void>} Devuelve una respuesta JSON son código 200 y los datos
 */
const getAllCompanies = async (req, res, next) => {
    try {
        const companies = await findAllCompanies();
        res.status(200).json({
            code: 200,
            title: 'success',
            message: 'Companies retrieved successfully',
            data: companies
        });
    } catch (error) {
        next(error);
    }
}

/**
 * Obtine el detalle de una empresa por su id.
 * Valida si la empresa existe antes de devolver la respuesta.
 * @param {Object} req - Objeto de petición.
 * @param {Object} res - Objeto de respuesta.
 * @param {Function} next - Función middleware para manejo de errores.
 * @returns {Promise<void>} Devuelve una respuesta JSON con codigo 200 y los datos de la empresa o 404 si no existe.
 */
const getCompanyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const company = await findCompanyById(id);
        if (!company) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: `Company with id ${id} not found`,
            });
        }
        res.status(200).json({
            code: 200,
            title: 'success',
            message: 'Company retrieved successfully',
            data: company
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCompanies,
    getCompanyById
}
