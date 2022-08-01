// Rutas para alerta 
const express = require('express');
const router = express.Router();
const alertaController = require("../controllers/alertaController");

// api/alerta
router.post('/', alertaController.crearAlerta); 
router.get('/', alertaController.obtenerAlertas); 
router.put('/:id', alertaController.actualizarAlerta); 
router.get('/:id', alertaController.obtenerAlerta); 
router.delete('/:id', alertaController.eliminarAlerta); 

module.exports = router;
