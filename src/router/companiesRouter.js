// ARchivo que contiene la lista de todas las operaciones definidas en el /controller/companiesController.js

const express = require('express');
const router = express.Router();

const { getAllCompanies, getCompanyById } = require('../controller/companiesController');
const { validateCompanyId } = require('../validators/companies');


// Rutas
router.get('/', getAllCompanies);
router.get('/:id', validateCompanyId, getCompanyById);

module.exports = router;