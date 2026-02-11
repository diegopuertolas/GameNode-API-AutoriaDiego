const express = require('express');
const { config } = require('./configuration/config');

const app = express();
app.use(express.json());

// Zona de rutas.
const companiesRouter = require('./router/companiesRouter');
const videogamesRouter = require('./router/videogamesRouter');
const consolesRouter = require('./router/consolesRouter');

// Asignamos las URLs base.
app.use('/companies', companiesRouter);
app.use('/videogames', videogamesRouter);
app.use('/consoles', consolesRouter);

// Ruta para manejar endpoints no encontrados.
app.use((req, res) => {
  res.status(404).json({
    code: 404,
    title: 'not-found',
    message: 'Endpoint no encontrado'
  });
});

// Manejador de errores global, para capturar errores no controlados.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    code: 500,
    title: 'internal-error',
    message: 'Error interno del servidor'
  });
});

const PORT = config.service.port || 8080;
app.listen(PORT, () => {
    console.log(`Backend iniciado en el puerto: ${PORT}`);
});