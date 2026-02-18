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

/**
 * Metodo para agregar una nueva empresa a la base de datos.
 * @param {string} name 
 * @param {string} description 
 * @param {string} country 
 * @param {number} year_founded 
 * @param {string} website 
 * @param {string} logo 
 * @returns {Promise<number>} Devuelve el ID de la compañia creada.
 */
const addCompany = (async (name, description, country, year_founded, website, logo) => {
    return await db('companies').insert({
        name: name,
        description: description,
        country: country,
        year_founded: year_founded,
        website: website,
        logo: logo
    });
});
/**
 * Metodo para modificar una empresa existente.
 * @param {number} id 
 * @param {string} name 
 * @param {string} description 
 * @param {string} country
 * @param {number} year_founded
 * @param {string} website
 * @param {string} logo
 * @returns {Promise<number>} Devuelve el ID de la compañia  actualizado.
 */
const modifyCompany = (async (id, companyData) => {
    const {name, description, country,year_founded,website,logo}=companyData;
    return await db('companies')
    .where({id})
    .update({
        name,
        description,
        country,
        year_founded,
        website,
        logo
    })
});
/**
 * Metodo para eliminar una empresa por su id.
 * @param {number} id 
 * @returns {Promise<number>} Devuelve 1 si se eliminó la empresa, 0 si no se encontró.
 */
const removeCompany = (async (id) => {
    return await db('companies').where({id}).del();
});

module.exports = {
    findAllCompanies,
    findCompanyById,
    addCompany,
    modifyCompany,
    removeCompany
};