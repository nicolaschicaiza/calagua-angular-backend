// Rutas para estacion 
const express = require('express');
const router = express.Router();
const estacionController = require("../controllers/estacionController");

// api/estacion
router.post('/', estacionController.crearEstacion); 
router.get('/', estacionController.obtenerEstaciones); 
router.put('/:id', estacionController.actualizarEstacion); 
router.get('/:id', estacionController.obtenerEstacion); 
router.delete('/:id', estacionController.eliminarEstacion); 

module.exports = router;
