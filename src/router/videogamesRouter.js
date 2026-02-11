const express = require('express');
const router = express.Router();

// Ruta temporal de prueba
router.get('/', (req, res) => res.json({ msg: "Videogames Router funcionando" }));

module.exports = router;