// Archivo que implementa las operaciones que se deficen en /router/companiesRouter.js

const { post } = require('../router/companiesRouter');
const { findAllCompanies, findCompanyById, addCompany, modifyCompany, removeCompany } = require('../service/companiesService');

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
/**
 * Metodo para agregar una nueva empresa a la base de datos.
 * Valida si ya existe una empresa con el mismo nombre antes de agregarla.
 * @param {Object} req - Objeto de petición de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Devuelve una respuesta JSON con código 201 y los datos de la empresa creada y 409 si ya existe una empresa con el mismo nombre.
 */
const postCompany = async (req, res) => {
    const name = req.body.name;

    if (await companyExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: `Company with name ${name} already exists`
        });
    }
    const description = req.body.description;
    const country = req.body.country;
    const year_founded = req.body.year_founded;
    const website = req.body.website;
    const logo = req.body.logo;

    const newCompanyId = await addCompany(name, description, country, year_founded, website, logo);
    res.status(201).json({
        code: 201,
        title: 'created',
        message: `Company with name ${name} created successfully`,
        data: {
            id: newCompanyId,
            name: name,
            description: description,
            country: country,
            year_founded: year_founded,
            website: website,
            logo: logo
        }
    });
};

/**
 * Metodo para modificar una empresa existente.
 * Valida si la empresa existe antes de modificarla.
 * @param {Object} req - Objeto de petición de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Devuelve una respuesta JSON con código 200 y los datos de la empresa actualizada o 404 si no existe.
 */
const putCompany = async (req, res) => {
    const id = req.params.id;
    if (!await companyExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: `Company with id ${id} not exists`
        });
    }
    const name = req.body.name;
    const description = req.body.description;
    const country = req.body.country;
    const year_founded = req.body.year_founded;
    const website = req.body.website;
    const logo = req.body.logo;

    await modifyCompany(id, name, description, country, year_founded, website, logo);
    res.status(200).json({
        code: 200,
        title: 'success',
        message: `Company with id ${id} updated successfully`,
        data:{
            id: id,
            name: name,
            description: description,
            country: country,
            year_founded: year_founded,
            website: website,
            logo: logo
        }
    });
};

/**
 * Metodo para eliminar una empresa por su id.
 * Valida si la empresa existe antes de eliminarla.
 * @param {Object} req - Objeto de petición de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Devuelve una respuesta JSON con código 200 y el mensaje de éxito o 404 si no existe la empresa.
 */
const deleteCompany = async (req, res) => {
    const id = req.params.id;
    if (!await companyExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: `Company with id ${id} not exists`
        });
    }
    await removeCompany(id);
    res.status(200).json({
        code: 200,
        title: 'success',
        message: `Company with id ${id} deleted successfully`,
    });
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    postCompany,
    putCompany,
    deleteCompany
}
