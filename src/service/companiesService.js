// Archivo en el que accedemos a la base de datos a por la información requerida y realizamos las operaciones de lógica necesarias.

const db = require('../configuration/database').db;

/**
 * Metodo para obtener todas las empresas de la base de datos.
 * @returns {Promise<Array>} Devuelve una Promesa que resuelve en un arrray de objetos (empresas).
 */
const findAllCompanies = async () => {
    return await db('companies').select('*');
};

/**
 * Metiodo para obtener una empresa por su id.
 * @param {number} id 
 * @returns {Promise<Object>} Devuelve una Promesa con el objeto de la emprese, o null si no se encuentra.
 */
const findCompanyById = async (id) => {
    const company = await db('companies').where({ id: id }).first();
    if (!company) {return null; }
    return company;
};



module.exports = {
    findAllCompanies,
    findCompanyById
};