const express = require('express');
const router = express.Router();

// Ruta temporal de prueba
router.get('/', (req, res) => res.json({ msg: "Companies Router funcionando" }));

module.exports = router;